document.addEventListener("DOMContentLoaded", function () {
    // 1. Crie e anexe a tag de link para o CSS.
    // Lembre-se de substituir "style.css" pelo nome do seu arquivo CSS.
    const linkCSS = document.createElement("link");
    linkCSS.href = "style.css"; 
    linkCSS.rel = "stylesheet";
    document.head.appendChild(linkCSS);

    // 2. Defina o HTML completo do cabeçalho.
    const headerHTML = `
    <header class="header">
          <img src="Imagens/Ratinha_CG.png" class="pitchula">
          <img class="logo" src="Imagens/CG-titulo.png" alt="Logo">
          <nav class="menu">                        
              <a class="link" href="index.html">Início</a>                    
              <a class="link" href="sobreNos.html">Sobre Nós</a>
              <a class="link" href="galeria_cg.html">Mídia</a>
              <a class="link" href="CG_mulheres.html">Mulheres na Computação</a>
              <a class="link" href="sobrecurso.html">Sobre o Curso</a>
              <a class="link" href="contatos_CG.html">Contatos</a>
          </nav>

          <nav class="menu_resp">
            <div class="menu-toggle">
              <img src="Imagens/menu.png">
            </div>
            <ul class="nav-menu">
              <li><a href="index.html">Início</a></li> <hr>
              <li><a href="sobreNos.html">Sobre nós</a></li> <hr style="border:none; height:.5px; background-color:rgb(143, 0, 74);">
              <li><a href="galeria_cg.html">Mídia</a></li> <hr>
              <li><a href="CG_mulheres.html">Mulheres na Computação</a></li> <hr style="border:none; height:.5px; background-color:rgb(143, 0, 74);">
              <li><a href="sobrecurso.html">Sobre o Curso</a></li> <hr>
              <li><a href="contatos_CG.html">Contatos</a></li> <hr style="border:none; height:.5px; background-color:rgb(143, 0, 74);"
            </ul>
          </nav>
    </header>
    `;

    // 3. Insere o HTML do cabeçalho no corpo do documento.
    document.body.insertAdjacentHTML("afterbegin", headerHTML);

    // 4. Selecione o botão e o menu SOMENTE AGORA, após terem sido adicionados.
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    // 5. Adicione o ouvinte de evento para o clique no botão de alternância.
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
});