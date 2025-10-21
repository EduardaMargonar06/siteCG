document.addEventListener("DOMContentLoaded", function () {
    const linkCSS = document.createElement("link");
    document.head.appendChild(linkCSS);
    const footerHTML = `
    <footer class="footer">
        <p>&copy; 2024 Código de Garotas. Todos os direitos reservados.</p>
    </footer>
  `;

    document.body.insertAdjacentHTML("beforeend", footerHTML);
});

