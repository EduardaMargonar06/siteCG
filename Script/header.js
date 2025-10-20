document.addEventListener("DOMContentLoaded", function () {
    const linkCSS = document.createElement("link");
    linkCSS.rel = "stylesheet";
    linkCSS.href = "CSS/style.css";
    document.head.appendChild(linkCSS);
    const headerHTML = `
  <header class="header">
        <div class="CG_menu">
            <img src="Imagens/Ratinha_CG.png" class="pitchula">
            <img class="logo" src="Imagens/CG-titulo.png" alt="Logo">
                <nav class="menu">                        
                    <a class="link" href="index.html">Início</a>
                    <a class="link" href="sobreNos.html">Sobre nós</a>
                    <a class="link" href="galeria_cg.html">Mídia</a>
                    <a class="link" href="CG_mulheres.html">Mulheres na Computação</a>
                    <a class="link" href="contatos_CG.html">Contatos</a>
                </nav>
        </div>
  </header>
  `;

    document.body.insertAdjacentHTML("afterbegin", headerHTML);
});
