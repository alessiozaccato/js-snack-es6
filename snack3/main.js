/*Snack 3 (Bonus)
Scrivere una funzione che accetti tre argomenti, un array ( esempio: ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'] )e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con li elementi estratti dall'array di partenza che hanno la posizione compresa tra i due numeri (a e b). */

const arrayNames = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];


function newArray(newArrayNames, min, max) {

    const resultArray = [];

    for (i = 0; i < newArrayNames.length; i++) {
        if (i >= min && i <= max) {
            resultArray.push(newArrayNames[i])
        }

    }
    return resultArray;
}

console.log(newArray(arrayNames, 2, 3));

