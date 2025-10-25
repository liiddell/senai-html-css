// Quando o site carregar, o header aparece suavemente
window.addEventListener("load", () => {
  const header = document.querySelector("header");
  if (header) header.classList.add("aparecer");
});

// Seleciona elementos que vão ter animação ao rolar
const elementos = document.querySelectorAll(".texto, .imagem-bike01, .imagem-bike02, .bike-feed");

// Função que ativa as animações ao rolar a página
function animarAoRolar() {
  elementos.forEach(el => {
    const posicao = el.getBoundingClientRect().top;
    const alturaTela = window.innerHeight * 0.85;
    if (posicao < alturaTela) {
      el.classList.add("visivel");
    }
  });
}

// Executa quando rola e também ao abrir a página
window.addEventListener("scroll", animarAoRolar);
window.addEventListener("load", animarAoRolar);

// Animação do botão "Comprar"
const botao = document.querySelector(".s1 button");
if (botao) {
  botao.addEventListener("mouseenter", () => botao.classList.add("pulse"));
  botao.addEventListener("mouseleave", () => botao.classList.remove("pulse"));
}
