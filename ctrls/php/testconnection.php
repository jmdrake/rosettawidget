<?php
require_once "utils/config.php";

$conn = open_connection();
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
echo "Connected successfully";

$conn->close();

?>

