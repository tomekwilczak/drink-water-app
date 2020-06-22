import "../scss/main.scss";

// Lines to enable PWA
import { registerSW } from "./pwa.js";
registerSW();

/* Variables definition */
let glassesQuant = 0;

const waterGlass = document.querySelector(".water-glass");
const addButton = document.querySelector(".button__add");
const removeButton = document.querySelector(".button__remove");
const glasses = document.querySelector(".water-glass__number");
const entry = localStorage.getItem("entry"); // Checking if localStorage exists
let result = "";

if (entry) {
  result = entry;
}

// glassesQuant.value = result;

addButton.addEventListener("click", (e) => {
  glassesQuant++;
  glasses.innerHTML = `${glassesQuant}`;
  e.preventDefault();
  localStorage.setItem("glasses", glassesQuant);
});

removeButton.addEventListener("click", (e) => {
  if (glassesQuant > 0) {
    glassesQuant--;
    glasses.innerHTML = `${glassesQuant}`;
    e.preventDefault();
    localStorage.setItem("glasses", glassesQuant);
  } else {
    glassesQuant = 0;
    glasses.innerHTML = `${glassesQuant}`;
    e.preventDefault();
    localStorage.setItem("glasses", glassesQuant);
  }
});

// // Skopiowane z simple editor

// const saveButton = document.querySelector(".save-button--js");
// const loadButton = document.querySelector(".load-button--js");
// const clearButton = document.querySelector(".clear-button--js");
// const deleteButton = document.querySelector(".delete-button--js");
// const textarea = document.querySelector(".textarea--js");

// // // Jeśli localStorage istnieje, to pod result podpinamy entry (wartośc z localStorage), jeśli nie, to result zostaje pusty

// textarea.value = result;

// loadButton.addEventListener("click", (e) => {
//   e.preventDefault();
//   textarea.value = localStorage.getItem("entry");
// });

// saveButton.addEventListener("click", (e) => {
//   e.preventDefault();
//   localStorage.setItem("entry", textarea.value);
// });
