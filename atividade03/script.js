function contar(){
    let inicio = document.getElementById('txinicio')
    let passo = document.getElementById('txpasso')
    let fim = document.getElementById('txfim')
    var resultado = document.getElementById('resultado')
    var texto = document.getElementById('texto')
    texto.innerHTML = ""
    if(inicio.value.length == 0 || fim.value.length == 0){
        texto.innerHTML = "precisa-se de um inicio e/ou fim"
        return
    } 
    else{
        let i = Number(inicio.value)
        let p = Number(passo.value)
        let f = Number(fim.value)

        if(p <= 0){
            window.alert('Precisa-se de um número de passo, passo definido para: 1')
            p = 1
            
        }
        if(i < f){
          for(c = i; c <= f; c += p){
            texto.innerHTML += ` ${c} \u{1F449}`
          } 
        }   
        else{
            for(c = i; c >= f; c -= p){
            texto.innerHTML += ` ${c} \u{1F449}`
          } 
            
        }
        texto.innerHTML += ` \u{1F3C1}`
    }
}