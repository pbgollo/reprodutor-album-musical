const botaoPlayPause = document.getElementById('play-pause');
const botaoAvancar = document.getElementById('proximo');
const botaoVoltar = document.getElementById('anterior');
const audioMusica = document.getElementById('audio-musica');
const nomeMusica = document.getElementById('faixa');
const numeroFaixas = 24;
let tocando = 0;
let faixaAtual = 1;

var faixasAlbum = [
    "Rockstar Made",
    "Go2DaMoon (feat. Kanye West)",
    "Stop Breathing",
    "Beno!",
    "JumpOutTheHouse",
    "M3tamorphosis (feat. Kid Cudi)",
    "Slay3r",
    "No Sl33p",
    "New Tank",
    "Teen X (feat. Future)",
    "Meh",
    "Vamp Anthem",
    "New N3on",
    "Control",
    "Punk Monk",
    "On That Time",
    "King Vamp",
    "Place",
    "Sky",
    "Over",
    "ILoveUIHateU",
    "Die4Guy",
    "Not PLaying",
    "F33l Lik3 Dyin",
];

function tocarFaixa(){
    audioMusica.play();
    tocando = 1;
    botaoPlayPause.classList.remove('bi-play-circle-fill');
    botaoPlayPause.classList.add('bi-pause-circle-fill');
}

function pausarFaixa(){
    audioMusica.pause();
    tocando = 0;
    botaoPlayPause.classList.remove('bi-pause-circle-fill');
    botaoPlayPause.classList.add('bi-play-circle-fill');
}

function tocarOuPausar(){
    if (tocando === 0){
        tocarFaixa();
    } else {
        pausarFaixa()
    }
}

function proximaFaixa(){
    if (faixaAtual === numeroFaixas){
        faixaAtual = 1;
    } else {
        faixaAtual = faixaAtual + 1;
    }
    audioMusica.src = './musics/wlr/' + faixaAtual + '.mp3';
    tocarFaixa();
    atualizaNomeFaixa();
}

function voltarFaixa(){
    if (faixaAtual === 1){
        faixaAtual = numeroFaixas;
    } else {
        faixaAtual = faixaAtual - 1;
    }
    audioMusica.src = './musics/wlr/' + faixaAtual + '.mp3';
    tocarFaixa();
    atualizaNomeFaixa();
}

function atualizaNomeFaixa (){
    nomeMusica.innerText = '#' + faixaAtual + ' - ' + faixasAlbum[faixaAtual-1];
}

botaoPlayPause.addEventListener('click', tocarOuPausar);
botaoAvancar.addEventListener('click', proximaFaixa);
botaoVoltar.addEventListener('click', voltarFaixa);