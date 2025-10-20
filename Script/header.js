document.addEventListener("DOMContentLoaded", function () {
  const headerHTML = `
  <header class="header">
    <nav class="menu_topo_CG">
        <div class="CG_menu">
            <a href="MainCG.html">
                <img class="logo_CG" src="Imagens/CG-titulo.png" alt="Logo">
            </a>
            <nav class="menu_itens_CG">
                <div class="secao_menu_CG">
                    <nav class="secundario_menu_CG_1">
                        <a class="secundario_link" href="sobreNos.html">Sobre nós</a>
                        <a class="secundario_link" href="galeria_cg.html">Mídia</a>
                        <a class="secundario_link" href="CG_mulheres.html">Mulheres na Computação</a>
                        <a class="secundario_link" href="contatos_CG.html">Contatos</a>
                    </nav>
                </div>
            </nav>
        </div>
    </nav>
  </header>
  `;

  document.body.insertAdjacentHTML("afterbegin", headerHTML);
});
