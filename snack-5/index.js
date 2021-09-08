// Scrivi una funzione che accetti tre argomenti:
// un array e due numeri(“a” più piccolo di “b” e “b” grande al massimo
// quanto il numero di elementi dell’array).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione
// compresa tra “a” e “b”


const trimArray = (array, a, b) => {
    // if (a >= b) return [];
    if (b <= array.length) return array.slice((a - 1), b);
    return array.slice((a - 1));
}

const arrayOfNumbers = (length) => {
    const array = [];
    for (let i = 0; i < length; i++) {
        array.push(i);
    }
    console.log(array);
    return array;
}

const main = () => {
    // Genero Array
    const array = arrayOfNumbers(10);
    const b = Math.floor(Math.random() * array.length) + 1;
    const a = Math.floor(Math.random() * (b - 1) + 1);
    console.log("Slice from " + a + " to " + b);
    console.log(trimArray(array, a, b));
}

main();

