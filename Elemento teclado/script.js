let keyText = document.querySelector("#key-text");
let codeText = document.querySelector("#code-text");
let quadrado = document.querySelector("#quadrado");
let distanciaDaEsquerda = 0

document.addEventListener("keydown", (e) => {
    if (e.code == "ArrowRight") {
        distanciaDaEsquerda = distanciaDaEsquerda + 10
        console.log(distanciaDaEsquerda);
        quadrado.style.left = distanciaDaEsquerda + "px"
    }
})