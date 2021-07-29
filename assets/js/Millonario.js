// Quien quiere ser millonario
// Inicializar Variables
let btnStart = document.getElementById("btnStart");
let btnA = document.getElementById("btnA");
let btnB = document.getElementById("btnB");
let btnC = document.getElementById("btnC");
let btnD = document.getElementById("btnD");
let pregunta = document.getElementById("pregunta");
let habilitar = 0;
let habilitarBotones = 0;
let numeroActual = 0; 
let dinero = 0;
let dinerotemporal = 0;

let preguntas = [    
    "¿ Cuanto es 1+1 ? ",
    "¿ Cuanto es 2+2 ? ",
    "¿ Cuanto es 3+3 ? ",
    "¿ Cuanto es 4+4 ? ",
    "¿ Cuanto es 5+5 ? ",
    "¿ Cuanto es 6+6 ? ",
    "¿ Cuanto es 7+7 ? ",
    "¿ Cuanto es 8+8 ? ",
    "¿ Cuanto es 9+9 ? ",
    "¿ Cuanto es 10+10 ? ",
    "¿ Cuanto es 11+11 ? ",
    "¿ Cuanto es 12+12 ? ",
]

let respuestas = [
    ["respuesta 2", "respuesta 1", "respuesta 3", "respuesta 4" ],
    ["respuesta 3", "respuesta 4", "respuesta 5", "respuesta 7" ],
    ["respuesta 5", "respuesta 3", "respuesta 6", "respuesta 2" ],
    ["respuesta 3", "respuesta 8", "respuesta 9", "respuesta 12" ],
    ["respuesta 5", "respuesta 4", "respuesta 10", "respuesta 9" ],
    ["respuesta 6", "respuesta 6", "respuestac", "respuesta 12" ],
    ["respuesta 14", "respuesta 12", "respuesta c", "respuesta d" ],
    ["respuesta 12", "respuesta 16", "respuesta c", "respuesta d" ],
    ["respuesta 14", "respuesta 12", "respuesta c", "respuesta 18" ],
    ["respuesta 16", "respuesta 14", "respuesta 20", "respuesta d" ],
    ["respuesta 18", "respuesta 22", "respuesta c", "respuesta d" ],
    ["respuesta 24", "respuesta 18", "respuesta c", "respuesta d" ]
]


let Correctas = [
    1,
    2,
    3,
    2,
    3,
    4,
    1,
    2,
    4,
    3,
    2,
    1,
]


// Funciones

const nuevaPregunta = () => {
    let numero = generateRandom(0,11);
    habilitarBotones = 1;
    numeroActual = numero; 
    pregunta.innerHTML = preguntas[numero];
    btnA.innerHTML = respuestas[numero][0];
    btnB.innerHTML = respuestas[numero][1];
    btnC.innerHTML = respuestas[numero][2];
    btnD.innerHTML = respuestas[numero][3];
    }

const generateRandom = (min, max) => {
return Math.round(Math.random()*(1+max-min)+min)
}


const activar = (opcion) => {
    if (Correctas[numeroActual] == opcion+1) {
        dinero += 10000;
        alert("Correcto, dinero en bolsa : $" + dinero + " pesos ")
        nuevaPregunta();
    } else {
        alert(" Perdiste todo el dinero ")   
        pregunta.innerHTML = " ¿Quieres reintentar? ";
        btnA.innerHTML = "<= dale en el click";
        btnB.innerHTML = " talvez ";
        btnC.innerHTML = " no ";
        btnD.innerHTML = " si ";
        habilitarBotones = 0;
    }
}


// Eventos 

btnA.onclick = function (){
    if(habilitarBotones == 1 ){
        activar(0);
    }    
}
btnB.onclick = function (){
    if(habilitarBotones == 1 ){
        activar(1);
    }    
}
btnC.onclick = function (){
    if(habilitarBotones == 1 ){
        activar(2);
    }    
}
btnD.onclick = function (){
    if(habilitarBotones == 1 ){
        activar(3);
    }    
}
btnStart.onclick = function (){
    habilitar = 1;
    alert("La prueba comienza ahora!")
    nuevaPregunta();
}




