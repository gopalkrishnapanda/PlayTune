const player = document.querySelector("#player");
const song = document.querySelector("source");
const playPauseBtn = document.querySelector(".play-pause")
const nextBtn = document.querySelector("#next")
const prevBtn = document.querySelector("#prev")
const bar = document.querySelector(".bar")
const pausebtn = document.querySelector("#pause")
var pause = true;
const songList = ["wake me up","Apologize","Bangarang","Be with you","Do you know","warriyo-Mortals"]
var songIndex = 3;

function play_pause(current,time){
    player.src = `music/${current}.mp3`;
    if (pause == true) {
        player.currentTime = time;
        pausebtn.style.visibility = "visible"
        playPauseBtn.style.visibility = "hidden"
        player.play();
        pause = false;
    }
    else {
        player.currentTime = time;
        pausebtn.style.visibility = "hidden";
        playPauseBtn.style.visibility = "visible"
        player.pause();
        pause = true;
    }
}
playPauseBtn.addEventListener("click", function () {
  player.currentTime = (bar.value)*player.duration/100;
  play_pause(songList[songIndex],player.currentTime);
})
pausebtn.addEventListener("click", function () {
  player.currentTime = (bar.value)*player.duration/100;
  play_pause(songList[songIndex],player.currentTime);
})

nextBtn.addEventListener("click",function(){
     if (songIndex == songList.length - 1){
        songIndex = 0;
     }
     else {
        songIndex++;
     }
     pause =  true;
     play_pause(songList[songIndex],0);
})
prevBtn.addEventListener("click",function(){
     if (songIndex == 0){
        songIndex = songList.length - 1;
     }
     else songIndex--;
     pause =  true;
     play_pause(songList[songIndex],0);
})
player.addEventListener('timeupdate',() => {
    var completion = player.currentTime/player.duration*100;
    bar.value = `${completion}`;
})

bar.addEventListener('change',() => {
    player.currentTime = (bar.value)*player.duration/100;
})