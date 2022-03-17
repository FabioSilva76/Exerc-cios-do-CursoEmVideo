function calc() {

    let n1 = Number(prompt('Primeiro Valor:'))
    let n2 = Number(prompt('Segundo valor: '))
    let op = Number(prompt(`Valores informados: ${n1} e ${n2}.\nO que vamos fazer? \n[1] Somar \n[2] Subtrair \n[3] Multiplicar \n[4] Dividir`))


    let saida = document.getElementById('saida')
    saida.innerHTML = `<h2>Calculando...</h2>`

    switch(op){ // A estrutora switch basicamente permite você testar valores dentro de uma váriavel ou expressão. Ela é compativel apenas com números inteiros e strings.
        case 1:
            saida.innerHTML += `<p>${n1} + ${n2} = <strong>${n1+n2}</strong></p>` 
            break
        case 2:
            saida.innerHTML += `<p>${n1} - ${n2} = <strong>${n1-n2}</strong></p>`
            break
        case 3:
            saida.innerHTML += `<p>${n1} x ${n2} = <strong>${n1*n2}</strong></p>`
            break
        case 4:
            saida.innerHTML += `<p>${n1} / ${n2} = <strong>${n1/n2.toLocaleString('pt-BR')}</strong></p>` // O método toLocaleString() é muito útil para mostrar números de forma mais compatível com o que usamos aqui no Brasil.
            break
        default: // se o usuario não digitar nenhum dos valores acima vai cai aqui
            saida.innerHTML += `<p>OPÇÃO INVÁLIDA! Você digitou ${n1} e ${n2}, mas não sei o que fazer com eles.</p>`
            break


    }
}