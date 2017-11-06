<?php
/*
 * File : getCurrentUserInfo.php
 * Input type: GET
 * Inputs: currentuser
 * Outputs: User information, menu ane permissions for current user
 */

require_once "utils/querytojson.php";
require_once "utils/config.php";
require_once "utils/mark_sql_get.php";

$conn = open_connection();
$sql = mark_sql_get('
SELECT fullname, phone, email, role, menu
FROM users
INNER JOIN roles ON roleid = roles.id
WHERE users.id = [currentuser]');
echo querytojson($sql, $conn);
// echo $sql;
// echo "Fubar";
$conn->close();
?>