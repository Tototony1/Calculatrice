/* Récupération des éléments HTML */
const touches = [...document.querySelectorAll('.bouton')];      // Touches dans un tableau
const listeKeycode = touches.map(touche => touche.dataset.key); // Keycode
const ecran = document.querySelector('.ecran');                 // div Ecran

/* Ecouteur d'évènement lorsqu'une touche est appuyée */
document.addEventListener('keydown', (e) => {
    const valeur = e.which.toString();
    calculer(valeur)
})

/* Ecouteur d'évènement lors du clic sur un bouton */
document.addEventListener('click', (e) => {
    const valeur = e.target.dataset.key;
    calculer(valeur)
})

/* Fonction qui calcule les valeurs entrées */
function calculer(valeur) {
    if (listeKeycode.includes(valeur)) {    // Test pour voir si la touche appuyée est dans le tableau 'listeKeycode'
        switch (valeur) {
            case '8':                       // Touche effacer
                ecran.textContent = "";
                break;
            case '13':                      // Touche entrée
                const calcul = eval(ecran.textContent);
                ecran.textContent = calcul;
                break;
            default:                        // Autre touches de la liste
                const indexKeycode = listeKeycode.indexOf(valeur);
                const touche = touches[indexKeycode];
                ecran.textContent += touche.innerHTML;
        }
    }
}

/* Affiche une erreur à l'utilisateur */
window.addEventListener('error', (e) => {
    alert('Une erreur est survenue dans votre calcul : ' + e.message)
})