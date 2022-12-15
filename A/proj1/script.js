var N1, N2;
var respAlerter = window.document.getElementById("chk");
var seeder = 1;
function r(fac){
    return Math.round(Math.random() * 10 * fac);
}
function drawNumbers(){
    N1 = r(seeder);
    N2 = r(seeder);
    window.document.getElementById("term1").innerText = N1;
    window.document.getElementById("term2").innerText = N2;
    
}
function calcular(){
    var userResp = Number(window.document.getElementById("resp").value);
    var mainBorder = window.document.getElementsByTagName("main")[0];
    var sysResp = N1 * N2;
    respAlerter.innerText = userResp;
    if(userResp == sysResp){           
        respAlerter.innerText = "correto!";    
        respAlerter.style = "display: inline; color: green;";  
        mainBorder.style = "border-color: green";
    }
    else{      
        respAlerter.innerText = "incorreto! Resposta: " + sysResp;  
        respAlerter.style = "display: inline; color: red;";    
        mainBorder.style = "border-color: red";
    }
    drawNumbers(Math.random());
    
}