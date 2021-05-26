let listePanier = [
    {
        "panier" : 2,
        "id" : 0,
        "nom" : "Prodits1",
        "prix" : 7,
        "img" : "Images\epicerie\amande_hachée.png",
    },
]
let checkPanierligne = localStorage.getItem("listePanier");
if(checkPanierligne == undefined){
    let listePanierligne = JSON.stringify(listePanier);
    let ajout = localStorage.setItem('listePanier', listePanierligne );

}else{
    console.log("Tout est fonctionelle");
}
//on rècupere la valeur dans l'html
let nmbrPanier = document.getElementById("Panier");
let nmbrPanierValue = parseInt(nmbrPanier.innerText);
console.log(nmbrPanierValue);

//on rècupere le nombre length dans la liste objt du local storage
let listePanierligne1 = localStorage.getItem("listePanier");
let listePanier1 = JSON.parse(listePanierligne1);
let ajour = nmbrPanier.innerHTML = nmbrPanierValue + listePanier1.length;
console.log(listePanier1.length);

console.log(nmbrPanierValue);


console.log(ajour);


let gen = document.getElementById("a18");
console.log(gen);


let ajourPanier = localStorage.getItem('listePanier');
console.log(ajourPanier.length);




















