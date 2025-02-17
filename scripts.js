let imagem = document.querySelector(".imagem-copo")
let circulo = document.querySelector(".circulo")
console.log(imagem)
function trocaimagem(endereco) {


    imagem.src= endereco
}

function trocacor (cor) {

    circulo.style.background=cor

}