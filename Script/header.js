document.addEventListener("DOMContentLoaded", function () {
    const linkCSS = document.createElement("link");
    document.head.appendChild(linkCSS);
    const headerHTML = `
  <header class="header">
        <img src="Imagens/Ratinha_CG.png" class="pitchula">
        
        <img class="logo logo-desktop" src="Imagens/CG-titulo.png" alt="Logo Código de Garotas">
        
        <img class="logo logo-mobile" src="Imagens/titulo_diminuida.png" alt="Logo Código de Garotas">
        
        <nav class="menu">                        
            <a class="link" href="index.html">Início</a>                    
            <a class="link" href="sobreNos.html">Sobre nós</a>
            <a class="link" href="galeria_cg.html">Mídia</a>
            <a class="link" href="CG_mulheres.html">Mulheres na Computação</a>
            <a class="link" href="contatos_CG.html">Contatos</a>
        </nav>
  </header>
  `;

    document.body.insertAdjacentHTML("afterbegin", headerHTML);
});