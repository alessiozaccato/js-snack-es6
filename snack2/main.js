/*Snack2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. */

// let's generate the array of objects
const squadreDiCalcio = [
    { nome: 'Juventus', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'Inter', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'Milan', puntiFatti: 0, falliSubiti: 0 },
    { nome: 'Napoli', puntiFatti: 0, falliSubiti: 0 }
]

// let's generate random numbers for the proprieties
for (let i = 0; i < squadreDiCalcio.length; i++) {
    let element = squadreDiCalcio[i];
    element.puntiFatti = Math.floor((Math.random() * 50) + 1);
    element.falliSubiti = Math.floor((Math.random() * 50) + 1);
}

// let's use the new for in and push datas on finalArray
let finalArray = [];
for (let key in squadreDiCalcio) {
    finalArray.push(squadreDiCalcio[key].nome, squadreDiCalcio[key].falliSubiti);
}
const resultArray = document.getElementById("result")


console.log(finalArray);//print on console
resultArray.innerHTML = `I nomi delle squadre e dei falli rispettivamente sono ${finalArray}`


