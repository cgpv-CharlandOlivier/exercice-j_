// #1
/**
 * Déclaration de fonction avec texte
 * 
 * @param {texte} texte Le texte
 */
function log(texte) {
    console.log(texte);
}

log("C'est le texte");
// #2
/**
 * Afficher les saisons
 * 
 * @param {texte} leMois Pour trouver la bonne saison
 * @returns texte La bonne saison
 */
function saison(leMois) {

let moisPasSur = leMois;
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
}
saison("octobre");
// #3
/**
 * Savoir si il est majeur
 * @param {number} age 
 * @returns bool vrai ou faux
 */
let estMajeur = (age) => {
    if (age >= 18) {
        return true;
    }
    return false;
}

if (estMajeur(17)) {
    console.log("Vous pouvez entrer");
}
// #4
function nom() {
    let prenom = prompt("Quelle est votre prenom?")
    let nom = prompt("Quelle est votre nom?")
    alert("Bonjour " + prenom + " " + nom);
}