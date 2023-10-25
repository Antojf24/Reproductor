const songs = [
    {
        "id": 1,
        "title": "I Really Want to Stay at Your House",
        "image": "./img/IReallyWannaStayAtYourHouse.jpg",
        "audio": "./aud/I Really Want to Stay at Your House.mp3"
    },
    {
        "id": 2,
        "title": "Rules of Nature",
        "image": "./img/RulesOfNature.jpg",
        "audio": "./aud/Rules of Nature.mp3"
    },
    {
        "id": 3,
        "title": "Snake Eater",
        "image": "./img/SnakeEater.jpg",
        "audio": "./aud/Snake Eater.mp3"
    },
    {
        "id": 4,
        "title": "Beneath the Mask",
        "image": "./img/BeneathTheMask.jpg",
        "audio": "./aud/Beneath the Mask.mp3"
    }
];

const title = document.getElementById("nombre");
const img = document.getElementById("imagen");

const duration = document.getElementById("duracion");

const playPause = document.getElementById("play");
const repeat = document.getElementById("bucle");
const shuffle = document.getElementById("aleatorio");
const previus = document.getElementById("anterior");
const next = document.getElementById("siguiente");

const list = document.getElementById("lista");

let songsList = [];
let currentIdSong = 1;
let currentSong;
let audio = new Audio();
let repeatSong = false;
let shuffleSong = false;
let totalDuration;
let pause = true;

duration.value = 0;
audio.volume = 0.5;

songs.forEach(song =>{
    let div = document.createElement("div");
    div.classList = "cancion";
    div.id = `${song.id}`;
    div.innerHTML = `
        <img src="${song.image}" alt="Imagen">
        <div class="datos">
            <p>Canción:</p>
            <h4>${song.title}</h4>
            <audio src="${song.audio}"></audio>
        </div>
    `;
    div.addEventListener("click", () =>{
        setCurrentSong(song.id);
        playAudio();
    });
    list.append(div);
    let newSong = {
        "id": song.id, 
        "title": song.title, 
        "image": song.image,
        "audio": song.audio
    };
    songsList.push(newSong);
});

duration.addEventListener("change", () =>{
    let time = (duration.value * totalDuration) / 100;
    audio.currentTime = time;
    duration.value = time;
});

audio.addEventListener("durationchange", () =>{
    duration.value = 0;
    totalDuration = audio.duration;
});

audio.addEventListener("timeupdate", () => {
    duration.value = Math.floor((audio.currentTime * 100) / totalDuration);
});

audio.addEventListener("ended", () => {
    setTimeout(() => {
        if (audio.loop === false) {
        nextSong();
        }
    }, 1000);
});

repeat.addEventListener("click", () =>{
    if(audio.loop === false){
        audio.loop = true;
        repeat.setAttribute("src", "./img/bucleVerde.png");
    }else{
        audio.loop = false;
        repeat.setAttribute("src", "./img/bucle.png");
    }
});

shuffle.addEventListener("click", () =>{
    if(shuffleSong === false){
        shuffleSong = true;
        shuffle.setAttribute("src", "./img/aleatorioVerde.png");
    }else{
        shuffleSong = false;
        shuffle.setAttribute("src", "./img/aleatorio.png");
    }
});

previus.addEventListener("click", () =>{
    let actualCurrentIdSong = currentIdSong - 1;
    if(actualCurrentIdSong === 0){
        actualCurrentIdSong = songsList.length;
    }
    setCurrentSong(actualCurrentIdSong);
    playAudio();
});

next.addEventListener("click", () =>{
    let newCurrentIdSong;
    if(shuffleSong === true){
        newCurrentIdSong = Math.floor(Math.random() * songsList.length) + 1;
    }else{
        newCurrentIdSong = currentIdSong + 1;
        if(newCurrentIdSong > songsList.length){
        newCurrentIdSong = 1;
        }
    }
    setCurrentSong(newCurrentIdSong);
    playAudio();
});

playPause.addEventListener("click", () =>{
    if(pause == false){
        playPause.setAttribute("src", "./img/pausa.png");
        pause = true;
        audio.pause();
    }else if(pause == true){
        playPause.setAttribute("src", "./img/play.png");
        pause = false;
        audio.play();
    }
});

setCurrentSong(currentIdSong);

function setCurrentSong(id){
    currentSong = songsList.find(song => song.id === id);
    currentIdSong = id;
    title.innerText = currentSong.title;
    img.src = currentSong.image;
    audio.src = currentSong.audio;
    audio.load();
};

function playAudio(){
    audio.src = currentSong.audio;
    audio.play
};