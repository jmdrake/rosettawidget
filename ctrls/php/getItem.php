<?php
/*
 * File : getItem.php
 * Input type: GET
 * Inputs: Item
 * Outputs: Returns Item record from inventory
 */

require_once "utils/querytojson.php";
require_once "utils/config.php";
require_once "utils/mark_sql_get.php";

$conn = open_connection();
$sql = mark_sql_get('
SELECT id, Model, Sku, Mfg, Qty, Cost, Retail, Ourprice WeeklyRental, Category, Image, Features, Description, LongDescription, MonthlyRental
FROM inventory
WHERE Mfg=[mfg] AND Sku=[sku]');
// echo $sql;
echo querytojson($sql, $conn);
$conn->close();
?>