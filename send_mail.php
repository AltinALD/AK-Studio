<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Ensure this file exists in your AK folder

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $service = htmlspecialchars($_POST["service"]);
    $message = htmlspecialchars($_POST["message"]);

    // Email recipient
    $to = "altinejup@gmail.com"; // Your email

    // Create PHPMailer instance
    $mail = new PHPMailer(true);

    try {
        // SMTP Configuration
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'presslogic36@gmail.com'; // Your Gmail address
        $mail->Password = 'rxbm nqcd mcfd bpxh'; // Your Gmail App Password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Email Details
        $mail->setFrom('presslogic36@gmail.com', 'AK Studio & Aesthetics'); // Sender
        $mail->addAddress($to); // Recipient

        // Email Content
        $mail->isHTML(true);
        $mail->Subject = "New Contact Form Submission from $name";
        $mail->Body = "
            <p><strong>Name:</strong> $name</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Service:</strong> $service</p>
            <p><strong>Message:</strong> $message</p>
        ";

        // Send Email
        $mail->send();
        echo "success"; // You can change this to redirect to a success page
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
} else {
    echo "Invalid request";
}
?>
