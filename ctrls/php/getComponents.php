<?php
/*
 * File : getCategoryItems.php
 * Input type: GET
 * Inputs: Category
 * Outputs: Returns list of items for a specific category
 */

require_once "utils/querytojson.php";
require_once "utils/config.php";
require_once "utils/mark_sql_get.php";

$conn = open_connection();
$sql = mark_sql_get('
SELECT json
FROM components
WHERE template=[template] AND page=[page]');
// echo $sql;
echo querytojson($sql, $conn);
$conn->close();
?>