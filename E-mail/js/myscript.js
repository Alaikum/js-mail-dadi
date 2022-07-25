// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
// (non usare includes())


console.log('Esercizio Email');


// Chiedi all’utente la sua email,

const email = prompt("Inserisci la tua mail @boolean.com, ricorda la lettera del tuo nome deve essere in maiuscolo");

console.log(email);

const listaEmail = ['Luca@boolean.com', 'Carlo@boolean.com', 'Marco@boolean.com', 'Amilcare@boolean.com', 'Mauro@boolean.com', 'Tiziano@boolean.com', 'Gianluca@boolean.com'];

console.log(listaEmail);

let presenzaMail;

// controlla che sia nella lista di chi può accedere
for (let i = 0; i < listaEmail.length ; i++) {
    if (email === listaEmail[i]) {
        presenzaMail = true;
    }
}

// stampa un messaggio appropriato sull’esito del controllo.
if(presenzaMail){
    console.log('La tua mail è già stata inserita');
} else{
    console.log('Hai inserito la tua mail per la prima volta.')
}



