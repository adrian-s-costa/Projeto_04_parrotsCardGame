const cartasVerso = [`<img src="imagens/bobrossparrot.gif">`,
    `<img src="imagens/explodyparrot.gif">`,
    `<img src="imagens/fiestaparrot.gif">`,
    `<img src="imagens/metalparrot.gif">`,
    `<img src="imagens/revertitparrot.gif">`,
    `<img src="imagens/tripletsparrot.gif">`,
    `<img src="imagens/unicornparrot.gif">`
]



let cartaSelecionada1 = 0
let cartaSelecionada2 = 0


function virarCarta(elementoClicado){
    elementoClicado.querySelector(".carta-verso").classList.add("carta-vira")
    elementoClicado.querySelector(".carta-verso").classList.add("carta-vira")
    elementoClicado.querySelector(".carta-vira").classList.remove("carta-verso")
    console.log(elementoClicado)
    selecionar(elementoClicado);
}

function comparador(){
    return Math.random() -0.5;
}


let cartas


function darCartas(){
    
    
    
    cartas = prompt("Com quantas cartas vc deseja jogar? (Valores pares entre 4 e 14)")

    while (cartas < 4 || cartas > 14 || cartas % 2 !== 0){
        


        cartas = prompt("Valor inválido! Com quantas cartas você quer jogar? (Valores pares entre 4 e 14)")

        

    }

    
    const grupoCartas = document.querySelector(".cartas-agrupadas")
    
    grupoCartas.innerHTML = ""

    cartasVerso.sort(comparador)

    let cartasEmbaralhadas = []


    for (let i = 0; i < cartas/2; i++){

        let cartaVersoDupla = cartasVerso[i]

        var cartasObj = {
            texto: ` 
                <div class="cartas-especificas" onclick="virarCarta(this)">
                    <div class="carta-frente face">
                        <img src="imagens/front.png" >
                    </div>
                    <div class="carta-verso face">
                        ${cartaVersoDupla}
                    </div>
                </div>
                `, 
            status: "não selecionado"
        }
        

        cartasEmbaralhadas.push(cartasObj.texto)

        cartasEmbaralhadas.push(cartasObj.texto)

        
   }

   
   cartasEmbaralhadas.sort(comparador)

  

   for (let i2 = 0; i2 < cartas; i2++){
        grupoCartas.innerHTML += cartasEmbaralhadas[i2]
   }


   

   

   

}



function selecionar(cartaClicada){
        
    cartaClicada.classList.add("selecionado")


    if (document.querySelectorAll(".selecionado").length % 2 !== 0) {
        cartaSelecionada1 = cartaClicada
        console.log(cartaSelecionada1)
    }

    if (document.querySelectorAll(".selecionado").length % 2 == 0) {
        cartaSelecionada2 = cartaClicada
        console.log(cartaSelecionada2)
            
        
        if(cartaSelecionada1.innerHTML === cartaSelecionada2.innerHTML){
            
            cartaSelecionada1.classList.add("acertada")
            cartaSelecionada2.classList.add("acertada")
            console.log(document.querySelectorAll(".acertada").length)

            if(document.querySelectorAll(".acertada").length === Number(cartas)){
               setTimeout(vitoria, 1000)
            }else{
                cartaSelecionada1 = ''
                cartaSelecionada2 = ''
            }

        }else{

            cartaSelecionada1 = ''
            cartaSelecionada2 = ''
            
            voltaCarta()
        }
    }
}

function voltaCarta(){
    cartaSelecionada1.querySelector(".carta-verso").classList.remove("carta-vira")
    cartaSelecionada1.querySelector(".carta-verso").classList.remove("carta-vira")
    cartaSelecionada1.querySelector(".carta-vira").classList.add("carta-verso")

    cartaSelecionada2.querySelector(".carta-verso").classList.remove("carta-vira")
    cartaSelecionada2.querySelector(".carta-verso").classList.remove("carta-vira")
    cartaSelecionada2.querySelector(".carta-vira").classList.add("carta-verso")
}

function vitoria(){
    prompt("parabens vc venceu")

    const resposta = prompt("quer jogar dnv?")

    if (resposta == "sim"){
        darCartas()
    }
    else{
        
    }
}


