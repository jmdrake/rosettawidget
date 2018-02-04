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
SELECT fullname, phone, email, roles.role
FROM users
INNER JOIN roles ON users.role = roles.id
WHERE users.id = [currentuser]');
echo querytojson($sql, $conn);
// echo $sql;
// echo "Fubar";
$conn->close();
?>