// Variables
const number = document.querySelector("#number");
const icons = document.querySelectorAll(".icon");
const generateRandomCardButton = document.querySelector("#generateRandomCardButton");
const backgroundColorSelect = document.querySelector("#backgroundColorSelect");
const container = document.querySelector("#container");

const numbersPossibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; // Posibilidad de números
const iconsPossibilities = ["♦", "♥", "♠", "♣"]; // Posibilidad de iconos
const numberColorsPossibilities = ["blue", "green", "black", "yellow", "red"];

// Get Random Element Function
const getRandomElementFromArray = (array) => {
  return array[Math.floor(Math.random() * array.length)]
}

// Generate random card button function
generateRandomCardButton.addEventListener("click", (event) => {
  number.innerHTML = getRandomElementFromArray(numbersPossibilities);
  number.style.color = getRandomElementFromArray(numberColorsPossibilities);
  const randomIcon = getRandomElementFromArray(iconsPossibilities)
  icons.forEach(icon => {
    if (randomIcon === "♦" || randomIcon === "♥") icon.style.color = "red"; // Si es de diamantes o corazones, los iconos son rojos
    else icon.style.color = "black";
    icon.innerHTML = randomIcon;
  });
});

// Background color function
backgroundColorSelect.addEventListener("change", () => {
  switch (backgroundColorSelect.value) {
    case "green":
      container.style = "background: green;";
    break;
    case "red":
      container.style = "background: red;";
    break;
    case "blue":
      container.style = "background: blue;";
    break;
    case "yellow":
      container.style = "background: yellow;";
    break;
    case "black":
      container.style = "background: black;";
    break;

  }
})