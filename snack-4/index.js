// Scrivi una funzione che fonda due array(aventi lo stesso numero di
// elementi) prendendo alternativamente gli elementi da uno e dall’altro
// es. [a, b, c], [1, 2, 3] →[a, 1, b, 2, c, 3].

const arr1 = ["a", "b", "c"];
const arr2 = [1, 2, 3];
const arr3 = [];
let counter = 0;
let toggle = false;

while (counter < 3) {
    arr3.push(arr1[counter]);
    arr3.push(arr2[counter]);
    counter++;
}

console.log(arr3);