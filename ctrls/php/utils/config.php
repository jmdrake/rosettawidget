<?php
$currentconfig = file_get_contents('configure.inc');                
// $currentconfig=file_get_contents('./utils/configure.inc');      
// $currentconfig = "config_heroku.php";
require $currentconfig;
// require "config_heroku.php";

/*
    $servername = getenv('IP');
    $username = getenv('C9_USER');
    $password = "";
    $database = "c9";
    $dbport = 3306;
*/

session_start();

function open_connection() {
	$conn = new mysqli($GLOBALS['servername'], $GLOBALS['username'], $GLOBALS['password'], $GLOBALS['database']);   
   return $conn;
}

function set_jamuser($userid){	
	$_SESSION["jamuser"] = $userid;
}

function get_jamuser(){	
  return $_SESSION["jamuser"];  
}

?>