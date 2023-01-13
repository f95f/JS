
let r_total = document.getElementById("r_total");
let r_acertos = document.getElementById("r_acertos");
let r_erros = document.getElementById("r_erros");
let r_score = document.getElementById("r_score");
let r_diffMax = document.getElementById("r_diff");
let diffMax = sessionStorage.getItem("f_diffMax");
let dificuldade = ''; 

let setValores = function(){

    r_score.innerText = sessionStorage.getItem("f_score");
    r_acertos.innerText = sessionStorage.getItem("f_acertos");
    r_total.innerText = sessionStorage.getItem("f_total");
   
    for(let i in diffMax){
        if(diffMax[i] == 1){
            dificuldade += '*';
        }
    }
    r_diffMax.innerText = dificuldade;
}