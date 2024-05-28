function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio'){
        elemento.play();
    }
    else{
        //alert('Elemento não encontrado')
        console.log('Elemento não encontrado ou seletor inválido');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');


let contador = 0;

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;//template string

    tecla.onclick = function(){
        tocaSom(idAudio)
    }

    tecla.onkeydown = function (evento){
        
        if (evento.code === 'Space' || evento.code === 'Enter'){

            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function (){
        tecla.classList.remove('ativa');
    }

    //console.log(contador);
}

// function tocaSomClap () {
//     document.querySelector('#som_tecla_clap').play();
// } 

// document.querySelector('.tecla_clap').onclick = tocaSomClap;

// document.querySelector('.tecla_tim').onclick = function(){
//     document.querySelector('#som_tecla_tim').play();
// }