let requestURL = 'list.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);

request.onload = function() {
    if(this.status >= 200 && this.status < 400) {
        let contenu = request.response;
        let image = document.getElementById("imge").src = contenu.viennoiseries[2].image;
        /*image.src = "Images\Viennoiserie\boule_de_berlin.png";*/
        /*alert("On a bien été chercher le contenu");*/
        console.log(contenu);
        let contenuligne = JSON.stringify(contenu);
        localStorage.setItem('contenu', contenuligne  );
        let conteniligne1 = localStorage.getItem("contenu");
        let contenu2 = JSON.parse(conteniligne1);
        console.log(contenu2.epicerie[2].id);
        console.log(contenu2.epicerie[0].image);
        let essaieButton  =  `<button id = "ajouter${contenu2.epicerie[3].id} "> sdfghjkl<button >`;
        let gt_fr = document.getElementById("g_fr").addEventListener("click",()=>{

            console.log(contenu2.epicerie.length);
                let html1 = `
                <section>
                <div>
                <img id ="imge"src="${contenu2.epicerie[0].image} " alt="">
                <h1>${contenu2.epicerie[0].nom}</h1>
                <h2>${contenu2.epicerie[0].prix} $</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente corrupti molestiae voluptates quis, eum ratione reprehenderit atque vel. Ad, necessitatibus. Eveniet architecto quidem delectus nulla, totam iste sed veritatis eius.</p>
                <button id ="ajouter${contenu2.epicerie[0].id}">Ajouter au panier</button>
                </div>
                </section>
                <section>
                <div>
                <img id ="imge"src="${contenu2.epicerie[1].image}" alt="">
                <h1>${contenu2.epicerie[1].nom}</h1>
                <h2>${contenu2.epicerie[1].prix} $</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente corrupti molestiae voluptates quis, eum ratione reprehenderit atque vel. Ad, necessitatibus. Eveniet architecto quidem delectus nulla, totam iste sed veritatis eius.</p>
                <button id ="ajouter${contenu2.epicerie[1].id}">Ajouter au panier</button>
                </div>
                </section>
                <section>
                <div>
                <img id ="imge"src="${contenu2.epicerie[2].image}" alt="">
                <h1>${contenu2.epicerie[2].nom}</h1>
                <h2>${contenu2.epicerie[2].prix} $</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente corrupti molestiae voluptates quis, eum ratione reprehenderit atque vel. Ad, necessitatibus. Eveniet architecto quidem delectus nulla, totam iste sed veritatis eius.</p>
                <button id ="ajouter${contenu2.epicerie[2].id}">Ajouter au panier</button>
                </div>
                </section>
                <section>
                <div>
                <img id ="imge"src="${contenu2.epicerie[3].image} " alt="">
                <h1>${contenu2.epicerie[3].nom}</h1>
                <h2>${contenu2.epicerie[3].prix} $</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente corrupti molestiae voluptates quis, eum ratione reprehenderit atque vel. Ad, necessitatibus. Eveniet architecto quidem delectus nulla, totam iste sed veritatis eius.</p>
                <button id ="ajouter${contenu2.epicerie[3].id}">Ajouter au panier</button>
                </div>
                </section>
                <section>
                <div>
                <img id ="imge"src="${contenu2.epicerie[4].image} " alt="">
                <h1>${contenu2.epicerie[4].nom}</h1>
                <h2>${contenu2.epicerie[4].prix} $</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente corrupti molestiae voluptates quis, eum ratione reprehenderit atque vel. Ad, necessitatibus. Eveniet architecto quidem delectus nulla, totam iste sed veritatis eius.</p>
                <button id ="ajouter${contenu2.epicerie[4].id}">Ajouter au panier</button>
                </div>
                </section>
                <section>
                <div>
                <img id ="imge"src="${contenu2.epicerie[5].image} " alt="">
                <h1>${contenu2.epicerie[5].nom}</h1>
                <h2>${contenu2.epicerie[5].prix} $</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente corrupti molestiae voluptates quis, eum ratione reprehenderit atque vel. Ad, necessitatibus. Eveniet architecto quidem delectus nulla, totam iste sed veritatis eius.</p>
                <button id ="ajouter${contenu2.epicerie[5].id}">Ajouter au panier</button>
                </div>
                </section>
                
                `;
                let main = document.querySelector("main");
                main.innerHTML = html1;
            /*let html = `
            <section>
            <div>
            <img id ="imge"src="${contenu2.epicerie[2].image} " alt="">
            <h1>${contenu2.epicerie[2].nom}</h1>
            <h2>${contenu2.epicerie[2].prix} $</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente corrupti molestiae voluptates quis, eum ratione reprehenderit atque vel. Ad, necessitatibus. Eveniet architecto quidem delectus nulla, totam iste sed veritatis eius.</p>
            <button id ="ajouter${contenu2.epicerie[2].id}">Ajouter au panier</button>
            </div>
            </section>
            
            `;
            let main = document.querySelector("main");
            main.innerHTML += html;*/
            let btnepicerie = document.getElementById("ajouter26");
            btnepicerie.addEventListener("click",()=>{
                console.log(contenu2.epicerie[0]);
                //let ob0 = contenu2.epicerie[1];
                //localStorage.setItem("listePanier", JSON.stringify(ob0));
                let pr = JSON.parse(localStorage.getItem('listePanier'));
                pr.push(contenu2.epicerie[0]);
                localStorage.setItem('listePanier', JSON.stringify(pr));
                //on rècupere le nombre length dans la liste objt du local storage
                let listePanierligne1 = localStorage.getItem("listePanier");
                let listePanier1 = JSON.parse(listePanierligne1);
                //faire avec iltrer
                console.log(listePanier1);
                console.log(contenu2.epicerie[0].nom);
    
                if(listePanier1.nom != contenu2.epicerie[0].nom ){
                    let ajour = nmbrPanier.innerHTML = nmbrPanierValue + listePanier1.length;
                }else{
                    nmbrPanier.innerHTML = listePanier1.length - 10 ;
                }
                
            });
            let btnepicerie1 = document.getElementById("ajouter27");
            btnepicerie1.addEventListener("click",()=>{
                console.log(contenu2.epicerie[1]);
                //let ob0 = contenu2.epicerie[1];
                //localStorage.setItem("listePanier", JSON.stringify(ob0));
                let pr = JSON.parse(localStorage.getItem('listePanier'));
                pr.push(contenu2.epicerie[1]);
                localStorage.setItem('listePanier', JSON.stringify(pr));
                //on rècupere le nombre length dans la liste objt du local storage
                let listePanierligne1 = localStorage.getItem("listePanier");
                let listePanier1 = JSON.parse(listePanierligne1);
                //faire avec iltrer
                console.log(listePanier1);
                console.log(contenu2.epicerie[1].nom);
    
                if(listePanier1.nom != contenu2.epicerie[1].nom ){
                    let ajour = nmbrPanier.innerHTML = nmbrPanierValue + listePanier1.length;
                }else{
                    nmbrPanier.innerHTML = listePanier1.length - 10 ;
                }
                
            });
            let btnepicerie2 = document.getElementById("ajouter28");
            btnepicerie2.addEventListener("click",()=>{
                console.log(contenu2.epicerie[2]);
                //let ob0 = contenu2.epicerie[1];
                //localStorage.setItem("listePanier", JSON.stringify(ob0));
                let pr = JSON.parse(localStorage.getItem('listePanier'));
                pr.push(contenu2.epicerie[2]);
                localStorage.setItem('listePanier', JSON.stringify(pr));
                //on rècupere le nombre length dans la liste objt du local storage
                let listePanierligne1 = localStorage.getItem("listePanier");
                let listePanier1 = JSON.parse(listePanierligne1);
                //faire avec iltrer
                console.log(listePanier1);
                console.log(contenu2.epicerie[2].nom);
    
                if(listePanier1.nom != contenu2.epicerie[2].nom ){
                    let ajour = nmbrPanier.innerHTML = nmbrPanierValue + listePanier1.length;
                }else{
                    nmbrPanier.innerHTML = listePanier1.length - 10 ;
                }
                
            });
            let btnepicerie3 = document.getElementById("ajouter29");
            btnepicerie3.addEventListener("click",()=>{
                console.log(contenu2.epicerie[3]);
                //let ob0 = contenu2.epicerie[1];
                //localStorage.setItem("listePanier", JSON.stringify(ob0));
                let pr = JSON.parse(localStorage.getItem('listePanier'));
                pr.push(contenu2.epicerie[3]);
                localStorage.setItem('listePanier', JSON.stringify(pr));
                //on rècupere le nombre length dans la liste objt du local storage
                let listePanierligne1 = localStorage.getItem("listePanier");
                let listePanier1 = JSON.parse(listePanierligne1);
                //faire avec iltrer
                console.log(listePanier1);
                console.log(contenu2.epicerie[3].nom);
    
                if(listePanier1.nom != contenu2.epicerie[3].nom ){
                    let ajour = nmbrPanier.innerHTML = nmbrPanierValue + listePanier1.length;
                }else{
                    nmbrPanier.innerHTML = listePanier1.length - 10 ;
                }
                
            });
            let btnepicerie4 = document.getElementById("ajouter30");
            btnepicerie4.addEventListener("click",()=>{
                console.log(contenu2.epicerie[4]);
                //let ob0 = contenu2.epicerie[1];
                //localStorage.setItem("listePanier", JSON.stringify(ob0));
                let pr = JSON.parse(localStorage.getItem('listePanier'));
                pr.push(contenu2.epicerie[4]);
                localStorage.setItem('listePanier', JSON.stringify(pr));
                //on rècupere le nombre length dans la liste objt du local storage
                let listePanierligne1 = localStorage.getItem("listePanier");
                let listePanier1 = JSON.parse(listePanierligne1);
                //faire avec iltrer
                console.log(listePanier1);
                console.log(contenu2.epicerie[4].nom);
    
                if(listePanier1.nom != contenu2.epicerie[4].nom ){
                    let ajour = nmbrPanier.innerHTML = nmbrPanierValue + listePanier1.length;
                }else{
                    nmbrPanier.innerHTML = listePanier1.length - 10 ;
                }
                
            });
            let btnepicerie5 = document.getElementById("ajouter31");
            btnepicerie5.addEventListener("click",()=>{
                console.log(contenu2.epicerie[3]);
                //let ob0 = contenu2.epicerie[1];
                //localStorage.setItem("listePanier", JSON.stringify(ob0));
                let pr = JSON.parse(localStorage.getItem('listePanier'));
                pr.push(contenu2.epicerie[5]);
                localStorage.setItem('listePanier', JSON.stringify(pr));
                //on rècupere le nombre length dans la liste objt du local storage
                let listePanierligne1 = localStorage.getItem("listePanier");
                let listePanier1 = JSON.parse(listePanierligne1);
                //faire avec iltrer
                console.log(listePanier1);
                console.log(contenu2.epicerie[5].nom);
    
                if(listePanier1.nom != contenu2.epicerie[5].nom ){
                    let ajour = nmbrPanier.innerHTML = nmbrPanierValue + listePanier1.length;
                }else{
                    nmbrPanier.innerHTML = listePanier1.length - 10 ;
                }
                
            });
        });
        /*-------------------Gateaux Etranger ------------*/
        let gt_et = document.getElementById("g_et").addEventListener("click",()=>{

            console.log(contenu5.gateaux_etrangers.length);
                let html1 = `
                <section>
                <div>
                <img id ="imge"src="${contenu5.gateaux_etrangers[0].image} " alt="">
                <h1>${contenu5.gateaux_etrangers[0].nom}</h1>
                <h2>${contenu5.gateaux_etrangers[0].prix} $</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente corrupti molestiae voluptates quis, eum ratione reprehenderit atque vel. Ad, necessitatibus. Eveniet architecto quidem delectus nulla, totam iste sed veritatis eius.</p>
                <button id ="ajouter${contenu5.gateaux_etrangers[0].id}">Ajouter au panier</button>
                </div>
                </section>
                <section>
                <div>
                <img id ="imge"src="${contenu5.gateaux_etrangers[1].image}" alt="">
                <h1>${contenu5.gateaux_etrangers[1].nom}</h1>
                <h2>${contenu5.gateaux_etrangers[1].prix} $</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente corrupti molestiae voluptates quis, eum ratione reprehenderit atque vel. Ad, necessitatibus. Eveniet architecto quidem delectus nulla, totam iste sed veritatis eius.</p>
                <button id = "ajouter${contenu5.gateaux_etrangers[1].id}">Ajouter au panier</button>
                </div>
                </section>
                <section>
                <div>
                <img id ="imge"src="${contenu5.gateaux_etrangers[2].image}" alt="">
                <h1>${contenu5.gateaux_etrangers[2].nom}</h1>
                <h2>${contenu5.gateaux_etrangers[2].prix} $</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente corrupti molestiae voluptates quis, eum ratione reprehenderit atque vel. Ad, necessitatibus. Eveniet architecto quidem delectus nulla, totam iste sed veritatis eius.</p>
                <button id ="ajouter${contenu5.gateaux_etrangers[2].id}">Ajouter au panier</button>
                </div>
                </section>
                <section>
                <div>
                <img id ="imge"src="${contenu5.gateaux_etrangers[3].image} " alt="">
                <h1>${contenu5.gateaux_etrangers[3].nom}</h1>
                <h2>${contenu5.gateaux_etrangers[3].prix} $</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente corrupti molestiae voluptates quis, eum ratione reprehenderit atque vel. Ad, necessitatibus. Eveniet architecto quidem delectus nulla, totam iste sed veritatis eius.</p>
                <button id ="ajouter${contenu5.gateaux_etrangers[3].id}">Ajouter au panier</button>
                </div>
                </section>
                <section>
                <div>
                <img id ="imge"src="${contenu5.gateaux_etrangers[4].image} " alt="">
                <h1>${contenu5.gateaux_etrangers[4].nom}</h1>
                <h2>${contenu5.gateaux_etrangers[4].prix} $</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente corrupti molestiae voluptates quis, eum ratione reprehenderit atque vel. Ad, necessitatibus. Eveniet architecto quidem delectus nulla, totam iste sed veritatis eius.</p>
                <button id ="ajouter${contenu5.gateaux_etrangers[4].id}">Ajouter au panier</button>
                </div>
                </section>
                <section>
                <div>
                <img id ="imge"src="${contenu5.gateaux_etrangers[5].image} " alt="">
                <h1>${contenu5.gateaux_etrangers[5].nom}</h1>
                <h2>${contenu5.gateaux_etrangers[5].prix} $</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente corrupti molestiae voluptates quis, eum ratione reprehenderit atque vel. Ad, necessitatibus. Eveniet architecto quidem delectus nulla, totam iste sed veritatis eius.</p>
                <button id ="ajouter${contenu5.gateaux_etrangers[5].id}">Ajouter au panier</button>
                </div>
                </section>
                
                `;
                let main = document.querySelector("main");
                main.innerHTML = html1;
            /*let html = `
            <section>
            <div>
            <img id ="imge"src="${contenu5.gateaux_etrangers[2].image} " alt="">
            <h1>${contenu5.gateaux_etrangers[2].nom}</h1>
            <h2>${contenu5.gateaux_etrangers[2].prix} $</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente corrupti molestiae voluptates quis, eum ratione reprehenderit atque vel. Ad, necessitatibus. Eveniet architecto quidem delectus nulla, totam iste sed veritatis eius.</p>
            <button id ="ajouter${contenu5.gateaux_etrangers[2].id}">Ajouter au panier</button>
            </div>
            </section>
            
            `;
            let main = document.querySelector("main");
            main.innerHTML += html;*/
            let btngateaux_etrangers = document.getElementById("ajouter26");
            btngateaux_etrangers.addEventListener("click",()=>{
                console.log(contenu5.gateaux_etrangers[0]);
                //let ob0 = contenu5.gateaux_etrangers[1];
                //localStorage.setItem("listePanier", JSON.stringify(ob0));
                let pr = JSON.parse(localStorage.getItem('listePanier'));
                pr.push(contenu5.gateaux_etrangers[0]);
                localStorage.setItem('listePanier', JSON.stringify(pr));
                //on rècupere le nombre length dans la liste objt du local storage
                let listePanierligne1 = localStorage.getItem("listePanier");
                let listePanier1 = JSON.parse(listePanierligne1);
                //faire avec iltrer
                console.log(listePanier1);
                console.log(contenu5.gateaux_etrangers[0].nom);
    
                if(listePanier1.nom != contenu5.gateaux_etrangers[0].nom ){
                    let ajour = nmbrPanier.innerHTML = nmbrPanierValue + listePanier1.length;
                }else{
                    nmbrPanier.innerHTML = listePanier1.length - 10 ;
                }
                
            });
            let btngateaux_etrangers1 = document.getElementById("ajouter27");
            btngateaux_etrangers1.addEventListener("click",()=>{
                console.log(contenu5.gateaux_etrangers[1]);
                //let ob0 = contenu5.gateaux_etrangers[1];
                //localStorage.setItem("listePanier", JSON.stringify(ob0));
                let pr = JSON.parse(localStorage.getItem('listePanier'));
                pr.push(contenu5.gateaux_etrangers[1]);
                localStorage.setItem('listePanier', JSON.stringify(pr));
                //on rècupere le nombre length dans la liste objt du local storage
                let listePanierligne1 = localStorage.getItem("listePanier");
                let listePanier1 = JSON.parse(listePanierligne1);
                //faire avec iltrer
                console.log(listePanier1);
                console.log(contenu5.gateaux_etrangers[1].nom);
    
                if(listePanier1.nom != contenu5.gateaux_etrangers[1].nom ){
                    let ajour = nmbrPanier.innerHTML = nmbrPanierValue + listePanier1.length;
                }else{
                    nmbrPanier.innerHTML = listePanier1.length - 10 ;
                }
                
            });
            let btngateaux_etrangers2 = document.getElementById("ajouter28");
            btngateaux_etrangers2.addEventListener("click",()=>{
                console.log(contenu5.gateaux_etrangers[2]);
                //let ob0 = contenu5.gateaux_etrangers[1];
                //localStorage.setItem("listePanier", JSON.stringify(ob0));
                let pr = JSON.parse(localStorage.getItem('listePanier'));
                pr.push(contenu5.gateaux_etrangers[2]);
                localStorage.setItem('listePanier', JSON.stringify(pr));
                //on rècupere le nombre length dans la liste objt du local storage
                let listePanierligne1 = localStorage.getItem("listePanier");
                let listePanier1 = JSON.parse(listePanierligne1);
                //faire avec iltrer
                console.log(listePanier1);
                console.log(contenu5.gateaux_etrangers[2].nom);
    
                if(listePanier1.nom != contenu5.gateaux_etrangers[2].nom ){
                    let ajour = nmbrPanier.innerHTML = nmbrPanierValue + listePanier1.length;
                }else{
                    nmbrPanier.innerHTML = listePanier1.length - 10 ;
                }
                
            });
            let btngateaux_etrangers3 = document.getElementById("ajouter29");
            btngateaux_etrangers3.addEventListener("click",()=>{
                console.log(contenu5.gateaux_etrangers[3]);
                //let ob0 = contenu5.gateaux_etrangers[1];
                //localStorage.setItem("listePanier", JSON.stringify(ob0));
                let pr = JSON.parse(localStorage.getItem('listePanier'));
                pr.push(contenu5.gateaux_etrangers[3]);
                localStorage.setItem('listePanier', JSON.stringify(pr));
                //on rècupere le nombre length dans la liste objt du local storage
                let listePanierligne1 = localStorage.getItem("listePanier");
                let listePanier1 = JSON.parse(listePanierligne1);
                //faire avec iltrer
                console.log(listePanier1);
                console.log(contenu5.gateaux_etrangers[3].nom);
    
                if(listePanier1.nom != contenu5.gateaux_etrangers[3].nom ){
                    let ajour = nmbrPanier.innerHTML = nmbrPanierValue + listePanier1.length;
                }else{
                    nmbrPanier.innerHTML = listePanier1.length - 10 ;
                }
                
            });
            let btngateaux_etrangers4 = document.getElementById("ajouter30");
            btngateaux_etrangers4.addEventListener("click",()=>{
                console.log(contenu5.gateaux_etrangers[4]);
                //let ob0 = contenu5.gateaux_etrangers[1];
                //localStorage.setItem("listePanier", JSON.stringify(ob0));
                let pr = JSON.parse(localStorage.getItem('listePanier'));
                pr.push(contenu5.gateaux_etrangers[4]);
                localStorage.setItem('listePanier', JSON.stringify(pr));
                //on rècupere le nombre length dans la liste objt du local storage
                let listePanierligne1 = localStorage.getItem("listePanier");
                let listePanier1 = JSON.parse(listePanierligne1);
                //faire avec iltrer
                console.log(listePanier1);
                console.log(contenu5.gateaux_etrangers[4].nom);
    
                if(listePanier1.nom != contenu5.gateaux_etrangers[4].nom ){
                    let ajour = nmbrPanier.innerHTML = nmbrPanierValue + listePanier1.length;
                }else{
                    nmbrPanier.innerHTML = listePanier1.length - 10 ;
                }
                
            });
            let btngateaux_etrangers5 = document.getElementById("ajouter31");
            btngateaux_etrangers5.addEventListener("click",()=>{
                console.log(contenu5.gateaux_etrangers[3]);
                //let ob0 = contenu5.gateaux_etrangers[1];
                //localStorage.setItem("listePanier", JSON.stringify(ob0));
                let pr = JSON.parse(localStorage.getItem('listePanier'));
                pr.push(contenu5.gateaux_etrangers[5]);
                localStorage.setItem('listePanier', JSON.stringify(pr));
                //on rècupere le nombre length dans la liste objt du local storage
                let listePanierligne1 = localStorage.getItem("listePanier");
                let listePanier1 = JSON.parse(listePanierligne1);
                //faire avec iltrer
                console.log(listePanier1);
                console.log(contenu5.gateaux_etrangers[5].nom);
    
                if(listePanier1.nom != contenu5.gateaux_etrangers[5].nom ){
                    let ajour = nmbrPanier.innerHTML = nmbrPanierValue + listePanier1.length;
                }else{
                    nmbrPanier.innerHTML = listePanier1.length - 10 ;
                }
                
            });
        });
        let burger = document.getElementById('burger').addEventListener("click", () =>{    
            let nav  = document.querySelector("ul");
            nav.classList.toggle("animation1");
        
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


let idea = `${contenu.viennoiseries[0].id}`;
console.log(idea); 


let button = document.getElementById("ajouter5");
button.addEventListener("click",()=>{
    alert.log("eeeee");
});

