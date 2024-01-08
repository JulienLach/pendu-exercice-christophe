


// Fonction mot à deviner
const motADeviner = "Test"
const motADevinerElement = document.getElementById("motADeviner")
const motADevinerCache = motADeviner.split("").map(() => " _ ");
motADevinerElement.innerHTML = motADevinerCache



// Fonction coups restants
let coupsRestant = 10
const coupsRestantElement = document.getElementById("coups-restants")
coupsRestantElement.innerHTML = coupsRestant
const buttonsLetter = document.querySelectorAll(".btn-letter");

buttonsLetter.forEach(function (button) {
  button.addEventListener("click", function () {
    coupsRestant = coupsRestant - 1;
    coupsRestantElement.innerHTML = coupsRestant;
  });
});