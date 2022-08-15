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
          <div class="audio flex items-center flex-col">
            <div @click="onPlay" class="play-button bg-white rounded-full p-[12px] hover:opacity-80 transition-all cursor-pointer">
               <img v-if="!isPlay" class="h-[20px] w-[20px]" src="../assets/imgs/play.png" alt="">
               <img v-else class="h-[20px] w-[20px]" src="../assets/imgs/pause.png" alt="">
            </div>
            <span class="times-display">
              {{currentTime}}
              /
              {{duration}}
            </span>
          </div>
          <audio id="player" controls controlslist="nodownload noplaybackrate">
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

function onPlay(){
 var player = document.querySelector('#player')
  if(isPlay.value == false){
    isPlay.value = true
    player.play()
   }else{
    isPlay.value = false
    player.pause()
   }
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
</style>