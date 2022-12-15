function carregar(){
    var msg = window.document.getElementById("msg");
    var imagem = window.document.getElementById("imagem");
    var greeter = window.document.getElementById("greet");
    var corpo = window.document.getElementsByTagName("body")[0];
    var data = new Date();var hora = data.getHours();
    var stop1;
    var stop2;

    msg.innerHTML = `Agora são ${hora} horas.`;
    if(hora >= 0 && hora < 12){
        imagem.src = "img/trd.jpg";
        greeter.innerHTML= "bom dia!";
        stop1 = "#6C68B4";
        stop2 = "#C2C5ED";
    }
    else if(hora >= 12 && hora < 18){
        imagem.src = "img/mnh.jpg";
        greeter.innerHTML= "boa tarde!";
        stop2 = "#7EB7D4";
        stop1 = "#205691";
    }
    else{
        imagem.src = "img/nit.jpg";
        greeter.innerHTML = "boa noite!";
        stop1 = "#146B88";
        stop2 = "#1E292D";
    }
    corpo.style = `background-image: linear-gradient(to bottom, ${stop1}, ${stop2});`;
}