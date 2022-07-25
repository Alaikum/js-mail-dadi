// Esercizio Bonus: la coda dell’array
// Creare un array con un numero a piacere di elementi.
// Stampare a schermo, con un ciclo, gli ultimi 5 elementi 
// dell’array.
// Attenzione #1: quanti elementi minimo dovrà contenere
//  l’array?
// Attenzione #2: il ciclo deve essere costruito per estrarre
//  gli ultimi
//  elementi da qualsiasi array, anche se non conosciamo 
//  a priori quanti elementi contiene.

console.log('Bonus');

const numeri = [5, 35, 44, 242, 44, 65, 83, 64, 33, 85, 69, 453, 785, 124, 98];
console.log(numeri);
const square = document.getElementById('square')
square.innerHTML = '';

for (let i = numeri.length - 1; i > numeri.length - 6; i--) {
    const divElement = document.createElement('div');
    let number = numeri[i];
    divElement.classList.add('cell');
    console.log(numeri[i]);
    divElement.append(number);
    square.append(divElement);
}