<?php
/*
 * File : uploadFile.php
 * Input type: POST
 * Inputs: profile data
 * Outputs: Returns status of udpate or error information
 */

require_once "utils/config.php";
require_once "utils/mark_sql_post.php";

$conn = open_connection();

$sql = mark_sql_post("SELECT permissions FROM users INNER JOIN roles ON users.role = roles.id WHERE users.id = [currentuser]");

$result = $conn->query($sql);

$row = $result->fetch_assoc();

$permissions = json_decode($row["permissions"]);
$conn->close();

if(in_array("admin", $permissions)) {
	$upLoadOk = 1;
	$target_dir = "../uploads/";
	$target_file = $target_dir . basename($_FILES["file"]["name"]);
	$filename = $_REQUEST["name"];

	if ($_FILES["file"]["size"] > 5000000) {
			echo "Error: Sorry, your file is too large.";
			$upLoadOk = 0;
	}

	if ( 0 < $_FILES['file']['error'] ) {
			echo 'Error: ' . $_FILES['file']['error'] . '<br>';
			$upLoadOk = 0;
	}
	if($upLoadOk == 1) {
			if(move_uploaded_file($_FILES['file']['tmp_name'], '../../uploads/' . $filename)) {
					echo('Successful:uploads/' . $filename);
			} else {
					echo('Error uploading file');
			}			
	}
} else {
    echo '{"results":"permission denied"}';
}
?>
