const cartasVerso = [`<img src="imagens/bobrossparrot.gif">`,
    `<img src="imagens/explodyparrot.gif">`,
    `<img src="imagens/fiestaparrot.gif">`,
    `<img src="imagens/metalparrot.gif">`,
    `<img src="imagens/revertitparrot.gif">`,
    `<img src="imagens/tripletsparrot.gif">`,
    `<img src="imagens/unicornparrot.gif">`
]

let timerInterval = setInterval(startTimer, 1000)
let cartaSelecionada1 = 0
let cartaSelecionada2 = 0
let contadorJogada = 0

function virarCarta(elementoClicado){
    elementoClicado.querySelector(".carta-verso").classList.add("carta-vira")
    elementoClicado.querySelector(".carta-vira").classList.remove("carta-verso")
    console.log(elementoClicado)
    selecionar(elementoClicado);
    contadorJogada++
    
}

function comparador(){
    return Math.random() -0.5;
}


let cartas


function darCartas(){
    

    clearInterval(timerInterval)

    contadorJogada = 0
    
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
                `
        }
        

        cartasEmbaralhadas.push(cartasObj.texto)

        cartasEmbaralhadas.push(cartasObj.texto)

        
   }

   
   cartasEmbaralhadas.sort(comparador)

  

   for (let i2 = 0; i2 < cartas; i2++){
        grupoCartas.innerHTML += cartasEmbaralhadas[i2]
   }


   
   
   
 
    setInterval(startTimer, 1000)
   

}



function selecionar(cartaClicada){
        
    

    cartaSelecionada = document.querySelector(".selecionado")

        if (cartaSelecionada == null){
            cartaClicada.classList.add("selecionado")
            cartaSelecionada1 = cartaClicada
        }
        if (cartaSelecionada !== null){
            cartaClicada.classList.add("selecionado")
            cartaSelecionada2 = cartaClicada
        }

        if (document.querySelectorAll(".selecionado").length == 2){
        console.log(document.querySelectorAll(".selecionado"))
            if (cartaSelecionada1.innerHTML === cartaSelecionada2.innerHTML){
                
                cartaSelecionada1.classList.remove("selecionado")
                cartaSelecionada1.classList.add("acertada")

                cartaSelecionada2.classList.remove("selecionado")
                cartaSelecionada2.classList.add("acertada")

                setTimeout(validarVitoria, 1000)

            }else{
                cartaSelecionada1.classList.remove("selecionado")
                cartaSelecionada2.classList.remove("selecionado")
                setTimeout( voltaCarta, 1000)
            }
        }

    
           
}
    


function voltaCarta(){
    cartaSelecionada1.querySelector(".carta-vira").classList.add("carta-verso")
    cartaSelecionada1.querySelector(".carta-verso").classList.remove("carta-vira")

    cartaSelecionada2.querySelector(".carta-vira").classList.add("carta-verso")
    cartaSelecionada2.querySelector(".carta-verso").classList.remove("carta-vira")
    cartaSelecionada1 = ''
    cartaSelecionada2 = ''
}

function validarVitoria(){
    
    if(document.querySelectorAll(".acertada").length === Number(cartas)){

        alert(`IHUL! VOCÊ VENCEU!!! Você venceu em ${contadorJogada} jogadas`)

        const resposta = prompt("Quer jogar novamente?")

        if (resposta === "sim"){
        darCartas()
        }
        if (resposta === "não"){
        setTimeout(window.close, 1000)
        }
    }
}

let sec = 0
let min = 0
    
function startTimer() {
    
   
    let acertadas = document.querySelectorAll(".acertada").length
    
    let timer = document.querySelector(".timer")

    
   
    if(acertadas != Number(cartas)){
        sec++
        console.log(timer)
        if(sec > 59){
            sec = 0
            min ++
        }
        timer.innerHTML = `0${min}:${sec}`
        if (sec > 9){
            timer.innerHTML = `0${min}:${sec}`
        }
        if(min > 9){
            timer.innerHTML = `${min}:${sec}`
        }
    }else{
        console.log(startTimer)
        clearInterval(timerInterval)
    }

}



