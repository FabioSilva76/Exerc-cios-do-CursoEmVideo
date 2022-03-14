//todas as váriaveis declaradas aqui em cima, fora das funções, são consideradas globais e funcionam detro de qualquer outra função!
let res = document.querySelector('section#result')
let computador = 0
let jogador = 0

function sortear(){
    let min = 1 // As variáveis declaradas aqui dentro são locais, e só funcionan  dentro da função onde foram declaradas
    let max = 100
    let dif = max - min
    let aleatorio = Math.random()
    computador = min + Math.trunc(dif * aleatorio)
}

function jogar(){

    jogador = Number(window.prompt('Qual é o seu palpite'))
    if (jogador < computador){
        res.innerHTML += `<p>Você falou ${jogador}. Meu número é <strong>MAIOR</strong></p>`
    }
    else if (jogador > computador){
        res.innerHTML += `<p>Você falou ${jogador}. Meu número é <strong>MENOR</strong></p>`
    }
    else if (jogador == computador){
        res.innerHTML += `<p><strong>PARABÉNS</strong> Você acertou! Eu tinha sorteado o valor ${computador}!</p>`
        documento.getElementById('botao').style.visibility = 'hidden'

    }

}