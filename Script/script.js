const entrar = document.getElementById("login");
const modal = document.getElementById("modal-login");
const closeBtn = document.getElementsByClassName("close")[0];
const loginForm = document.getElementById("login-form");
const mensagem = document.getElementById("mensagem");
const btnFavoritos = document.getElementById("favoritos");
const tema = document.getElementById("tema");
const listaFavoritos = document.getElementById("lista-favoritos");
const favoritosSection = document.getElementById("favoritos-section");
const voltarBtn = document.getElementById("voltar");

const banner = document.querySelector(".banner");
const loginSection = document.querySelector(".login");
const filmesSection = document.querySelector(".filmes");
const filmesFavoritados = [];
const filmesBotoes = document.querySelectorAll(".filmes .card button");
const imagens = [
    "https://picsum.photos/id/1018/1200/400",
    "https://picsum.photos/id/1015/1200/400",
    "https://picsum.photos/id/1019/1200/400"
];

let indice = 0;
const slideImg = document.getElementById("slide");

function abrirModal() {
    modal.style.display = "block";
}

function fecharModal() {
    modal.style.display = "none";
}

function atualizarListaFavoritos() {
    listaFavoritos.innerHTML = "";
    filmesFavoritados.forEach(function(filme) {
        const item = document.createElement("div");
        item.className = "favorito-item";
        item.innerHTML = `
            <img src="${filme.imagem}" alt="${filme.titulo}">
            <h4>${filme.titulo}</h4>
        `;
        listaFavoritos.appendChild(item);
    });
}

function mostrarFavoritos() {
    banner.style.display = "none";
    loginSection.style.display = "none";
    filmesSection.style.display = "none";
    atualizarListaFavoritos();
    favoritosSection.style.display = "block";
    voltarBtn.style.display = "inline-block";
}

function mostrarPaginaPrincipal() {
    favoritosSection.style.display = "none";
    banner.style.display = "block";
    loginSection.style.display = "block";
    filmesSection.style.display = "flex";
    voltarBtn.style.display = "none";
}

function alternarTema() {
    document.body.classList.toggle("light-theme");
}

function alternarFavorito(botao) {
    const card = botao.parentElement;
    const titulo = card.querySelector("h3").innerText;
    const imagem = card.querySelector("img").src;
    const filme = { titulo, imagem };
    const index = filmesFavoritados.findIndex(f => f.titulo === titulo);

    if (index === -1) {
        filmesFavoritados.push(filme);
        botao.innerText = "Favoritado";
    } else {
        filmesFavoritados.splice(index, 1);
        botao.innerText = "Favoritar";
    }

    if (favoritosSection.style.display === "block") {
        atualizarListaFavoritos();
    }
}

entrar.addEventListener("click", abrirModal);
closeBtn.addEventListener("click", fecharModal);
window.addEventListener("click", function(event) {
    if (event.target === modal) {
        fecharModal();
    }
});

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    if (usuario === "" || senha === "") {
        alert("Preencha todos os campos!");
        return;
    }

    alert("Login realizado com sucesso!");
    fecharModal();
    mensagem.innerHTML = `Olá, ${usuario}!`;
    document.getElementById("login").style.display = "none";
    document.getElementById("favoritos").style.display = "inline-block";
    filmesBotoes.forEach(function(botao) {
        botao.style.display = "block";
    });
});

tema.addEventListener("click", alternarTema);
btnFavoritos.addEventListener("click", mostrarFavoritos);
voltarBtn.addEventListener("click", mostrarPaginaPrincipal);

filmesBotoes.forEach(function(botao) {
    botao.addEventListener("click", function() {
        alternarFavorito(botao);
    });
});

setInterval(function() {
    slideImg.style.opacity = 0;
    setTimeout(function() {
        indice = (indice + 1) % imagens.length;
        slideImg.src = imagens[indice];
        slideImg.style.opacity = 1;
    }, 400);
}, 3000);