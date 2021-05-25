let requestURL = 'list.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);

request.onload = function() {
    if(this.status >= 200 && this.status < 400) {
        let contenu = request.response;
        let image = document.getElementById("imge").src = contenu.viennoiseries[2].image;
        /*image.src = "Images\Viennoiserie\boule_de_berlin.png";*/
        /*alert("On a bien été chercher le contenu");*/
        console.log(contenu.viennoiseries);
        let i = 0;
        if(i < contenu.viennoiseries.length){
            let html = `
            <section>
            <div>
            <img id ="imge"src="${contenu.viennoiseries[i].image} " alt="">
            <h1>${contenu.viennoiseries[i].nom}</h1>
            <h2>${contenu.viennoiseries[i].prix} $</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente corrupti molestiae voluptates quis, eum ratione reprehenderit atque vel. Ad, necessitatibus. Eveniet architecto quidem delectus nulla, totam iste sed veritatis eius.</p>
            <button id ="ajouter${contenu.viennoiseries[i].id}">Ajouter au panier</button>
            </div>
            </section>
            
            `;
            let mac = ` ${contenu.viennoiseries[i].id} ` ;
            console.log(mac);
            let main = document.querySelector("main");
            
            console.log(contenu.viennoiseries[i].image);
            main.innerHTML += html;
            i++
            let btn1 = document.getElementById('ajouter'+[i] ).addEventListener("click", () => {
                console.log("hjklò");
            });
            console.log(btn1);
            console.log("hjklò");
        };
        console.log(html);


        console.log(contenu.viannoiseries);
        //let gck = document.getElementById("a13");
        //console.log(gck);
        console.log(ajout);
        /*for(let si in contenu){
            console.log(contenu[0]);
        }*/

        
    } else if(this.status >= 400) {
        alert("Y'a eu une erreur");
    }
    //on va recuperer l'article mtn on va faire la liste d'est evenements pour chaque evenement 
    //avec le click comme evenement on va pouvoir après rècuper la valuer
    // ensuite on va l'inserer dams la liste du local storage
    
};

request.onerror = function() {
    // Exécuté si jamais la requête ne passe pas
    // Par exemple, si vous n'avez plus internet
    alert("Erreur de connexion");
};
request.responseType = 'json';
request.send();


let idea = `${contenu.viennoiseries[0].id}`;
console.log(idea); 


let button = document.getElementById("ajouter5");
button.addEventListener("click",()=>{
    alert.log("eeeee");
});





