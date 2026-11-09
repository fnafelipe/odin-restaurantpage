import "./styles.css";

import { loadMenuPage } from "./menu.js";

const divContent = document.getElementById("content");

const main = loadMenuPage();

divContent.appendChild(main);
