// ====== Controle Automático do Carrossel ======
(function() {
  const maxSlides = 8;        // total de slides
  const intervalTime = 4000;  // tempo entre slides (ms)
  let atual = 1;

  setInterval(() => {
    atual++;
    if (atual > maxSlides) atual = 1;
    const radio = document.getElementById('radio' + atual);
    if (radio) radio.checked = true;
  }, intervalTime);
})();