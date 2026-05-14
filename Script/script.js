// SLIDESHOW

let imagens = [
    'img/banner1.png',
    'img/banner2.png',
    'img/banner3.png'
]

let slideAtual = 0

function trocarSlide(){

    slideAtual++

    if(slideAtual >= imagens.length){
        slideAtual = 0
    }

    document.getElementById('slide').src = imagens[slideAtual]
}

setInterval(trocarSlide, 3000)


// BOTÕES COMPRAR

let botoes = document.querySelectorAll('.comprar')

for(let i = 0; i < botoes.length; i++){

    botoes[i].addEventListener('click', function(){

        alert('Produto adicionado ao carrinho!')
    })
}


// LOGIN

function fazerLogin(){

    let email = document.getElementById('email').value

    let senha = document.getElementById('senha').value

    if(email == '' || senha == ''){

        alert('Preencha todos os campos!')
    }

    else{

        alert('Login realizado com sucesso!')
    }
}

        alert('Preencha todos os campos!')
    }

    else{

        alert('Login realizado com sucesso!')
    }
}// SLIDESHOW

let imagens = [
    'img/banner1.png',
    'img/banner2.png',
    'img/banner3.png'
]

let slideAtual = 0

function trocarSlide(){

    slideAtual++

    if(slideAtual >= imagens.length){
        slideAtual = 0
    }

    document.getElementById('slide').src = imagens[slideAtual]
}

setInterval(trocarSlide, 3000)


// BOTÕES COMPRAR

let botoes = document.querySelectorAll('.comprar')

for(let i = 0; i < botoes.length; i++){

    botoes[i].addEventListener('click', function(){

        alert('Produto adicionado ao carrinho!')
    })
}


// LOGIN

function fazerLogin(){

    let email = document.getElementById('email').value

    let senha = document.getElementById('senha').value

    if(email == '' || senha == ''){

        alert('Preencha todos os campos!')
    }

    else{

        alert('Login realizado com sucesso!')
    }
}