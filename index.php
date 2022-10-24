<?php
if (file_exists("xml/catalogue.xml")) {
    $catalogue = simplexml_load_file("xml/catalogue.xml");
}
else {
    exit("Failed to open catalogue.xml");
}

echo $catalogue->game[0]->title;
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" type="text/css" href="css/style.css">
        <title>Assignment 4</title>
    </head>
    <body>
    </body>
</html>