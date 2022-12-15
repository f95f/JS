function carregar(){
    window.document.getElementById("greet").innerHTML = "Olá!";
}
function contar(){
    var st = Number(window.document.getElementsByTagName("input")[0].value);
    var es = Number(window.document.getElementsByTagName("input")[1].value);
    var ps = Number(window.document.getElementsByTagName("input")[2].value);

    var gen = window.document.getElementById("h");
    gen.innerHTML = "";
    gen.innerHTML += "| início";

    if((es <= st) || (ps > es) || ( ps == 0)){
        gen.innerHTML = "Parâmetros Incorretos!";
        gen.style.color = "black";
    }
    else{

     for(let i = st; i <= es; i += ps){
          gen.innerHTML += " >> " + i;
          gen.style.color = "black";
     }
     gen.innerHTML += " >| fim ";
    }
}