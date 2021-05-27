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
    console.log(nombre);
    let maxArticles = parseInt(liste[index].max_articles);
    let nombreValue = parseInt(nombre.innerText);
    console.log(nombreValue);
    if(nombreValue < 9){
        let ajour1 = nombre.innerHTML = nombreValue+ 1;
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
    console.log(nombre);
    let maxArticles = parseInt(liste[index].max_articles);
    let nombreValue = parseInt(nombre.innerText);
    console.log(nombreValue);
    if(nombreValue > 0){

        let ajour1 = nombre.innerHTML = nombreValue - 1;
        let pr = JSON.parse(localStorage.getItem('listePanier'));
        let v1 = pr[index].max_articles.value;
        console.log(v1);
        let v2 = pr[index].max_articles = nombreValue;
        console.log(v2);
        console.log(pr);
        localStorage.setItem('listePanier', JSON.stringify(pr));

    }
    else{
        let ajour2 = nombre.innerHTML = 0
    }
    console.log(ajour1);
    
}

function supprimer(index){
    let pr = JSON.parse(localStorage.getItem('listePanier'));
    console.log(pr[index]);
    pr.splice(pr[i],1);
    console.log(pr);
    localStorage.setItem('listePanier', JSON.stringify(pr));
    printPanier();
}


let printPanier = ()=> {
    
    for(i = 0 ; liste.length; i++){
        let html = 
        `<section>
            <div>
                <h1>Produit ${[i]} <h1>
                <img id ="imge"src="${liste[i].image} " alt="">
                <h1>${liste[i].nom}</h1>
                <h2>${liste[i].prix} $</h2>
                <button id = "a` +i+ `" onclick =" plusButton(` +i+ `)">+</button>
                <p id = "ab` +i+ `">0</p>
                <button id = "diminuer` +i+ `" onclick ="moinButton(` +i+ `)" >-</button>
                <button id = "supprimer` +i+ `" onclick ="supprimer(` +i+ `)" >supprimer</button>
            </div>
        </section>
        `   ;
        let div =
        `<div>
        <h1>${liste[i].nom +' produits n° '+[i]} </h1>
        <p>nombres d'articles : ${liste[i].max_articles}</p>
        <p>Cout toale du produits :${liste[i].prix = liste[i].max_articles * liste[i].prix } $ </p>
        </div>`;

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


let printRecap = ()=>{
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

