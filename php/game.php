<?php
ini_set("error_reporting",E_ALL);
ini_set("log_errors","1");
ini_set("display_errors",false);
ini_set("error_log","../log/php_errors.txt");

if (file_exists("../xml/catalogue.xml")) {
    $catalogue = simplexml_load_file("../xml/catalogue.xml");
}
else {
    exit("Failed to open catalogue.xml");
}

foreach ($catalogue as $game) {
    if (strcmp($game->title, $_POST("title") == 0)) {
        
    }
}
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
        <?php echo $_POST["title"]?>
    </body>
</html>