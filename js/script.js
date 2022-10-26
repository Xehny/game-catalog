var fileName = location.pathname.split("/").slice(-1)

if (fileName == "index.php" || fileName == "") {
    let title = document.getElementById("title");
    title.addEventListener("click", function() { sort(0); })

    let price = document.getElementById("price");
    price.addEventListener("click", function() { sort(1); })

    let rating = document.getElementById("rating");
    rating.addEventListener("click", function() { sort(2); })

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

    let gameTitles = [];

    for (let game of games) {
        game.addEventListener("click", buttonPressed);
        gameTitles.push(game.firstChild.innerHTML);
    }

    const searchInput = document.querySelector("[data-search]")

    searchInput.addEventListener("input", (e) => {
        const val = e.target.value
        gameTitles.forEach(title => {
            const isVisible = title.includes(val);
            getElementById(title).parentNode;
        });
        for(var y = 0; y < (gameTitles.length -1), y++;){

            //games[y].style.display = 'none';

            //games[y].firstChild.innerHTML
            if(gameTitles[y].includes(value)){
                games[y].style.display = 'block'
            }
            else{
                console
                games[y].style.display = 'hide'
            }
        }
        
    })
}

function sort(col) {
    if(col > 2){
        alert("wtf")
        return;
    }
    var table, i, rowA, rowB, unfinished;
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

            if(col == 2){
                if (rowA.innerHTML.toLowerCase() < rowB.innerHTML.toLowerCase())
                {
                    // If yes, mark Switch as needed and break loop
                    restart = true;
                    break;
                }
            }
            else{
                // Check if 2 rows need to be switched
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
    var rowX = rows[0].getElementsByTagName("TD")[col]
    if(col == 0){
        rowX.innerHTML= "▼ Title";
    }
    else if(col == 1){
        rowX.innerHTML= "▼ Price";
    }
    else if(col == 2){
        rowX.innerHTML= "▼ Rating";
    }
}