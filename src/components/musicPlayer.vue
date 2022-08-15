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
          <audio controls controlslist="nodownload">
           <source id="player" src="../assets/audio.mp3" type="audio/mp3">
          </audio>
         </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style></style>