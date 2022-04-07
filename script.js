function virarCarta(elementoClicado){
    elementoClicado.querySelector(".carta-verso").classList.add("carta-vira")
    elementoClicado.querySelector(".carta-verso").classList.add("carta-vira")
    elementoClicado.querySelector(".carta-vira").classList.remove("carta-verso")
    console.log(elementoClicado)
}

function comparador(){
    return Math.random() -0.5;
}

function darCartas(){
    
    
    
    let cartas = prompt("Com quantas cartas vc deseja jogar? (Valores pares entre 4 e 14)")

    while (cartas < 4 || cartas > 14 || cartas % 2 !== 0){
        


        cartas = prompt("Valor inválido! Com quantas cartas você quer jogar? (Valores pares entre 4 e 14)")

        

    }

    
    const grupoCartas = document.querySelector(".cartas-agrupadas")
    
    grupoCartas.innerHTML = ""

    const cartasVerso = [`<img src="imagens/bobrossparrot.gif">`,
    `<img src="imagens/explodyparrot.gif">`,
    `<img src="imagens/fiestaparrot.gif">`,
    `<img src="imagens/metalparrot.gif">`,
    `<img src="imagens/revertitparrot.gif">`,
    `<img src="imagens/tripletsparrot.gif">`,
    `<img src="imagens/unicornparrot.gif">`
    ];

    cartasVerso.sort(comparador)

    let cartasEmbaralhadas = []


    for (let i = 0; i < cartas/2; i++){

        let cartaVersoDupla = cartasVerso[i]
        

     cartasEmbaralhadas.push(` 
        <div class="cartas-especificas" onclick="virarCarta(this)">
            <div class="carta-frente face">
                <img src="imagens/front.png" >
            </div>
            <div class="carta-verso face">
                ${cartaVersoDupla}
            </div>
        </div>
        `)

        cartasEmbaralhadas.push(`
        <div class="cartas-especificas" onclick="virarCarta(this)">
            <div class="carta-frente face">
                <img src="imagens/front.png" >
            </div>
            <div class="carta-verso face">
                 ${cartaVersoDupla}
            </div>
        </div>
        `)
    
   }

   console.log(cartasEmbaralhadas)
   
   cartasEmbaralhadas.sort(comparador)

   console.log(cartasEmbaralhadas)

   for (let i2 = 0; i2 < cartas; i2++){
        grupoCartas.innerHTML += cartasEmbaralhadas[i2]
   }

}



