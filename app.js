const playBtn = document.querySelector('.playIcon');
const downloadBtn = document.querySelector('.downloadIcon');
const pauseBtn = document.querySelector('.pauseIcon');
const songPlayer = document.querySelector('.player');


const audio = new Audio();
audio.src = '/Alan Silvestri — The Avengers.mp3';
audio.loop = false;


function loadAudio() {
    audio.play();

    let sliderPosition = audio.duration * (songPlayer.value / 100);
    audio.currentTime = sliderPosition;

    setInterval(() => {
        let position = 0;
        position = audio.currentTime * (100/ audio.duration);
        songPlayer.value = position;
        if (audio.ended) {
            window.location.reload(false);
        }
    }, 1000);
}

function pauseAudio() {
    audio.pause();
}

playBtn.addEventListener('click', () => {
    playBtn.style.display = 'none';
    pauseBtn.style.display = 'block';
    loadAudio();

    pauseBtn.addEventListener('click', () => {
        playBtn.style.display = 'block';
        pauseBtn.style.display = 'none';
        pauseAudio();
    })

});