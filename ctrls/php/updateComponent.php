<?php
/*
 * File : updateComponent.php
 * Input type: POST
 * Inputs: profile data
 * Outputs: Returns status of udpate or error information
 */

require_once "utils/config.php";
require_once "utils/mark_sql_post.php";


$conn = open_connection();

$sql = mark_sql_post("SELECT permissions FROM users INNER JOIN roles ON users.role = roles.id WHERE users.id = [currentuser]");

$result = $conn->query($sql);

$row = $result->fetch_assoc();

$permissions = json_decode($row["permissions"]);

if(in_array("admin", $permissions)) {
    $sql = mark_sql_post("UPDATE components SET json=[json] WHERE id=[id]");
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