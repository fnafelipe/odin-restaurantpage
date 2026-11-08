export function loadHomePage() {
  const main = document.createElement("main");

  const h1 = document.createElement("h1");

  const spanGreen = document.createElement("span");
  spanGreen.textContent = "Arte ";
  spanGreen.id = "green";

  const spanWhite = document.createElement("span");
  spanWhite.textContent = "Della";
  spanWhite.id = "white";

  const spanRed = document.createElement("span");
  spanRed.textContent = " Pizza";
  spanRed.id = "red";

  h1.appendChild(spanGreen);
  h1.appendChild(spanWhite);
  h1.appendChild(spanRed);

  const h2 = document.createElement("h2");
  h2.textContent = "Authentic artesanal pizza.";

  const p = document.createElement("p");
  p.textContent =
    "We combine classic long-fermentation techniques with premium, seasonal ingredients. The result is a light, airy crust and an unforgettable flavor profile that will elevate your pizza night.";

  main.appendChild(h1);
  main.appendChild(h2);
  main.appendChild(p);

  main.id = "home"

  return main;
}
