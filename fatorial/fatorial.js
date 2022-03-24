function fatorial(){
    let saida =  document.getElementById('saida')
    let n = Number(document.getElementById('fnum').value)

    saida.innerHTML += `<h2>Calculando ${n}!</h2>`
    let c = n
    let fat = 1
    while(c > 1){
        saida.innerHTML += `${c} x `
        fat *= c // corresponde ao calculo fat = fat * c
        c--
    }
    saida.innerHTML += `1 = <strong>${fat.toLocaleString('pt-br')}</strong>`
    // usei o toLocaleString() na linha acima apenas para aparecerem os separadores de milhar/milhões etc...

}