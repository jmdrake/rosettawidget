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
SELECT id, Model, Sku, Mfg, Qty, Cost, Retail, Ourprice, WeeklyRental, Category, Image, Features, Description, LongDescription, MonthlyRental
FROM inventory
WHERE Category=[category]');
// echo $sql;
echo querytojson($sql, $conn);
$conn->close();
?>