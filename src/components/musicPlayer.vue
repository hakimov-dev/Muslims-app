<template>
    <div class="music-player md:ml-[20%] p-3 select-none">
        <div class="flex items-center justify-between">
         <div class="img-wrap flex items-center w-[40%]">
          <img class="h-[66px] w-[66px] rounded" src="https://i.scdn.co/image/ab67616d00004851be302672e7dd977906f343c8" alt="" />
          <div class="author flex flex-col ml-[15px] w-[25%] overflow-hidden">
           <h1 class="mp3-name text-[16px] w-[50%] text-white font-medium">
             Oq libos 
           </h1>
           <h1 class="author-name text-gray-400 text-[12px]">
             Green 71
           </h1>
          </div>
          <div class="social flex items-center justify-evenly w-[20%]">
            <img class="h-[20px] w-[20px] cursor-pointer" src="../assets/imgs/saved.png" alt="" />
            <img class="h-[20px] w-[20px] cursor-pointer" src="../assets/imgs/share.png" alt="" />
          </div>
         </div>
         <div class="audio-wrap flex items-center w-[60%]">
          <div class="audio flex items-center w-[100%] md:!-ml-[15%]">
            <div @click="onPlay" class="play-button bg-white rounded-full p-[12px] hover:opacity-80 transition-all cursor-pointer">
               <img v-if="!isPlay" class="h-[20px] w-[20px]" src="../assets/imgs/play.png" alt="">
               <img v-else class="h-[20px] w-[20px]" src="../assets/imgs/pause.png" alt="">
            </div>
            <span class="times-display text-white ml-3 text-[14x]">
              {{currentTime}}/{{duration}}
            </span>
            <input  v-model="durationWidth" class="timeline ml-3 w-[33%]" max="100" type="range" name="foo">
            <div class="volume flex items-center md:ml-[3%]">
               <img v-if="audioVolume > 0" class="h-[26px] w-[26px]" src="../assets/imgs/volume.png" alt="">
               <img v-else class="h-[20px] w-[20px]" src="../assets/imgs/mute.png" alt="">
              <input v-model="audioVolume" class="volumeline ml-3 w-[45%]" max="10" type="range" name="volume">
            </div>
          </div>
          <audio class="hidden" id="player" controls controlslist="nodownload noplaybackrate">
           <source src="../assets/audio.mp3" type="audio/mp3">
          </audio>
         </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

let isPlay = ref(false)
let currentTime = ref('00:00')
let duration = ref('00:00')
let durationWidth = ref(-10)
let audioVolume = ref(0)

function onPlay(){
 var player = document.querySelector('#player')
 var timeline = document.querySelector('.timeline')
 var volumeEl = document.querySelector('.volumeline')
  
  if(isPlay.value == false){
    isPlay.value = true
    audioVolume.value = player.volume
    volumeEl.style.backgroundSize = `${Math.floor((100 * player.volume) / 1)}% 100%`
    player.play()
    player.addEventListener('timeupdate', event => {
      currentTime.value = formatTime(player.currentTime)
      duration.value = formatTime(player.duration)
      durationWidth.value = Math.floor((100 * player.currentTime) / player.duration)
      timeline.style.backgroundSize = `${Math.floor((100 * player.currentTime) / player.duration)}% 100%`
    })
   }else{
    isPlay.value = false
    player.pause()
   }
}

function formatTime(audio_duration){
 let sec = Math.floor( audio_duration );
 let min = Math.floor( sec / 60 );
  min = min >= 10 ? min : '0' + min;
  sec = Math.floor( sec % 60 );
  sec = sec >= 10 ? sec : '0' + sec;
  return min + ":"+ sec;
}
</script>

<style scoped>
audio::-webkit-media-controls-play-button{
  display: none;
}

audio::-webkit-media-controls-panel{
      background-color: #181818 !important;
      border-radius: 0px !important;
      outline: none !important;
    }

  audio::-webkit-media-controls-current-time-display, audio::-webkit-media-controls-time-remaining-display{
   display: none;
  }  

  audio::-webkit-media-controls-timeline {
    background-color: #fff !important;
    border-radius:100px ;
    margin-left: 13px;
    margin-right: 13px; 
    width: 50%;
  }

  /* Range input style */

  .timeline{
  -webkit-appearance: none;
   height: 5px;
   border-radius: 20px;
   cursor: pointer;
   background-color: rgba(161, 161, 161, 0.884);
   background-size: 0% 100%;
   background-image: linear-gradient(white, white);
   background-repeat: no-repeat;
  }

 .volumeline{
  -webkit-appearance: none;
   height: 5px;
   border-radius: 20px;
   cursor: pointer;
   background-color: rgba(161, 161, 161, 0.884);
   background-size: 0% 100%;
   background-image: linear-gradient(white, white);
   background-repeat: no-repeat;
  }

.timeline::-webkit-slider-thumb, .volumeline::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  cursor: pointer;
  opacity: 0;
  transition: all .1s;
  background-color: white;
}

.timeline::-webkit-slider-thumb:hover, .volumeline::-webkit-slider-thumb:hover {
  background-color: white;
}

.timeline:hover::-webkit-slider-thumb, .volumeline:hover::-webkit-slider-thumb{
  opacity: 1;
}

</style>