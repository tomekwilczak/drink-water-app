import "../scss/main.scss";

// Lines to enable PWA
import { registerSW } from "./pwa.js";
registerSW();

// Variables definition

const addButton = document.querySelector(".button__add");
const removeButton = document.querySelector(".button__remove");
const waterGlasses = document.querySelector(".water-glass__counter");
const key = new Date().toISOString().slice(0, 10);
let glassesCount = localStorage.getItem(key);

// Checking if key already exists in localstorage
if (key) {
  waterGlasses.innerHTML = glassesCount;
} else {
  waterGlasses.innerHTML = "0";
}

// Adding another glass of water
addButton.addEventListener("click", (e) => {
  e.preventDefault();
  glassesCount++;
  waterGlasses.innerHTML = `${glassesCount}`;
  localStorage.setItem(key, glassesCount);
});

// Removing a glass of water
removeButton.addEventListener("click", (e) => {
  if (glassesCount > 0) {
    e.preventDefault();
    glassesCount--;
    waterGlasses.innerHTML = `${glassesCount}`;
    localStorage.setItem(key, glassesCount);
  } else {
    glassesCount = 0;
    waterGlasses.innerHTML = `${glassesCount}`;
    e.preventDefault();
    localStorage.setItem(key, glassesCount);
  }
});
