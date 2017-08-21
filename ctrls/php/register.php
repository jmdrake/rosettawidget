<?php
/* File : register.php
 * Input type: POST
 * Inputs: text, touser
 * Outputs: Returns status of insertion or error information
 */

require_once "utils/config.php";
require_once "utils/mark_sql_post.php";
require_once "utils/querytojson.php";

$conn = open_connection();

$sql = mark_sql_post("SELECT username, email FROM users");

$results = querytojson($sql, $conn);

if($results==="[]") {
  $sql = mark_sql_post("INSERT INTO users(fullname, username, email, password, phone) VALUES([fullname], [username], [email], [password], [phone])", $conn);

  if($conn->query($sql)===TRUE) {
    echo "ok";
  } else {
    echo "Error : SQL error inserting new user";
  }  
} else {
  echo "Error : Duplicate username or email address";
}

$conn->close();
?>

