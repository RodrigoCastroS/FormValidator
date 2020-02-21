
// Selecciono el id="search" del imput
const SEARCH = document.querySelector("#search");
const EMAIL = document.querySelector("#emailLog");
const PASSWORD = document.querySelector("#pswLog");

const EMAILREG = document.querySelector("#emailReg");
const PSWREG1 = document.querySelector("#pswReg1");
const PSWREG2 = document.querySelector("#pswReg2");
const SELECT = document.querySelector("select");

let patt = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


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

function checkLog(){
   
    emailValidator();
    pswCount();
    
    function emailValidator(){   
        if (patt.test(EMAIL.value)) {
            EMAIL.classList.remove("is-invalid");
            
        }else{
            EMAIL.classList.add("is-invalid");
        }  
    }
    
    function pswCount(){   
        if (PASSWORD.value.length < 5 ) {
            PASSWORD.classList.add("is-invalid");
        }else{
            PASSWORD.classList.remove("is-invalid");   
        }
    }
}
    
    
    
// REGISTER FORM


function checkReg(){

    emailValidatorReg();
    pswCountReg();
    pswValidation();

    // EMAILREG.onkeyup = emailValidatorReg();
    // PSWREG1.onkeyup =  pswCountReg();
    // PSWREG2.onkeyup =  pswValidation();
}   

    // PASSWORD.onkeyup = pswCount;

    function emailValidatorReg(){
        
        if (patt.test(EMAILREG.value)) {
            EMAILREG.classList.remove("is-invalid");
        }else{
            EMAILREG.classList.add("is-invalid");
        }    
    }

    function pswCountReg(){
        let psw1 = PSWREG1.value.length;
        
        if(psw1 < 5 ){
            PSWREG1.classList.add("is-invalid");
        }else{
            PSWREG1.classList.remove("is-invalid");
        }
    }

    function pswValidation(){
        if(PSWREG1.value === PSWREG2.value){
            PSWREG2.classList.remove("is-invalid");
        }else{
            PSWREG2.classList.add("is-invalid");
        }
    }

    function provinceVal(){
        if (SELECT.value == "") {
            SELECT.classList.add("is-invalid");
        }else{
            SELECT.classList.remove("is-invalid");
        }
    }



