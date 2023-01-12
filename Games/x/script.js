// getting relevant DOM elements 

let v1 = document.getElementById("txt_v1");
let v2 = document.getElementById("txt_v2");
let d_resp = document.getElementById("txt_resp");
let d_pontos = document.getElementById("score"); 
let d_index = document.getElementById("index");
let info = document.getElementById("footer");
let nivel = document.getElementById("dificuldade");
let d_liquid = document.getElementById("liquid");
let lifebar = document.getElementById("lifebar");
let d_pontosGanhos = document.getElementById("pontosGanhos");

let interval = null;

let vidas = 10;
let tempo = 60;
let liquid_size = 200;
let index = 1;
let diff = 1; //dificuldade
let diffMax = [0, 0, 0, 0, 0, 0];
let resultado = 0;
let score = 0, erros = 0;
let valePontos = 0; //multiplicador de pontos

let f_score, f_erros, f_index;// Placares finais
let f_diffMax;

let iniciar = function(){
    gerarConta();   
    montarVidas();
    reset_time_count();
}

let gerarConta = function(){
    v1.value = Math.floor(Math.random() * (10 * Math.floor(diff)) + 2);
    v2.value = Math.floor(Math.random() * (10 * Math.floor(diff)) + 2); 
    setDiff();
}

let reset_time_count = function(){

    liquid_size = 200;
    clearInterval(interval);
    interval = setInterval("temporizar()", tempo);

}

let temporizar = function(){

    liquid_size--;
    d_liquid.style.width = liquid_size + "px";
    
    if(liquid_size < 1){
        verificar();
    }   

}
let restore_liquid_size = function(){
    liquid_size = 200;
}

let verificar = function(){

    resultado = v1.value * v2.value;

    if(Number(d_resp.value) == resultado){
       score += valePontos;
        ganharPontos();

       diff += .1;
       tempo -= 1;
       index++;
       d_index.innerText = index;
       d_pontos.innerText = score;
       info.innerText = "Correto.";	
       info.setAttribute("class", "correto");
    }
    else{ 
        info.innerText = "Incorreto.";
        info.setAttribute("class", "errado");
        tempo += 3; 
        erros++;
        reduzVida();
    }
    
    d_resp.value = 0;

    //restore_liquid_size();
    reset_time_count();
    gerarConta();
    focar();
}

let focar = function(){
    d_resp.focus();
}

let ganharPontos = function(){
    d_pontosGanhos.style.transition = "all .1s";
    d_pontosGanhos.style.opacity = 1;
     d_pontosGanhos.innerText = "+" + valePontos;
    setTimeout("fadePontos()", 500);
    
}

let fadePontos = function(){
    d_pontosGanhos.style.transition = "all 2s";
    d_pontosGanhos.style.opacity = 0;
}

let montarVidas = function(){
    
    for(let i = 0; i < vidas; i++){

        let d_vida = document.createElement("div");
        d_vida.setAttribute("class", "vida");

        lifebar.appendChild(d_vida);
    }

}

let preencherVidas = function(){

    let vidasPreenchidas = document.getElementsByClassName("vida");
      vidasPreenchidas[vidas].setAttribute("class", "vidaVazio");

}

let reduzVida = function(){

    vidas--;
    preencherVidas();
    if(vidas == 0){endGame();}
} 

let endGame = function(){

    sessionStorage.setItem("f_erros", erros);
    sessionStorage.setItem("f_score", score);
    sessionStorage.setItem("f_index", index -1);
    sessionStorage.setItem("f_diffMax", diffMax);
    
    //go to results page
    time = 0;
    d_liquid.style.width = 0 + "px";
    v1.value = "-";
    v2.value = "-";
    window.location.replace('results.html');
}

let setDiff = function(){
   
    let a = v1.value;
    let b = v2.value;
    let stars = '!';
    valePontos = 100;

    if(((a == 2) || (a == 10) || (a == 20)) ||
       ((b == 2) || (b == 10) || (b == 20))){
       stars = '*';
       valePontos = 1;
       diffMax[0] = 1;
    }
    else if(
               (
        (a == 2 || a == 10 || a == 11 || a == 20) ||
        (b == 2 || b == 10 || b == 11 || b == 20)
               ) && (
               (a < 50 && b < 50) ||
               (a < 10 && b < 10) )
              ){

        stars = '**';	
        valePontos = 3;
        diffMax = [1, 1];
    }
    else if(((a < 12 || b < 12) || (a % 10 || b % 10)) && (a < 51 && b < 51)){
        stars = '***';
        valePontos = 5;
        diffMax = [1, 1, 1];
    }
    else if(a < 51 && b < 51){
        stars = '****';
        valePontos = 10;
        diffMax = [1, 1, 1, 1];
    }
    else if(a < 100 || b < 100){
        stars = '*****';
        valePontos = 25;
        diffMax = [1, 1, 1, 1, 1];
    }
    else{
        diffMax[5] = 1;
    }
    nivel.innerText = stars;
}
   /*
       Dificuldades:
                * -> v1 e v2 = 2, 10 ou 20	c = {2, 10, 20}
              ** -> v1 ou v2 = 2, 10 ou 20; e v1 e v2 < 51; ou v1 e v2 < 12 
            *** -> v1 ou v2 > 11; e v1 e v2 < 51
          **** -> v1 e v2 < 51
        ***** -> v1 e v2 > 51; ou v1 ou v2 > 100
                  ! -> v1 e v2 > 100
   
   */
