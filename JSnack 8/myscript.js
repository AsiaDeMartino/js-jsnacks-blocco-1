//Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero.

let numero =  parseInt(prompt("Inserisci un numero di 4 cifre"));

while (isNaN(numero) || numero < 1000 || numero > 9999 ) {
    numero =  parseInt(prompt("Inserisci un numero di 4 cifre"));
}
console.log(typeof numero);

numero = String(numero);

console.log(typeof numero);

const numeri = numero.split('');

console.log(numeri);

let somma = 0;
for (let i = 0; i < numeri.length; i++) {
    somma += parseInt(numeri[i]);
}
 
console.log(somma);
alert(`la somma dei tuoi numeri è ${somma}`);