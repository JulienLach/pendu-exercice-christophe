// Lister les étapes du projet découpées en fonctionalités, écrire les fonction avec le nom qu'il faut
// sans obligatoirement les définir, je peux les définir plus tard.


// Choisir un mot aléatoirement pris dans le tableau mots.js
let motChoisi = mots[Math.floor(Math.random() * mots.length)];
console.log(motChoisi)
// Fonction masquer les lettres du mot, les remplacer par " _ " et afficher le mot caché. L'objet array transforme le motChois en array
let lettres = Array(motChoisi.length).fill(" _ ") // Mettre les lettres du mots choisi dans un tableau
console.log(lettres)
// Fonction afficher le mot sur la page
function afficherLeMotChoisi() {
  const motChoisiElement = document.getElementById("motChoisi")
  motChoisiElement.innerHTML = lettres.join(' ') // afficher le mot choisi caché avec les " _ " et recollé avec le .join avec un espace
}
afficherLeMotChoisi(); // appeller la fonction pour afficher le mot
// Déclarer une variable qui contient le nombre de mauvaises lettres testées
let mauvaisesLettres = 0
// Fonction deviner les bonnes lettres
function testerLettres() { }



// mettre les lettres choisies dans un tableau
// comparer la lettre choisi aux lettre du mot dans le tableau des lettres du mot
// si une lettre correspond, alors afficher la lettre trouvée du mot sur la page
// Sinon le nombre de coup restant est décrémenté