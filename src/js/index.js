// Pegar os elementos que vão expandir/esconder
// Em formato de array, usar uma variável para navegar nesses elementos
// Criar função acordeon.

const perguntas =  document.querySelectorAll('.item');
const respostas = document.querySelectorAll('.resposta');

esconderRespostasPrimeiroLoad();
function esconderRespostasPrimeiroLoad(){
    for(i = 0; i < respostas.length; i++){
        respostas[i].hidden = 'true'
    }
}
//ATÉ AQ OK
//PEGAR ELEMENTOS DE RESPOSTA UM POR UM USANDO ID


// console.log(perguntas)

perguntas[0].addEventListener('click', ()=>{
    resposta = 0
    mostrarRespostaEsconderOutras(resposta)
})

perguntas[1].addEventListener('click', ()=>{
    resposta = 1
    mostrarRespostaEsconderOutras(resposta)
})

perguntas[2].addEventListener('click', ()=>{
    resposta = 2
    mostrarRespostaEsconderOutras(resposta)
})

function mostrarRespostaEsconderOutras(resposta){
    for (i = 0; i <= respostas.length -1; i++){
        if(respostas[i] != respostas[resposta]){
            respostas[i].hidden = true
            esconderSetaAberta(i)
        }else if(respostas[resposta].hidden === true){
            respostas[resposta].hidden = false
            mostrarSetaAberta(resposta)
        }else if(respostas[resposta].hidden === false){
            respostas[resposta].hidden = true
            esconderSetaAberta(resposta)
        }
    }
}

function mostrarSetaAberta(resposta){
    perguntas[resposta].classList.replace ('seta-fechada', 'seta-aberta')
    perguntas[resposta].classList.add ('ativo')
    console.log(perguntas[resposta].classList)
}

function esconderSetaAberta(resposta){
    perguntas[resposta].classList.replace ('seta-aberta', 'seta-fechada')
}

