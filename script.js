const video = document.getElementById("videoMain")
const playBtn1 = document.getElementById("play1")
const playBtn2 = document.getElementById("play2")
const fullScreenBtn = document.getElementById("full_screen")
const seekBar = document.getElementById("seek")
const seekSlider = document.getElementById("red")
const volume = document.getElementById("volume_input")
const soundIcon = document.getElementById("sound")

playBtn1.addEventListener("click", play, false)
playBtn2.addEventListener("click", play, false)
fullScreenBtn.addEventListener("click", fullScreen, false)
seekBar.addEventListener("change", seekBarUpdate, false)
video.addEventListener("timeupdate", seekTimeUpdate, false)
volume.addEventListener("input", vol, false)
soundIcon.addEventListener("click", mute, false)

function play() {
    if (video.paused) {
        video.play()
        playBtn1.innerHTML = "<span class='fa-solid fa-pause'></span>"
        playBtn2.innerHTML = "<span class='fa-solid fa-pause'></span>"
        playBtn1.style.opacity = "0"
        playBtn1.style.cursor = "unset"
        
    } else {
        video.pause()
        playBtn1.innerHTML = "<span class='fa-solid fa-play'></span>"
        playBtn2.innerHTML = "<span class='fa-solid fa-play'></span>"
        playBtn1.style.opacity = "1"
        playBtn1.style.cursor = "pointer"
    }
}

function fullScreen() {
    video.requestFullscreen()
}

function seekBarUpdate() {
    let seekTo = video.duration * (seekBar.value / 100)
    video.currentTime = seekTo
}
function seekTimeUpdate() {
    let time = video.currentTime * (100 / video.duration)
    seekBar.value = time
    seekSlider.style.width = time + "%"
}
function vol(e) {
    video.volume = e.target.value
    if(e.target.value){
        video.muted = false
        soundIcon.innerHTML = "<i class='fa-solid fa-volume-high'></i>"
    }
}
function mute() {
    if (!video.muted) {
        video.muted = true
        soundIcon.innerHTML = "<i class='fa-solid fa-volume-xmark'></i>"
    }else{
        video.muted = false
        soundIcon.innerHTML = "<i class='fa-solid fa-volume-high'></i>"
    }
}



