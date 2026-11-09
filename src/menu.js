import srcMarg from "./images/margheritta.jpg";

import srcDiav from "./images/diavola.jpg";

import srcQuat from "./images/quatro-formaghi.jpg";

import srcCapr from "./images/capriciosa.jpg";

export function loadMenuPage() {
  const main = document.createElement("main");

  const divMarg = document.createElement("div");

  const descMarg = document.createElement("div");

  const h2Marg = document.createElement("h2");
  const pMarg = document.createElement("p");

  const imgMarg = document.createElement("img");

  main.id = "menu";

  divMarg.id = "margheritta";
  divMarg.classList.add("pizza-info");

  imgMarg.src = srcMarg;
  imgMarg.alt = "Margheritta Pizza";

  h2Marg.textContent = "Margheritta";
  pMarg.textContent =
    "Clássica combinação italiana com molho de tomate artesanal,mozzarella de búfala derretida, folhas de manjericão fresco e um fio de azeite extra virgem.";

  descMarg.appendChild(h2Marg);
  descMarg.appendChild(pMarg);

  divMarg.appendChild(descMarg);
  divMarg.appendChild(imgMarg);

  main.appendChild(divMarg);

  const divDiav = document.createElement("div");

  const descDiav = document.createElement("div");

  const h2Diav = document.createElement("h2");
  const pDiav = document.createElement("p");

  const imgDiav = document.createElement("img");

  divDiav.id = "diavola";
  divDiav.classList.add("pizza-info");

  imgDiav.src = srcDiav;
  imgDiav.alt = "Diavola Pizza";

  h2Diav.textContent = "Diavola";
  pDiav.textContent =
    "Para os amantes de pimenta: molho de tomate, mozzarella derretida e generosas fatias de salame picante artesanal ao estilo italiano.";

  descDiav.appendChild(h2Diav);
  descDiav.appendChild(pDiav);

  divDiav.appendChild(descDiav);
  divDiav.appendChild(imgDiav);

  main.appendChild(divDiav);

  const divQuat = document.createElement("div");

  const descQuat = document.createElement("div");

  const h2Quat = document.createElement("h2");
  const pQuat = document.createElement("p");

  const imgQuat = document.createElement("img");

  divQuat.id = "quatro-formaghi";
  divQuat.classList.add("pizza-info");

  imgQuat.src = srcQuat;
  imgQuat.alt = "Quatro Formaggi Pizza";

  h2Quat.textContent = "Quatro Formaggi";
  pQuat.textContent =
    "Uma rica e cremosa seleção de quatro queijos: a base de mozzarella combinada com o toque marcante do gorgonzola, provolone defumado e parmesão ralado.";

  descQuat.appendChild(h2Quat);
  descQuat.appendChild(pQuat);

  divQuat.appendChild(descQuat);
  divQuat.appendChild(imgQuat);

  main.appendChild(divQuat);

  const divCapr = document.createElement("div");

  const descCapr = document.createElement("div");

  const h2Capr = document.createElement("h2");
  const pCapr = document.createElement("p");

  const imgCapr = document.createElement("img");

  divCapr.id = "Caprro-formaghi";
  divCapr.classList.add("pizza-info");

  imgCapr.src = srcCapr;
  imgCapr.alt = "Capriciosa Pizza";

  h2Capr.textContent = "Capriciosa";
  pCapr.textContent =
    "Uma receita cheia de sabor que leva molho de tomate, mozzarella,presunto cozido, cogumelos frescos, alcachofras marinadas e azeitonas pretas.";

  descCapr.appendChild(h2Capr);
  descCapr.appendChild(pCapr);

  divCapr.appendChild(descCapr);
  divCapr.appendChild(imgCapr);

  main.appendChild(divCapr);

  return main;
}
