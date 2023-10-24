const cyberpunkS = document.getElementById("cp");
const risingS = document.getElementById("mgr");
const snakeS = document.getElementById("mg3");
const personaS = document.getElementById("p5r");


const nombre = document.getElementById("nombre");
const imagen = document.getElementById("imagen");

const cyberpunk = document.getElementById("1");
const rising = document.getElementById("2");
const snake = document.getElementById("3");
const persona = document.getElementById("4");

cyberpunk.addEventListener("click", function(){
    nombre.innerHTML = "I Really Want to Stay at Your House";
    imagen.setAttribute("src", "./img/IReallyWannaStayAtYourHouse.jpg");
    plays("cp");
});

rising.addEventListener("click", function(){
    nombre.innerHTML = "Rules of Nature";
    imagen.setAttribute("src", "./img/RulesOfNature.jpg");
    plays("mgr");
});

snake.addEventListener("click", function(){
    nombre.innerHTML = "Snake Eater";
    imagen.setAttribute("src", "./img/SnakeEater.jpg");
    plays("mg3");
});

persona.addEventListener("click", function(){
    nombre.innerHTML = "Beneath the Mask";
    imagen.setAttribute("src", "./img/BeneathTheMask.jpg");
    plays("p5r");
});

const bucle = document.getElementById("bucle");
const start = document.getElementById("play");
const aleatorio = document.getElementById("aleatorio");

let bucleBoolean = true;
let pausa = true;
let aleatorioBoolean = true;

bucle.addEventListener("click", function(){
    if(bucleBoolean == true){
        bucle.setAttribute("src", "./img/bucleVerde.png");
        bucleBoolean = false;
    }else if(bucleBoolean == false){
        bucle.setAttribute("src", "./img/bucle.png");
        bucleBoolean = true;
    }
});

start.addEventListener("click", plays);

aleatorio.addEventListener("click", function(){
    if(aleatorioBoolean == true){
        aleatorio.setAttribute("src", "./img/aleatorioVerde.png");
        aleatorioBoolean = false;
    }else if(aleatorioBoolean == false){
        aleatorio.setAttribute("src", "./img/aleatorio.png");
        aleatorioBoolean = true;
    }
});

function plays(id){
    if(pausa == false){
        start.setAttribute("src", "./img/pausa.png");
        pausa = true;
        if(!cyberpunkS.paused){
            cyberpunkS.pause();
        }
        if(!risingS.paused){
            risingS.pause();
        }
        if(!snakeS.paused){
            snakeS.pause();
        }
        if(!personaS.paused){
            personaS.pause();
        }
    }else if(pausa == true){
        start.setAttribute("src", "./img/play.png");
        pausa = false;
        switch(id){
            case "cp":
                cyberpunkS.play();
                break;
            case "mgr":
                risingS.play();
                break;
            case "mg3":
                snakeS.play();
                break;
            case "p5r":
                personaS.play();
                break;
        }
    }
}