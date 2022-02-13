// L’utente inserisce due numeri in successione, con due prompt.

let numero1;
let numero2;

do {

    numero1 = parseInt(prompt ("Inserisci un numero"));
    console.log(numero1);

    numero2 = parseInt(prompt ("Inserisci un'altro numero"));
    console.log(numero2);

} while (isNaN(numero1) || isNaN(numero2));

//Il software stampa il maggiore.

if (numero1 > numero2) {
    alert(` ${numero1} è maggiore`);
} else if (numero2 > numero1) {
    alert(` ${numero2} è maggiore`);
} else {
    alert(` ${numero1} e ${numero2} sono uguali `);
}
