<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = htmlspecialchars(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_VALIDATE_EMAIL);
    $message = htmlspecialchars(trim($_POST["message"]));

    if (empty($name) || empty($email) || empty($message)) {
        echo "<p style='color:red;'>All fields are required.</p>";
        exit;
    }

    if ($email === false) {
        echo "<p style='color:red;'>Invalid email format.</p>";
        exit;
    }

    echo "<h2>Form submitted successfully!</h2>";
    echo "<p><strong>Name:</strong> $name</p>";
    echo "<p><strong>Email:</strong> " . htmlspecialchars($email) . "</p>";
    echo "<p><strong>Message:</strong> $message</p>";
}
?>

