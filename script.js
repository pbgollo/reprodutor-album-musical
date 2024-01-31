const botaoPlayPause = document.getElementById('play-pause');
const botaoAvancar = document.getElementById('proximo');
const audioMusica = document.getElementById('audio-musica');
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
    "Not PLaying",
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
    "ILoveUIHateU (feat. Trippie Redd)",
    "Die4Guy",
    "Not From The Industry",
    "F33l Lik3 Dyin",
    "Place (feat. Drake) [Deluxe Edition]"
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
}

botaoPlayPause.addEventListener('click', tocarOuPausar);
botaoAvancar.addEventListener('click', proximaFaixa);
