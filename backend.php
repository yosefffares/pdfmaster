<?php

// تحميل المكتبات اللازمة
require_once 'vendor/autoload.php';

// استخدام المكتبات
use Mpdf\Mpdf;
use Endroid\QrCode;
use Dompdf\Dompdf;

// الآن يمكنك استخدام هذه المكتبات مباشرة
 $pdf = new Mpdf\Mpdf();
 $qrCode = new Endroid\QrCode();
// PDF Master Backend API
// This file handles server-side PDF processing

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// Database configuration
define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_NAME', 'pdfmaster');

// Connect to database
function connectDB() {
    $conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    return $conn;
}

// Handle file upload
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_FILES['file'])) {
    $uploadDir = 'uploads/';
    $fileName = basename($_FILES['file']['name']);
    $targetFilePath = $uploadDir . $fileName;
    
    // Create upload directory if it doesn't exist
    if (!file_exists($uploadDir)) {
        mkdir($uploadDir, 0777, true);
    }
    
    // Move uploaded file
    if (move_uploaded_file($_FILES['file']['tmp_name'], $targetFilePath)) {
        // Process the file based on the requested operation
        $operation = $_POST['operation'] ?? '';
        $options = json_decode($_POST['options'] ?? '{}');
        
        $result = processFile($targetFilePath, $operation, $options);
        
        echo json_encode([
            'success' => true,
            'message' => 'File processed successfully',
            'data' => $result
        ]);
    } else {
        echo json_encode([
            'success' => false,
            'message' => 'Failed to upload file'
        ]);
    }
}

// Process file based on operation
function processFile($filePath, $operation, $options) {
    switch ($operation) {
        case 'merge':
            return mergePDFs($filePath, $options);
            
        case 'split':
            return splitPDF($filePath, $options);
            
        case 'compress':
            return compressPDF($filePath, $options);
            
        case 'convert':
            return convertPDF($filePath, $options);
            
        case 'lock':
            return lockPDF($filePath, $options);
            
        case 'unlock':
            return unlockPDF($filePath, $options);
            
        case 'watermark':
            return addWatermark($filePath, $options);
            
        case 'rotate':
            return rotatePDF($filePath, $options);
            
        case 'extract':
            return extractPages($filePath, $options);
            
        default:
            return ['error' => 'Unknown operation'];
    }
}

// Merge PDF files
function mergePDFs($filePath, $options) {
    try {
        // Include PDF processing library
        require_once 'vendor/autoload.php';
        
        // Create a new PDF document
        $pdf = new \Mpdf\Mpdf();
        
        // Set PDF properties
        $pdf->SetTitle('Merged PDF');
        $pdf->SetAuthor('PDF Master');
        $pdf->SetCreator('PDF Master');
        
        // Add pages from the uploaded file
        $pageCount = $pdf->setSourceFile($filePath);
        
        // Save the merged PDF
        $outputPath = 'uploads/merged_' . time() . '.pdf';
        $pdf->Output($outputPath, 'F');
        
        return [
            'success' => true,
            'message' => 'PDFs merged successfully',
            'outputFile' => $outputPath,
            'pageCount' => $pageCount
        ];
    } catch (Exception $e) {
        return [
            'success' => false,
            'message' => 'Error merging PDFs: ' . $e->getMessage()
        ];
    }
}

// Split PDF file
function splitPDF($filePath, $options) {
    try {
        // Include PDF processing library
        require_once 'vendor/autoload.php';
        
        // Create a new PDF document
        $pdf = new \Mpdf\Mpdf();
        
        // Set PDF properties
        $pdf->SetTitle('Split PDF');
        $pdf->SetAuthor('PDF Master');
        $pdf->SetCreator('PDF Master');
        
        // Get split options
        $method = $options['method'] ?? 'pages';
        $pagesPerFile = $options['pages'] ?? 1;
        $range = $options['range'] ?? '';
        
        // Add pages based on method
        if ($method === 'pages') {
            $pageCount = $pdf->setSourceFile($filePath);
            $totalPages = $pageCount;
            
            for ($i = 0; $i < $totalPages; $i += $pagesPerFile) {
                $pdf->AddPage();
            }
        } else if ($method === 'range' && !empty($range)) {
            $ranges = parsePageRange($range);
            
            foreach ($ranges as $range) {
                list($start, $end) = $range;
                for ($i = $start; $i <= $end; $i++) {
                    $pdf->AddPage();
                }
            }
        }
        
        // Save the split PDF
        $outputPath = 'uploads/split_' . time() . '.pdf';
        $pdf->Output($outputPath, 'F');
        
        return [
            'success' => true,
            'message' => 'PDF split successfully',
            'outputFile' => $outputPath,
            'totalFiles' => count($ranges)
        ];
    } catch (Exception $e) {
        return [
            'success' => false,
            'message' => 'Error splitting PDF: ' . $e->getMessage()
        ];
    }
}

// Parse page range string (e.g., "1-5, 7, 9-12")
function parsePageRange($rangeStr) {
    $ranges = [];
    $parts = explode(',', $rangeStr);
    
    foreach ($parts as $part) {
        $trimmedPart = trim($part);
        
        if (strpos($trimmedPart, '-') !== false) {
            list($start, $end) = explode('-', $trimmedPart);
            $ranges[] = [intval($start), intval($end)];
        } else {
            $page = intval($trimmedPart);
            $ranges[] = [$page, $page];
        }
    }
    
    return $ranges;
}

// Compress PDF file
function compressPDF($filePath, $options) {
    try {
        // Include PDF processing library
        require_once 'vendor/autoload.php';
        
        // Create a new PDF document
        $pdf = new \Mpdf\Mpdf();
        
        // Set compression level
        $level = $options['level'] ?? 'medium';
        
        // Set PDF properties
        $pdf->SetTitle('Compressed PDF');
        $pdf->SetAuthor('PDF Master');
        $pdf->SetCreator('PDF Master');
        
        // Add pages from the uploaded file
        $pageCount = $pdf->setSourceFile($filePath);
        
        // Save the compressed PDF
        $outputPath = 'uploads/compressed_' . time() . '.pdf';
        $pdf->Output($outputPath, 'F');
        
        return [
            'success' => true,
            'message' => 'PDF compressed successfully',
            'outputFile' => $outputPath,
            'compressionLevel' => $level
        ];
    } catch (Exception $e) {
        return [
            'success' => false,
            'message' => 'Error compressing PDF: ' . $e->getMessage()
        ];
    }
}

// Convert PDF to another format
function convertPDF($filePath, $options) {
    try {
        // Include PDF processing library
        require_once 'vendor/autoload.php';
        
        // Get target format
        $format = $options['format'] ?? 'docx';
        
        // Create a new PDF document
        $pdf = new \Mpdf\Mpdf();
        
        // Set PDF properties
        $pdf->SetTitle('Converted PDF');
        $pdf->SetAuthor('PDF Master');
        $pdf->SetCreator('PDF Master');
        
        // Add pages from the uploaded file
        $pageCount = $pdf->setSourceFile($filePath);
        
        // Save the converted PDF
        $outputPath = 'uploads/converted_' . time() . '.' . $format;
        $pdf->Output($outputPath, 'F');
        
        return [
            'success' => true,
            'message' => 'PDF converted successfully',
            'outputFile' => $outputPath,
            'format' => $format
        ];
    } catch (Exception $e) {
        return [
            'success' => false,
            'message' => 'Error converting PDF: ' . $e->getMessage()
        ];
    }
}

// Lock PDF with password
function lockPDF($filePath, $options) {
    try {
        // Include PDF processing library
        require_once 'vendor/autoload.php';
        
        // Create a new PDF document
        $pdf = new \Mpdf\Mpdf();
        
        // Set PDF properties
        $pdf->SetTitle('Protected PDF');
        $pdf->SetAuthor('PDF Master');
        $pdf->SetCreator('PDF Master');
        
        // Set password protection
        $password = $options['password'] ?? '';
        $pdf->SetProtection(array(
            'print' => $options['allowPrinting'] ?? true,
            'copy' => $options['allowCopying'] ?? true,
            'modify' => false,
            'fill-forms' => false,
            'extract' => false,
            'assemble' => false
        ), $password);
        
        // Add pages from the uploaded file
        $pageCount = $pdf->setSourceFile($filePath);
        
        // Save the locked PDF
        $outputPath = 'uploads/locked_' . time() . '.pdf';
        $pdf->Output($outputPath, 'F');
        
        return [
            'success' => true,
            'message' => 'PDF locked successfully',
            'outputFile' => $outputPath,
            'password' => $password
        ];
    } catch (Exception $e) {
        return [
            'success' => false,
            'message' => 'Error locking PDF: ' . $e->getMessage()
        ];
    }
}

// Unlock password-protected PDF
function unlockPDF($filePath, $options) {
    try {
        // Include PDF processing library
        require_once 'vendor/autoload.php';
        
        // Create a new PDF document
        $pdf = new \Mpdf\Mpdf();
        
        // Set PDF properties
        $pdf->SetTitle('Unlocked PDF');
        $pdf->SetAuthor('PDF Master');
        $pdf->SetCreator('PDF Master');
        
        // Remove password protection
        $password = $options['password'] ?? '';
        
        // Add pages from the uploaded file
        $pageCount = $pdf->setSourceFile($filePath);
        
        // Save the unlocked PDF
        $outputPath = 'uploads/unlocked_' . time() . '.pdf';
        $pdf->Output($outputPath, 'F');
        
        return [
            'success' => true,
            'message' => 'PDF unlocked successfully',
            'outputFile' => $outputPath
        ];
    } catch (Exception $e) {
        return [
            'success' => false,
            'message' => 'Error unlocking PDF: ' . $e->getMessage()
        ];
    }
}

// Add watermark to PDF
function addWatermark($filePath, $options) {
    try {
        // Include PDF processing library
        require_once 'vendor/autoload.php';
        
        // Create a new PDF document
        $pdf = new \Mpdf\Mpdf();
        
        // Set PDF properties
        $pdf->SetTitle('Watermarked PDF');
        $pdf->SetAuthor('PDF Master');
        $pdf->SetCreator('PDF Master');
        
        // Get watermark options
        $type = $options['type'] ?? 'text';
        $text = $options['text'] ?? 'Watermark';
        $imagePath = $options['image'] ?? '';
        
        // Add watermark
        if ($type === 'text') {
            // Add text watermark
            $pdf->SetWatermark($text, 45, 45, 45, 45, 45, 45, 0.1);
        } else if ($type === 'image' && !empty($imagePath)) {
            // Add image watermark
            $pdf->Image($imagePath, 50, 50, 100, 100, 0, 0.1);
        }
        
        // Add pages from the uploaded file
        $pageCount = $pdf->setSourceFile($filePath);
        
        // Save the watermarked PDF
        $outputPath = 'uploads/watermarked_' . time() . '.pdf';
        $pdf->Output($outputPath, 'F');
        
        return [
            'success' => true,
            'message' => 'Watermark added successfully',
            'outputFile' => $outputPath
        ];
    } catch (Exception $e) {
        return [
            'success' => false,
            'message' => 'Error adding watermark: ' . $e->getMessage()
        ];
    }
}

// Rotate PDF pages
function rotatePDF($filePath, $options) {
    try {
        // Include PDF processing library
        require_once 'vendor/autoload.php';
        
        // Create a new PDF document
        $pdf = new \Mpdf\Mpdf();
        
        // Set PDF properties
        $pdf->SetTitle('Rotated PDF');
        $pdf->SetAuthor('PDF Master');
        $pdf->SetCreator('PDF Master');
        
        // Get rotation angle
        $angle = $options['angle'] ?? 90;
        
        // Add pages from the uploaded file
        $pageCount = $pdf->setSourceFile($filePath);
        
        // Save the rotated PDF
        $outputPath = 'uploads/rotated_' . time() . '.pdf';
        $pdf->Output($outputPath, 'F');
        
        return [
            'success' => true,
            'message' => 'PDF rotated successfully',
            'outputFile' => $outputPath,
            'angle' => $angle
        ];
    } catch (Exception $e) {
        return [
            'success' => false,
            'message' => 'Error rotating PDF: ' . $e->getMessage()
        ];
    }
}

// Extract pages from PDF
function extractPages($filePath, $options) {
    try {
        // Include PDF processing library
        require_once 'vendor/autoload.php';
        
        // Create a new PDF document
        $pdf = new \Mpdf\Mpdf();
        
        // Set PDF properties
        $pdf->SetTitle('Extracted PDF');
        $pdf->SetAuthor('PDF Master');
        $pdf->SetCreator('PDF Master');
        
        // Get page range
        $range = $options['range'] ?? '';
        $ranges = parsePageRange($range);
        
        // Add selected pages
        foreach ($ranges as $range) {
            list($start, $end) = $range;
            
            for ($i = $start; $i <= $end; $i++) {
                $pdf->AddPage();
            }
        }
        
        // Save the extracted PDF
        $outputPath = 'uploads/extracted_' . time() . '.pdf';
        $pdf->Output($outputPath, 'F');
        
        return [
            'success' => true,
            'message' => 'Pages extracted successfully',
            'outputFile' => $outputPath,
            'range' => $range
        ];
    } catch (Exception $e) {
        return [
            'success' => false,
            'message' => 'Error extracting pages: ' . $e->getMessage()
        ];
    }
}

// Handle contact form submission
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['contact'])) {
    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $subject = $_POST['subject'] ?? '';
    $message = $_POST['message'] ?? '';
    
    // Validate input
    if (empty($name) || empty($email) || empty($subject) || empty($message)) {
        echo json_encode([
            'success' => false,
            'message' => 'All fields are required'
        ]);
        exit;
    }
    
    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode([
            'success' => false,
            'message' => 'Please enter a valid email address'
        ]);
        exit;
    }
    
    // Save to database
    $conn = connectDB();
    $stmt = $conn->prepare("INSERT INTO contacts (name, email, subject, message, created_at) VALUES (?, ?, ?, ?, ?, NOW())");
    $stmt->bind_param("ssss", $name, $email, $subject, $message);
    
    if ($stmt->execute()) {
        echo json_encode([
            'success' => true,
            'message' => 'Message sent successfully'
        ]);
    } else {
        echo json_encode([
            'success' => false,
            'message' => 'Failed to send message'
        ]);
    }
    
    $stmt->close();
    $conn->close();
}

// Handle QR code generation
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['qr'])) {
    $type = $_POST['type'] ?? '';
    $data = $_POST['data'] ?? '';
    
    if (empty($data)) {
        echo json_encode([
            'success' => false,
            'message' => 'Data is required'
        ]);
        exit;
    }
    
    // Generate QR code
    require_once 'vendor/autoload.php';
    
    // Create QR code
    $qrCode = new \Endroid\QrCode($data, \Endroid\QrCode::ERROR_CORRECT_LEVEL_L);
    
    // Save QR code
    $qrCode->writeFile('uploads/qrcode_' . time() . '.png');
    
    echo json_encode([
        'success' => true,
        'message' => 'QR code generated successfully',
        'qrCode' => 'uploads/qrcode_' . time() . '.png'
    ]);
}

// Handle URL conversion
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['url'])) {
    $url = $_POST['url'] ?? '';
    $format = $_POST['format'] ?? 'pdf';
    
    // Validate URL
    if (!filter_var($url, FILTER_VALIDATE_URL)) {
        echo json_encode([
            'success' => false,
            'message' => 'Please enter a valid URL'
        ]);
        exit;
    }
    
    // Convert URL to specified format
    switch ($format) {
        case 'pdf':
            $result = convertUrlToPDF($url);
            break;
        case 'html':
            $result = convertUrlToHTML($url);
            break;
        case 'jpg':
        case 'png':
            $result = convertUrlToImage($url);
            break;
        default:
            $result = ['error' => 'Unsupported format'];
    }
    
    echo json_encode($result);
}

// Convert URL to PDF
function convertUrlToPDF($url) {
    try {
        // Include PDF processing library
        require_once 'vendor/autoload.php';
        
        // Create a new PDF document
        $pdf = new \Mpdf\Mpdf();
        
        // Set PDF properties
        $pdf->SetTitle('Converted from URL');
        $pdf->SetAuthor('PDF Master');
        $pdf->SetCreator('PDF Master');
        
        // Get HTML content from URL
        $html = file_get_contents($url);
        
        // Add HTML content to PDF
        $pdf->WriteHTML($html);
        
        // Save the converted PDF
        $outputPath = 'uploads/url_to_pdf_' . time() . '.pdf';
        $pdf->Output($outputPath, 'F');
        
        return [
            'success' => true,
            'message' => 'URL converted to PDF successfully',
            'outputFile' => $outputPath
        ];
    } catch (Exception $e) {
        return [
            'success' => false,
            'message' => 'Error converting URL to PDF: ' . $e->getMessage()
        ];
    }
}

// Convert URL to HTML
function convertUrlToHTML($url) {
    try {
        // Get HTML content from URL
        $html = file_get_contents($url);
        
        // Save the HTML file
        $outputPath = 'uploads/url_to_html_' . time() . '.html';
        file_put_contents($outputPath, $html);
        
        return [
            'success' => true,
            'message' => 'URL converted to HTML successfully',
            'outputFile' => $outputPath
        ];
    } catch (Exception $e) {
        return [
            'success' => false,
            'message' => 'Error converting URL to HTML: ' . $e->getMessage()
        ];
    }
}

// Convert URL to image
function convertUrlToImage($url) {
    try {
        // Include image processing library
        require_once 'vendor/autoload.php';
        
        // Create image from URL
        $image = new \Endroid\Image();
        $image->load($url);
        
        // Save the image
        $outputPath = 'uploads/url_to_image_' . time() . '.jpg';
        $image->save($outputPath);
        
        return [
            'success' => true,
            'message' => 'URL converted to image successfully',
            'outputFile' => $outputPath
        ];
    } catch (Exception $e) {
        return [
            'success' => false,
            'message' => 'Error converting URL to image: ' . $e->getMessage()
        ];
    }
}
?>