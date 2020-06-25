import "../scss/main.scss";

// Lines to enable PWA
import { registerSW } from "./pwa.js";
registerSW();

// Variables definition

const addButton = document.querySelector(".button-add--js");
const removeButton = document.querySelector(".button-remove--js");
const waterGlasses = document.querySelector(".glass__counter--js");
const infoIcon = document.querySelector(".info-icon--js");
const infoText = document.querySelector(".info-text--js");
const key = new Date().toLocaleString().slice(0, 10);
let glassesCount = "";
const localeStorageValue = localStorage.getItem(key);

// Checking if key already exists in localstorage
if (localeStorageValue) {
  glassesCount = localeStorageValue;
  waterGlasses.innerHTML = glassesCount;
} else {
  localStorage.setItem(key, 0);
}

// Adding another glass of water
addButton.addEventListener("click", (e) => {
  e.preventDefault();
  glassesCount++;
  waterGlasses.innerHTML = glassesCount;
  localStorage.setItem(key, glassesCount);
});

// Removing a glass of water
removeButton.addEventListener("click", (e) => {
  if (glassesCount > 0) {
    e.preventDefault();
    glassesCount--;
    waterGlasses.innerHTML = glassesCount;
    localStorage.setItem(key, glassesCount);
  }
});

infoIcon.addEventListener("mouseenter", (e) => {
  infoText.classList.toggle("info-closed");
});

infoIcon.addEventListener("mouseleave", (e) => {
  infoText.classList.toggle("info-closed");
});
