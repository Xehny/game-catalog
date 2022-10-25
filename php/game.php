<?php
ini_set("error_reporting",E_ALL);
ini_set("log_errors","1");
ini_set("display_errors",false);
ini_set("error_log","log/php_errors.txt");

session_start();

?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" type="text/css" href="../css/style.css">
        <script src="../js/script.js" defer></script>
        <title>Assignment 4</title>
    </head>
    <body>
        <?php echo $_POST["game"]?>
    </body>
</html>