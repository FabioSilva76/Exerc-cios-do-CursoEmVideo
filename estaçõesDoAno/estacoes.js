function estação() { // sim é possível acentuação

 let mês = prompt('Digite o mês por extenso (Ex: Dezembro)')
 let saida = document.querySelector('section#saida')
 let estação

 switch (mês.toUpperCase()) { // Metodo UpperCase() Transformas todas as letras em maúsculas
     case 'DEZEMBRO': case 'JANEIRO': case 'FEVEREIRO': // Podemos testar multiplos casos em uma mesma linha dese jeito
        estação = 'Verão'        
         break;
    case 'MARÇO': case 'ABRIL': case 'MAIO':
        estação = 'Outono'
        break
    case 'JUNHO': case 'JULHO': case 'AGOSTO':
        estação = 'Inverno'
        break
    case 'SETEMBRO': case 'OUTUBRO': case 'NOVEMBRO':
        estação = 'Primavera'
        break 
     default:
         estação = 'Indefinida'
         break;
 }
 saida.innerHTML = `<p> No mês de <mark>${mês}</mark>, Estamos na estação <mark><strong>${estação}</strong></mark>.</p>`

}