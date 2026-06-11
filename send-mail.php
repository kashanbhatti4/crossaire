<?php
/**
 * Crossaire - Contact Form Mail Processor
 */

// Enable session
session_start();

// Check if Request is POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Clean and validate input fields
    $source = filter_input(INPUT_POST, 'source', FILTER_SANITIZE_SPECIAL_CHARS);
    $fullname = filter_input(INPUT_POST, 'fullname', FILTER_SANITIZE_SPECIAL_CHARS);
    $email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
    $phone = filter_input(INPUT_POST, 'phone', FILTER_SANITIZE_SPECIAL_CHARS);
    $service_type = filter_input(INPUT_POST, 'service-type', FILTER_SANITIZE_SPECIAL_CHARS);
    $message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_SPECIAL_CHARS);
    
    // Error tracking
    $errors = [];
    
    if (empty($fullname)) {
        $errors[] = "Full Name is required.";
    }
    if (!$email) {
        $errors[] = "A valid Email Address is required.";
    }
    if (empty($phone)) {
        $errors[] = "Phone Number is required.";
    }
    
    // If no errors, process submission
    if (empty($errors)) {
        // Send email settings
        $to = "service@crossaire.com"; // Change to your recipient email
        $subject = "[$source] New Booking Request - " . $fullname;
        
        $email_content = "Source: $source\n";
        $email_content .= "Name: $fullname\n";
        $email_content .= "Email: $email\n";
        $email_content .= "Phone: $phone\n";
        $email_content .= "Requested Service: $service_type\n\n";
        $email_content .= "Details:\n$message\n";
        
        $headers = "From: webmaster@crossaire.com\r\n";
        $headers .= "Reply-To: $email\r\n";
        $headers .= "X-Mailer: PHP/" . phpversion();
        
        // Save submission to log file as secondary storage
        $log_dir = __DIR__ . '/submissions';
        if (!file_exists($log_dir)) {
            mkdir($log_dir, 0755, true);
        }
        $log_file = $log_dir . '/log.txt';
        $log_entry = "[" . date('Y-m-d H:i:s') . "] Source: $source | Name: $fullname | Email: $email | Phone: $phone | Service: $service_type\n";
        file_put_contents($log_file, $log_entry, FILE_APPEND);
        
        // Attempt sending email
        $success = @mail($to, $subject, $email_content, $headers);
    } else {
        $success = false;
    }
} else {
    // If accessed directly, redirect back
    header("Location: index.html");
    exit;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank You | Crossaire</title>
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        'accent': '#1C6CCF',
                        'main-bg': '#E9EEF3',
                        'primary-text': '#0C1A2B',
                        'body-text': '#475465',
                    },
                    fontFamily: {
                        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
                    }
                }
            }
        }
    </script>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Plus Jakarta Sans', sans-serif;
            background-color: #E9EEF3;
            color: #0C1A2B;
        }
    </style>
</head>
<body class="min-h-screen flex items-center justify-center p-6">
    <div class="max-w-md w-full bg-white rounded-2xl p-8 border border-[#D8E2EC] shadow-[0_10px_30px_rgba(12,26,43,0.04)] text-center animate-fade-in">
        <!-- Success Check Icon -->
        <div class="w-16 h-16 bg-[#1C6CCF]/10 rounded-full flex items-center justify-center mx-auto mb-6 text-[#1C6CCF]">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
        </div>
        
        <?php if (empty($errors)): ?>
            <h1 class="text-2xl font-bold text-primary-text mb-3">Request Received</h1>
            <p class="text-body-text text-base leading-relaxed mb-6">
                Thank you, <span class="font-semibold text-primary-text"><?php echo htmlspecialchars($fullname); ?></span>. We have received your booking inquiry and our operations team will call you shortly.
            </p>
            <?php if ($source && strpos($source, 'EMERGENCY') !== false): ?>
                <div class="bg-red-50 border border-red-200 rounded-xl p-4 text-left mb-6 text-red-900">
                    <span class="font-bold block mb-1">🚨 Emergency Dispatch Active</span>
                    <span class="text-sm">For immediate support, please call our hotline directly at <a href="tel:8663992885" class="underline font-bold text-red-700">866-399-2885</a>.</span>
                </div>
            <?php endif; ?>
        <?php else: ?>
            <h1 class="text-2xl font-bold text-red-600 mb-3">Submission Error</h1>
            <ul class="text-body-text text-sm leading-relaxed mb-6 text-left list-disc list-inside bg-red-50 p-4 rounded-xl border border-red-100">
                <?php foreach ($errors as $error): ?>
                    <li><?php echo $error; ?></li>
                <?php endforeach; ?>
            </ul>
        <?php endif; ?>
        
        <a href="index.html" class="inline-flex items-center justify-center w-full h-12 bg-[#1C6CCF] hover:bg-[#1557A6] text-white font-medium rounded-lg transition-colors duration-200">
            Back to Home Page
        </a>
    </div>
</body>
</html>
