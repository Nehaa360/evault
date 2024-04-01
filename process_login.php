<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "evault_db";

$conn = mysqli_connect($servername, $username, $password, $dbname);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

if (isset($_POST['login'])) {
    $email_id = $_POST['email_id'];
    $password = $_POST['password'];
    $case_no = $_POST['case_no'];

    $sql_query = "INSERT INTO login (email_id, password, case_no)
                  VALUES ('$email_id', '$password', '$case_no')";

    if (mysqli_query($conn, $sql_query)) {
        echo "New details inserted successfully";
    } else {
        echo "Error: " . $sql_query . "<br>" . mysqli_error($conn);
    }

    mysqli_close($conn);
}
?>
