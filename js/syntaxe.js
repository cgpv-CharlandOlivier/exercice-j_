// Syntaxe
// #1
let prenom;
prenom = "olivier";
console.log(prenom);
// #2
let ville = "Montréal";
console.log(ville);
ville = "Victoriaville";
console.log(ville);
// #3
let age = 18;
let nom = "Olivier";
let estConnecte = true;
console.table([age, nom, estConnecte]);
console.table({age:20, nom:"Marcus", estConnecte:false});
// #4
const PI = 3.1416;
let circonference = 2 * PI * 4;
console.log("La circonférence d'un cercle ayant un rayon de 4cm est : ", circonference);
// #5
let nomEleve = "Charland", prenomEleve = "Olivier", ageEleve = 18;
console.log("Je m'appelle " + prenomEleve + nomEleve + " et j'ai " + ageEleve + "ans");
console.log(`Je m'appelle ${prenomEleve} ${nomEleve} et j'ai ${ageEleve} ans`);