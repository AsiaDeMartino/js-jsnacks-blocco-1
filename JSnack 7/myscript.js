// Stampa le potenze di 2 fino a 1000.
const numeriQuadrato = [];

for ( i = 1; i <= 1000; i++ ) {
    let quadrato = Math.pow( i, 2);
    numeriQuadrato.push(quadrato);
    console.log(i);
}

console.log(numeriQuadrato);
alert(`il cubo dei tuoi numeri è ${numeriQuadrato}`);
