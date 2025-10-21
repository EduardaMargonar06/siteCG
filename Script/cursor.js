//cursor 

// Seleciona o elemento do cursor personalizado
const cursor = document.getElementById('custom-cursor');

// Variável para "frear" a criação de brilhos (performance)
let throttle = false;

// Mostra o cursor quando o mouse entrar na janela
document.addEventListener('mouseenter', () => {
    cursor.style.opacity = 1;
});

// Esconde o cursor quando o mouse sair da janela
document.addEventListener('mouseleave', () => {
    cursor.style.opacity = 0;
});

// Event listener principal que roda a cada movimento do mouse
document.addEventListener('mousemove', (e) => {
    // 1. Move a imagem do cursor
    // Usamos e.clientX e e.clientY para pegar a posição do mouse
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';

    // 2. Cria os brilhos (com o "freio")
    if (!throttle) {
        throttle = true; // Ativa o freio
        
        // Chama a função para criar um brilho na posição atual
        createSparkle(e.clientX, e.clientY);
        
        // Libera o freio depois de 50ms
        setTimeout(() => {
            throttle = false;
        }, 50); 
    }
});

function createSparkle(x, y) {
    // Cria um novo elemento <div>
    const sparkle = document.createElement('div');
    // Adiciona a classe CSS 'sparkle' que definimos
    sparkle.className = 'sparkle';

    // Posiciona o brilho onde o mouse estava
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';

    // Cria valores aleatórios para o movimento de "explosão"
    const randomX = (Math.random() - 0.5) * 60; // Movimento horizontal aleatório
    const randomY = (Math.random() - 0.5) * 60; // Movimento vertical aleatório

    sparkle.style.setProperty('--x', randomX + 'px');
    sparkle.style.setProperty('--y', randomY + 'px');

    // Adiciona o brilho na página
    document.body.appendChild(sparkle);

    // Remove o brilho da página depois que a animação terminar (1s)
    setTimeout(() => {
        sparkle.remove();
    }, 1000);
}