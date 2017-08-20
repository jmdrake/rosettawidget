<?php
/*
 * File : login.php
 * Input type: POST
 * Inputs: username, password
 * Outputs: Returns currentuser
 */

require_once "utils/querytojson.php";
require_once "utils/config.php";
require_once "utils/mark_sql_post.php";

$conn = open_connection();
$sql = mark_sql_post("SELECT id, email, password, role FROM Users WHERE (username=[userinfo] OR email=[userinfo]) AND password=[password]");
// echo $sql;
$result = $conn->query($sql);
if($result) {
    $rs = $result->fetch_array(MYSQLI_ASSOC);
    $currentuser = $rs["id"];
    $role = $rs["role"];
    if($currentuser != "") {
        set_currentuser($currentuser, $role);
    } else {
        echo "Error : username/email - password combination not found";
    }      
} else {
    echo("Error : Unable to fetch login record");
}
$conn->close();
?>
