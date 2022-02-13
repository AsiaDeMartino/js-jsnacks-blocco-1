// Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while.
const numeri = [];

//FOR
// let somma = 0;
// for ( let i = 0; numeri.length < 5; i++ ) {
// let numero = parseFloat( prompt("inserisci un numero!") );
    
// if( isNaN(numero)) {
// alert("Devi inserire un numero!")

// }else{
//     numeri.push(numero);
//     somma += numero;

//     console.log(numero)
//     console.log(somma)
// }
// }

// alert(`la somma è ${somma}`);



//WHILE
while ( numeri.length !== 5 ) {
    const numero = parseFloat( prompt("inserisci un numero") );

    if( !isNaN(numero)){
         numeri.push(numero);
    }
} 

console.log(numeri); 

let i = 0;
let somma = 0
while(i !== 5){
somma += numeri[i]
i++
console.log(somma)
}

alert(`la somma è ${somma}`)


