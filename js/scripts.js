// plik scripts.js 

var text = "Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.";

var animal = "zielone słonie";

var animal = animal.toUpperCase();

var text = text.replace("Papugi", animal);

console.log(animal);

console.log(text.length);
console.log(text.slice(0,45));

/* lub

console.log(text.substr(0,45));

*/