import "../scss/main.scss";

// Lines to enable PWA
import { registerSW } from "./pwa.js";
registerSW();

/* Variables definition */

const waterGlass = document.querySelector(".water-glass");
const addButton = document.querySelector(".button__add");
const removeButton = document.querySelector(".button__remove");
const waterGlasses = document.querySelector(".water-glass__counter");
let glassesCount = localStorage.getItem("glasses"); // Checking if localStorage exists

if (glassesCount) {
  waterGlasses.innerHTML = glassesCount;
} else {
  waterGlasses.innerHTML = "0";
}

addButton.addEventListener("click", (e) => {
  glassesCount++;
  waterGlasses.innerHTML = `${glassesCount}`;
  e.preventDefault();
  localStorage.setItem("glasses", glassesCount);
});

removeButton.addEventListener("click", (e) => {
  if (glassesCount > 0) {
    glassesCount--;
    waterGlasses.innerHTML = `${glassesCount}`;
    e.preventDefault();
    localStorage.setItem("glasses", glassesCount);
  } else {
    glassesCount = 0;
    waterGlasses.innerHTML = `${glassesCount}`;
    e.preventDefault();
    localStorage.setItem("glasses", glassesCount);
  }
});
