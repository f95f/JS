
let r_total = document.getElementById("r_total");
let r_acertos = document.getElementById("r_acertos");
let r_erros = document.getElementById("r_erros");
let r_score = document.getElementById("r_score");
let r_diffMax = document.getElementById("r_diff");
let diffMax = sessionStorage.getItem("f_diffMax");
let dificuldade = ''; 

let setValores = function(){

    r_score.innerText = sessionStorage.getItem("f_score");
    r_acertos.innerText = sessionStorage.getItem("f_index");
    r_erros.innerText = sessionStorage.getItem("f_erros");
    r_total.innerText = Number(sessionStorage.getItem("f_index"))
    +                   Number(sessionStorage.getItem("f_erros"))
    +                   " Questões!";
   
    for(let i in diffMax){
        if(diffMax[i] == 1){
            dificuldade += '*';
        }
    }
    if(diffMax[5] == 1){
        dificuldade = "!";
    }
    r_diffMax.innerText = dificuldade;
}