function gerar(){
    let min = 1
    let max = 100
    let dif = max - min
    let aleatorio = Math.random() // essa funçao gera um valor aleatório entre 0 e 1
    let num = min + Math.trunc(dif * aleatorio)

    let res = document.querySelector('section#result')
    res.innerHTML = `<p>Acabei de pensar no número <mark>${num}</mark></p>`
}

function limpar() { // essa funcionalidade do outro botão, limpa tudo
    let res = document.querySelector('section#result')
    res.innerHTML = null // vai esvaziar a section toda
}