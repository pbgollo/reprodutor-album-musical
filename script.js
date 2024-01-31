const botaoPlayPause = document.getElementById('play-pause');

const audioMusica = document.getElementById('audio-capitulo');

const   numeroFaixas = 24;

function tocarFaixa(){
    audioMusica.play();
}

botaoPlayPause.addEventListener('click', tocarFaixa);
