// Variables
const number = document.querySelector("#number");
const icons = document.querySelectorAll(".icon");
const generateRandomCardButton = document.querySelector("#generateRandomCardButton");

const numbersPossibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; // Posibilidad de números
const iconsPossibilities = ["♦", "♥", "♠", "♣"]; // Posibilidad de iconos

// Get Random Element Function
const getRandomElementFromArray = (array) => {
  return array[Math.floor(Math.random() * array.length)]
}

// Onload function
generateRandomCardButton.addEventListener("click", (event) => {
  number.innerHTML = getRandomElementFromArray(numbersPossibilities);
  const randomIcon = getRandomElementFromArray(iconsPossibilities)
  icons.forEach(icon => {
    if (randomIcon === "♦" || randomIcon === "♥") icon.style.color = "red"; // Si es de diamantes o corazones, los iconos son rojos
    else icon.style.color = "black";
    icon.innerHTML = randomIcon;
  });
});