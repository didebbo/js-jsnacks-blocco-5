// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.

let pesoTotalePiccoleZucchine = 0;
let pesoTotaleGrandiZucchine = 0;

const zucchine = [];
const piccoleZucchine = [];
const grandiZucchine = [];

for (let i = 1; i <= 10; i++) {
    let zucchina = {
        varieta: "zucchina " + i,
        pesoGr: Math.floor(Math.random() * (100 - 10) + 10) + 1,
        lunghezzaCm: Math.floor(Math.random() * (20 - 10) + 10) + 1
    }
    zucchine.push(zucchina);
}

zucchine.forEach(zucchina => {
    if (zucchina["pesoGr"] < 15) piccoleZucchine.push(zucchina);
    else grandiZucchine.push(zucchina);
});

piccoleZucchine.forEach(zucchina => {
    pesoTotalePiccoleZucchine += zucchina["pesoGr"];
})

grandiZucchine.forEach(zucchina => {
    pesoTotaleGrandiZucchine += zucchina["pesoGr"];
})

console.log(zucchine);
console.log(piccoleZucchine);
console.log(grandiZucchine);
console.log(pesoTotalePiccoleZucchine);
console.log(pesoTotaleGrandiZucchine);