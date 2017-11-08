<?php    
if(isset($_POST['SubmitButton'])){ //check if form was submitted
    $currentconfig = $_POST['configfile']; //get input text
	$configurefile = fopen("configure.inc", "w") or die("Unable to open file!");
	fwrite($configurefile, $currentconfig);
	fclose($configurefile);    
} else {
    $currentconfig = file_get_contents('configure.inc');                
}   
?>

<html>
    <head>
        
    </head>
    <body>
        <h1>Choose configuration(<?php echo $currentconfig?>)</h1>
        <form action="" method="post">
            <?php 
    	    $configfiles = glob("config_*.php");
	    	$n = count($configfiles);
            $i = 0;
            for($i=0; $i < $n; $i++){
            	if($currentconfig == $configfiles[$i]) {
	           		echo '<input type="radio" name="configfile" value="' . $configfiles[$i] . '" checked>' . $configfiles[$i] . '<br>';
            	} else {
	           		echo '<input type="radio" name="configfile" value="' . $configfiles[$i] . '">' . $configfiles[$i] . '<br>';
	        	}  
            } 
            ?>
            <input type="submit" name="SubmitButton">
        </form>         
    </body>
</html>
