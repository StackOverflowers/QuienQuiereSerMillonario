// Quien quiere ser millonario
let lblA = document.getElementById("lblA");
let lblB= document.getElementById("lblB");
let lblC = document.getElementById("lblC");
let lblD = document.getElementById("lblD");

let lblPr = document.getElementById("lblPr");

let Money = document.getElementById("Money");
let lblCount = document.getElementById("lblCount");

let reload = document.getElementById("reload");
let help = document.getElementById("help");
let help2 = document.getElementById("help2");

let count = 1;
let ganancia= 0;
let preguntas = [
{
    pregunta : "¿Los neurólogos creen que la corteza prefrontal del cerebro se activa cuando haces qué?",
    opcionCorrecta : "Entiendes una broma",
    opcionFalsa1 : "Recuerdas un nombre",
    opcionFalsa2 : "Tienes un ataque de pánico",
    opcionFalsa3:  "Escuchas música"
},
{
    pregunta : "Si un día decidieras sembrar semillas de Quercus robur. ¿Qué crecería?",
    opcionCorrecta : "Árbol",
    opcionFalsa1 : "Flores",
    opcionFalsa2 : "Verduras",
    opcionFalsa3:  "Grano"
},
{
    pregunta : "¿Quién fue el primero en recibir un premio Nobel de Literatura?",
    opcionCorrecta : "Ensayista",
    opcionFalsa1 : "Dramaturgo",
    opcionFalsa2 : "Novelista",
    opcionFalsa3:  "Poeta"
},
{
    pregunta : "¿Qué elemento químico fue nombrado en honor a un malvado duende del subsuelo?",
    opcionCorrecta : "Cobalto",
    opcionFalsa1 : "Hafnio",
    opcionFalsa2 : "Berilio",
    opcionFalsa3:  "Telurio"
},
{
    pregunta : "¿Cuántos mares rodean la península de los Balcanes?",
    opcionCorrecta :"6",
    opcionFalsa1 : "3",
    opcionFalsa2 : "4",
    opcionFalsa3:  "5"
},
{
    pregunta : "Una persona famelica esta:",
    opcionCorrecta : "Hambrienta",
    opcionFalsa1 : "Irritable",
    opcionFalsa2 : "Furiosa",
    opcionFalsa3:  "Asustada"
},
{
    pregunta : "El albinismo se presenta por la carencia de:",
    opcionCorrecta : "Pigmentación",
    opcionFalsa1 : "Vitamina A",
    opcionFalsa2 : "Calcio",
    opcionFalsa3:  "Oxígeno"
},
{
    pregunta : "Tecnica que describe y representa detalladamente la superficie de un terreno",
    opcionCorrecta : "Topografía",
    opcionFalsa1 : "Serigrafía",
    opcionFalsa2 : "Epigrafía",
    opcionFalsa3:  "Holografía"
},
{
    pregunta : "Según la canción de los Hombres G, quien tiene un marcapasos?",
    opcionCorrecta : "Marta",
    opcionFalsa1 : "Laura",
    opcionFalsa2 : "Alba",
    opcionFalsa3:  "Carla"
},
{
    pregunta : "¿Con que material esculpió Miguel Angel 'La Piedad' ubicada en el Vaticano?",
    opcionCorrecta : "Marmol",
    opcionFalsa1 : "Madera",
    opcionFalsa2 : "Yeso",
    opcionFalsa3:  "Bronce"
},
]   




const play = () =>{

    if(count === 10){
        return "";
    }
    numQuestion = Math.floor((Math.random() * (preguntas.length-1 - 0 + 1)) + 0);;
    currentQuestion = preguntas[numQuestion];

    
    var lista = [currentQuestion.opcionCorrecta,currentQuestion.opcionFalsa1,currentQuestion.opcionFalsa2,currentQuestion.opcionFalsa3];
    lista = lista.sort(function() {return Math.random() - 0.5});
    
       
    lblPr.innerHTML =currentQuestion.pregunta;

    lblA.innerHTML = lista[0];
    lblB.innerHTML = lista[1];
    lblC.innerHTML = lista[2];
    lblD.innerHTML = lista[3];

}

const checkAnswer = (lbl) =>{
    if(lbl.innerHTML === currentQuestion.opcionCorrecta){
        return true;
    }else{
        return false;
    }

}

const reset = () =>{
    lblA.disabled=false;
    lblB.disabled=false;
    lblC.disabled=false;
    lblD.disabled=false;
}


const fifty = () =>{
    let countHelp = 0;

    if(lblA.innerHTML!==currentQuestion.opcionCorrecta){
        lblA.disabled=true;
        countHelp += 1;
    }

    if(lblB.innerHTML!==currentQuestion.opcionCorrecta){
        lblB.disabled=true;
        countHelp += 1;
        if (countHelp===2) {
            return "";
        }
    }

    if(lblC.innerHTML!==currentQuestion.opcionCorrecta){
        lblC.disabled=true;
        countHelp += 1;
        if (countHelp===2) {
            return "";
        }
    }

    if(lblD.innerHTML!==currentQuestion.opcionCorrecta){
        lblD.disabled=true;
        countHelp += 1;
        if (countHelp===2) {
            return "";
        }
    }
}

const public = () =>{
    alert("El público aconseja la opción " + currentQuestion.opcionCorrecta);
    help2.disabled=true;
}

play();



lblA.onclick = function(){
    if(checkAnswer(lblA)===true){
        preguntas.splice(numQuestion,1);    
        if(count!==10){
            count += 1;
            ganancia += 100;
        }
        Money.innerHTML = "$"+ganancia;
        lblCount.innerHTML= count+"/10";
        play();
    }else{
        preguntas.splice(numQuestion,1);       
        if(count!==10){
            count += 1;
            ganancia -= 100;
        }
        Money.innerHTML = "$"+ganancia;
        lblCount.innerHTML= count+"/10";
        play();
    }
        reset();
}

lblB.onclick = function(){
    if(checkAnswer(lblB)===true){
        preguntas.splice(numQuestion,1);  
        if(count!==10){
            count += 1;
            ganancia += 100;
        }
        Money.innerHTML = "$"+ganancia;
        lblCount.innerHTML= count+"/10";
        play();
    }else{
        preguntas.splice(numQuestion,1);
        if(count!==10){
            count += 1;
            ganancia -= 100;
        }
        Money.innerHTML = "$"+ganancia;
        lblCount.innerHTML= count+"/10";
        play();
    }
    reset();
}

lblC.onclick = function(){
    if(checkAnswer(lblC)===true){
        preguntas.splice(numQuestion,1);
        if(count!==10){
            count += 1;
            ganancia += 100;
        }
        Money.innerHTML = "$"+ganancia;
        lblCount.innerHTML= count+"/10";
        play();
    }else{
        preguntas.splice(numQuestion,1);

        if(count!==10){
            ganancia -= 100;
            ganancia += 100;
        }
        Money.innerHTML = "$"+ganancia;
        lblCount.innerHTML= count+"/10";
        play();
    }
    reset();
}

lblD.onclick = function(){
    if(checkAnswer(lblD)===true){
        preguntas.splice(numQuestion,1);
        
        if(count!==10){
            count += 1;
            ganancia += 100;
        }
        Money.innerHTML = "$"+ganancia;
        lblCount.innerHTML= count+"/10";
        play();
    }else{
        preguntas.splice(numQuestion,1);
        
        if(count!==10){
            ganancia -= 100;
            count += 1;
        }
        Money.innerHTML = "$"+ganancia;
        lblCount.innerHTML= count+"/10";
        play();
    }
    reset();
}


reload.onclick = function(){
    location.reload();
}

help.onclick=function(){
    fifty();
    help.disabled=true;
}

help2.onclick = function () {
    public();
}