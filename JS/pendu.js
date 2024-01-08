// Choisir un mot aléatoirement pris dans le tableau mots.js
let motChoisi = mots[Math.floor(Math.random() * mots.length)];
console.log(motChoisi)

// Déclarer une variable qui contient un maximum de 5 essais 
const coupsRestantElement = document.getElementById("coups-restants")
let coupsRestant = 5
coupsRestantElement.textContent = coupsRestant

// Fonction masquer les lettres du motChoisi, les remplacer par " _ " et afficher le mot caché. 
// L'objet array transforme le motChoisi en array exemple ["T","e","s","t"]
let lettres = Array(motChoisi.length).fill(" _ ") // Mettre les lettres du mots choisi dans un tableau avec la méthode fill qui remplace tous les éléments du array par un élément défini
console.log(lettres)

// Fonction afficher le mot sur la page
function afficherLeMotChoisi() {
  const motChoisiElement = document.getElementById("motChoisi")
  motChoisiElement.innerHTML = lettres.join(' ') // afficher le mot choisi caché avec les " _ " et recollé avec le .join avec un espace
}
afficherLeMotChoisi(); // appeller la fonction une première fois pour afficher le mot au chargement de la page

// Fonction deviner les bonnes lettres
function testerLettres() {
  const lettreInput = document.getElementById("lettre") // attraper le input
  const lettreTeste = lettreInput.value.toLocaleLowerCase(); // prendre la valeur du input
  console.log(lettreTeste);

  // vérifier si la lettre testée est inclue dans le mot choisi
  if (motChoisi.includes(lettreTeste)) {
    // mettre à jour le array lettres avec les lettreTese trouvées
    for (let i = 0; i < motChoisi.length; i++) { // boucle for pour parcourir les lettre du motChoisi
      if (motChoisi[i] === lettreTeste) { // si la lettre testé est égale à une lettre dans le array des lettres du mot choisi
        lettres[i] = lettreTeste // la lettre égale prend la valeur de la lettre testé et remplace le " _ "
      }
    }
    // Check if the word is completely guessed
    if (!lettres.includes(' _ ')) { // si le array lettre ne contient plus de " _ " alors afficher gagné
      document.querySelector(".main").innerHTML = `<div class="perdu-header">GAGNÉ</div><div>
        <button id="recommencer" onclick="location.reload()">Recommencer</button>
      </div>`;
    }
  } else {
    // Incorrect guess
    coupsRestant--;
    coupsRestantElement.textContent = coupsRestant

    if (coupsRestant === 0) { // si nombre de coups === 0 alors afficher perdu
      document.querySelector(".main").innerHTML = `<div class="perdu-header">PERDU</div><div>
        <button id="recommencer" onclick="location.reload()">Recommencer</button>
      </div>`;
    }
  }

  // Mettre à jour le motChoisi en rappelant la fonction afficher le mot
  // une fois que l'on a fait tourner la boucle de teste des lettres
  afficherLeMotChoisi();
  // vider l'input de lettre
  lettreInput.value = ""
}

// Fonction boutton recommencer
const recommencer = document.getElementById("recommencer")
recommencer.addEventListener("click", function () {
  location.reload()
})