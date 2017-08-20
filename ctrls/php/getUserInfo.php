<?php
/*
 * File : getUserInfo.php
 * Input type: GET
 * Outputs: Returns currentuserinfo
 */

require_once "utils/querytojson.php";
require_once "utils/config.php";
require_once "utils/mark_sql_post.php";

function getCurrentUserInfo(){
  $conn = open_connection();
  $sql = mark_sql_post("SELECT username, fullname, email, role FROM Users WHERE id=[currentuser]");  
  return querytojson($sql);
  $conn->close();
}

echo getCurrentUserInfo();
?>