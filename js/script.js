
// script.js
function toggleDicas() {
  const dicas = document.getElementById("dicasExtras");
  const btn = document.querySelector('.btn-acao'); // ou um ID para facilitar
  if (dicas) {
    const isMostrado = dicas.classList.toggle("mostrar");
    if (btn) {
      btn.textContent = isMostrado ? '💡 Ocultar dicas extras' : '💡 Mostrar dicas extras';
    }
  }
}


function toggleDarkMode() {
  const btn = document.querySelectorAll('.btn-acao')[1]; // se for o segundo botão, ou use um ID
  const isDark = document.body.classList.toggle("modo-escuro");
  if (btn) {
    btn.textContent = isDark ? '☀️ Modo Claro' : '🌙 Alternar Modo Noturno';
  }
}


window.addEventListener('load', () => {
  if (!sessionStorage.getItem('boasVindas')) {
    alert("Bem-vindo ao Guia Digital para Idosos! 😊");
    sessionStorage.setItem('boasVindas', 'ok');
  }
});

console.log("Script carregado")
