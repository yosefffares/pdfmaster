<?php
// اختبار تحميل المكتبات
require_once 'vendor/autoload.php';

echo '<h1>اختبار تحميل المكتبات</h1>';

// اختبار PDF.js
if (class_exists('vendor/autoload.php')) {
    echo '<p style="color: green;">✓ PDF.js محملة بنجاح</p>';
} else {
    echo '<p style="color: red;">❌ PDF.js غير موجود</p>';
}

// اختبار qrcode.js
if (class_exists('vendor/autoload.php')) {
    echo '<p style="color: green;">✓ qrcode.js محملة بنجاح</p>';
} else {
    echo '<p style="color: red;">❌ qrcode.js غير موجود</p>';
}

// اختبار dompdf
if (class_exists('vendor/autoload.php')) {
    echo '<p style="color: green;">✓ dompdf محملة بنجاح</p>';
} else {
    echo '<p style="color: red;">❌ dompdf غير موجود</p>';
}
?>