import "./styles.css";

import { loadHomePage } from "./home.js";

const divContent = document.getElementById("content");

const main = loadHomePage();

divContent.appendChild(main);
