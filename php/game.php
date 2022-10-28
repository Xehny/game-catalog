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
    if (strcmp($game->title, $_POST["title"]) == 0) {
        $cur = $game;
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
        <?php 
        echo "<h1>$cur->title</h1>";
        $i = 1;
        echo "<h4>";
        foreach ($cur->genres->genre as $genre) {
            if ($i < $cur->genres->genre->count()) {
                echo "$genre, ";
                $i++;
            }
            else {
                echo "$genre</h4><br>";
            }
        }
        echo "<div class='body'>";
        echo "<div><img src=../img/$cur->image alt='$cur->title' class='item1'></div>";
        echo "<div class='item2'>";
        $i = 1;
        echo "Developer: ";
        foreach ($cur->developers->developer as $developer) {
            if ($i < $cur->developers->developer->count()) {
                echo "$developer, ";
                $i++;
            }
            else {
                echo "$developer<br><br>";
            }
        }
        echo "Price: ";
        if ($cur->price == 0) {
            echo "Free<br><br>";
        }
        else{
            echo "$$cur->price<br><br>";
        }
        echo "Rating: $cur->rating%<br><br>";
        echo "Description:<br> $cur->description<br>";
        echo "</div></div>"
        ?>

        <form class="form" id="home" action="../index.php" method="post">
            <input type="submit" class="button" value="Home">
        </form>
    </body>
</html>