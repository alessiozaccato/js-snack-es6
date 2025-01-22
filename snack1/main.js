/*Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.*/

// let's create the array of objects "biciDaCorsa"
const biciDaCorsa = [
    { nome: "Pinarello Dogma", peso: 7.2 },
    { nome: "Specialized Tarmac", peso: 7.5 },
    { nome: "Canyon Ultimate CF SLX", peso: 6.8 },
    { nome: "Trek Madone SLR", peso: 7.1 },
    { nome: "Scott Foil RC", peso: 7.3 }
];
const resultWeight = document.getElementById("result")

//initialize the variable that i need
let lighterBike = biciDaCorsa[0];

// let's start from 1 because i have already biciDaCorsa[0]
for (i = 1; i < biciDaCorsa.length; i++) {
    Element = biciDaCorsa[i];
    if (Element.peso < lighterBike.peso) {
        lighterBike = Element;
    }

}
console.log(lighterBike.nome, lighterBike.peso);//print on console
resultWeight.innerHTML = `il nome della bici è ${lighterBike.nome}il peso della bici minore è ${lighterBike.peso}`;//print on html document


