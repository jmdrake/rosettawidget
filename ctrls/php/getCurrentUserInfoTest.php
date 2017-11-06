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

echo "BS" . get_jamuser();
echo " : " . $_SESSION["jamuser"];
echo "Fubar : " . $_SESSION["jamuser"];
/*
$conn = open_connection();
$sql = mark_sql_get('
SELECT fullname, phone, email, menu, permissions
FROM users
INNER JOIN roles ON role = roles.id
WHERE users.id = [currentuser]');
echo querytojson($sql, $conn);
$conn->close();*/
?>