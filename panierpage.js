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
    }
    console.log(ajour1);



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
    }
    else{
        let ajour2 = nombre.innerHTML =0
    }
    console.log(ajour1);
    
}


const printPanier = ()=> {
    
    for(i = 0 ; liste.length; i++){
        let html = `<section>
        <div>
        <h1>Produit ${[i]} <h1>
        <img id ="imge"src="${liste[i].image} " alt="">
        <h1>${liste[i].nom}</h1>
        <h2>${liste[i].prix} $</h2>
        <button id = "a` +i+ `" onclick =" plusButton(` +i+ `)">+</button>
        <p id = "ab` +i+ `">0</p>
        <button id = "diminuer` +i+ `" onclick ="moinButton(` +i+ `)" >-</button>
        </div>
        </section>
        
        `   ;

        let main = document.querySelector("main");
        console.log(liste[i].id);
        console.log(liste[i].id);
        main.innerHTML += html;
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

}

printPanier();


//faut recuperer nombres d'articles dans le paniers
// ensuite faire une condiditon de 0 à 9 pour le noòbre max d'articles dans le panier
//faire donc un set item du panier

