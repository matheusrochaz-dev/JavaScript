console.log('dd')
function verificar(){
    
    var agora = new Date
    var ano = agora.getFullYear()
    var nascimento = document.getElementById('nascimento')
    var texto = document.querySelector('#texto')
    var resultado = document.querySelector('#resultado')

    if(nascimento.value.length == 0 || nascimento.value > ano){
        window.alert("precisa digitar algo ou o ano correto")
    }
    else{
        var sex = document.getElementsByName('radsex')
        var idade = ano - Number(nascimento.value)
        var genero = ""
        var img = document.createElement('img')
        img.setAttribute('id', 'img')

        if(sex[0].checked){
            genero = "HOMEM"
            if(idade>=0 && idade<=10){
                img.setAttribute('src','idade_10.webp')
            }
            else if(idade>=11 && idade <=21){
                img.setAttribute('src','idade_218.webp')
            }
            else if(idade>=22 && idade <=40){
                img.setAttribute('src','idade_30.webp')
            }
            else{
                img.setAttribute('src','idade_60.webp')
            }
        }
        else{
            genero = "MULHER"
            if(idade>=0 && idade<=10){
                img.setAttribute('src','menina_10anos.jpg')
            }
            else if(idade>=11 && idade <=21){
                img.setAttribute('src','mulher_20.webp')
            }
            else if(idade>=22 && idade <=40){
                img.setAttribute('src','mulher_40.webp')
            }
            else{
                img.setAttribute('src','mulher_60.webp')
            }
        }

        resultado.style.textAlign = 'center'
        texto.innerHTML = `${genero} DE ${idade} ANOS`

        resultado.innerHTML = ""
        resultado.appendChild(texto)
        resultado.appendChild(img)    
    }
}