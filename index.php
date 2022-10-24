<?php
if (file_exists("../xml/catalogue.xml")) {
    $catalogue = simplexml_load_file("../xml/catalogue.xml");
}
else {
    exit("Failed to open catalogue.xml");
}

echo $catalogue->game[0];
?>