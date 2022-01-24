var x = document.getElementById('frase');
var botonEnc = document.getElementById('botonEnc');
var botonDes = document.getElementById('botonDes')
var botonDes = document.getElementById('botonDes');
var resultado = document.getElementById('resultado');
var copiar = document.getElementById('copiar')
var recargar = document.getElementById('recargar')

var nuevafrase = ""
var fraseEnc = ""
var nuevafraseSinA = ""
var nuevafraseSinE = ""
var nuevafraseSinI = ""
var nuevafraseSinO = ""
var nuevafraseSinU = ""

botonEnc.addEventListener("click", () => {
  encriptar(x.value)
  document.getElementById('frase').value = ''
  document.getElementById('fraseEnc').value = nuevafrase
  fraseEnc = nuevafrase
  nuevafrase = ""
})

function encriptar(x){
  for(let i=0;i<x.length;i++){
      if(x[i] === "a"){
          nuevafrase += "ai"
         //console.log(nuevafrase)
        }
      else if(x[i] === "e"){
          nuevafrase += "enter"
          //console.log(nuevafrase)
        }
      else if(x[i] === "i"){
          nuevafrase += "imes"
          //console.log(nuevafrase)
        }
      else if(x[i] === "o"){
          nuevafrase += "ober"
          //console.log(nuevafrase)
        }
      else if(x[i] === "u"){
          nuevafrase += "ufat"
          //console.log(nuevafrase)
      } else {
          nuevafrase += x[i]
          //console.log(nuevafrase)
        }
    }
    if(x === ""){
      alert('Ingrese una frase para encriptar')
    }
}

copiar.addEventListener('click', () => {
  copy()
  document.getElementById('fraseEnc').value = ''
})

function copy() {
  var copyText = document.querySelector("#fraseEnc");
  copyText.select();
  document.execCommand("copy");
}

botonDes.addEventListener('click', () => {
  desencriptar(x.value)
  document.getElementById('fraseEnc').value = nuevafraseSinU
  document.getElementById('frase').value = ''
})

function desencriptar(x) {
  nuevafraseSinA = x.replaceAll('ai','a')
  nuevafraseSinE = nuevafraseSinA.replaceAll('enter','e')
  nuevafraseSinI = nuevafraseSinE.replaceAll('imes','i')
  nuevafraseSinO = nuevafraseSinI.replaceAll('ober','o')
  nuevafraseSinU = nuevafraseSinO.replaceAll('ufat','u')
}

recargar.addEventListener('click', reload)

function reload(){
  document.getElementById('frase').value = ''
  document.getElementById('fraseEnc').value = ''
}