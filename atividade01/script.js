var agora = new Date()

var hora = agora.getHours()
var minutos = agora.getMinutes().toString().padStart(2, "0")

var hora_inteira = `${hora}:${minutos}`
var img = document.querySelector("#tempo")

var texto = document.querySelector("#temp")

if(hora>+18){
    img.src = "imagem_noite.jpg"
    document.body.style.background = "darkblue"
    texto.innerHTML = `Agora são ${hora_inteira} horas da noite`
}
else if(hora>=12){
    img.src = "imagem_dia.jpg"
    document.body.style.background = "rgb(207,166,77)"
    texto.innerHTML = `Agora são ${hora_inteira} horas da tarde`
}
else if(hora<=5){
    img.src = "imagem_noite.jpg"
    document.body.style.background = "darkblue"
    texto.innerHTML = `Agora são ${hora_inteira} horas da madrugada`
}
else{
    img.src = "imagem_dia.jpg"
    document.body.style.background = "rgb(207,166,77)"
    texto.innerHTML = `Agora são ${hora_inteira} horas da manhã`
    
}

