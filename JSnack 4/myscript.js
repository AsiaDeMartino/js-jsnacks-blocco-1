// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
//creo l'array con i nomi
const invitati = [
    "giovanni",
    "marco",
    "matteo",
    "francesca",
    "antonio",
    "alessandra",
    "mario",
    "chiara",
    "ludovico",
    "lorenzo"
];

const tuoNome = prompt("inserisci il tuo nome");
let tuoNome1 = tuoNome.toLowerCase();
console.log(tuoNome1);

let controllo = false;

for ( let i = 0; i < invitati.length; i++ ) {
    if (invitati[i] == tuoNome1) {
        controllo = true;
        break
    }
};

if (controllo == true) {
    alert("Sei tra gli invitati");
} else {
    alert("TU NON PUOI PASSARE!");
};
