// Calcola la somma e la media dei primi 10 numeri.
let somma = 0;
let media = 0;
const numeri = [];

for(let i = 1; i <= 10; i++){
    const numero = i;
    numeri.push(parseInt(numero));
}
console.log(numeri);

for (i = 0; i < numeri.length; i++){
    somma += numeri[i];
}
console.log(somma);

media = somma / numeri.length
console.log(media)

alert(`la somma dei primi 10 numeri è ${somma} e la media è ${media}`)
