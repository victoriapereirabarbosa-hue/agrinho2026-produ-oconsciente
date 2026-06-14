const toggleBtn = document.getElementById("toggle-theme");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
  toggleBtn.textContent = document.body.classList.contains("light-theme") ? "🌙" : "☀️";
});

// Acessibilidade extra: atalhos de teclado para aumentar/diminuir fonte
document.addEventListener("keydown", (event) => {
  if (event.ctrlKey && event.key === "+") {
    document.body.style.fontSize = "larger";
  }
  if (event.ctrlKey && event.key === "-") {
    document.body.style.fontSize = "smaller";
  }
});
