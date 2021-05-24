let listePanier = [
    {
        "panier" : 2,
        "id" : 0,
        "nom" : "Prodits1",
        "prix" : 7,
        "img" : "Images\epicerie\amande_hachée.png",
    },
    {
        "panier" : 2,
        "id" : 0,
        "nom" : "Prodits1",
        "prix" : 7,
        "img" : "Images\epicerie\amande_hachée.png",
    },
    {
        "panier" : 2,
        "id" : 0,
        "nom" : "Prodits1",
        "prix" : 7,
        "img" : "Images\epicerie\amande_hachée.png",
    },
    {
        "panier" : 2,
        "id" : 0,
        "nom" : "Prodits1",
        "prix" : 7,
        "img" : "Images\epicerie\amande_hachée.png",
    },
    {
        "panier" : 2,
        "id" : 0,
        "nom" : "Prodits1",
        "prix" : 7,
        "img" : "Images\epicerie\amande_hachée.png",
    },
]

let listePanierligne = JSON.stringify(listePanier)
localStorage.setItem('listePanier', listePanierligne  );
let nmbrPanier = document.getElementById("Panier");
let nmbrPanierValue =parseInt(nmbrPanier.innerText);
console.log(nmbrPanierValue);



console.log(listePanier.length);

let listePanierligne1 = localStorage.getItem("listePanier");
let listePanier1 = JSON.parse(listePanierligne1);
console.log(listePanier1[0].panier);

console.log(nmbrPanierValue);

let ajour = nmbrPanier.innerHTML = nmbrPanierValue + listePanier.length;

console.log(ajour);






