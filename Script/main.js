//Usado para fazer as imagens do Carrossel passarem automaticamente

let counter = 1; // Inicializa o contador com 1, que corresponde ao primeiro slide

document.getElementById("radio1").checked = true; // Marca o primeiro botão de rádio como selecionado, o que exibe o primeiro slide do carrossel

setInterval(function(){ //A função 'proximaImagem' sempre será chamada de cinco em cinco segundos. 

    proximaImagem();

}, 5000);


function proximaImagem(){ //Aumenta o nosso contador em uma unidade a cada interação, passando assim os slides. 

    counter++;

    if(counter > 4){

        counter = 1; //Volta para a primeira imagem, pois temos apenas quatro imagens em nosso carrossel. 
    
    }

    document.getElementById("radio" + counter).checked = true; //Pega o botão atual e o deixa ativo, mudando para a imagem que corresponde ao radio atual. 

}