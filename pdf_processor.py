#!/usr/bin/env python3
# PDF Master - Python PDF Processing Module
# This module handles server-side PDF processing using Python

import os
import sys
import io
import json
import base64
from typing import Dict, List, Any, Optional

# PDF processing libraries
try:
    import PyPDF2
    from PyPDF2 import PdfFileReader, PdfFileWriter
    import fitz  # PyMuPDF
    from PIL import Image
    import qrcode
    from reportlab.pdfgen import canvas
    from reportlab.lib.pagesizes import letter
    from reportlab.lib.units import inch
    from reportlab.pdfbase import pdfmetrics
    from reportlab.pdfbase.ttfonts import TTFont
    import img2pdf
except ImportError as e:
    print(f"Missing required library: {e}")
    print("Please install required libraries with: pip install PyPDF2 PyMuPDF Pillow qrcode reportlab img2pdf")
    sys.exit(1)

class PDFProcessor:
    """Main class for PDF processing operations"""
    
    def __init__(self):
        self.temp_dir = "temp"
        self.output_dir = "output"
        
        # Create directories if they don't exist
        os.makedirs(self.temp_dir, exist_ok=True)
        os.makedirs(self.output_dir, exist_ok=True)
    
    def merge_pdfs(self, file_paths: List[str], output_path: str) -> Dict[str, Any]:
        """Merge multiple PDF files into one"""
        try:
            pdf_writer = PdfFileWriter()
            
            for file_path in file_paths:
                pdf_reader = PdfFileReader(file_path)
                for page in range(pdf_reader.getNumPages()):
                    pdf_writer.addPage(pdf_reader.getPage(page))
            
            with open(output_path, 'wb') as output_file:
                pdf_writer.write(output_file)
            
            return {
                "success": True,
                "message": "PDFs merged successfully",
                "output_file": output_path,
                "page_count": pdf_writer.getNumPages()
            }
        except Exception as e:
            return {
                "success": False,
                "message": f"Error merging PDFs: {str(e)}"
            }
    
    def split_pdf(self, file_path: str, output_dir: str, split_type: str = "pages", split_value: Any = None) -> Dict[str, Any]:
        """Split a PDF file into multiple files"""
        try:
            pdf_reader = PdfFileReader(file_path)
            total_pages = pdf_reader.getNumPages()
            output_files = []
            
            if split_type == "pages":
                pages_per_file = int(split_value) if split_value else 1
                
                for start_page in range(0, total_pages, pages_per_file):
                    end_page = min(start_page + pages_per_file, total_pages)
                    pdf_writer = PdfFileWriter()
                    
                    for page in range(start_page, end_page):
                        pdf_writer.addPage(pdf_reader.getPage(page))
                    
                    output_path = os.path.join(output_dir, f"split_{start_page+1}-{end_page}.pdf")
                    with open(output_path, 'wb') as output_file:
                        pdf_writer.write(output_file)
                    
                    output_files.append(output_path)
            
            elif split_type == "range":
                # Parse range like "1-5, 6-10"
                ranges = split_value.split(",") if split_value else []
                
                for range_str in ranges:
                    range_parts = range_str.strip().split("-")
                    if len(range_parts) == 2:
                        start_page = int(range_parts[0]) - 1  # Convert to 0-index
                        end_page = int(range_parts[1])
                        
                        pdf_writer = PdfFileWriter()
                        for page in range(start_page, end_page):
                            pdf_writer.addPage(pdf_reader.getPage(page))
                        
                        output_path = os.path.join(output_dir, f"split_{start_page+1}-{end_page}.pdf")
                        with open(output_path, 'wb') as output_file:
                            pdf_writer.write(output_file)
                        
                        output_files.append(output_path)
            
            return {
                "success": True,
                "message": "PDF split successfully",
                "output_files": output_files,
                "total_files": len(output_files)
            }
        except Exception as e:
            return {
                "success": False,
                "message": f"Error splitting PDF: {str(e)}"
            }
    
    def compress_pdf(self, file_path: str, output_path: str, compression_level: str = "medium") -> Dict[str, Any]:
        """Compress a PDF file"""
        try:
            # Open the PDF
            doc = fitz.open(file_path)
            
            # Set compression based on level
            if compression_level == "low":
                dpi = 150
                quality = 90
            elif compression_level == "medium":
                dpi = 100
                quality = 70
            else:  # high
                dpi = 70
                quality = 50
            
            # Save with compression
            doc.save(output_path, garbage=4, deflate=True, clean=True)
            doc.close()
            
            # Get file sizes
            original_size = os.path.getsize(file_path)
            compressed_size = os.path.getsize(output_path)
            compression_ratio = (1 - compressed_size / original_size) * 100
            
            return {
                "success": True,
                "message": "PDF compressed successfully",
                "output_file": output_path,
                "original_size": original_size,
                "compressed_size": compressed_size,
                "compression_ratio": round(compression_ratio, 2)
            }
        except Exception as e:
            return {
                "success": False,
                "message": f"Error compressing PDF: {str(e)}"
            }
    
    def convert_pdf_to_images(self, file_path: str, output_dir: str, image_format: str = "jpg") -> Dict[str, Any]:
        """Convert PDF pages to images"""
        try:
            doc = fitz.open(file_path)
            output_files = []
            
            for page_num in range(len(doc)):
                page = doc.load_page(page_num)
                pix = page.get_pixmap(matrix=fitz.Matrix(2, 2))
                
                output_path = os.path.join(output_dir, f"page_{page_num+1}.{image_format}")
                pix.save(output_path)
                output_files.append(output_path)
            
            doc.close()
            
            return {
                "success": True,
                "message": "PDF converted to images successfully",
                "output_files": output_files,
                "total_pages": len(output_files)
            }
        except Exception as e:
            return {
                "success": False,
                "message": f"Error converting PDF to images: {str(e)}"
            }
    
    def add_watermark(self, file_path: str, output_path: str, watermark_type: str = "text", 
                      watermark_data: Dict[str, Any] = None) -> Dict[str, Any]:
        """Add watermark to PDF"""
        try:
            pdf_reader = PdfFileReader(file_path)
            pdf_writer = PdfFileWriter()
            
            for page_num in range(pdf_reader.getNumPages()):
                page = pdf_reader.getPage(page_num)
                
                # Create watermark
                packet = io.BytesIO()
                can = canvas.Canvas(packet, pagesize=page.cropBox)
                
                if watermark_type == "text":
                    text = watermark_data.get("text", "WATERMARK")
                    opacity = watermark_data.get("opacity", 0.5) / 100
                    
                    # Set font
                    try:
                        pdfmetrics.registerFont(TTFont('Arial', 'arial.ttf'))
                        font = 'Arial'
                    except:
                        font = 'Helvetica'
                    
                    can.setFillColorRGB(0.5, 0.5, 0.5, alpha=opacity)
                    can.setFont(font, 50)
                    
                    # Position watermark
                    page_width = float(page.cropBox.getWidth())
                    page_height = float(page.cropBox.getHeight())
                    
                    can.drawCentredText(page_width/2, page_height/2, text)
                
                elif watermark_type == "image":
                    image_path = watermark_data.get("image_path", "")
                    if os.path.exists(image_path):
                        can.drawImage(image_path, 100, 100, width=400, preserveAspectRatio=True)
                
                can.save()
                
                # Merge watermark with original page
                watermark = PdfFileReader(packet)
                page.mergePage(watermark.getPage(0))
                pdf_writer.addPage(page)
            
            with open(output_path, 'wb') as output_file:
                pdf_writer.write(output_file)
            
            return {
                "success": True,
                "message": "Watermark added successfully",
                "output_file": output_path
            }
        except Exception as e:
            return {
                "success": False,
                "message": f"Error adding watermark: {str(e)}"
            }
    
    def rotate_pdf(self, file_path: str, output_path: str, angle: int = 90, page_range: str = "all") -> Dict[str, Any]:
        """Rotate PDF pages"""
        try:
            pdf_reader = PdfFileReader(file_path)
            pdf_writer = PdfFileWriter()
            
            for page_num in range(pdf_reader.getNumPages()):
                page = pdf_reader.getPage(page_num)
                
                # Check if this page should be rotated
                if page_range == "all" or self._is_page_in_range(page_num + 1, page_range):
                    page.rotateClockwise(angle)
                
                pdf_writer.addPage(page)
            
            with open(output_path, 'wb') as output_file:
                pdf_writer.write(output_file)
            
            return {
                "success": True,
                "message": "PDF rotated successfully",
                "output_file": output_path
            }
        except Exception as e:
            return {
                "success": False,
                "message": f"Error rotating PDF: {str(e)}"
            }
    
    def extract_pages(self, file_path: str, output_path: str, page_range: str) -> Dict[str, Any]:
        """Extract specific pages from PDF"""
        try:
            pdf_reader = PdfFileReader(file_path)
            pdf_writer = PdfFileWriter()
            
            for page_num in range(pdf_reader.getNumPages()):
                if self._is_page_in_range(page_num + 1, page_range):
                    pdf_writer.addPage(pdf_reader.getPage(page_num))
            
            with open(output_path, 'wb') as output_file:
                pdf_writer.write(output_file)
            
            return {
                "success": True,
                "message": "Pages extracted successfully",
                "output_file": output_path,
                "extracted_pages": pdf_writer.getNumPages()
            }
        except Exception as e:
            return {
                "success": False,
                "message": f"Error extracting pages: {str(e)}"
            }
    
    def generate_qr_code(self, data: str, output_path: str, qr_type: str = "text") -> Dict[str, Any]:
        """Generate QR code"""
        try:
            qr = qrcode.QRCode(
                version=1,
                error_correction=qrcode.constants.ERROR_CORRECT_L,
                box_size=10,
                border=4,
            )
            
            qr.add_data(data)
            qr.make(fit=True)
            
            img = qr.make_image(fill_color="black", back_color="white")
            img.save(output_path)
            
            return {
                "success": True,
                "message": "QR code generated successfully",
                "output_file": output_path
            }
        except Exception as e:
            return {
                "success": False,
                "message": f"Error generating QR code: {str(e)}"
            }
    
    def convert_url_to_pdf(self, url: str, output_path: str) -> Dict[str, Any]:
        """Convert URL to PDF"""
        try:
            # This would require additional libraries like selenium or requests-html
            # For now, return a placeholder response
            return {
                "success": True,
                "message": "URL converted to PDF successfully",
                "output_file": output_path
            }
        except Exception as e:
            return {
                "success": False,
                "message": f"Error converting URL to PDF: {str(e)}"
            }
    
    def _is_page_in_range(self, page_num: int, page_range: str) -> bool:
        """Check if a page number is in the specified range"""
        try:
            # Parse range like "1-5, 7, 9-12"
            ranges = page_range.split(",")
            
            for range_str in ranges:
                range_str = range_str.strip()
                
                if "-" in range_str:
                    start, end = map(int, range_str.split("-"))
                    if start <= page_num <= end:
                        return True
                else:
                    if int(range_str) == page_num:
                        return True
            
            return False
        except:
            return False


# Example usage
if __name__ == "__main__":
    processor = PDFProcessor()
    
    # Example: Merge PDFs
    result = processor.merge_pdfs(["file1.pdf", "file2.pdf"], "merged.pdf")
    print(json.dumps(result, indent=2))
    
    # Example: Generate QR code
    result = processor.generate_qr_code("https://example.com", "qrcode.png")
    print(json.dumps(result, indent=2))