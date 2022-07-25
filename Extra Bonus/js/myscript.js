console.log('Extra bonus')


// Extra Bonus
// Creiamo un array chiedendo all’utente quanti elementi
// dovrà contenere egenerando tanti numeri interi casuali
//  quanti sono   gli elementi da inserire.
// Attenzione #3: quali controlli dobbiamo fare sull’input
//  dell’utente?
// Super Extra Bonus: chiedere all’utente anche quanti
//  elementi vanno estratti dal fondo dell’array.

const grandezzaArray = parseInt(prompt('Quanti elementi deve avere il tuo Array?'));
// console.log(grandezzaArray)
const elementiEstratti = parseInt(prompt('Dimmi anche quanti elementi vuoi estrarre dalla fine del tuo Array'));
const numeri = [];
const square = document.getElementById('square')
square.innerHTML = '';

if (isNaN(grandezzaArray) || grandezzaArray <= 0) {
    alert('Inserisci un valore numerico maggiore di 0!!! Per la GRANDEZZA del tuo Array')
} else if (isNaN(elementiEstratti) || elementiEstratti <= 0) {
    alert('Inserisci un valore numerico maggiore di 0!!! Per i tuoi elementi ESTRATTI')
} else if (grandezzaArray < elementiEstratti) {
    alert('Non posso estrarre più elementi di quanti me ne fai creare nel tuo Array');
} else {
    for (let i = 0; i < grandezzaArray; i++) {
        numeri[i] = Math.floor(Math.random() * 100);


    }
    console.log(numeri)



    for (let i = numeri.length - 1; i > numeri.length - elementiEstratti - 1; i--) {
        const divElement = document.createElement('div');
        let number = numeri[i];
        divElement.classList.add('cell');
        console.log(numeri[i]);
        divElement.append(number);
        square.append(divElement);
    }

}

