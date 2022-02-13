// Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente

let numeroNumeri = parseFloat(prompt("inserisci fino a che numero vuoi il cubo"));
while (isNaN(numeroNumeri)) {
    alert("Devi inserire un numero");
    numeroNumeri = parseFloat(prompt("inserisci fino a che numero vuoi il cubo"));
}

const numeriCubo = [];

for ( i = 0; i < numeroNumeri; i++ ) {
    let cubo = Math.pow( i+1, 3);
    numeriCubo.push(cubo);
}

console.log(numeriCubo);
alert(`il cubo dei tuoi numeri è ${numeriCubo}`);

