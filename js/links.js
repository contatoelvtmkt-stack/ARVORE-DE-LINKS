// Árvore de links Elevate: entrada animada e ano do rodapé
(function () {
  var ano = document.getElementById('ano');
  if (ano) ano.textContent = new Date().getFullYear();
  requestAnimationFrame(function () {
    requestAnimationFrame(function () { document.documentElement.classList.add('ready'); });
  });
})();
