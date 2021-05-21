let requestURL = 'list.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);

request.onload = function() {
    if(this.status >= 200 && this.status < 400) {
        let contenu = request.response;
        let image = document.getElementById("imge").src = contenu.viennoiseries[2].image;
        /*image.src = "Images\Viennoiserie\boule_de_berlin.png";*/
        /*alert("On a bien été chercher le contenu");*/
        for(i = 0 ; contenu.viennoiseries.length; i++){
        let html = `<section>
                <div>
                    <img id ="imge"src="${contenu.viennoiseries[i].image} " alt="">
                    <h1>${contenu.viennoiseries[i].nom}</h1>
                    <h2>${contenu.viennoiseries[i].prix} $</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente corrupti molestiae voluptates quis, eum ratione reprehenderit atque vel. Ad, necessitatibus. Eveniet architecto quidem delectus nulla, totam iste sed veritatis eius.</p>
                    <button>Ajouter au panier</button>
                </div>
            </section>
        
        `   
        let main = document.querySelector("main")
            
        console.log(contenu.viennoiseries[i].image);
        main.innerHTML += html;
        }
        /*for(let si in contenu){
            console.log(contenu[0]);
        }*/
    } else if(this.status >= 400) {
        alert("Y'a eu une erreur");
    }
    let gateaux_français = document.querySelector("#gateaux_fr");
    gateaux_français.addEventListener("click", function loadbtn(){

        
    })
    
};
request.onerror = function() {
    // Exécuté si jamais la requête ne passe pas
    // Par exemple, si vous n'avez plus internet
    alert("Erreur de connexion");
};
request.responseType = 'json';
request.send();