// Condition
// #1
let age = 18;
if (!Number.isInteger(age) && !age > 0) { 
  console.log("Age invalide");
}
else if (age >= 18) {
    console.log("Tu es majeur.");
}
else {
    console.log("Tu es mineur.");
}
// #2
let nombre = 10;
let message = (nombre % 2 === 0) ? `Le nombre ${nombre} est pair.` : `Le nombre ${nombre} est impair.`;
console.log(message);
// #3
let note = 80;
if (note >= 90) {
    console.log("Excellent");
}
else if (note >= 75) {
    console.log("Très bien");
}
else if (note >= 60) {
    console.log("Bien");
}
else {
    console.log("Échec");
}
// #4
let temperature = 24;
if (temperature < 0) {
    console.log("Il gèle");
}
else if (0 <= temperature && temperature <= 15) {
    console.log("Il fait frais");
}
else if (16 <= temperature && temperature <= 25) {
    console.log("Température agréable");
}
else {
    console.log("Il fait chaud!");
}
// #5
let connecte = true;
let role = "user"
if (connecte === false) {
    console.log("Accès refusé");
}
else if (connecte === true && role === "admin") {
    console.log("Bienvenue administrateur");
}
else if (connecte === true && role === "user") {
    console.log("Bienvenue utilisateur");
}
else if (connecte === true && role !== "user" || role !== "admin") {
    console.log("Bienvenue rôle inconnu");
}
// #6
let choix = 3;
switch (choix) {
    case 1:
        console.log("Nouvelle partie");
        break
    case 2:
        console.log("Charger une partie");
        break
    case 3:
        console.log("Quitter");
        break
    default:
        console.log("Option invalide");
}
// #7
let moisPasSur = "Juin"
let mois = moisPasSur.toLowerCase();
switch (mois) {
    case "décembre":
    case "janvier":
    case "févrie":
        console.log("Hiver");
        break
    case "mars":
    case "avril":
    case "mai":
        console.log("Printemps");
        break
    case "juin":
    case "juillet":
    case "août":
        console.log("Été");
        break
    case "septembre":
    case "octobre":
    case "novembre":
        console.log("Automne");
        break
}
//debugger