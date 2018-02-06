<?php
$url = parse_url("mysql://a2yddmozk0z2ru2a:juijast2as9e6me2@d6q8diwwdmy5c9k9.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/gne4m204k1x3ajzu");

$servername = $url["host"];
$username = $url["user"];
$password = $url["pass"];
$database = substr($url["path"], 1);
?>

