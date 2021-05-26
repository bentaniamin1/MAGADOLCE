let listeP = localStorage.getItem("listePanier");
let liste = JSON.parse(listeP);

console.log(liste);
console.log(liste.length);
console.log(liste[1].nom);
console.log(liste[1]);

for(i = 0 ; liste.length; i++){
    let html = `<section>
            <div>
                <h1>Produit ${[i]} <h1>
                <img id ="imge"src="${liste[i].image} " alt="">
                <h1>${liste[i].nom}</h1>
                <h2>${liste[i].prix} $</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente corrupti molestiae voluptates quis, eum ratione reprehenderit atque vel. Ad, necessitatibus. Eveniet architecto quidem delectus nulla, totam iste sed veritatis eius.</p>
                <button id = "ajouter${liste[i]}">+</button>
                <p>0</p>
                <button id = "diminuer${liste[i]}">-</button>
            </div>
        </section>
    
    `   ;
    let main = document.querySelector("main");
        
    console.log(liste[i].image);
    console.log(liste[i].id);
    main.innerHTML += html;

    let battoi = document.getElementById('diminuer'+`${liste[i].id}`);
    console.log(battoi);
}


battoi1.addEventListener("click",()=>{
    console.log("ajouter");
    console.log(liste1);
    console.log("tas reussi bg");
    let pr = JSON.parse(localStorage.getItem('listePanier'));
    pr.push(liste[i]);
    localStorage.setItem('listePanier', JSON.stringify(pr));
});
console.log(i);

