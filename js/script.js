var fileName = location.pathname.split("/").slice(-1)

if (fileName == "index.php" || fileName == "") {

    // Declare document elements
    let title = document.getElementById("title");
    title.addEventListener("click", function() { sort(1); })

    let price = document.getElementById("price");
    price.addEventListener("click", function() { sort(2); })

    let rating = document.getElementById("rating");
    rating.addEventListener("click", function() { sort(3); })

    const search = document.getElementById("SearchBar");
    search.addEventListener("keyup", function() { searching(); })

    const games = document.getElementsByClassName("game");

    const buttonPressed = e => {
        // Invisible form to post game title
        var form = document.createElement("form");
        form.setAttribute("method", "post");
        form.setAttribute("action", "php/game.php");
        
        var hiddenField = document.createElement("input");
        hiddenField.setAttribute("type", "hidden");
        hiddenField.setAttribute("name", "title");
        hiddenField.setAttribute("value", e.target.id);
        form.appendChild(hiddenField);
        document.body.appendChild(form);
        form.submit();
    }

    // Add click eventListeners for each game
    for (let game of games) {
        game.addEventListener("click", buttonPressed);
    }
}

// Boolean array to determine which sort is currently active
let sortBoolean = new Array(4).fill(true);
sortBoolean[1] = false;

// Function to sort the displayed games
function sort(col) {
    if(col > 3){
        alert("ERROR: Invalid column selected")
        return;
    }
    // Declare variables
    var table, i, rowA, rowB, rowX, unfinished;
    table = document.getElementById("GameTable");
    unfinished = true;

    // Run loop until no switching is needed
    while (unfinished) {
        unfinished = false;
        var rows = table.rows;

        // Go through each rows
        for (i = 1; i < (rows.length - 1); i++) {
            var restart = false;

            // Store two rows to compare
            rowA = rows[i].getElementsByTagName("TD")[col];
            rowB = rows[i + 1].getElementsByTagName("TD")[col];

            // Reverse sort (Descending)
            if(sortBoolean[col]){
                // Compare the rows
                if (rowA.innerHTML.toLowerCase() < rowB.innerHTML.toLowerCase())
                {
                    // Set rows to swap
                    restart = true;
                    break;
                }
            }
            // Forwards sort (Ascending)
            else if (!sortBoolean[col]){
                if (rowA.innerHTML.toLowerCase() > rowB.innerHTML.toLowerCase())
                {
                    restart = true;
                    break;
                }
            }
        }
        // Swap rows
        if (restart) {
            
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            unfinished = true;
        }
    }

    // Set other sorts to default orientation
    let tempBool = !sortBoolean[col];
    sortBoolean = new Array(4).fill(true);
    sortBoolean[1] = false;
    sortBoolean[col] = tempBool;

    // Add arrow to selected row header
    var rowX = rows[0].getElementsByTagName("TH")
    if(col == 1){
        // Set other row headers to default text
        rowX[2].innerHTML= "Price";
        rowX[3].innerHTML= "Rating";

        if(!sortBoolean[1])
            rowX[1].innerHTML= "Title ▲";
        else
            rowX[1].innerHTML= "Title ▼";
    }
    else if(col == 2){
        rowX[1].innerHTML= "Title";
        rowX[3].innerHTML= "Rating";

        if(sortBoolean[2])
            rowX[2].innerHTML= "Price ▲";
        else
            rowX[2].innerHTML= "Price ▼";
    }
    else if(col == 3){
        rowX[1].innerHTML= "Title";
        rowX[2].innerHTML= "Price";

        if(sortBoolean[3])
            rowX[3].innerHTML= "Rating ▲";
        else
            rowX[3].innerHTML= "Rating ▼";
    }
}

// Searching function
function searching() {
    // Declare variables
    var searchVal, table, tr, td, i;
    searchVal = document.getElementById("SearchBar").value;
    table = document.getElementById("GameTable");
    tr = table.getElementsByTagName("TR");

    // Loop through all table rows
    for (i = 1; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("TD")[1];
        if (td) {
            // If searchbar text is in game title display else hide
            if (td.innerHTML.toUpperCase().indexOf(searchVal.toUpperCase()) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }       
    }
}