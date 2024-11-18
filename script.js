// Atualizar o ano automaticamente no copyright
document.addEventListener("DOMContentLoaded", function () {
  const year = new Date().getFullYear();
  document.getElementById("year").textContent = year;
});

// Suavidade de navegação ao rolar a página
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    // Suavizar a rolagem
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

// Botão de "voltar ao topo"
window.addEventListener("scroll", function () {
  const scrollButton = document.getElementById("back-to-top");
  if (window.scrollY > 300) {
    scrollButton.style.display = "block"; // Mostra o botão
  } else {
    scrollButton.style.display = "none"; // Esconde o botão
  }
});

// Voltar ao topo ao clicar no botão
document.getElementById("back-to-top").addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
