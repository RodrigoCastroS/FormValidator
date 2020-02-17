const SEARCH = document.querySelector("#search");

SEARCH.onkeyup = function(){

    if (SEARCH.length < 3) {
    
        console.log("You need to enter more than 3 letters");
        
    }else{

        console.log("no pasa nada");
        
    }


}

