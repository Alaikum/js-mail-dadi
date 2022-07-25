// Generare un numero random da 1 a 6, sia per
//  il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa 
// il punteggio più alto.

console.log('Esercizio dei dadi');

const lancia = document.getElementById('lancia');
const risultato=document.getElementById('risultato');
const sfondo= document.getElementById('sfondo');


lancia.addEventListener('click', function () {
    // console.log('ciao')

    const giocatore = Math.floor(Math.random() * 6 + 1)
    const computer = Math.floor(Math.random() * 6 + 1)
    console.log(giocatore, computer)

    if (giocatore > computer) {
        console.log('hai vintoooo');
        risultato.innerHTML='Vittoriaaaaa!!!'
        sfondo.classList.remove('sconfitta', 'pareggio')
        sfondo.classList.add('vittoria')
    } else if (giocatore < computer) {
        console.log('hai perso');
        risultato.innerHTML='Sconfittaaaaa!!!'
        sfondo.classList.remove('vittoria', 'pareggio')
        sfondo.classList.add('sconfitta')
    }else{
        console.log ('avete pareggiato')
        risultato.innerHTML='Pareggioooooo!!!'
        sfondo.classList.remove('sconfitta', 'vittoria')
        sfondo.classList.add('pareggio')
    }


})