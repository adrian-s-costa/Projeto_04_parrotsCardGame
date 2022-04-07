function virarCarta(elementoClicado){
    elementoClicado.querySelector(".carta-verso").classList.add("carta-vira")
    elementoClicado.querySelector(".carta-verso").classList.add("carta-vira")
    elementoClicado.querySelector(".carta-vira").classList.remove("carta-verso")
    console.log(elementoClicado)
}

function darCartas(){
    
    
    
    let cartas = prompt("Com quantas cartas vc deseja jogar? (Valores pares entre 4 e 14)")

    while (cartas < 4 || cartas > 14 || cartas % 2 !== 0){
        
        console.log(cartas)

        cartas = prompt("Valor inválido! Com quantas cartas você quer jogar? (Valores pares entre 4 e 14)")

        

    }

    
    const grupoCartas = document.querySelector(".cartas-agrupadas")
    
    grupoCartas.innerHTML = ""

    for (let i = 0; i < cartas; i++){

    grupoCartas.innerHTML += ` 
        <div class="cartas-especificas" onclick="virarCarta(this)">
            <div class="carta-frente face">
                <img src="imagens/front.png" >
            </div>
            <div class="carta-verso face">
                verso
            </div>
        </div>

    `
   }
}

