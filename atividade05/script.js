let nu = document.querySelector('#numero')
let lis = document.querySelector('#lista')
let resultado = document.querySelector('#resultado')
let valor = []

function num(n){
    if(Number(n) >=1 && Number(n) <=100 ){
      return true
    }
    else{
      return false
    }
}

function list(n, l){
      if(l.indexOf(Number(n)) != -1){
        return true
      }
      else{
        return false
      }
}

function adicionar(){
      if(num(nu.value) && !list(nu.value, valor)){
        valor.push(Number(nu.value))
        let item = document.createElement('option')
        item.text = `o número ${nu.value} , foi adicionado`
        lis.appendChild(item)
        valor.sort()
        nu.value = ''
        nu.focus()
      }
      else{
        window.alert("algum dos valores são invalidos, reveja os dados inseridos")
      }
}

function verificar(){
  if(valor.length == 0)
    window.alert("precisa de valores adicioados")
  else{
    let tamanho = lis.length 
    let maior = Math.max(...valor)
    let menor = Math.min(...valor)
    let soma = Number('')
    for(let i = 0; i < valor.length;){
      soma += valor[i]
      i++
    }

    let media = (soma / tamanho).toFixed(2)
    
    resultado.innerHTML = ""
    resultado.innerHTML += `<p>o maior número foi: ${maior}</p>`
    resultado.innerHTML += `<p>o menor número foi: ${menor} </p>`
    resultado.innerHTML += `<p>o número de números adicionados foi: ${tamanho} </p>`
    resultado.innerHTML += `<p>A soma de todos os valores é: ${soma} </p>`
    resultado.innerHTML += `<p>A média dos números adicionados foi: ${media} </p>`
  }
}