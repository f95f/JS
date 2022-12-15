let greet = function(){
    window.document.getElementById("greeter").innerText = "Olah";
}
let calcular = function(){
    let num = document.getElementById("valor").value;
    let res = document.getElementById("res");
    let alerta = document.getElementById("alerta");
    let def = document.getElementById("def");

    if(num == ""){
        alerta.innerText = "Informe o valor!";
        res.innerText = "";
        let item = document.createElement("option");
        item.text = "Informe um valor acima...";
        res.appendChild(item);
    }
    else{
        res.innerText = "";
        alerta.innerText = "";
        for(let i = 0; i <= 10; i++){
            let item = document.createElement("option");
            item.text = `${num} x ${i} = ${num * i}`;
            res.appendChild(item);
        }
    }

}