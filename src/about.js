export function loadAboutPage() {
  const main = document.createElement("main");

  const h2 = document.createElement("h2");

  const p1 = document.createElement("p");

  const p2 = document.createElement("p");

  h2.textContent =
    "O Segredo de uma Verdadeira Pizza Italiana, Guardado por Gerações";

  p1.textContent =
    "A nossa história começou há mais de quatro décadas, nas colinas da Campânia, onde aprendemos que uma pizza de verdade exige paciência, paixão e respeito às tradições. Na nossa pizzaria, trazemos a essênciada Itália para a sua mesa: utilizamos apenas farinha de trigo tipo 00 importada, molho de tomate San Marzano artesanal e mozzarella de búfala fresca. Cada massa é aberta à mão e fermenta lentamente por 48 horas antes de ser assada em nosso forno a lenha, garantindo aquela borda alta, aerada e levemente chamuscada que você só encontra nasclássicas pizzarias de Nápoles.";

  p2.textContent =
    "Venha nos visitar e vivenciar uma autêntica noite italiana! Estamos localizados na Rua das Oliveiras, nº 123, no coração do bairro Jardins. Para reservas de mesas ou pedidos para viagem, entre em contato conosco pelo telefone (11) 98765-4321 ou pelo WhatsApp.Acompanhe também nossas redes sociais @AutenticaPizzaria para conferir as especialidades da semana, nossos vinhos artesanais e os horários especiais de funcionamento nos feriados. Esperamos por você!";

  main.id = "about";
  main.appendChild(h2);
  main.appendChild(p1);
  main.appendChild(p2);

  return main;
}
