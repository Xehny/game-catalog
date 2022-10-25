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
        //form.setAttribute("target", "view");
        
        var hiddenField = document.createElement("input");
        hiddenField.setAttribute("type", "hidden");
        hiddenField.setAttribute("name", "game");
        hiddenField.setAttribute("value", e.target.id);
        form.appendChild(hiddenField);
        document.body.appendChild(form);
        
        //window.open("php/game.php", "view");
        
        form.submit();
        //window.location="../php/game.php"
    }

    for (let game of games) {
        game.addEventListener("click", buttonPressed);
    }

    function sort(col) {
        if (col == 0) {
            
        }
        else if (col == 1) {
            
        }
        else if (col == 2) {
            
        }
        else {
            alert("wtf");
        }
    }
}
else {

}
