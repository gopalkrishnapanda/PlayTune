const player = document.querySelector("#player");
const song = document.querySelector("source");
const playPauseBtn = document.querySelector(".play-pause")
const nextBtn = document.querySelector("#next")
const prevBtn = document.querySelector("#prev")
var pause = true;
const songList = ["wake me up","Apologize","Bangarang","Be with you","Do you know"]
var songIndex = 3;

function play_pause(current){
    player.src = `music/${current}.mp3`;
    if (pause == true) {
        player.play();
        pause = false;
    }
    else {
        player.pause();
        pause = true;
    }
}
playPauseBtn.addEventListener("click", function () {
  play_pause(songList[songIndex]);
})

nextBtn.addEventListener("click",function(){
     if (songIndex == songList.length - 1){
        songIndex = 0;
     }
     else {
        songIndex++;
     }
     pause =  true;
     play_pause(songList[songIndex]);
})
prevBtn.addEventListener("click",function(){
     if (songIndex == 0){
        songIndex = songList.length - 1;
     }
     else songIndex--;
     pause =  true;
     play_pause(songList[songIndex]);
})