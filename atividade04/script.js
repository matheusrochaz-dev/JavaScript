function tabuada(){
  let numer = document.getElementById('numero')
  let tabuada = document.getElementById('seltab')
  if(numer.value.length == 0){
    window.alert("digite um número")
  }
  else{
    let n = Number(numer.value)
    let c = 1
    tabuada.innerHTML= ""
    for(i = c; i <=10; i++){
      var resultado = document.createElement('option')
      var multi = n * i
      resultado.text = `${n} x ${i} = ${multi} `
      tabuada.appendChild(resultado)
    }
  }
}