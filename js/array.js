// #1
let noms = ["Mathieu", "Frédérick" ,"François", "Simon", "Olivier"];
noms.push("Jacob");
noms.unshift("Thomas");
console.log(noms.length);
// a
for (let i = 0; i < noms.length; i++) {
    console.log(noms[i]);
    console.log("-------------");
}
// b
for (let nom of noms) {
    console.log(nom);
    console.log("-------------");
}
// c
noms.forEach((nom) => {
    console.log(nom);
    console.log("-------------");
})

// #2
let notes = [85, 42, 67, 90, 58, 73];
let notesReussies = notes.filter((notesReussie) => {
    return notesReussie >= 60;
})
console.log(notesReussies);
console.log(notesReussies[notesReussies.length - 1]);

// #3
let prix = [10, 25, 30, 5, 15];
let prixTaxes = prix.map((nombre) => {
    return nombre * 1.15;
})
console.log(prix);
console.log(prixTaxes);

// #4
let nombres = [2, 5, 8, 11, 14, 17];
let nombresFiltrer = nombres.filter((filtre) => {
    return filtre % 2 === 0
})
let nombreMulti = nombresFiltrer.map((multi) => {
    return multi * 3;
})
console.log(nombreMulti);

// #5
let produits = [
  { nom: "Chocolat", prix: 3 },
  { nom: "Chips", prix: 2 },
  { nom: "Café", prix: 8 },
  { nom: "Pain", prix: 4 }
];
produitsAbordables = produits.filter((pasChere) => {
    return pasChere.prix < 5;
})
nomProduit = produitsAbordables.map((mots) => {
    return mots.nom;
})
console.table(produitsAbordables);
console.log(nomProduit);