let burger = document.getElementById('burger').addEventListener("click", () =>{

    let nav  = document.querySelector("ul");
    nav.classList.toggle("animation1");

});
//button formulaire
let finalisation_commande = document.getElementById('finaliser').addEventListener("click", (index) =>{

    let formulaire1  = document.getElementById("formulaire_commande");
    formulaire1.classList.add("animation2");
    let printSommetot  = document.getElementById("somme_tot");
    printSommetot.innerHTML = "Cout Totale";
    let pr3 = JSON.parse(localStorage.getItem('listePanier'));
    console.log(pr3);
    let listelong = pr3.length;
    console.log(listelong);
    i =0;
    while(listelong > i){
        let tot = pr3[i].prix;
        console.log(tot);
        let tot1 = pr3[i].max_articles;
        console.log(tot1);
        letar = pr3[i].prix * pr3[i].max_articles  ;
        console.log(letar);
        /*console.log(letar + ":" + i);
        printSommetot.innerHTML = letar;*/
        let somma =0;
        printSommetot.innerHTML +=letar +" +" + " + "+ "produits :" + i + ", ";
        console.log(somma);
        i++;

    }

    



});

function sauvegarde_local(){
    let input1 = document.getElementById("locals1");
    let input2 = document.getElementById("locals2").value;
    let input3 = document.getElementById("locals3").value;
    let input4 = document.getElementById("locals4").value;
    let input5 = document.getElementById("locals5").value;
    let info = input.value;
    localStorage.setItem("infoCommande",info);
    

}
// supprimer les articles
let supprimer_les_articles = document.getElementById('deleteAll').addEventListener("click", () =>{
    console.log("sdfghjklò");
    localStorage.clear();
    location.reload();

    /*for(i = 0; longeur; i++){
        console.log("sdsdf");
    }*/

});


let listeP = localStorage.getItem("listePanier");
let liste = JSON.parse(listeP);

console.log(liste);
let longeur = liste.length;
console.log(longeur);

console.log(liste[1].nom);
let max = 9;
let min = 0;

//plusButton
function plusButton(index){
    
    let nombre = document.getElementById('ab'+(index));
    let nombre1 = document.getElementById('nmbrarticle'+(index));
    let coutTot = document.getElementById('cTot'+(index));
    let produitPrix = document.getElementById('produitPrix'+(index));
    console.log(nombre);
    let maxArticles = parseInt(liste[index].max_articles);
    let nombreValue = parseInt(nombre.innerText);
    let nombreValue1 = parseInt(nombre1.innerText);
    let produitValue = parseInt(produitPrix.innerText);
    console.log(nombreValue);
    if(nombreValue < 9){
        let ajour1 = nombre.innerHTML = nombreValue + 1;
        let ajour3 = nombre1.innerHTML = "nombres d'articles :"+ (nombreValue +1);
        coutTot.innerHTML = "Cout totale du produit : " +  (nombreValue + 1 ) * produitValue + "$" ; 
        
        let pr = JSON.parse(localStorage.getItem('listePanier'));
        let v1 = pr[index].max_articles.value;
        console.log(v1);
        let v2 = pr[index].max_articles = nombreValue;
        console.log(v2);
        console.log(pr);
        //localStorage.setItem('listePanier', JSON.stringify(aj1));
        //localStorage.JSON.stringify(v2))
        localStorage.setItem('listePanier', JSON.stringify(pr));
    }
    //if(liste[i].id > 9){
        //console.log(liste[i].id);
   // }
}
//moinButton
function moinButton(index){
    let nombre = document.getElementById('ab'+(index));
    let nombre1 = document.getElementById('nmbrarticle'+(index));
    let coutTot = document.getElementById('cTot'+(index));
    let produitPrix = document.getElementById('produitPrix'+(index));
    console.log(nombre);
    console.log(produitPrix);
    let maxArticles = parseInt(liste[index].max_articles);
    let nombreValue = parseInt(nombre.innerText);
    let produitValue = parseInt(produitPrix.innerText);
    console.log(produitValue);
    console.log(nombreValue);
    
    if(nombreValue > 0){

        let ajour1 = nombre.innerHTML = nombreValue - 1;
        let ajour3 = nombre1.innerHTML = "nombres d'articles :"+ (nombreValue -1);
        coutTot.innerHTML = "Cout totale du produit : " +  (nombreValue - 1 ) * produitValue + "$"; 
        let pr = JSON.parse(localStorage.getItem('listePanier'));
        
        let v1 = pr[index].max_articles.value;
        console.log(v1);
        let v2 = pr[index].max_articles = nombreValue;
        console.log(v2);
        console.log(pr);
        localStorage.setItem('listePanier', JSON.stringify(pr));

    }
    else{
        let ajour2 = nombre.innerHTML = 0;
    }
    console.log(ajour1);
    
}
//supprimer
function supprimer(index){
    let pr = JSON.parse(localStorage.getItem('listePanier'));
    console.log(pr[index]);
    pr.splice(pr[i],1);
    console.log(pr);
    localStorage.setItem('listePanier', JSON.stringify(pr));
    location.reload();
}

//printPanier
let printPanier = ()=> {

    for(i = 0 ; liste.length; i++){
        console.log(i);
        let html = 
        `
            <div class = "flex-item" id ="prod` +[i]+ `">
                <h1 class = "product">${' Produit n° '+ [i] +' , ' +liste[i].nom } <h1>
                <img class = "imge"id ="imge"src="${liste[i].image} " alt="">
                <h2 class = " prix" id ="produitPrix` +i+ `">${liste[i].prix} $</h2>
                <button class = "plus"id = "ajouter` +i+ `" onclick =" plusButton(` +i+ `)">+</button>
                <p class="quantity" id = "ab` +i+ `">0</p>
                <button class= "moin" id = "diminuer` +i+ `" onclick ="moinButton(` +i+ `)" >-</button>
                <button class = "delete" id = "supprimer` +i+ `" onclick ="supprimer(` +i+ `)" >supprimer</button>
            </div>
        `   ;
        let div =
        `<div class = "flex-produits" id ="prodannonce` +i+ `"  >
        <h1>${liste[i].nom +' produits n° '+[i]} </h1>
        <p id = "nmbrarticle` +i+ `">nombres d'articles : 0</p>
        <p id ="cTot` +i+ `">Cout totale du produit : 0 $ </p>
        </div>`;

        console.log(i);
        let Sommeprix = 0;
        Sommeprix += liste[i].prix ;
        console.log(Sommeprix);

        liste[i].prix = liste[i].max_articles * liste[i].prix;
        let somme1 = liste[i].prix + liste[i+1].prix;
        console.log(somme1);
        let main = document.querySelector("main");
        let aside = document.getElementById("cv");
        console.log(liste[i].id);
        console.log(liste[i].id);
        main.innerHTML += html;
        aside.innerHTML += div;
        console.log("sdfghjkl");
        console.log(liste[i].id);
        let po = `${liste[i].id}`;
        console.log(po);
        toString(po);
        let cc =  "a"+ po;
        console.log(cc);
        //while(liste.lenght)
        let bt = document.getElementById("a");
        console.log(bt);
    
    //let battoi = document.getElementById("ajouter");
    //battoi[i].addEventListener('click',()=>{
    //});
    
}

};

printPanier();





//faut recuperer nombres d'articles dans le paniers
// ensuite faire une condiditon de 0 à 9 pour le noòbre max d'articles dans le panier
//faire donc un set item du panier

