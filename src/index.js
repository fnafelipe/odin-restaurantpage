import "./styles.css";

import { loadHomePage } from "./home.js";

import { loadMenuPage } from "./menu.js";

import { loadAboutPage } from "./about.js";

const divContent = document.getElementById("content");

const main = loadHomePage();

divContent.appendChild(main);

const homeBtn = document.getElementById("home-button");
const menuBtn = document.getElementById("menu-button");
const aboutBtn = document.getElementById("about-button");

homeBtn.addEventListener("click", () => {
  divContent.innerHTML = "";
  const main = loadHomePage();
  divContent.appendChild(main);
});

menuBtn.addEventListener("click", () => {
  divContent.innerHTML = "";
  const main = loadMenuPage();
  divContent.appendChild(main);
});

aboutBtn.addEventListener("click", () => {
  divContent.innerHTML = "";
  const main = loadAboutPage();
  divContent.appendChild(main);
});
