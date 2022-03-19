function contar(){
let saida = document.getElementById('saida')

saida.innerHTML += `<h2>Mostrando números pares!`

let cont = 2
while(cont <= 10){

    saida.innerHTML += `<mark>${cont}</mark> &#x1F449`
    cont += 2 // corresponde a cont = cont + 2

    }
     saida.innerHTML += ` &#x1F3C1`

}