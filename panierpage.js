let listeP = localStorage.getItem("listePanier");
let liste = JSON.parse(listeP);

console.log(liste);
let longeur = liste.length;
console.log(longeur);

console.log(liste[1].nom);
let max = 9;
let min = 0;

function plusButton(index){
    
    let nombre = document.getElementById('ab'+(index));
    let nombre1 = document.getElementById('nmbrarticle'+(index));
    let coutTot = document.getElementById('cTot'+(index));
    console.log(nombre);
    let maxArticles = parseInt(liste[index].max_articles);
    let nombreValue = parseInt(nombre.innerText);
    let nombreValue1 = parseInt(nombre1.innerText);
    console.log(nombreValue);
    if(nombreValue < 9){
        let ajour1 = nombre.innerHTML = nombreValue + 1;
        let ajour3 = nombre1.innerHTML = "nombres d'articles :"+ (nombreValue +1);
        coutTot.innerHTML = "Cout totale du produit : " +  (nombreValue ) * maxArticles ; 
        
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
function moinButton(index){
    let nombre = document.getElementById('ab'+(index));
    let nombre1 = document.getElementById('nmbrarticle'+(index));
    let coutTot = document.getElementById('cTot'+(index));
    console.log(nombre);
    let maxArticles = parseInt(liste[index].max_articles);
    let nombreValue = parseInt(nombre.innerText);
    console.log(nombreValue);
    if(nombreValue > 0){

        let ajour1 = nombre.innerHTML = nombreValue - 1;
        let ajour3 = nombre1.innerHTML = "nombres d'articles :"+ (nombreValue -1);
        coutTot.innerHTML = "Cout totale du produit : " +  (nombreValue ) * maxArticles; 
        
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

function supprimer(index){
    let pr = JSON.parse(localStorage.getItem('listePanier'));
    console.log(pr[index]);
    pr.splice(pr[i],1);
    console.log(pr);
    localStorage.setItem('listePanier', JSON.stringify(pr));
    location.reload()
}


let printPanier = ()=> {
    
    for(i = 1 ; liste.length; i++){
        let html = 
        `
            <div class = "flex-item" id ="prod` +i+ `">
                <h1 class = "product">${' Produit n° '+ [i] +' , ' +liste[i].nom } <h1>
                <img class = "imge"id ="imge"src="${liste[i].image} " alt="">
                <h2 class = " prix">${liste[i].prix} $</h2>
                <button class = "plus"id = "ajouter` +i+ `" onclick =" plusButton(` +i+ `)">+</button>
                <p class="quantity" id = "ab` +i+ `">0</p>
                <button class= "moin" id = "diminuer` +i+ `" onclick ="moinButton(` +i+ `)" >-</button>
                <button class = "delete" id = "supprimer` +i+ `" onclick ="supprimer(` +i+ `)" >supprimer</button>
            </div>
        `   ;
        let div =
        `<div class = "flex-produits"  >
        <h1>${liste[i].nom +' produits n° '+[i]} </h1>
        <p id = "nmbrarticle` +i+ `">nombres d'articles : 0</p>
        <p id ="cTot` +i+ `">Cout totale du produit : 0 $ </p>
        </div>`;

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


let printSommeTotaleDuProduit = ()=>{
    let liste = JSON.parse(localStorage.getItem('listePanier'));
    for(i =0; liste.length; i++){
    let div =
    `<h1>${liste[i].nom} </h1> 
    <p>${infoscmd[i].max_articles}</p>`

    console.log(infoscmd[i].nom);
    let aside = document.querySelector("aside div");
    aside.innerHTML = div;
    };



};

printRecap();


//faut recuperer nombres d'articles dans le paniers
// ensuite faire une condiditon de 0 à 9 pour le noòbre max d'articles dans le panier
//faire donc un set item du panier

