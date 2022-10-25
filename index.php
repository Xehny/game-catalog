<?php
ini_set("error_reporting",E_ALL);
ini_set("log_errors","1");
ini_set("display_errors",false);
ini_set("error_log","log/php_errors.txt");

if (file_exists("xml/catalogue.xml")) {
    $catalogue = simplexml_load_file("xml/catalogue.xml");
}
else {
    exit("Failed to open catalogue.xml");
}

session_start();
$games = array();

foreach ($catalogue as $game) {
    array_push($games, $game);
}

$_SESSION["games"] = $games;
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" type="text/css" href="css/style.css">
        <script src="js/script.js" defer></script>
        <title>Assignment 4</title>
    </head>
    <body>
        <table>
            <tr>
                <th id="title">Title</th>
                <th id="price">Price</th>
                <th id="rating">Rating</th>
            </tr>
            <?php
            foreach ($catalogue as $game) {
                echo "<tr class=\"game\">";
                echo "<td id='$game->title'>$game->title</td>";
                echo "<td id='$game->title'>$$game->price</td>";
                echo "<td id='$game->title'>$game->rating%</td>";
                echo "</tr>";
            }
            ?>
        </table>
    </body>
</html>

