function jogar() {
  const mostraConteudo = document
    .querySelector(".hidden")
    .classList.toggle("mostraConteudo");

  const buttaoJogar = document
    .querySelector(".buttom")
    .classList.toggle("hidden");

  const conteudoInicial = document
    .querySelector(".comeco_jogo")
    .classList.toggle("hidden");
}

function sortear() {
  let randonNumber1 = Math.floor(Math.random() * 6) + 1;
  let randonNumber2 = Math.floor(Math.random() * 6) + 1;

  let randomImgSource1 = "img/images/dice" + randonNumber1 + ".png"; // img/images/dice4.png
  let randomImgSource2 = "img/images/dice" + randonNumber2 + ".png";

  let img1 = document.querySelectorAll("img")[0]; // Pega a posição do img
  img1.setAttribute("src", randomImgSource1);

  let img2 = document.querySelectorAll("img")[1];
  img2.setAttribute("src", randomImgSource2);

  if (randonNumber1 > randonNumber2) {
    document.querySelector(".titulo_container").innerHTML =
      "O Jogador 1 ganhou";
  } else if (randonNumber2 > randonNumber1) {
    document.querySelector(".titulo_container").innerHTML = "O jogaor 2 ganhou";
  } else {
    document.querySelector(".titulo_container").innerHTML = "Empate";
  }
}

function encerraJogo() {
  // Oculta o container do jogo
  const containerJogo = document.querySelector(".container");
  containerJogo.classList.remove("mostraConteudo");

  // Exibe o botão começar
  const buttonJogar = document.querySelector(".buttom");
  buttonJogar.classList.remove("hidden");

  // Exibe o conteúdo inicial
  const conteudoInicial = document.querySelector(".comeco_jogo");
  conteudoInicial.classList.remove("hidden");
}
