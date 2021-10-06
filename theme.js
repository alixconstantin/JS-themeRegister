let button = document.querySelector("#mode");
let texte = document.querySelector("span");


// Si l'utilisateur possède en cookie theme = sombre en chargeant la page
    if(localStorage.getItem('theme') == ('sombre')) {
      // Applique le mode sombre
      modeSombre(); 
    }

// Quand l'utilisateur clique sur le bouton, la fonction test est effectué
button.addEventListener("click", test);

// Fonction test vérifie le theme actuel et le change, tout en créant un cookie theme avec pour valeur le nouveau thème, ou change seulement sa valeur si il est déja existant
function test() {

    // Si l'élément DOM body contient dans sa liste de classe, la classe " dark ", la classe est retiré, le texte du bouton passe en theme sombre, et le cookie est créer avec la valeur clair
    if (document.body.classList.contains("dark")) {
          document.body.classList.remove("dark");
        texte.innerText = "Thème sombre";
        localStorage.setItem("theme", "clair");

    // Sinon, la fonction modeSombre est appeler
    } else {
        modeSombre();
    }
}

// Fonction modeSombre rajoute la class dark a l'élement body, le texte du bouton passe en mode theme claire, et le cookie est créer avec la valeur sombre
function modeSombre() {

    document.body.classList.add("dark");
    texte.innerText = "Thème clair";
    localStorage.setItem("theme", "sombre");
}

