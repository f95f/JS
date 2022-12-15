let userLogin = document.getElementById("userLogin");
let userPass = document.getElementById("userPass");
let verButton = document.getElementById("verificar");
let alertText = document.getElementById("alerta");
const adminLog = "admin";
const adminPass = "1234";

let toogleText = function(what){
    switch(what){
        case "in, user":
            (userLogin.value == "Usuário")? userLogin.value = "" : "";
            break;
        case "in, pass":
            (userPass.value == "Senha")? (userPass.value = "", userPass.type = "password") : "";
            break;
        case "out, user":
            (userLogin.value == "")? userLogin.value = "Usuário" : "";
            break;
        case "out, pass":
            (userPass.value == "")? (userPass.type = "text", userPass.value = "Senha") : "";
            break;
        default:
    }
}
let verificar = function(){

        if((userLogin.value == adminLog) && (userPass.value == adminPass)){
            alert("Login confirmado!");
            alerta.innerText = "";
        }
        else{
           //alert("Usuário ou senha inválidos!");
           alerta.innerText = "Usuário ou senha inválidos!"
           //alert(`login: ${userLogin.value}, senha: ${userPass.value}`);
        }
}