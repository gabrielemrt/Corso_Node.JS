// Partendo da un array di valori costruire una funzione che rimuova dall’array un eventuale parametro passato

function rimuoviElemento(arr, elemento) {
    return arr.filter(e => e !== elemento);
  }
  
var array = [1, 2, 3, 4, 5];
console.log(array);
array = rimuoviElemento(array, 3);
console.log(array);
  