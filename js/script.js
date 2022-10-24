let title = document.getElementById("title");
title.addEventListener("click", function() { sort(0); })

let price = document.getElementById("price");
price.addEventListener("click", function() { sort(1); })

let rating = document.getElementById("rating");
rating.addEventListener("click", function() { sort(2); })

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