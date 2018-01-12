<?php
/*
     * File : sendMessage.php
     * Input type: POST
     * Inputs: text, touser
     * Outputs: Returns status of insertion or error information
     */

require "../php/config.php";
require "../php/mark_sql_post.php";
require "../php/querytojson.php";
$conn = open_connection();

$sql = mark_sql_post("SELECT permissions FROM users INNER JOIN roles ON user.role = roles.id WHERE users.id = [currentuser]");

$permissions = json_decode(querytojson($sql, $conn));

if(in_array("admin", $permissions)) {
    $sql = mark_sql_post("INSERT INTO cards(text, image, link) VALUES([text], [image], [link])");
    if ($conn->query($sql) === TRUE) {
        echo '{"results":"okay"}';
    } else {
        echo '{"results":"error in sql"}';
    }        
} else {
    echo '{"results":"permission denied"}';
}

$conn->close();
?>