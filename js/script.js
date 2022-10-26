var fileName = location.pathname.split("/").slice(-1)

if (fileName == "index.php" || fileName == "") {
    let title = document.getElementById("title");
    title.addEventListener("click", function() { sort(0); })

    let price = document.getElementById("price");
    price.addEventListener("click", function() { sort(1); })

    let rating = document.getElementById("rating");
    rating.addEventListener("click", function() { sort(2); })

    const search = document.getElementById("SearchBar");
    search.addEventListener("keyup", function() { searching(); })

    const games = document.getElementsByClassName("game");

    const buttonPressed = e => {
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

    for (let game of games) {
        game.addEventListener("click", buttonPressed);
    }
}

let sortBoolean = new Array(4).fill(false);
sortBoolean[3] = true;
sortBoolean[2] = true;

function sort(col) {
    if(col > 2){
        alert("wtf")
        return;
    }
    col = col + 1;
    var table, i, rowA, rowB, rowX, unfinished;
    table = document.getElementById("GameTable");
    unfinished = true;

    // Run loop until no switching is needed
    while (unfinished) {
        unfinished = false;
        var rows = table.rows;

        // Loop to go through all rows
        for (i = 1; i < (rows.length - 1); i++) {
            var restart = false;

            // Fetch 2 elements that need to be compared
            rowA = rows[i].getElementsByTagName("TD")[col];
            rowB = rows[i + 1].getElementsByTagName("TD")[col];

            //Reverse sort
            if(sortBoolean[col]){
                // Check if rows need to be swapped
                if (rowA.innerHTML.toLowerCase() < rowB.innerHTML.toLowerCase())
                {
                    // If yes, mark Switch as needed and break loop
                    restart = true;
                    break;
                }
            }
            //Forwards sort
            else if (!sortBoolean[col]){
                // Check if rows need to be swapped
                if (rowA.innerHTML.toLowerCase() > rowB.innerHTML.toLowerCase())
                {
                    // If yes, mark Switch as needed and break loop
                    restart = true;
                    break;
                }
            }
        }
        if (restart) {
            // Function to switch rows and mark switch as completed
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            unfinished = true;
        }
    }
    let tempBool = !sortBoolean[col];
    sortBoolean = new Array(4).fill(false);
    sortBoolean[3] = true;
    sortBoolean[2] = true;
    sortBoolean[col] = tempBool;

    var rowX = rows[0].getElementsByTagName("TH")
    if(col == 1){
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

function searching() {
    var searchVal, table, tr, td, i, txtValue;
    searchVal = document.getElementById("SearchBar").value;
    table = document.getElementById("GameTable");
    tr = table.getElementsByTagName("TR");

    for (i = 1; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("TD")[1];
        if (td) {
            txtValue = td.innerHTML;
            if (txtValue.toUpperCase().indexOf(searchVal.toUpperCase()) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }       
    }
}