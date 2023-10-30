let biblioteca = [];
    
function cadastro(nome, autor, ano) {
    var livro = {
        titulo: nome,
        autor: autor,
        ano: ano
    };
    biblioteca.push(livro);
}

function apagarLivros() {
    biblioteca.length = 0;
    exibirMensagem();
    // mostrarOcultarCarrossel();
}

function verificarCamposVazios() {
    let nome = document.getElementById('nomeLivro').value;
    let autor = document.getElementById('autorLivro').value;
    let ano = document.getElementById('anoLivro').value;
    let mensagem = document.getElementById('mensagem');

    if (nome === "" || autor === "" || ano === "") {
        mensagem.textContent = "Cadastre um livro";
        return false;
    }

    mensagem.textContent = "";
}

function adicionar() {
    let nome = document.getElementById('nomeLivro').value;
    let autor = document.getElementById('autorLivro').value;
    let ano = document.getElementById('anoLivro').value;
    cadastro(nome, autor, ano);
    exibirMensagem();
    // mostrarOcultarCarrossel();

    ++imgIndice;
    carregar();

    //  // Exibir o carrossel após o cadastro de um livro
    //  document.querySelector('.carrossel').style.display = 'block';
}

function mostrarLivros() {
    for (let x of biblioteca) {
        console.log(x.titulo, x.autor, x.ano);
    }
    let quantidadeLivros = biblioteca.length;
    console.log("Total de livros cadastrados: " + quantidadeLivros);
    exibirMensagem();

    // if (quantidadeLivros > 0) {
    //     mostrarCarrossel(); // Chama a função para mostrar o carrossel se houver livros cadastrados.
    // }
} 

// function mostrarCarrossel() {
//     const carrossel = document.getElementById('carrossel');
//     carrossel.style.display = 'block'; // Exibe o carrossel quando houver livros cadastrados.
// }

function exibirMensagem(){
    let mensagem = document.getElementById('mensagem');
    if (biblioteca.length == 0) {
        mensagem.textContent = "Cadastre um livro";
    }
    else {
        mensagem.textContent = biblioteca.length + " livros cadastrados";
    }
}

let imgIndice = 0;
const IMAGENS = ['image01.jpg', 'image02.jpg', 'image03.jpg', 'image04.jpg', 'image05.jpg', 'image06.jpg', 'image07.jpg']; 
const prevButton = document.getElementById('anterior');
const nextButton = document.getElementById('proximo');

var IMG = document.getElementById('carrosselImagem');

function carregar() {
    if (imgIndice < 0) {
        imgIndice = IMAGENS.length - 1;
    }
    else if (imgIndice >= IMAGENS.length) {
        imgIndice = 0;
    }
    IMG.src = IMAGENS[imgIndice];
}

// function mostrarOcultarCarrossel() {
//     const carrossel = document.getElementById('carrossel');
//     if (biblioteca.length > 0) {
//         carrossel.style.display = 'block';
//     } else {
//         carrossel.style.display = 'none';
//     }
// }

prevButton.addEventListener('click', () => {
    --imgIndice;
    carregar();
});

nextButton.addEventListener('click', () => {
    ++imgIndice;
    carregar();
});

carregar();

