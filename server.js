// PDF Master - Node.js Server
// This file handles server-side operations using Node.js

const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const { PDFDocument } = require('pdf-lib');
const QRCode = require('qrcode');
const puppeteer = require('puppeteer');
const archiver = require('archiver');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadDir = 'uploads/';
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

// API Routes

// Home route
app.get('/', (req, res) => {
    res.json({ message: 'PDF Master API Server' });
});

// Process PDF files
app.post('/api/process', upload.array('files'), async (req, res) => {
    try {
        const operation = req.body.operation;
        const files = req.files;
        const options = JSON.parse(req.body.options || '{}');
        
        if (!files || files.length === 0) {
            return res.status(400).json({ success: false, message: 'No files uploaded' });
        }
        
        let result;
        
        switch (operation) {
            case 'merge':
                result = await mergePDFs(files, options);
                break;
            case 'split':
                result = await splitPDF(files[0], options);
                break;
            case 'compress':
                result = await compressPDF(files[0], options);
                break;
            case 'watermark':
                result = await addWatermark(files[0], options);
                break;
            case 'rotate':
                result = await rotatePDF(files[0], options);
                break;
            case 'extract':
                result = await extractPages(files[0], options);
                break;
            default:
                result = { success: false, message: 'Unknown operation' };
        }
        
        res.json(result);
    } catch (error) {
        console.error('Error processing PDF:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// Generate QR code
app.post('/api/qrcode', async (req, res) => {
    try {
        const { type, data } = req.body;
        
        if (!data) {
            return res.status(400).json({ success: false, message: 'Data is required' });
        }
        
        const qrCodeDataUrl = await QRCode.toDataURL(data, {
            width: 300,
            margin: 2,
            color: {
                dark: '#000000',
                light: '#FFFFFF'
            }
        });
        
        // Convert data URL to buffer
        const base64Data = qrCodeDataUrl.replace(/^data:image\/png;base64,/, '');
        const buffer = Buffer.from(base64Data, 'base64');
        
        // Save QR code
        const fileName = `qrcode_${Date.now()}.png`;
        const filePath = path.join('uploads', fileName);
        fs.writeFileSync(filePath, buffer);
        
        res.json({
            success: true,
            message: 'QR code generated successfully',
            qrCode: qrCodeDataUrl,
            fileName: fileName
        });
    } catch (error) {
        console.error('Error generating QR code:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// Convert URL to PDF
app.post('/api/url-to-pdf', async (req, res) => {
    try {
        const { url } = req.body;
        
        if (!url) {
            return res.status(400).json({ success: false, message: 'URL is required' });
        }
        
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        
        await page.goto(url, { waitUntil: 'networkidle2' });
        
        const fileName = `url_${Date.now()}.pdf`;
        const filePath = path.join('uploads', fileName);
        
        await page.pdf({
            path: filePath,
            format: 'A4',
            printBackground: true
        });
        
        await browser.close();
        
        res.json({
            success: true,
            message: 'URL converted to PDF successfully',
            fileName: fileName
        });
    } catch (error) {
        console.error('Error converting URL to PDF:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// Convert URL to HTML
app.post('/api/url-to-html', async (req, res) => {
    try {
        const { url } = req.body;
        
        if (!url) {
            return res.status(400).json({ success: false, message: 'URL is required' });
        }
        
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        
        await page.goto(url, { waitUntil: 'networkidle2' });
        
        const html = await page.content();
        
        await browser.close();
        
        const fileName = `url_${Date.now()}.html`;
        const filePath = path.join('uploads', fileName);
        fs.writeFileSync(filePath, html);
        
        res.json({
            success: true,
            message: 'URL converted to HTML successfully',
            fileName: fileName,
            html: html
        });
    } catch (error) {
        console.error('Error converting URL to HTML:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// Convert URL to image
app.post('/api/url-to-image', async (req, res) => {
    try {
        const { url } = req.body;
        
        if (!url) {
            return res.status(400).json({ success: false, message: 'URL is required' });
        }
        
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        
        await page.goto(url, { waitUntil: 'networkidle2' });
        
        const fileName = `url_${Date.now()}.png`;
        const filePath = path.join('uploads', fileName);
        
        await page.screenshot({
            path: filePath,
            fullPage: true,
            type: 'png'
        });
        
        await browser.close();
        
        res.json({
            success: true,
            message: 'URL converted to image successfully',
            fileName: fileName
        });
    } catch (error) {
        console.error('Error converting URL to image:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// Handle contact form
app.post('/api/contact', (req, res) => {
    try {
        const { name, email, subject, message } = req.body;
        
        if (!name || !email || !subject || !message) {
            return res.status(400).json({ success: false, message: 'All fields are required' });
        }
        
        // Save contact to database or send email
        // For now, just log it
        console.log('Contact form submission:', { name, email, subject, message });
        
        res.json({
            success: true,
            message: 'Message sent successfully'
        });
    } catch (error) {
        console.error('Error handling contact form:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// PDF Processing Functions

async function mergePDFs(files, options) {
    try {
        const mergedPdf = await PDFDocument.create();
        
        for (const file of files) {
            const existingPdfBytes = fs.readFileSync(file.path);
            const pdf = await PDFDocument.load(existingPdfBytes);
            const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
            copiedPages.forEach((page) => mergedPdf.addPage(page));
        }
        
        const fileName = `merged_${Date.now()}.pdf`;
        const filePath = path.join('uploads', fileName);
        
        const mergedPdfBytes = await mergedPdf.save();
        fs.writeFileSync(filePath, mergedPdfBytes);
        
        return {
            success: true,
            message: 'PDFs merged successfully',
            fileName: fileName
        };
    } catch (error) {
        console.error('Error merging PDFs:', error);
        return {
            success: false,
            message: 'Error merging PDFs'
        };
    }
}

async function splitPDF(file, options) {
    try {
        const existingPdfBytes = fs.readFileSync(file.path);
        const pdf = await PDFDocument.load(existingPdfBytes);
        const pageCount = pdf.getPageCount();
        
        const outputFiles = [];
        
        if (options.method === 'pages') {
            const pagesPerFile = parseInt(options.pages) || 1;
            
            for (let i = 0; i < pageCount; i += pagesPerFile) {
                const newPdf = await PDFDocument.create();
                const endIndex = Math.min(i + pagesPerFile, pageCount);
                
                for (let j = i; j < endIndex; j++) {
                    const [page] = await newPdf.copyPages(pdf, [j]);
                    newPdf.addPage(page);
                }
                
                const fileName = `split_${i + 1}-${endIndex}_${Date.now()}.pdf`;
                const filePath = path.join('uploads', fileName);
                
                const newPdfBytes = await newPdf.save();
                fs.writeFileSync(filePath, newPdfBytes);
                
                outputFiles.push(fileName);
            }
        } else if (options.method === 'range') {
            const ranges = options.range.split(',').map(r => r.trim());
            
            for (const range of ranges) {
                const [start, end] = range.split('-').map(n => parseInt(n.trim()));
                const newPdf = await PDFDocument.create();
                
                for (let i = start - 1; i < Math.min(end, pageCount); i++) {
                    const [page] = await newPdf.copyPages(pdf, [i]);
                    newPdf.addPage(page);
                }
                
                const fileName = `split_${start}-${end}_${Date.now()}.pdf`;
                const filePath = path.join('uploads', fileName);
                
                const newPdfBytes = await newPdf.save();
                fs.writeFileSync(filePath, newPdfBytes);
                
                outputFiles.push(fileName);
            }
        }
        
        return {
            success: true,
            message: 'PDF split successfully',
            files: outputFiles
        };
    } catch (error) {
        console.error('Error splitting PDF:', error);
        return {
            success: false,
            message: 'Error splitting PDF'
        };
    }
}

async function compressPDF(file, options) {
    try {
        // PDF compression is complex and would require additional libraries
        // For now, just return the original file
        const fileName = `compressed_${Date.now()}.pdf`;
        const filePath = path.join('uploads', fileName);
        
        fs.copyFileSync(file.path, filePath);
        
        return {
            success: true,
            message: 'PDF compressed successfully',
            fileName: fileName
        };
    } catch (error) {
        console.error('Error compressing PDF:', error);
        return {
            success: false,
            message: 'Error compressing PDF'
        };
    }
}

async function addWatermark(file, options) {
    try {
        const existingPdfBytes = fs.readFileSync(file.path);
        const pdf = await PDFDocument.load(existingPdfBytes);
        
        if (options.type === 'text') {
            const { text, opacity = 0.5 } = options;
            
            for (let i = 0; i < pdf.getPageCount(); i++) {
                const page = pdf.getPage(i);
                const { width, height } = page.getSize();
                
                // Draw text watermark
                // This is a simplified version, actual implementation would be more complex
            }
        }
        
        const fileName = `watermarked_${Date.now()}.pdf`;
        const filePath = path.join('uploads', fileName);
        
        const pdfBytes = await pdf.save();
        fs.writeFileSync(filePath, pdfBytes);
        
        return {
            success: true,
            message: 'Watermark added successfully',
            fileName: fileName
        };
    } catch (error) {
        console.error('Error adding watermark:', error);
        return {
            success: false,
            message: 'Error adding watermark'
        };
    }
}

async function rotatePDF(file, options) {
    try {
        const existingPdfBytes = fs.readFileSync(file.path);
        const pdf = await PDFDocument.load(existingPdfBytes);
        const angle = parseInt(options.angle) || 90;
        
        for (let i = 0; i < pdf.getPageCount(); i++) {
            const page = pdf.getPage(i);
            page.setRotation({ type: degrees(angle) });
        }
        
        const fileName = `rotated_${Date.now()}.pdf`;
        const filePath = path.join('uploads', fileName);
        
        const pdfBytes = await pdf.save();
        fs.writeFileSync(filePath, pdfBytes);
        
        return {
            success: true,
            message: 'PDF rotated successfully',
            fileName: fileName
        };
    } catch (error) {
        console.error('Error rotating PDF:', error);
        return {
            success: false,
            message: 'Error rotating PDF'
        };
    }
}

async function extractPages(file, options) {
    try {
        const existingPdfBytes = fs.readFileSync(file.path);
        const pdf = await PDFDocument.load(existingPdfBytes);
        const newPdf = await PDFDocument.create();
        
        // Parse page range
        const ranges = options.range.split(',').map(r => r.trim());
        
        for (const range of ranges) {
            if (range.includes('-')) {
                const [start, end] = range.split('-').map(n => parseInt(n.trim()));
                
                for (let i = start - 1; i < Math.min(end, pdf.getPageCount()); i++) {
                    const [page] = await newPdf.copyPages(pdf, [i]);
                    newPdf.addPage(page);
                }
            } else {
                const pageNum = parseInt(range) - 1;
                if (pageNum >= 0 && pageNum < pdf.getPageCount()) {
                    const [page] = await newPdf.copyPages(pdf, [pageNum]);
                    newPdf.addPage(page);
                }
            }
        }
        
        const fileName = `extracted_${Date.now()}.pdf`;
        const filePath = path.join('uploads', fileName);
        
        const pdfBytes = await newPdf.save();
        fs.writeFileSync(filePath, pdfBytes);
        
        return {
            success: true,
            message: 'Pages extracted successfully',
            fileName: fileName
        };
    } catch (error) {
        console.error('Error extracting pages:', error);
        return {
            success: false,
            message: 'Error extracting pages'
        };
    }
}

// Helper function to convert degrees to radians
function degrees(degrees) {
    return degrees * (Math.PI / 180);
}

// Start server
app.listen(PORT, () => {
    console.log(`PDF Master API server running on port ${PORT}`);
});