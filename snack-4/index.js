// Scrivi una funzione che fonda due array(aventi lo stesso numero di
// elementi) prendendo alternativamente gli elementi da uno e dall’altro
// es. [a, b, c], [1, 2, 3] →[a, 1, b, 2, c, 3].

const arr1 = ["a", "b", "c"];
const arr2 = [1, 2, 3];
let counter1 = 0;
let counter2 = 0;
const arr3 = [];
let toggle = false;

while (counter1 < 3 || counter2 < 3) {
    if (toggle) {
        arr3.push(arr1[counter1]);
        counter1++;
        toggle = false;
    }
    else {
        arr3.push(arr2[counter2]);
        counter2++;
        toggle = true;
    }
}

console.log(arr3);