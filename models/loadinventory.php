<?php
/*
 * File : loadinvnetory.php
 * Input type: GET
 * Inputs: Category
 * Outputs: Returns list of items for a specific category
 */

require_once "../php/utils/querytojson.php";
require_once "../php/utils/config.php";
require_once "utils/mark_sql_get.php";

$conn = open_connection();
$sql = file("inventory.sql");
if($conn->query($sql)===TRUE){
    echo "Inventory loaded";
} else {
    echo "Error loading inventor";
}
$conn->close();
?>