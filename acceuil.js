let burger = document.getElementById('burger').addEventListener("click", () =>{

    let nav  = document.querySelector("ul");
    nav.classList.toggle("animation1");

});

let requestURL = 'list.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);

request.onload = function() {
    if(this.status >= 200 && this.status < 400) {
        let contenu = request.response;
        console.log(contenu);
        console.log(contenu.gateaux_etrangers[9].image);
        console.log(contenu.gateaux_etrangers[9].nom);
        console.log(contenu.gateaux_etrangers[9].description);

        console.log(contenu.viennoiseries[4].image);
        console.log(contenu.viennoiseries[4].nom);
        console.log(contenu.viennoiseries[4].description);
        
        console.log(contenu.viennoiseries[5].image);
        console.log(contenu.viennoiseries[5].nom);
        console.log(contenu.viennoiseries[5].description);
        
        console.log(contenu.epicerie[3].image);
        console.log(contenu.epicerie[3].nom);
        console.log(contenu.epicerie[3].description);
        
        console.log(contenu.epicerie[1].image);
        console.log(contenu.epicerie[1].nom);
        console.log(contenu.epicerie[1].description);

        let imgn1 = document.getElementById("imgn1");
        imgn1.src = "" +contenu.gateaux_etrangers[9].image;
        let imgn2 = document.getElementById("imgn2");
        imgn2.src = "" +contenu.viennoiseries[4].image;
        let imgn3 = document.getElementById("imgn3");
        imgn3.src = "" +contenu.viennoiseries[5].image;
        let imgn4 = document.getElementById("imgn4");
        imgn4.src = "" +contenu.epicerie[3].image;
        

        
        let descrsousnouveau1 = document.getElementById("descrsousnouveau1");
        let descrsousnouveau2 = document.getElementById("descrsousnouveau2");
        let descrsousnouveau3 = document.getElementById("descrsousnouveau3");
        descrsousnouveau1.innerHTML = contenu.gateaux_etrangers[9].description;
        descrsousnouveau2.innerHTML = contenu.viennoiseries[4].description;
        descrsousnouveau3.innerHTML = contenu.epicerie[3].description;
        //tendance
        
        console.log(contenu.gateaux_etrangers[12].image);
        console.log(contenu.gateaux_etrangers[12].nom);
        console.log(contenu.gateaux_etrangers[12].description);
        console.log(contenu.gateaux_etrangers[12].prix);
        
        console.log(contenu.gateaux_etrangers[2].image);
        console.log(contenu.gateaux_etrangers[2].nom);
        console.log(contenu.gateaux_etrangers[2].description);
        console.log(contenu.gateaux_etrangers[2].prix);
        
        console.log(contenu.viennoiseries[2].image);
        console.log(contenu.viennoiseries[2].nom);
        console.log(contenu.viennoiseries[2].description);
        console.log(contenu.viennoiseries[2].prix);
        
        let imgt1 = document.getElementById("imgt1");
        imgt1.src = "" +contenu.gateaux_etrangers[12].image;
        let imgt2 = document.getElementById("imgt2");
        imgt2.src = "" +contenu.gateaux_etrangers[2].image;
        let imgt3 = document.getElementById("imgt3");
        imgt3.src = "" +contenu.viennoiseries[2].image;
        let descrtendance1 = document.getElementById("descrtendance1");
        let descrtendance2 = document.getElementById("descrtendance2");
        let descrtendance3 = document.getElementById("descrtendance3");
        descrtendance1.innerHTML = contenu.gateaux_etrangers[12].description;
        descrtendance2.innerHTML = contenu.gateaux_etrangers[2].description;
        descrtendance3.innerHTML = contenu.viennoiseries[2].description;
        
        let tprix1 = document.getElementById("tprix1");
        let tprix2 = document.getElementById("tprix2");
        let tprix3 = document.getElementById("tprix3");
        tprix1.innerHTML = contenu.gateaux_etrangers[12].prix;
        tprix2.innerHTML = contenu.gateaux_etrangers[2].prix;
        tprix3.innerHTML = contenu.viennoiseries[2].prix;


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



