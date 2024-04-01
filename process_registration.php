<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "evault_db";

$conn = mysqli_connect($servername, $username, $password, $dbname);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

if (isset($_POST['register'])) {
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT); // Hash the password
    $caseNo = $_POST['caseNo'];
    $role = $_POST['role'];

    $sql_query = "INSERT INTO users (email, password, case_no, role) VALUES ('$email', '$password', '$caseNo', '$role')";

    if (mysqli_query($conn, $sql_query)) {
        echo "User registration successful!";
    } else {
        echo "Error: " . $sql_query . "<br>" . mysqli_error($conn);
    }
}

mysqli_close($conn);
?>
