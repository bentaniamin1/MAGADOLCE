let requestURL = 'list.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.onload = function() {
    if(this.status >= 200 && this.status < 400) {
        alert("On a bien été chercher le contenu");
        console.log(request.response)
    } else if(this.status >= 400) {
        alert("Y'a eu une erreur");
    }
};
request.onerror = function() {
    // Exécuté si jamais la requête ne passe pas
    // Par exemple, si vous n'avez plus internet
    alert("Erreur de connexion");
};
request.send();

