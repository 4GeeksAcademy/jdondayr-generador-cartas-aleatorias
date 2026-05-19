// Variables
const number = document.querySelector("#number");
let icons = document.querySelectorAll(".icon");

const numbersPossibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; // Posibilidad de números
const iconsPossibilities = ["♦", "♥", "♠", "♣"]; // Posibilidad de iconos
const cardClasses = []

// Get Random Element Function
const getRandomElementFromArray = (array) => {
  return array[Math.floor(Math.random() * array.length)]
}

// Onload function
window.addEventListener("load", (event) => {
  number.innerHTML = getRandomElementFromArray(numbersPossibilities);
  const randomIcon = getRandomElementFromArray(iconsPossibilities)
  icons.forEach(icon => {
    if (randomIcon === "♦" || randomIcon === "♥") icon.style.color = "red"; // Si es de diamantes o corazones, los iconos son rojos
    icon.innerHTML = randomIcon;
  });
})