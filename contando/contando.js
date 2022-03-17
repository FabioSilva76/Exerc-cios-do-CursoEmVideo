function contar(){
    let saida = document.getElementById('saida')
    saida.innerHTML += `<h2>Contando de 1 a 10</h2>`

    let cont = 1

    while( cont <= 10){
        saida.innerHTML += `${cont} &#x1F449;`
        cont ++ // corresponde a cont = cont + 1 
    }
    saida.innerHTML += `&#x1F31`
}