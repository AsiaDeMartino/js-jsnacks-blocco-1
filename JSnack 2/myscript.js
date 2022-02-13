//L’utente inserisce due parole in successione, con due prompt.

let parola1;
let parola2;

do {

    parola1 = prompt ("Inserisci una parola");
    console.log(parola1);

    parola2 = prompt ("Inserisci un'altra parola");
    console.log(parola2);

} while ((parola1.length == 0) || (parola2.length == 0));


//Il software stampa prima la parola più corta, poi la parola più lunga.

if (parola1.length > parola2.length) {
    alert(` ${parola2} è più corta di ${parola1} `);
} else if (parola2.length > parola1.length) {
    alert(` ${parola1} è più corta di ${parola2}`);
} else {
    alert(`${parola1} e ${parola2} hanno la stessa lunghezza `);
}