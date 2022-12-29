let v1 = document.getElementById("v1");
let v2 = document.getElementById("v2");
let resp = document.getElementById("resp");
let pont = document.getElementById("pont"); 
let info = document.getElementById("info");
let ind = document.getElementById("ind");
let nivel = document.getElementById("nivel");
let index = 1;
let resultado = 0;
let score = 0;
let diff = 1;
let valePontos = 0;

let iniciar = function(){
    trocar();
}

let verificar = function(){

    resultado = v1.value * v2.value;
    index++;
    ind.innerText = index;

    if(resp.value == resultado){
       score += valePontos;
       diff += .1;
       pont.innerText = score;
       info.innerText = "Correto";	
    }
    else{ info.innerText = "Incorreto"; }

    resp.value = 0;
    trocar();
}

let trocar = function(){
    v1.value = Math.floor(Math.random() * (10 * Math.floor(diff)) + 2);
    v2.value = Math.floor(Math.random() * (10 * Math.floor(diff)) + 2); 
    setDiff();
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
    }
    else if(
               (
        (a == 2 || a == 10 || a == 11 || a == 20) ||
        (b == 2 || b == 10 || b == 11 || b == 20)
               ) &&
               (a < 50 && b < 50) ||
               (a < 10 && b < 10)
              ){

        stars = '**';	
        valePontos = 3;
    }
    else if((a  < 12 || b < 12) && (a < 51 && b < 51) || (a % 10 || b % 10)){
        stars = '***';
        valePontos = 5;
    }
    else if(a < 51 && b < 51){
        stars = '****';
        valePontos = 10;
    }
    else if(a < 100 || b < 100){
        stars = '*****';
        valePontos = 25;
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