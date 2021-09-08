// Crea un array di 10 oggetti che rappresentano una zucchina, indicando
// per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.

let pesoTotale = 0;

const zucchine = [];

for (let i = 1; i <= 10; i++) {
    let zucchina = {
        varieta: "zucchina " + i,
        pesoGr: Math.floor(Math.random() * (100 - 10) + 10) + 1,
        lunghezzaCm: Math.floor(Math.random() * (20 - 10) + 10) + 1
    }
    zucchine.push(zucchina);
}

zucchine.forEach(zucchina => {
    pesoTotale += parseInt(zucchina["pesoGr"]);
});

console.log(zucchine);
console.log("Totale peso zucchine: " + pesoTotale + " grammi");