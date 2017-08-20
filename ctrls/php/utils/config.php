<?php
require "config_x10.php";
/*
    $servername = getenv('IP');
    $username = getenv('C9_USER');
    $password = "";
    $database = "c9";
    $dbport = 3306;
*/

function open_connection() {
	$conn = new mysqli($GLOBALS['servername'], $GLOBALS['username'], $GLOBALS['password'], $GLOBALS['database']);   
   return $conn;
}

function set_currentuser($userid){
	global $currentuser;
	$_SESSION["currentuser"] = $userid;
}

function get_currentuser(){	
    return $_SESSION["currentuser"];
}

?>