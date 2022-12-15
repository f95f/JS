let valor;
let valorForm;
let alerta;
let item;
let caixa;
let cont = 0;
let addd = [];
// function maior(vetor);
// function menor(vetor);
// function soma(vetor);
// function media(vetor);
let add = function(){
    alerta = window.document.getElementById("alerta");
    //valor = window.document.getElementById("valor").value;
    valorForm = document.getElementById("valor");
    caixa = window.document.getElementById("added");
    valor = valorForm.value;

    if((valor <= 100) && (valor >= 0) && (valor != "")){
        (valor + valor == 0)? valor = 0 : valor = Number(valorForm.value);

        let ver = 0, i = 0;
        while((i <= addd.length) && (ver == 0)){
            if((valor == addd[i])){
                ver = 1;
            }
            i++;
        }
        if(ver == 0){
            item = document.createElement("option");
            caixa.appendChild(item);
            item.innerText = valor;
            alerta.innerText = "";
            addd[i] = valor;
            valorForm.value = "";
        }
        else{
            alerta.innerText = "Valor já inserido!";
        }
    }
    else if(valor == ""){
        alerta.innerText = "Insira o valor!";
    }
    else{
        alerta.innerText = "Valor inválido!";
    }
}
let res;
let resCont;
let fButton;

let maior = function(addd){
    let n = addd[0];
    for(let h in addd){if(addd[h] > n){n = addd[h];}}
    return n;
}
let menor = function(vetor){
    let n; 
    for(let h in addd){if((vetor[h] < n) && (vetor[h] != undefined)){n = vetor[h];}}
    alert(n);
    return n;
}
let soma = function(vetor){
    let n = vetor[0];   
    for(let h in addd){n += vetor[h];}
    return n;
}
let media = function(vetor){
    let n;
    
    for(let h in addd){
        n += addd[h];
    }
    return n/addd.length;
}
let end = function(){
    res = window.document.getElementById("resultado");
    resCont = window.document.getElementsByClassName("resCont")[0]
    infoCont = window.document.getElementById("info");
    fButton = window.document.getElementById("finalizar");
    caixa = window.document.getElementById("added");
    caixa.style.display = "none";
    fButton.style.display = "none";
    res.style.display = "block";
    resCont.style.display = "inline-block";
    info.style.display = "block";
    let lista = document.createElement("ul");
    for(let i in addd){
        item = document.createElement("li");
        item.innerText = addd[i];
        lista.appendChild(item);
    }
    res.appendChild(lista);
    let i = 0;
    while(i < 5){
        let k = document.createElement("p")
        switch(i){
            case 0:
                k.innerText = `Maior: ${maior(addd)}.`;     
                break;
            case 1:
                k.innerText = `Menor: ${menor(addd)}.`;     
                break;
            case 2:
                k.innerText = `Soma: ${soma(addd)}.`;     
                break;
            case 3:
                k.innerText = `Média: ${media(addd)}.`;     
                break;
            case 4:
                k.innerText = `Total: ${addd.length/2} números.`;     
                break;
        }
        infoCont.appendChild(k);
        i++;
    }
}