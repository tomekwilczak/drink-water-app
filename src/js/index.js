import "../scss/main.scss";

// Lines to enable PWA
import { registerSW } from "./pwa.js";
registerSW();

// Variables definition

const addButton = document.querySelector(".button__add");
const removeButton = document.querySelector(".button__remove");
const waterGlasses = document.querySelector(".glass__counter");
const infoIcon = document.querySelector(".info-icon--js");
const infoText = document.querySelector(".info-text--js");
const key = new Date().toISOString().slice(0, 10);
let glassesCount = "";

// Checking if key already exists in localstorage
if (localStorage.getItem(key)) {
  glassesCount = localStorage.getItem(key);
  waterGlasses.innerHTML = glassesCount;
} else {
  localStorage.setItem(key, 0);
  waterGlasses.innerHTML = "0";
  console.log("Ustawione 0");
}

// Adding another glass of water
addButton.addEventListener("click", (e) => {
  e.preventDefault();
  glassesCount++;
  waterGlasses.innerHTML = glassesCount;
  localStorage.setItem(key, glassesCount);
  console.log(`Ustawiono ${glassesCount}`);
});

// Removing a glass of water
removeButton.addEventListener("click", (e) => {
  if (glassesCount > 0) {
    e.preventDefault();
    glassesCount--;
    waterGlasses.innerHTML = glassesCount;
    localStorage.setItem(key, glassesCount);
  } else {
    glassesCount = 0;
    waterGlasses.innerHTML = glassesCount;
    e.preventDefault();
    localStorage.setItem(key, glassesCount);
  }
});

infoIcon.addEventListener("mouseenter", (e) => {
  infoText.classList.toggle("info-closed");
});

infoIcon.addEventListener("mouseleave", (e) => {
  infoText.classList.toggle("info-closed");
});
