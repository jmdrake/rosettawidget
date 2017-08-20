<?php
/* File : register.php
 * Input type: POST
 * Inputs: text, touser
 * Outputs: Returns status of insertion or error information
 */

require_once "../php/config.php";
require_once "../php/mark_sql_post.php";
$conn = open_connection();

$sql = mark_sql_post("INSERT INTO Users(fullname, username, email, password, phone) VALUES([fullname], [username], [email], [password], [phone])", $conn);

$conn->close();
?>

<?php
/*
     * File : register.php
     * Input type: POST
     * Inputs: text, touser
     * Outputs: Returns status of insertion or error information
     */

require "../php/config.php";
require "../php/mark_sql_post.php";
require "../php/querytojson.php";
$conn = open_connection();

$sql = mark_sql_post("INSERT INTO Messages(text, fromuser, touser, timestamp) VALUES([text], [currentuser], [touser], Now())");

if ($conn->query($sql) === TRUE) {
    $time = date("Y-m-d H:i:s", time());
    $sql = mark_sql_post("SELECT username FROM Users WHERE id=[currentuser]");
    $fromuserdata = json_decode(querytojson($sql, $conn));

    $sql = mark_sql_post("SELECT email FROM Users WHERE id=[touser]");
    $touserdata = json_decode(querytojson($sql, $conn));
    
    $message = "You received a message from " . $fromuserdata[0]->{"username"} . " on Datenight1on1.com.  Login to read your message.";
    $subject = "You have mail at Datenight1on1.com";
    $email = $touserdata[0]->{'email'};
    if(mail($email, $subject, $message)) {        
        echo $time;
    } else {
        echo "Message not sent : " . $email . " : " . $subject . " : " . $message;
    }
    
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
$conn->close();
?>