function virarCarta(elementoClicado){
    elementoClicado.querySelector(".carta-verso").classList.add("carta-vira")
    elementoClicado.querySelector(".carta-vira").classList.remove("carta-verso")
    console.log(elementoClicado)
}