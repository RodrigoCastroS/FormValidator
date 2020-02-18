
// Selecciono el id="search" del imput
const SEARCH = document.querySelector("#search");


// Cuando se suelte la primera tecla se ejecuta la funcion
SEARCH.onkeyup =  letterCount; 
// Cuando se hace click fuera del imput se ejecuta la funcion
SEARCH.onblur = cleanSearchMsg;

function letterCount(){
    // Si el length del imput menor que 3, se añade la clase "is-invalid"(clase de Bootstrap)
    if (SEARCH.value.length < 3 ) {
        SEARCH.classList.add("is-invalid");

    // Si no se cumple el anterior, se elimina la clase "is-invalid"    
    }else{
        SEARCH.classList.remove("is-invalid");
       
    }
}

function cleanSearchMsg(){

    SEARCH.classList.remove("is-invalid");

}


// LOG IN





// REGISTER FORM





