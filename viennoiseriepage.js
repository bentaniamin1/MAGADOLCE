

let requestURL = 'list.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);

request.onload = function() {
    if(this.status >= 200 && this.status < 400) {
        let contenu = request.response;
        let contenuligne = JSON.stringify(contenu);
        localStorage.setItem('contenu', contenuligne  );
        let conteniligne1 = localStorage.getItem("contenu");
        let contenu2 = JSON.parse(conteniligne1);
        let image = document.getElementById("imge").src = contenu.viennoiseries[2].image;
        /*image.src = "Images\viennoiseries\boule_de_berlin.png";*/
        /*alert("On a bien été chercher le contenu");*/
            let html = `
            <section>
            <div>
            <img id ="imge"src="${contenu2.viennoiseries[0].image} " alt="">
            <h1>${contenu2.viennoiseries[0].nom}</h1>
            <h2>${contenu2.viennoiseries[0].prix} $</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente corrupti molestiae voluptates quis, eum ratione reprehenderit atque vel. Ad, necessitatibus. Eveniet architecto quidem delectus nulla, totam iste sed veritatis eius.</p>
            <button id ="ajouter${contenu2.viennoiseries[0].id}">Ajouter au panier</button>
            </div>
            </section>
            <section>
            <div>
            <img id ="imge"src="${contenu2.viennoiseries[1].image}" alt="">
            <h1>${contenu2.viennoiseries[1].nom}</h1>
            <h2>${contenu2.viennoiseries[1].prix} $</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente corrupti molestiae voluptates quis, eum ratione reprehenderit atque vel. Ad, necessitatibus. Eveniet architecto quidem delectus nulla, totam iste sed veritatis eius.</p>
            <button id ="ajouter${contenu2.viennoiseries[1].id}">Ajouter au panier</button>
            </div>
            </section>
            <section>
            <div>
            <img id ="imge"src="${contenu2.viennoiseries[2].image}" alt="">
            <h1>${contenu2.viennoiseries[2].nom}</h1>
            <h2>${contenu2.viennoiseries[2].prix} $</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente corrupti molestiae voluptates quis, eum ratione reprehenderit atque vel. Ad, necessitatibus. Eveniet architecto quidem delectus nulla, totam iste sed veritatis eius.</p>
            <button id ="ajouter${contenu2.viennoiseries[2].id}">Ajouter au panier</button>
            </div>
            </section>
            <section>
            <div>
            <img id ="imge"src="${contenu2.viennoiseries[3].image} " alt="">
            <h1>${contenu2.viennoiseries[3].nom}</h1>
            <h2>${contenu2.viennoiseries[3].prix} $</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente corrupti molestiae voluptates quis, eum ratione reprehenderit atque vel. Ad, necessitatibus. Eveniet architecto quidem delectus nulla, totam iste sed veritatis eius.</p>
            <button id ="ajouter${contenu2.viennoiseries[3].id}">Ajouter au panier</button>
            </div>
            </section>
            <section>
            <div>
            <img id ="imge"src="${contenu2.viennoiseries[4].image} " alt="">
            <h1>${contenu2.viennoiseries[4].nom}</h1>
            <h2>${contenu2.viennoiseries[4].prix} $</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente corrupti molestiae voluptates quis, eum ratione reprehenderit atque vel. Ad, necessitatibus. Eveniet architecto quidem delectus nulla, totam iste sed veritatis eius.</p>
            <button id ="ajouter${contenu2.viennoiseries[4].id}">Ajouter au panier</button>
            </div>
            </section>
            <section>
            <div>
            <img id ="imge"src="${contenu2.viennoiseries[5].image} " alt="">
            <h1>${contenu2.viennoiseries[5].nom}</h1>
            <h2>${contenu2.viennoiseries[5].prix} $</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente corrupti molestiae voluptates quis, eum ratione reprehenderit atque vel. Ad, necessitatibus. Eveniet architecto quidem delectus nulla, totam iste sed veritatis eius.</p>
            <button id ="ajouter${contenu2.viennoiseries[5].id}">Ajouter au panier</button>
            </div>
            </section>
            <section>
            <div>
            <img id ="imge"src="${contenu2.viennoiseries[6].image} " alt="">
            <h1>${contenu2.viennoiseries[6].nom}</h1>
            <h2>${contenu2.viennoiseries[6].prix} $</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente corrupti molestiae voluptates quis, eum ratione reprehenderit atque vel. Ad, necessitatibus. Eveniet architecto quidem delectus nulla, totam iste sed veritatis eius.</p>
            <button id ="ajouter${contenu2.viennoiseries[6].id}">Ajouter au panier</button>
            </div>
            </section>
            <section>
            <div>
            <img id ="imge"src="${contenu2.viennoiseries[7].image} " alt="">
            <h1>${contenu2.viennoiseries[7].nom}</h1>
            <h2>${contenu2.viennoiseries[7].prix} $</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente corrupti molestiae voluptates quis, eum ratione reprehenderit atque vel. Ad, necessitatibus. Eveniet architecto quidem delectus nulla, totam iste sed veritatis eius.</p>
            <button id ="ajouter${contenu2.viennoiseries[7].id}">Ajouter au panier</button>
            </div>
            </section>
            <section>
            <div>
            <img id ="imge"src="${contenu2.viennoiseries[8].image} " alt="">
            <h1>${contenu2.viennoiseries[8].nom}</h1>
            <h2>${contenu2.viennoiseries[8].prix} $</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente corrupti molestiae voluptates quis, eum ratione reprehenderit atque vel. Ad, necessitatibus. Eveniet architecto quidem delectus nulla, totam iste sed veritatis eius.</p>
            <button id ="ajouter${contenu2.viennoiseries[8].id}">Ajouter au panier</button>
            </div>
            </section>
            <section>
            <div>
            <img id ="imge"src="${contenu2.viennoiseries[9].image} " alt="">
            <h1>${contenu2.viennoiseries[9].nom}</h1>
            <h2>${contenu2.viennoiseries[9].prix} $</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente corrupti molestiae voluptates quis, eum ratione reprehenderit atque vel. Ad, necessitatibus. Eveniet architecto quidem delectus nulla, totam iste sed veritatis eius.</p>
            <button class ="couleur" id ="ajouter${contenu2.viennoiseries[9].id}">Ajouter au panier</button>
            </div>
            </section>
            
            `;
            let main = document.querySelector("main");
            main.innerHTML += html;
            let burger = document.getElementById('burger').addEventListener("click", () =>{
    
                let nav  = document.querySelector("ul");
                nav.classList.toggle("animation1");
            
            });
            /*let html = `
            <section>
        <div>
        <img id ="imge"src="${contenu.viennoiseries[2].image} " alt="">
        <h1>${contenu.viennoiseries[2].nom}</h1>
        <h2>${contenu.viennoiseries[2].prix} $</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente corrupti molestiae voluptates quis, eum ratione reprehenderit atque vel. Ad, necessitatibus. Eveniet architecto quidem delectus nulla, totam iste sed veritatis eius.</p>
        <button id ="ajouter${contenu.viennoiseries[2].id}">Ajouter au panier</button>
        </div>
        </section>
        
        `;
        let main = document.querySelector("main");
        main.innerHTML += html;*/
        let btnviennoiserie = document.getElementById("ajouter1");
        btnviennoiserie.addEventListener("click",()=>{

            console.log(contenu2.viennoiseries[0]);
            //let ob0 = contenu1.viennoiseries[1];
            //localStorage.setItem("listePanier", JSON.stringify(ob0));
            let pr = JSON.parse(localStorage.getItem('listePanier'));
            pr.push(contenu2.viennoiseries[0]);
            localStorage.setItem('listePanier', JSON.stringify(pr));
            //on rècupere le nombre length dans la liste objt du local storage
            let listePanierligne1 = localStorage.getItem("listePanier");
            let listePanier1 = JSON.parse(listePanierligne1);
            //faire avec iltrer
            console.log(listePanier1);
            console.log(contenu2.viennoiseries[0].nom);
            
            if(listePanier1.nom != contenu2.viennoiseries[0].nom ){
                let ajour = nmbrPanier.innerHTML = nmbrPanierValue + listePanier1.length;
            }else{
                nmbrPanier.innerHTML = listePanier1.length - 10 ;
            }
        });
        let btnviennoiserie1 = document.getElementById("ajouter1");
        btnviennoiserie1.addEventListener("click",()=>{

            console.log(contenu2.viennoiseries[1]);
            //let ob1 = contenu1.viennoiseries[1];
            //localStorage.setItem("listePanier", JSON.stringify(ob1));
            let pr = JSON.parse(localStorage.getItem('listePanier'));
            pr.push(contenu2.viennoiseries[1]);
            localStorage.setItem('listePanier', JSON.stringify(pr));
            //on rècupere le nombre length dans la liste objt du local storage
            let listePanierligne1 = localStorage.getItem("listePanier");
            let listePanier1 = JSON.parse(listePanierligne1);
            //faire avec iltrer
            console.log(listePanier1);
            console.log(contenu2.viennoiseries[1].nom);
            
            if(listePanier1.nom != contenu2.viennoiseries[1].nom ){
                let ajour = nmbrPanier.innerHTML = nmbrPanierValue + listePanier1.length;
            }else{
                nmbrPanier.innerHTML = listePanier1.length - 10 ;
            }
        });
        let btnviennoiserie2 = document.getElementById("ajouter2");
        btnviennoiserie2.addEventListener("click",()=>{

            console.log(contenu2.viennoiseries[2]);
            //let ob2 = contenu1.viennoiseries[1];
            //localStorage.setItem("listePanier", JSON.stringify(ob2));
            let pr = JSON.parse(localStorage.getItem('listePanier'));
            pr.push(contenu2.viennoiseries[2]);
            localStorage.setItem('listePanier', JSON.stringify(pr));
            //on rècupere le nombre length dans la liste objt du local storage
            let listePanierligne1 = localStorage.getItem("listePanier");
            let listePanier1 = JSON.parse(listePanierligne1);
            //faire avec iltrer
            console.log(listePanier1);
            console.log(contenu2.viennoiseries[2].nom);
            
            if(listePanier1.nom != contenu2.viennoiseries[2].nom ){
                let ajour = nmbrPanier.innerHTML = nmbrPanierValue + listePanier1.length;
            }else{
                nmbrPanier.innerHTML = listePanier1.length - 10 ;
            }
        });
        let btnviennoiserie3 = document.getElementById("ajouter3");
        btnviennoiserie3.addEventListener("click",()=>{

            console.log(contenu2.viennoiseries[3]);
            //let ob0 = contenu1.viennoiseries[1];
            //localStorage.setItem("listePanier", JSON.stringify(ob0));
            let pr = JSON.parse(localStorage.getItem('listePanier'));
            pr.push(contenu2.viennoiseries[3]);
            localStorage.setItem('listePanier', JSON.stringify(pr));
            //on rècupere le nombre length dans la liste objt du local storage
            let listePanierligne1 = localStorage.getItem("listePanier");
            let listePanier1 = JSON.parse(listePanierligne1);
            //faire avec iltrer
            console.log(listePanier1);
            console.log(contenu2.viennoiseries[3].nom);
            
            if(listePanier1.nom != contenu2.viennoiseries[3].nom ){
                let ajour = nmbrPanier.innerHTML = nmbrPanierValue + listePanier1.length;
            }else{
                nmbrPanier.innerHTML = listePanier1.length - 10 ;
            }
        });
        let btnviennoiserie4 = document.getElementById("ajouter4");
        btnviennoiserie4.addEventListener("click",()=>{

            console.log(contenu2.viennoiseries[4]);
            //let ob0 = contenu1.viennoiseries[1];
            //localStorage.setItem("listePanier", JSON.stringify(ob0));
            let pr = JSON.parse(localStorage.getItem('listePanier'));
            pr.push(contenu2.viennoiseries[4]);
            localStorage.setItem('listePanier', JSON.stringify(pr));
            //on rècupere le nombre length dans la liste objt du local storage
            let listePanierligne1 = localStorage.getItem("listePanier");
            let listePanier1 = JSON.parse(listePanierligne1);
            //faire avec iltrer
            console.log(listePanier1);
            console.log(contenu2.viennoiseries[4].nom);
            
            if(listePanier1.nom != contenu2.viennoiseries[4].nom ){
                let ajour = nmbrPanier.innerHTML = nmbrPanierValue + listePanier1.length;
            }else{
                nmbrPanier.innerHTML = listePanier1.length - 10 ;
            }
        });
        let btnviennoiserie5 = document.getElementById("ajouter5");
        btnviennoiserie5.addEventListener("click",()=>{

            console.log(contenu2.viennoiseries[5]);
            //let ob0 = contenu1.viennoiseries[1];
            //localStorage.setItem("listePanier", JSON.stringify(ob0));
            let pr = JSON.parse(localStorage.getItem('listePanier'));
            pr.push(contenu2.viennoiseries[5]);
            localStorage.setItem('listePanier', JSON.stringify(pr));
            //on rècupere le nombre length dans la liste objt du local storage
            let listePanierligne1 = localStorage.getItem("listePanier");
            let listePanier1 = JSON.parse(listePanierligne1);
            //faire avec iltrer
            console.log(listePanier1);
            console.log(contenu2.viennoiseries[5].nom);
            
            if(listePanier1.nom != contenu2.viennoiseries[5].nom ){
                let ajour = nmbrPanier.innerHTML = nmbrPanierValue + listePanier1.length;
            }else{
                nmbrPanier.innerHTML = listePanier1.length - 10 ;
            }
        });
        let btnviennoiserie6 = document.getElementById("ajouter6");
        btnviennoiserie6.addEventListener("click",()=>{

            console.log(contenu2.viennoiseries[6]);
            //let ob0 = contenu1.viennoiseries[1];
            //localStorage.setItem("listePanier", JSON.stringify(ob0));
            let pr = JSON.parse(localStorage.getItem('listePanier'));
            pr.push(contenu2.viennoiseries[6]);
            localStorage.setItem('listePanier', JSON.stringify(pr));
            //on rècupere le nombre length dans la liste objt du local storage
            let listePanierligne1 = localStorage.getItem("listePanier");
            let listePanier1 = JSON.parse(listePanierligne1);
            //faire avec iltrer
            console.log(listePanier1);
            console.log(contenu2.viennoiseries[6].nom);
            
            if(listePanier1.nom != contenu2.viennoiseries[6].nom ){
                let ajour = nmbrPanier.innerHTML = nmbrPanierValue + listePanier1.length;
            }else{
                nmbrPanier.innerHTML = listePanier1.length - 10 ;
            }
        });
        let btnviennoiserie7 = document.getElementById("ajouter7");
        btnviennoiserie7.addEventListener("click",()=>{

            console.log(contenu2.viennoiseries[7]);
            //let ob0 = contenu1.viennoiseries[1];
            //localStorage.setItem("listePanier", JSON.stringify(ob0));
            let pr = JSON.parse(localStorage.getItem('listePanier'));
            pr.push(contenu2.viennoiseries[7]);
            localStorage.setItem('listePanier', JSON.stringify(pr));
            //on rècupere le nombre length dans la liste objt du local storage
            let listePanierligne1 = localStorage.getItem("listePanier");
            let listePanier1 = JSON.parse(listePanierligne1);
            //faire avec iltrer
            console.log(listePanier1);
            console.log(contenu2.viennoiseries[7].nom);
            
            if(listePanier1.nom != contenu2.viennoiseries[7].nom ){
                let ajour = nmbrPanier.innerHTML = nmbrPanierValue + listePanier1.length;
            }else{
                nmbrPanier.innerHTML = listePanier1.length - 10 ;
            }
        });
        let btnviennoiserie8 = document.getElementById("ajouter8");
        btnviennoiserie8.addEventListener("click",()=>{

            console.log(contenu2.viennoiseries[8]);
            //let ob0 = contenu1.viennoiseries[1];
            //localStorage.setItem("listePanier", JSON.stringify(ob0));
            let pr = JSON.parse(localStorage.getItem('listePanier'));
            pr.push(contenu2.viennoiseries[8]);
            localStorage.setItem('listePanier', JSON.stringify(pr));
            //on rècupere le nombre length dans la liste objt du local storage
            let listePanierligne1 = localStorage.getItem("listePanier");
            let listePanier1 = JSON.parse(listePanierligne1);
            //faire avec iltrer
            console.log(listePanier1);
            console.log(contenu2.viennoiseries[8].nom);
            
            if(listePanier1.nom != contenu2.viennoiseries[8].nom ){
                let ajour = nmbrPanier.innerHTML = nmbrPanierValue + listePanier1.length;
            }else{
                nmbrPanier.innerHTML = listePanier1.length - 10 ;
            }
        });
        let btnviennoiserie9 = document.getElementById("ajouter9");
        btnviennoiserie9.addEventListener("click",()=>{

            console.log(contenu2.viennoiseries[9]);
            //let ob0 = contenu1.viennoiseries[1];
            //localStorage.setItem("listePanier", JSON.stringify(ob0));
            let pr = JSON.parse(localStorage.getItem('listePanier'));
            pr.push(contenu2.viennoiseries[9]);
            localStorage.setItem('listePanier', JSON.stringify(pr));
            //on rècupere le nombre length dans la liste objt du local storage
            let listePanierligne1 = localStorage.getItem("listePanier");
            let listePanier1 = JSON.parse(listePanierligne1);
            //faire avec iltrer
            console.log(listePanier1);
            console.log(contenu2.viennoiseries[9].nom);
            
            if(listePanier1.nom != contenu2.viennoiseries[9].nom ){
                let ajour = nmbrPanier.innerHTML = nmbrPanierValue + listePanier1.length;
            }else{
                nmbrPanier.innerHTML = listePanier1.length - 10 ;
            }
        });
        //console.log(listePanier);
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