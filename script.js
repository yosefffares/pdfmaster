// Translation data
const translations = {
    ar: {
        // Navigation
        "nav-home": "الرئيسية",
        "nav-pdf-tools": "أدوات PDF",
        "nav-url-tools": "أدوات الروابط",
        "nav-about": "من نحن",
        "nav-contact": "اتصل بنا",
        
        // Hero Section
        "hero-title": "أداة متقدمة لمعالجة ملفات PDF",
        "hero-description": "ادمج، اقسم، ضغط، حوّل، وعدل ملفات PDF بسهولة وسرعة. أدوات احترافية مجانية بالكامل.",
        "hero-start": "ابدأ الآن",
        "hero-demo": "شاهد الفيديو التعريفي",
        
        // PDF Tools Section
        "pdf-tools-title": "أدوات PDF المتقدمة",
        "pdf-tools-description": "استخدم مجموعة واسعة من الأدوات لمعالجة ملفات PDF بسهولة",
        "tool-merge-title": "دمج ملفات PDF",
        "tool-merge-desc": "ادمج عدة ملفات PDF في ملف واحد",
        "tool-split-title": "تقسيم ملفات PDF",
        "tool-split-desc": "قسّم ملف PDF إلى عدة ملفات",
        "tool-compress-title": "ضغط ملفات PDF",
        "tool-compress-desc": "قلل حجم ملفات PDF مع الحفاظ على الجودة",
        "tool-convert-title": "تحويل PDF",
        "tool-convert-desc": "حوّل PDF إلى صيغ أخرى",
        "tool-lock-title": "قفل PDF",
        "tool-lock-desc": "أضف كلمة مرور لحماية ملفات PDF",
        "tool-unlock-title": "فك قفل PDF",
        "tool-unlock-desc": "احذف كلمة المرور من ملفات PDF",
        "tool-watermark-title": "إضافة علامة مائية",
        "tool-watermark-desc": "أضف نص أو صورة كعلامة مائية",
        "tool-organize-title": "ترتيب الصفحات",
        "tool-organize-desc": "غيّر ترتيب صفحات ملف PDF",
        "tool-repair-title": "إصلاح PDF",
        "tool-repair-desc": "أصلح الملفات التالفة",
        "tool-sign-title": "توقيع إلكتروني",
        "tool-sign-desc": "أضف توقيعك الإلكتروني إلى ملفات PDF",
        "tool-rotate-title": "تدوير الصفحات",
        "tool-rotate-desc": "در صفحات ملف PDF بزاوية محددة",
        "tool-extract-title": "استخراج الصفحات",
        "tool-extract-desc": "استخرج صفحات محددة من ملف PDF",
        
        // URL Tools Section
        "url-tools-title": "أدوات الروابط والتحويل",
        "url-tools-description": "استخدم هذه الأدوات لتحويل الروابط والنصوص إلى صيغ مختلفة",
        "tool-link-qr-title": "تحويل رابط إلى QR",
        "tool-link-qr-desc": "حوّل أي رابط إلى رمز QR",
        "tool-text-qr-title": "تحويل نص إلى QR",
        "tool-text-qr-desc": "حوّل أي نص إلى رمز QR",
        "tool-link-pdf-title": "تحويل رابط إلى PDF",
        "tool-link-pdf-desc": "حوّل محتوى صفحة الويب إلى PDF",
        "tool-link-html-title": "تحويل رابط إلى HTML",
        "tool-link-html-desc": "احصل على كود HTML لصفحة الويب",
        "tool-link-image-title": "تحويل رابط إلى صورة",
        "tool-link-image-desc": "حوّل صفحة الويب إلى صورة",
        
        // Tool Buttons
        "tool-select": "اختر ملف",
        "tool-generate": "إنشاء",
        "tool-convert": "تحويل",
        
        // Upload Section
        "upload-title": "اسحب وأفلت ملفات PDF هنا",
        "upload-or": "أو",
        "upload-select": "اختر ملفات من جهازك",
        "file-list-title": "الملفات المحددة:",
        "add-more": "إضافة المزيد من الملفات",
        "process": "معالجة الملفات",
        "processing": "جاري المعالجة...",
        "result-title": "اكتملت المعالجة!",
        "result-desc": "يمكنك الآن تنزيل ملفاتك المعالجة.",
        "download": "تنزيل الملفات",
        "share": "مشاركة",
        "start-new": "بدء معالجة جديدة",
        
        // QR Section
        "qr-result-title": "تم إنشاء رمز QR بنجاح!",
        "download-qr": "تنزيل رمز QR",
        "new-qr": "إنشاء رمز جديد",
        
        // Features Section
        "features-title": "لماذا تختار pdf master؟",
        "feature-speed-title": "سريع وفعال",
        "feature-speed-desc": "معالجة سريعة للملفات دون تأخير",
        "feature-security-title": "آمن وموثوق",
        "feature-security-desc": "ملفاتك محمية ومشفرة أثناء المعالجة",
        "feature-compatible-title": "يعمل على جميع الأجهزة",
        "feature-compatible-desc": "استخدمه على الكمبيوتر، الجوال، أو الجهاز اللوحي",
        "feature-free-title": "مجاني بالكامل",
        "feature-free-desc": "استخدم جميع الأدوات مجاناً دون قيود",
        
        // Pricing Section
        "pricing-title": "الأسعار",
        "pricing-description": "الموقع مجاني بالكامل، جميع الأدوات مجانية",
        "pricing-best": "الأفضل",
        "pricing-plan": "مجاني",
        "pricing-forever": "للأبد",
        "pricing-unlimited": "عمليات غير محدودة",
        "pricing-all-tools": "جميع الأدوات",
        "pricing-no-ads": "بدون إعلانات",
        "pricing-priority": "معالجة أولوية",
        "pricing-support": "دعم فني",
        "pricing-start": "ابدأ الآن",
        
        // About Section
        "about-title": "من نحن",
        "about-description": "pdf master هو منصة متقدمة لمعالجة ملفات PDF أُنشئت لتلبية جميع احتياجاتك. نقدم مجموعة واسعة من الأدوات الاحترافية التي تساعدك على تعديل وتحويل وإدارة ملفات PDF بسهولة.",
        "about-mission": "مهمتنا هي توفير أداة قوية وسهولة الاستخدام للجميع، سواء كنت طالباً، موظفاً، أو صاحب عمل. نحن نؤمن بأن معالجة ملفات PDF يجب أن تكون سهلة ومتاحة للجميع.",
        "stat-users": "مستخدم نشط",
        "stat-files": "ملف تمت معالجته",
        "stat-satisfaction": "معدل رضا العملاء",
        
        // Contact Section
        "contact-title": "اتصل بنا",
        "contact-description": "هل لديك أي أسئلة أو استفسارات؟ لا تتردد في التواصل معنا",
        "contact-address-title": "العنوان",
        "contact-phone-title": "الهاتف",
        "contact-instagram-title": "انستغرام",
        "contact-name": "الاسم الكامل",
        "contact-email": "البريد الإلكتروني",
        "contact-subject": "الموضوع",
        "contact-message": "رسالتك",
        "contact-send": "إرسال الرسالة",
        
        // Footer
        "footer-description": "أداة متقدمة لمعالجة ملفات PDF بسهولة وسرعة. جميع الحقوق محفوظة.",
        "footer-quick-links": "روابط سريعة",
        "footer-home": "الرئيسية",
        "footer-pdf-tools": "أدوات PDF",
        "footer-url-tools": "أدوات الروابط",
        "footer-about": "من نحن",
        "footer-contact": "اتصل بنا",
        "footer-merge": "دمج ملفات PDF",
        "footer-split": "تقسيم ملفات PDF",
        "footer-compress": "ضغط ملفات PDF",
        "footer-convert": "تحويل PDF",
        "footer-lock": "قفل وفك قفل PDF",
        "footer-support": "الدعم",
        "footer-help": "مركز المساعدة",
        "footer-contact-us": "اتصل بنا",
        "footer-faq": "الأسئلة الشائعة",
        "footer-privacy": "سياسة الخصوصية",
        "footer-terms": "شروط الاستخدام",
        
        // Notifications
        "notification-success": "تمت العملية بنجاح!",
        "notification-error": "حدث خطأ، يرجى المحاولة مرة أخرى",
        "notification-warning": "تنبيه",
        "notification-info": "معلومات"
    },
    en: {
        // Navigation
        "nav-home": "Home",
        "nav-pdf-tools": "PDF Tools",
        "nav-url-tools": "URL Tools",
        "nav-about": "About Us",
        "nav-contact": "Contact Us",
        
        // Hero Section
        "hero-title": "Advanced PDF Processing Tool",
        "hero-description": "Merge, split, compress, convert, and edit PDF files easily and quickly. Completely free professional tools.",
        "hero-start": "Get Started",
        "hero-demo": "Watch Demo Video",
        
        // PDF Tools Section
        "pdf-tools-title": "Advanced PDF Tools",
        "pdf-tools-description": "Use a wide range of tools to process PDF files easily",
        "tool-merge-title": "Merge PDF Files",
        "tool-merge-desc": "Combine multiple PDF files into one",
        "tool-split-title": "Split PDF Files",
        "tool-split-desc": "Divide a PDF file into multiple files",
        "tool-compress-title": "Compress PDF Files",
        "tool-compress-desc": "Reduce the size of PDF files while maintaining quality",
        "tool-convert-title": "Convert PDF",
        "tool-convert-desc": "Convert PDF to other formats",
        "tool-lock-title": "Lock PDF",
        "tool-lock-desc": "Add a password to protect PDF files",
        "tool-unlock-title": "Unlock PDF",
        "tool-unlock-desc": "Remove password from PDF files",
        "tool-watermark-title": "Add Watermark",
        "tool-watermark-desc": "Add text or image as a watermark",
        "tool-organize-title": "Organize Pages",
        "tool-organize-desc": "Change the order of pages in a PDF file",
        "tool-repair-title": "Repair PDF",
        "tool-repair-desc": "Fix corrupted files",
        "tool-sign-title": "Electronic Signature",
        "tool-sign-desc": "Add your electronic signature to PDF files",
        "tool-rotate-title": "Rotate Pages",
        "tool-rotate-desc": "Rotate pages of a PDF file at a specified angle",
        "tool-extract-title": "Extract Pages",
        "tool-extract-desc": "Extract specific pages from a PDF file",
        
        // URL Tools Section
        "url-tools-title": "URL and Conversion Tools",
        "url-tools-description": "Use these tools to convert links and text to different formats",
        "tool-link-qr-title": "Convert Link to QR",
        "tool-link-qr-desc": "Convert any link to a QR code",
        "tool-text-qr-title": "Convert Text to QR",
        "tool-text-qr-desc": "Convert any text to a QR code",
        "tool-link-pdf-title": "Convert Link to PDF",
        "tool-link-pdf-desc": "Convert web page content to PDF",
        "tool-link-html-title": "Convert Link to HTML",
        "tool-link-html-desc": "Get HTML code for a web page",
        "tool-link-image-title": "Convert Link to Image",
        "tool-link-image-desc": "Convert a web page to an image",
        
        // Tool Buttons
        "tool-select": "Select Files",
        "tool-generate": "Generate",
        "tool-convert": "Convert",
        
        // Upload Section
        "upload-title": "Drag and drop PDF files here",
        "upload-or": "Or",
        "upload-select": "Select files from your device",
        "file-list-title": "Selected Files:",
        "add-more": "Add More Files",
        "process": "Process Files",
        "processing": "Processing...",
        "result-title": "Processing Complete!",
        "result-desc": "You can now download your processed files.",
        "download": "Download Files",
        "share": "Share",
        "start-new": "Start New Processing",
        
        // QR Section
        "qr-result-title": "QR code generated successfully!",
        "download-qr": "Download QR Code",
        "new-qr": "Create New QR",
        
        // Features Section
        "features-title": "Why Choose pdf master?",
        "feature-speed-title": "Fast and Efficient",
        "feature-speed-desc": "Fast file processing without delay",
        "feature-security-title": "Secure and Reliable",
        "feature-security-desc": "Your files are protected and encrypted during processing",
        "feature-compatible-title": "Works on All Devices",
        "feature-compatible-desc": "Use it on computer, mobile, or tablet",
        "feature-free-title": "Completely Free",
        "feature-free-desc": "Use all tools for free without restrictions",
        
        // Pricing Section
        "pricing-title": "Pricing",
        "pricing-description": "The website is completely free, all tools are free",
        "pricing-best": "Best",
        "pricing-plan": "Free",
        "pricing-forever": "Forever",
        "pricing-unlimited": "Unlimited operations",
        "pricing-all-tools": "All tools",
        "pricing-no-ads": "No ads",
        "pricing-priority": "Priority processing",
        "pricing-support": "Technical support",
        "pricing-start": "Get Started",
        
        // About Section
        "about-title": "About Us",
        "about-description": "pdf master is an advanced platform for processing PDF files created to meet all your needs. We offer a wide range of professional tools that help you edit, convert and manage PDF files easily.",
        "about-mission": "Our mission is to provide a powerful and easy-to-use tool for everyone, whether you are a student, employee, or business owner. We believe that processing PDF files should be easy and accessible to everyone.",
        "stat-users": "Active Users",
        "stat-files": "Processed Files",
        "stat-satisfaction": "Customer Satisfaction Rate",
        
        // Contact Section
        "contact-title": "Contact Us",
        "contact-description": "Do you have any questions or inquiries? Feel free to contact us",
        "contact-address-title": "Address",
        "contact-phone-title": "Phone",
        "contact-instagram-title": "Instagram",
        "contact-name": "Full Name",
        "contact-email": "Email Address",
        "contact-subject": "Subject",
        "contact-message": "Your Message",
        "contact-send": "Send Message",
        
        // Footer
        "footer-description": "Advanced tool for processing PDF files easily and quickly. All rights reserved.",
        "footer-quick-links": "Quick Links",
        "footer-home": "Home",
        "footer-pdf-tools": "PDF Tools",
        "footer-url-tools": "URL Tools",
        "footer-about": "About Us",
        "footer-contact": "Contact Us",
        "footer-merge": "Merge PDF Files",
        "footer-split": "Split PDF Files",
        "footer-compress": "Compress PDF Files",
        "footer-convert": "Convert PDF",
        "footer-lock": "Lock and Unlock PDF",
        "footer-support": "Support",
        "footer-help": "Help Center",
        "footer-contact-us": "Contact Us",
        "footer-faq": "FAQ",
        "footer-privacy": "Privacy Policy",
        "footer-terms": "Terms of Use",
        
        // Notifications
        "notification-success": "Operation completed successfully!",
        "notification-error": "An error occurred, please try again",
        "notification-warning": "Warning",
        "notification-info": "Information"
    }
};

// Global variables
let currentLanguage = 'ar';
let appState = {
    selectedFiles: [],
    currentTool: '',
    processing: false,
    processedFiles: [],
    qrCodeData: null
};

// DOM elements cache
const elements = {};

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    cacheElements();
    setupEventListeners();
    setupLanguageToggle();
    loadLibraries().then(() => {
        console.log('PDF Master initialized');
        initAnimations();
    }).catch(error => {
        console.error('Error initializing app:', error);
        showNotification('Failed to initialize application', 'error');
    });
});

// Cache DOM elements
function cacheElements() {
    // Navigation
    elements.navLinks = document.querySelectorAll('.nav-link');
    elements.mobileMenu = document.querySelector('.mobile-menu');
    elements.nav = document.querySelector('nav');
    
    // Language toggle
    elements.langBtn = document.getElementById('langBtn');
    elements.currentLang = document.getElementById('currentLang');
    
    // Tool buttons
    elements.toolButtons = document.querySelectorAll('.tool-btn');
    elements.fileUploadSection = document.getElementById('fileUploadSection');
    elements.uploadArea = document.getElementById('uploadArea');
    elements.fileInput = document.getElementById('fileInput');
    elements.selectFilesBtn = document.getElementById('selectFilesBtn');
    elements.fileList = document.getElementById('fileList');
    elements.filesContainer = document.getElementById('filesContainer');
    elements.addMoreBtn = document.getElementById('addMoreBtn');
    elements.processBtn = document.getElementById('processBtn');
    elements.processingSection = document.getElementById('processingSection');
    elements.progressBar = document.getElementById('progressBar');
    elements.progressText = document.getElementById('progressText');
    elements.resultSection = document.getElementById('resultSection');
    elements.downloadBtn = document.getElementById('downloadBtn');
    elements.shareBtn = document.getElementById('shareBtn');
    elements.startNewBtn = document.getElementById('startNewBtn');
    
    // QR Section
    elements.qrSection = document.getElementById('qrSection');
    elements.qrcode = document.getElementById('qrcode');
    elements.downloadQrBtn = document.getElementById('downloadQrBtn');
    elements.newQrBtn = document.getElementById('newQrBtn');
    
    // URL Tool Modal
    elements.urlToolModal = document.getElementById('urlToolModal');
    elements.modalTitle = document.getElementById('modalTitle');
    elements.modalBody = document.getElementById('modalBody');
    elements.closeUrlModal = document.getElementById('closeUrlModal');
    
    // Other buttons
    elements.startNowBtn = document.getElementById('startNowBtn');
    elements.watchDemoBtn = document.getElementById('watchDemoBtn');
    elements.contactForm = document.getElementById('contactForm');
    
    // Notification
    elements.notification = document.getElementById('notification');
    elements.notificationMessage = document.getElementById('notificationMessage');
}

// Load libraries dynamically
async function loadLibraries() {
    try {
        // Set up PDF.js worker
        if (typeof pdfjsLib !== 'undefined') {
            pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
            console.log('PDF.js configured successfully');
        }
        
        console.log('All libraries loaded successfully');
    } catch (error) {
        console.error('Error loading libraries:', error);
        throw error;
    }
}

// Setup event listeners
function setupEventListeners() {
    // Navigation
    elements.navLinks.forEach(link => {
        link.addEventListener('click', handleNavLinkClick);
    });
    
    // Mobile menu
    elements.mobileMenu.addEventListener('click', toggleMobileMenu);
    
    // Tool buttons
    elements.toolButtons.forEach(button => {
        button.addEventListener('click', handleToolButtonClick);
    });
    
    // Main buttons
    elements.startNowBtn.addEventListener('click', showFileUpload);
    elements.watchDemoBtn.addEventListener('click', showDemoNotification);
    
    // File upload
    elements.selectFilesBtn.addEventListener('click', () => elements.fileInput.click());
    elements.addMoreBtn.addEventListener('click', () => elements.fileInput.click());
    elements.fileInput.addEventListener('change', handleFileSelection);
    
    // Drag and drop
    setupDragAndDrop();
    
    // Process files
    elements.processBtn.addEventListener('click', processFiles);
    
    // Result actions
    elements.downloadBtn.addEventListener('click', downloadFiles);
    elements.shareBtn.addEventListener('click', shareFiles);
    elements.startNewBtn.addEventListener('click', resetInterface);
    
    // QR actions
    elements.downloadQrBtn.addEventListener('click', downloadQRCode);
    elements.newQrBtn.addEventListener('click', showUrlToolOptions);
    
    // Contact form
    elements.contactForm.addEventListener('submit', handleContactForm);
    
    // Modal close
    elements.closeUrlModal.addEventListener('click', closeModal);
    
    // Scroll events
    window.addEventListener('scroll', () => {
        updateActiveNavLink();
        animateOnScroll();
    });
    
    // Click outside modal to close
    elements.urlToolModal.addEventListener('click', function(e) {
        if (e.target === this) {
            closeModal();
        }
    });
}

// Handle navigation link click
function handleNavLinkClick(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
        window.scrollTo({
            top: targetSection.offsetTop - 80,
            behavior: 'smooth'
        });
        
        // Update active link
        elements.navLinks.forEach(link => {
            link.classList.remove('active');
        });
        this.classList.add('active');
    }
}

// Toggle mobile menu
function toggleMobileMenu() {
    elements.nav.style.display = elements.nav.style.display === 'flex' ? 'none' : 'flex';
}

// Handle tool button click
function handleToolButtonClick() {
    appState.currentTool = this.parentElement.getAttribute('data-tool');
    
    // Check if this is a URL tool or PDF tool
    if (appState.currentTool.includes('qr') || appState.currentTool.includes('link-to-')) {
        showUrlToolOptions();
    } else {
        showFileUpload();
    }
}

// Show file upload section
function showFileUpload() {
    elements.fileUploadSection.style.display = 'block';
    elements.fileUploadSection.scrollIntoView({ behavior: 'smooth' });
}

// Show demo notification
function showDemoNotification() {
    showNotification('Demo video will be available soon');
}

// Setup drag and drop functionality
function setupDragAndDrop() {
    elements.uploadArea.addEventListener('dragover', function(e) {
        e.preventDefault();
        this.classList.add('dragover');
    });
    
    elements.uploadArea.addEventListener('dragleave', function() {
        this.classList.remove('dragover');
    });
    
    elements.uploadArea.addEventListener('drop', function(e) {
        e.preventDefault();
        this.classList.remove('dragover');
        handleFiles(e.dataTransfer.files);
    });
}

// Handle file selection
function handleFileSelection() {
    handleFiles(this.files);
}

// Handle files
function handleFiles(files) {
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        
        // Validate file type
        if (file.type !== 'application/pdf') {
            showNotification('Please select PDF files only', 'error');
            continue;
        }
        
        // Validate file size (10MB max)
        if (file.size > 10 * 1024 * 1024) {
            showNotification(`File size exceeds the maximum allowed (10MB)`, 'error');
            continue;
        }
        
        // Check if file already exists
        if (appState.selectedFiles.some(f => f.name === file.name && f.size === file.size)) {
            showNotification(`File ${file.name} already exists`, 'warning');
            continue;
        }
        
        // Add file to list
        appState.selectedFiles.push(file);
        
        // Create file item in UI
        createFileItem(file, appState.selectedFiles.length - 1);
    }
    
    // If there are files, show file list
    if (appState.selectedFiles.length > 0) {
        elements.uploadArea.style.display = 'none';
        elements.fileList.style.display = 'block';
        showToolOptions();
    }
}

// Create file item
function createFileItem(file, index) {
    const fileItem = document.createElement('li');
    fileItem.className = 'file-item';
    fileItem.innerHTML = `
        <div class="file-info">
            <i class="fas fa-file-pdf"></i>
            <div>
                <div class="file-name">${file.name}</div>
                <div class="file-size">${formatFileSize(file.size)}</div>
            </div>
        </div>
        <button class="remove-file" data-index="${index}">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    elements.filesContainer.appendChild(fileItem);
    
    // Add remove file event
    fileItem.querySelector('.remove-file').addEventListener('click', function() {
        removeFile(parseInt(this.getAttribute('data-index')));
    });
}

// Remove file
function removeFile(index) {
    appState.selectedFiles.splice(index, 1);
    
    // Rebuild file list
    elements.filesContainer.innerHTML = '';
    appState.selectedFiles.forEach((file, i) => {
        createFileItem(file, i);
    });
    
    // If no files, hide file list
    if (appState.selectedFiles.length === 0) {
        elements.uploadArea.style.display = 'block';
        elements.fileList.style.display = 'none';
        document.getElementById('toolOptions').style.display = 'none';
    }
}

// Show tool options
function showToolOptions() {
    const toolOptions = document.getElementById('toolOptions');
    toolOptions.innerHTML = '';
    toolOptions.style.display = 'block';
    
    let optionsHTML = '<h4>' + (currentLanguage === 'ar' ? 'خيارات الأداة:' : 'Tool Options:') + '</h4>';
    
    switch (appState.currentTool) {
        case 'merge':
            optionsHTML += '<p>' + (currentLanguage === 'ar' ? 'جميع الملفات المحددة سيتم دمجها بترتيبها الحالي.' : 'All selected files will be merged in their current order.') + '</p>';
            break;
        case 'split':
            optionsHTML += `
                <div class="form-group">
                    <label>${currentLanguage === 'ar' ? 'طريقة التقسيم:' : 'Split method:'}</label>
                    <select id="splitMethod" class="form-control">
                        <option value="pages">${currentLanguage === 'ar' ? 'عدد الصفحات' : 'Number of pages'}</option>
                        <option value="range">${currentLanguage === 'ar' ? 'نطاق صفحات' : 'Page range'}</option>
                    </select>
                </div>
                <div class="form-group" id="splitPagesGroup">
                    <label>${currentLanguage === 'ar' ? 'عدد الصفحات في كل ملف:' : 'Pages per file:'}</label>
                    <input type="number" id="splitPages" min="1" value="1" class="form-control">
                </div>
                <div class="form-group" id="splitRangeGroup" style="display: none;">
                    <label>${currentLanguage === 'ar' ? 'نطاق الصفحات (مثال: 1-5, 6-10):' : 'Page range (e.g., 1-5, 6-10):'}</label>
                    <input type="text" id="splitRange" placeholder="1-5, 6-10" class="form-control">
                </div>
            `;
            break;
        case 'compress':
            optionsHTML += `
                <div class="form-group">
                    <label>${currentLanguage === 'ar' ? 'مستوى الضغط:' : 'Compression level:'}</label>
                    <select id="compressionLevel" class="form-control">
                        <option value="low">${currentLanguage === 'ar' ? 'منخفض (جودة عالية)' : 'Low (high quality)'}</option>
                        <option value="medium" selected>${currentLanguage === 'ar' ? 'متوسط' : 'Medium'}</option>
                        <option value="high">${currentLanguage === 'ar' ? 'عالي (جودة منخفضة)' : 'High (low quality)'}</option>
                    </select>
                </div>
            `;
            break;
        case 'convert':
            optionsHTML += `
                <div class="form-group">
                    <label>${currentLanguage === 'ar' ? 'الصيغة المستهدفة:' : 'Target format:'}</label>
                    <select id="targetFormat" class="form-control">
                        <option value="docx">Word (.docx)</option>
                        <option value="xlsx">Excel (.xlsx)</option>
                        <option value="pptx">PowerPoint (.pptx)</option>
                        <option value="jpg">Image (.jpg)</option>
                        <option value="png">Image (.png)</option>
                        <option value="txt">Text (.txt)</option>
                    </select>
                </div>
            `;
            break;
        case 'lock':
            optionsHTML += `
                <div class="form-group">
                    <label>${currentLanguage === 'ar' ? 'كلمة المرور:' : 'Password:'}</label>
                    <input type="password" id="lockPassword" placeholder="${currentLanguage === 'ar' ? 'أدخل كلمة المرور' : 'Enter password'}" class="form-control">
                </div>
                <div class="form-group">
                    <label>${currentLanguage === 'ar' ? 'تأكيد كلمة المرور:' : 'Confirm password:'}</label>
                    <input type="password" id="confirmLockPassword" placeholder="${currentLanguage === 'ar' ? 'أعد إدخال كلمة المرور' : 'Re-enter password'}" class="form-control">
                </div>
            `;
            break;
        case 'unlock':
            optionsHTML += `
                <div class="form-group">
                    <label>${currentLanguage === 'ar' ? 'كلمة المرور:' : 'Password:'}</label>
                    <input type="password" id="unlockPassword" placeholder="${currentLanguage === 'ar' ? 'أدخل كلمة المرور' : 'Enter password'}" class="form-control">
                </div>
            `;
            break;
        case 'watermark':
            optionsHTML += `
                <div class="form-group">
                    <label>${currentLanguage === 'ar' ? 'نوع العلامة المائية:' : 'Watermark type:'}</label>
                    <select id="watermarkType" class="form-control">
                        <option value="text">${currentLanguage === 'ar' ? 'نص' : 'Text'}</option>
                        <option value="image">${currentLanguage === 'ar' ? 'صورة' : 'Image'}</option>
                    </select>
                </div>
                <div class="form-group" id="watermarkTextGroup">
                    <label>${currentLanguage === 'ar' ? 'نص العلامة المائية:' : 'Watermark text:'}</label>
                    <input type="text" id="watermarkText" placeholder="${currentLanguage === 'ar' ? 'أدخل النص' : 'Enter text'}" class="form-control">
                </div>
                <div class="form-group" id="watermarkImageGroup" style="display: none;">
                    <label>${currentLanguage === 'ar' ? 'صورة العلامة المائية:' : 'Watermark image:'}</label>
                    <input type="file" id="watermarkImage" accept="image/*" class="form-control">
                </div>
            `;
            break;
        case 'rotate':
            optionsHTML += `
                <div class="form-group">
                    <label>${currentLanguage === 'ar' ? 'زاوية الدوران:' : 'Rotation angle:'}</label>
                    <select id="rotationAngle" class="form-control">
                        <option value="90">${currentLanguage === 'ar' ? '90 درجة (يمين)' : '90 degrees (right)'}</option>
                        <option value="180">${currentLanguage === 'ar' ? '180 درجة' : '180 degrees'}</option>
                        <option value="270">${currentLanguage === 'ar' ? '270 درجة (يسار)' : '270 degrees (left)'}</option>
                    </select>
                </div>
            `;
            break;
        case 'extract':
            optionsHTML += `
                <div class="form-group">
                    <label>${currentLanguage === 'ar' ? 'نطاق الصفحات:' : 'Page range:'}</label>
                    <input type="text" id="extractRange" placeholder="${currentLanguage === 'ar' ? 'مثال: 1-5, 7, 9-12' : 'e.g., 1-5, 7, 9-12'}" class="form-control">
                </div>
            `;
            break;
    }
    
    toolOptions.innerHTML = optionsHTML;
    
    // Add dynamic events based on tool
    if (appState.currentTool === 'split') {
        const splitMethod = document.getElementById('splitMethod');
        const splitPagesGroup = document.getElementById('splitPagesGroup');
        const splitRangeGroup = document.getElementById('splitRangeGroup');
        
        splitMethod.addEventListener('change', function() {
            if (this.value === 'pages') {
                splitPagesGroup.style.display = 'block';
                splitRangeGroup.style.display = 'none';
            } else if (this.value === 'range') {
                splitPagesGroup.style.display = 'none';
                splitRangeGroup.style.display = 'block';
            }
        });
    }
    
    if (appState.currentTool === 'watermark') {
        const watermarkType = document.getElementById('watermarkType');
        const watermarkTextGroup = document.getElementById('watermarkTextGroup');
        const watermarkImageGroup = document.getElementById('watermarkImageGroup');
        
        watermarkType.addEventListener('change', function() {
            if (this.value === 'text') {
                watermarkTextGroup.style.display = 'block';
                watermarkImageGroup.style.display = 'none';
            } else if (this.value === 'image') {
                watermarkTextGroup.style.display = 'none';
                watermarkImageGroup.style.display = 'block';
            }
        });
    }
}

// Process files
async function processFiles() {
    if (appState.selectedFiles.length === 0) {
        showNotification('Please select at least one file', 'error');
        return;
    }
    
    // Validate tool options
    if (!validateToolOptions()) {
        return;
    }
    
    elements.fileList.style.display = 'none';
    elements.processingSection.style.display = 'block';
    appState.processing = true;
    
    // Collect tool options
    const toolOptions = collectToolOptions();
    
    try {
        // Simulate processing files
        await simulateFileProcessing(toolOptions);
    } catch (error) {
        console.error('Error processing files:', error);
        showNotification('Error occurred while processing files', 'error');
        elements.processingSection.style.display = 'none';
        appState.processing = false;
    }
}

// Simulate file processing
async function simulateFileProcessing(toolOptions) {
    return new Promise((resolve) => {
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.random() * 15;
            if (progress > 100) progress = 100;
            
            elements.progressBar.style.width = progress + '%';
            
            if (progress < 30) {
                elements.progressText.textContent = currentLanguage === 'ar' ? 'جاري رفع الملفات...' : 'Uploading files...';
            } else if (progress < 70) {
                elements.progressText.textContent = currentLanguage === 'ar' ? 'جاري معالجة الملفات...' : 'Processing files...';
            } else if (progress < 100) {
                elements.progressText.textContent = currentLanguage === 'ar' ? 'جاري تحضير الملفات للتنزيل...' : 'Preparing files for download...';
            } else {
                elements.progressText.textContent = currentLanguage === 'ar' ? 'اكتملت المعالجة!' : 'Processing complete!';
                clearInterval(interval);
                
                setTimeout(() => {
                    elements.processingSection.style.display = 'none';
                    elements.resultSection.style.display = 'block';
                    appState.processing = false;
                    
                    // Create mock processed files
                    createMockProcessedFiles();
                    
                    showNotification(currentLanguage === 'ar' ? 'اكتملت المعالجة!' : 'Processing complete!');
                    resolve();
                }, 1000);
            }
        }, 300);
    });
}

// Create mock processed files
function createMockProcessedFiles() {
    appState.processedFiles = [];
    
    appState.selectedFiles.forEach((file, index) => {
        appState.processedFiles.push({
            name: getProcessedFileName(file.name, appState.currentTool, index),
            size: file.size,
            url: '#' // In a real application, this would be the URL of the processed file
        });
    });
}

// Get processed file name
function getProcessedFileName(originalName, tool, index) {
    const nameWithoutExt = originalName.replace(/\.[^/.]+$/, '');
    
    switch (tool) {
        case 'merge':
            return `${nameWithoutExt}_merged.pdf`;
        case 'split':
            return `${nameWithoutExt}_split_${index + 1}.pdf`;
        case 'compress':
            return `${nameWithoutExt}_compressed.pdf`;
        case 'convert':
            const format = document.getElementById('targetFormat')?.value || 'pdf';
            return `${nameWithoutExt}.${format}`;
        case 'lock':
            return `${nameWithoutExt}_locked.pdf`;
        case 'unlock':
            return `${nameWithoutExt}_unlocked.pdf`;
        case 'watermark':
            return `${nameWithoutExt}_watermarked.pdf`;
        case 'rotate':
            return `${nameWithoutExt}_rotated.pdf`;
        case 'extract':
            return `${nameWithoutExt}_extracted.pdf`;
        default:
            return `${nameWithoutExt}_processed.pdf`;
    }
}

// Download files
function downloadFiles() {
    if (appState.processedFiles.length === 0) {
        showNotification('No files to download', 'error');
        return;
    }
    
    showNotification('Your files will be downloaded soon');
    
    // Download each processed file
    appState.processedFiles.forEach((file, index) => {
        setTimeout(() => {
            // In a real application, this would create a real download link
            console.log(`Downloading ${file.name}`);
        }, index * 500); // Stagger downloads
    });
    
    // Reset interface
    setTimeout(resetInterface, 2000);
}

// Share files
function shareFiles() {
    if (appState.processedFiles.length === 0) {
        showNotification('No files to share', 'error');
        return;
    }
    
    showNotification('Share link created successfully');
    
    // Simulate copying share link to clipboard
    const shareLink = 'https://pdfmaster.com/share/' + Math.random().toString(36).substring(2, 15);
    
    if (navigator.clipboard) {
        navigator.clipboard.writeText(shareLink)
            .then(() => {
                showNotification('Share link copied to clipboard');
            })
            .catch(() => {
                showNotification('Failed to copy link, please copy manually: ' + shareLink);
            });
    } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = shareLink;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showNotification('Share link copied to clipboard');
    }
}

// Download QR code
function downloadQRCode() {
    if (!appState.qrCodeData) {
        showNotification('No QR code to download', 'error');
        return;
    }
    
    // Create a download link
    const link = document.createElement('a');
    link.href = appState.qrCodeData;
    link.download = 'qrcode.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    showNotification('QR code downloaded successfully');
}

// Reset interface
function resetInterface() {
    elements.resultSection.style.display = 'none';
    elements.uploadArea.style.display = 'block';
    appState.selectedFiles = [];
    appState.processedFiles = [];
    elements.filesContainer.innerHTML = '';
    elements.fileInput.value = '';
    document.getElementById('toolOptions').style.display = 'none';
}

// Validate tool options
function validateToolOptions() {
    switch (appState.currentTool) {
        case 'lock':
            const lockPassword = document.getElementById('lockPassword')?.value;
            const confirmLockPassword = document.getElementById('confirmLockPassword')?.value;
            
            if (!lockPassword) {
                showNotification(currentLanguage === 'ar' ? 'يرجى إدخال كلمة المرور' : 'Please enter a password', 'error');
                return false;
            }
            
            if (lockPassword !== confirmLockPassword) {
                showNotification(currentLanguage === 'ar' ? 'كلمطا المرور غير متطابقتين' : 'Passwords do not match', 'error');
                return false;
            }
            
            if (lockPassword.length < 8) {
                showNotification(currentLanguage === 'ar' ? 'كلمة المرور يجب أن تكون 8 أحرف على الأقل' : 'Password must be at least 8 characters', 'error');
                return false;
            }
            break;
            
        case 'unlock':
            const unlockPassword = document.getElementById('unlockPassword')?.value;
            
            if (!unlockPassword) {
                showNotification(currentLanguage === 'ar' ? 'يرجى إدخال كلمة المرور' : 'Please enter a password', 'error');
                return false;
            }
            break;
            
        case 'watermark':
            const watermarkType = document.getElementById('watermarkType')?.value;
            
            if (watermarkType === 'text') {
                const watermarkText = document.getElementById('watermarkText')?.value;
                if (!watermarkText) {
                    showNotification(currentLanguage === 'ar' ? 'يرجى إدخال نص العلامة المائية' : 'Please enter watermark text', 'error');
                    return false;
                }
            } else if (watermarkType === 'image') {
                const watermarkImage = document.getElementById('watermarkImage')?.files.length;
                if (!watermarkImage) {
                    showNotification(currentLanguage === 'ar' ? 'يرجى اختيار صورة العلامة المائية' : 'Please select a watermark image', 'error');
                    return false;
                }
            }
            break;
            
        case 'extract':
            const extractRange = document.getElementById('extractRange')?.value;
            if (!extractRange) {
                showNotification(currentLanguage === 'ar' ? 'يرجى تحديد نطاق الصفحات' : 'Please specify page range', 'error');
                return false;
            }
            
            // Validate page range
            const rangePattern = /^(\d+(-\d+)?)(,\s*\d+(-\d+)?)*$/;
            if (!rangePattern.test(extractRange)) {
                showNotification(currentLanguage === 'ar' ? 'يرجى إدخال نطاق صفحات صحيح' : 'Please enter a valid page range', 'error');
                return false;
            }
            break;
    }
    
    return true;
}

// Collect tool options
function collectToolOptions() {
    const options = {};
    
    switch (appState.currentTool) {
        case 'split':
            options.method = document.getElementById('splitMethod')?.value;
            if (options.method === 'pages') {
                options.pages = document.getElementById('splitPages')?.value;
            } else if (options.method === 'range') {
                options.range = document.getElementById('splitRange')?.value;
            }
            break;
            
        case 'compress':
            options.level = document.getElementById('compressionLevel')?.value;
            break;
            
        case 'convert':
            options.format = document.getElementById('targetFormat')?.value;
            break;
            
        case 'lock':
            options.password = document.getElementById('lockPassword')?.value;
            break;
            
        case 'unlock':
            options.password = document.getElementById('unlockPassword')?.value;
            break;
            
        case 'watermark':
            options.type = document.getElementById('watermarkType')?.value;
            
            if (options.type === 'text') {
                options.text = document.getElementById('watermarkText')?.value;
            } else if (options.type === 'image') {
                options.image = document.getElementById('watermarkImage')?.files[0];
            }
            break;
            
        case 'rotate':
            options.angle = document.getElementById('rotationAngle')?.value;
            break;
            
        case 'extract':
            options.range = document.getElementById('extractRange')?.value;
            break;
    }
    
    return options;
}

// Format file size
function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// Show notification
function showNotification(message, type = 'success') {
    elements.notificationMessage.textContent = message;
    
    // Update icon based on type
    const icon = elements.notification.querySelector('i');
    icon.className = 'fas ';
    
    if (type === 'success') {
        icon.className += 'fa-check-circle';
        icon.style.color = 'var(--success-color)';
    } else if (type === 'error') {
        icon.className += 'fa-exclamation-circle';
        icon.style.color = 'var(--error-color)';
    } else if (type === 'warning') {
        icon.className += 'fa-exclamation-triangle';
        icon.style.color = 'var(--warning-color)';
    } else if (type === 'info') {
        icon.className += 'fa-info-circle';
        icon.style.color = 'var(--info-color)';
    }
    
    elements.notification.classList.add('show');
    
    setTimeout(() => {
        elements.notification.classList.remove('show');
    }, 3000);
}

// Update active navigation link on scroll
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            elements.navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + sectionId) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Animate elements on scroll
function animateOnScroll() {
    const animatedElements = document.querySelectorAll('.tool-card, .feature, .pricing-card');
    
    animatedElements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize animations
function initAnimations() {
    document.querySelectorAll('.tool-card, .feature, .pricing-card').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Run once to check initial visible elements
    animateOnScroll();
}

// Setup language toggle
function setupLanguageToggle() {
    elements.langBtn.addEventListener('click', function() {
        // Toggle language
        currentLanguage = currentLanguage === 'ar' ? 'en' : 'ar';
        
        // Update HTML attributes
        document.documentElement.lang = currentLanguage;
        document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
        document.body.className = currentLanguage === 'ar' ? '' : 'ltr';
        
        // Update button text
        elements.currentLang.textContent = currentLanguage === 'ar' ? 'العربية' : 'English';
        
        // Update all translatable elements
        updateTranslations();
        
        // Save preference
        localStorage.setItem('pdfmaster_lang', currentLanguage);
        
        showNotification(`Language changed to ${currentLanguage === 'ar' ? 'Arabic' : 'English'}`);
    });
    
    // Load saved language preference
    const savedLang = localStorage.getItem('pdfmaster_lang');
    if (savedLang && savedLang !== currentLanguage) {
        elements.langBtn.click();
    }
}

// Update translations
function updateTranslations() {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });
    
    // Update placeholders
    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (translations[currentLanguage][key]) {
            element.placeholder = translations[currentLanguage][key];
        }
    });
}

// Show URL tool options
function showUrlToolOptions() {
    // Set modal title and content based on tool
    let title = '';
    let content = '';
    
    switch (appState.currentTool) {
        case 'link-to-qr':
            title = currentLanguage === 'ar' ? 'تحويل رابط إلى QR' : 'Convert Link to QR';
            content = `
                <div class="form-group">
                    <label>${currentLanguage === 'ar' ? 'الرابط:' : 'Link:'}</label>
                    <input type="url" id="qrLink" placeholder="https://example.com" class="form-control">
                </div>
                <button type="button" id="generateQrBtn" class="btn-primary">${currentLanguage === 'ar' ? 'إنشاء رمز QR' : 'Generate QR Code'}</button>
            `;
            break;
            
        case 'text-to-qr':
            title = currentLanguage === 'ar' ? 'تحويل نص إلى QR' : 'Convert Text to QR';
            content = `
                <div class="form-group">
                    <label>${currentLanguage === 'ar' ? 'النص:' : 'Text:'}</label>
                    <textarea id="qrText" placeholder="${currentLanguage === 'ar' ? 'أدخل النص' : 'Enter text'}" class="form-control"></textarea>
                </div>
                <button type="button" id="generateQrBtn" class="btn-primary">${currentLanguage === 'ar' ? 'إنشاء رمز QR' : 'Generate QR Code'}</button>
            `;
            break;
            
        case 'link-to-pdf':
            title = currentLanguage === 'ar' ? 'تحويل رابط إلى PDF' : 'Convert Link to PDF';
            content = `
                <div class="form-group">
                    <label>${currentLanguage === 'ar' ? 'الرابط:' : 'Link:'}</label>
                    <input type="url" id="convertLink" placeholder="https://example.com" class="form-control">
                </div>
                <button type="button" id="convertBtn" class="btn-primary">${currentLanguage === 'ar' ? 'تحويل' : 'Convert'}</button>
            `;
            break;
            
        case 'link-to-html':
            title = currentLanguage === 'ar' ? 'تحويل رابط إلى HTML' : 'Convert Link to HTML';
            content = `
                <div class="form-group">
                    <label>${currentLanguage === 'ar' ? 'الرابط:' : 'Link:'}</label>
                    <input type="url" id="convertLink" placeholder="https://example.com" class="form-control">
                </div>
                <button type="button" id="convertBtn" class="btn-primary">${currentLanguage === 'ar' ? 'تحويل' : 'Convert'}</button>
            `;
            break;
            
        case 'link-to-image':
            title = currentLanguage === 'ar' ? 'تحويل رابط إلى صورة' : 'Convert Link to Image';
            content = `
                <div class="form-group">
                    <label>${currentLanguage === 'ar' ? 'الرابط:' : 'Link:'}</label>
                    <input type="url" id="convertLink" placeholder="https://example.com" class="form-control">
                </div>
                <button type="button" id="convertBtn" class="btn-primary">${currentLanguage === 'ar' ? 'تحويل' : 'Convert'}</button>
            `;
            break;
    }
    
    // Update modal
    elements.modalTitle.textContent = title;
    elements.modalBody.innerHTML = content;
    
    // Show modal
    elements.urlToolModal.style.display = 'block';
    
    // Add event listeners
    if (appState.currentTool.includes('qr')) {
        document.getElementById('generateQrBtn').addEventListener('click', generateQRCode);
    } else {
        document.getElementById('convertBtn').addEventListener('click', convertUrl);
    }
}

// Generate QR code
function generateQRCode() {
    let data = '';
    
    if (appState.currentTool === 'link-to-qr') {
        data = document.getElementById('qrLink').value;
        
        // Validate URL
        try {
            new URL(data);
        } catch (e) {
            showNotification(currentLanguage === 'ar' ? 'يرجى إدخال رابط صحيح' : 'Please enter a valid URL', 'error');
            return;
        }
    } else if (appState.currentTool === 'text-to-qr') {
        data = document.getElementById('qrText').value;
        
        if (!data) {
            showNotification(currentLanguage === 'ar' ? 'يرجى إدخال نص' : 'Please enter text', 'error');
            return;
        }
    }
    
    // Generate QR code using qrcode.js library
    elements.qrcode.innerHTML = '';
    new QRCode(elements.qrcode, {
        text: data,
        width: 256,
        height: 256,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
    
    // Store QR code data
    appState.qrCodeData = elements.qrcode.querySelector('img').src;
    
    // Close modal
    closeModal();
    
    // Show QR section
    elements.qrSection.style.display = 'block';
    elements.qrSection.scrollIntoView({ behavior: 'smooth' });
    
    showNotification(currentLanguage === 'ar' ? 'تم إنشاء رمز QR بنجاح' : 'QR code generated successfully');
}

// Convert URL
function convertUrl() {
    const url = document.getElementById('convertLink').value;
    
    // Validate URL
    try {
        new URL(url);
    } catch (e) {
        showNotification(currentLanguage === 'ar' ? 'يرجى إدخال رابط صحيح' : 'Please enter a valid URL', 'error');
        return;
    }
    
    // Close modal
    closeModal();
    
    // Show processing
    elements.fileUploadSection.style.display = 'block';
    elements.fileList.style.display = 'none';
    elements.processingSection.style.display = 'block';
    elements.fileUploadSection.scrollIntoView({ behavior: 'smooth' });
    
    // Simulate processing
    simulateUrlConversion();
}

// Simulate URL conversion
function simulateUrlConversion() {
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress > 100) progress = 100;
        
        elements.progressBar.style.width = progress + '%';
        
        if (progress < 30) {
            elements.progressText.textContent = currentLanguage === 'ar' ? 'جاري تحميل الرابط...' : 'Loading URL...';
        } else if (progress < 70) {
            elements.progressText.textContent = currentLanguage === 'ar' ? 'جاري التحويل...' : 'Converting...';
        } else if (progress < 100) {
            elements.progressText.textContent = currentLanguage === 'ar' ? 'جاري تحضير الملف للتنزيل...' : 'Preparing file for download...';
        } else {
            elements.progressText.textContent = currentLanguage === 'ar' ? 'اكتمل التحويل!' : 'Conversion complete!';
            clearInterval(interval);
            
            setTimeout(() => {
                elements.processingSection.style.display = 'none';
                elements.resultSection.style.display = 'block';
                
                // Create mock processed file
                const extension = appState.currentTool === 'link-to-pdf' ? 'pdf' : 
                                 appState.currentTool === 'link-to-html' ? 'html' : 'jpg';
                
                appState.processedFiles = [{
                    name: `converted.${extension}`,
                    size: 50000,
                    url: '#'
                }];
                
                showNotification(currentLanguage === 'ar' ? 'تم التحويل بنجاح' : 'Conversion completed successfully');
            }, 1000);
        }
    }, 500);
}

// Close modal
function closeModal() {
    elements.urlToolModal.style.display = 'none';
}

// Handle contact form
function handleContactForm(e) {
    e.preventDefault();
    showNotification('Message sent successfully');
    this.reset();
}