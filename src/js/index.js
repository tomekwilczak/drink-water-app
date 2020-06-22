import "../scss/main.scss";

// uncomment the lines below to enable PWA
import { registerSW } from "./pwa.js";
registerSW();

/* place your code below */

let glassesQuant = 0;

const waterGlass = document.querySelector(".water-glass");
const addButton = document.querySelector(".button__add");
const removeButton = document.querySelector(".button__remove");
const glasses = document.querySelector(".water-glass__number");

addButton.addEventListener("click", () => {
  glassesQuant++;
  glasses.innerHTML = `${glassesQuant}`;
});

removeButton.addEventListener("click", () => {
  if (glassesQuant > 0) {
    glassesQuant--;
    glasses.innerHTML = `${glassesQuant}`;
  } else {
    glassesQuant = 0;
    glasses.innerHTML = `${glassesQuant}`;
  }
});
