<template>
  <div class="music-player md:ml-[20%] p-3 select-none" v-if="$store.state.home.playerContent">
    <div class="flex md:flex-row flex-col items-center justify-between relative">
      <div class="img-wrap flex items-center md:w-[40%] w-full mx-auto">
        <!-- <img
          class="h-[66px] w-[66px] rounded"
          src="../assets/imgs/book.jpg"
          alt=""
        /> -->
        <div class="h-[66px] w-[66px] rounded bg-[#c4c4c4] text-center flex items-center justify-center">
         <h1 class="text-[#00000] font-semibold image-text text-[13px]">{{$store.state.home.playerContent.name}}</h1>
        </div>
        <div
          class="author flex flex-col ml-[15px] md:w-[40%] w-[60%] overflow-hidden"
        >
          <h1 class="mp3-name text-[16px] w-[50%] text-white font-medium">
            {{$store.state.home.playerContent.englishName}}
          </h1>
          <h1 class="author-name text-gray-400 text-[12px]">Alafsy</h1>
        </div>
        <div class="social flex items-center justify-evenly w-[20%]">
          <img
            class="h-[20px] w-[20px] cursor-pointer"
            src="../assets/imgs/saved.png"
            alt=""
          />
          <img
            class="h-[20px] w-[20px] cursor-pointer"
            src="../assets/imgs/share.png"
            alt=""
          />
        </div>
      </div>
      <div
        class="audio-wrap flex items-center md:w-[60%] w-full ml-[5%] md:mt-0 mt-3"
      >
        <div class="audio flex items-center w-[100%] md:!-ml-[18%]">
          <div
            @click="onPlay"
            class="play-button bg-white rounded-full md:p-[12px] p-[6px] hover:opacity-80 transition-all cursor-pointer"
          >
            <img
              v-if="!isPlay"
              class="md:h-[20px] md:w-[20px] h-[14px] w-[14px]"
              src="../assets/imgs/play.png"
              alt=""
            />
            <img
              v-else
              class="md:h-[20px] md:w-[20px] h-[14px] w-[14px]"
              src="../assets/imgs/pause.png"
              alt=""
            />
          </div>
          <span class="times-display text-white ml-3 text-[14x]">
            {{ currentTime }}/{{ duration }}
          </span>
          <input
            v-model="durationWidth"
            class="timeline md:ml-3 mx-3 md:w-[33%] w-[40%]"
            max="100"
            type="range"
            name="foo"
          />
          <div class="volume flex items-center md:ml-[3%]">
            <img
              @click="muteAudio"
              v-if="audioVolume > 0"
              class="transition-all hover:opacity-80 cursor-pointer md:h-[26px] md:w-[26px] w-[22px] h-[22px]"
              src="../assets/imgs/volume.png"
              alt=""
            />
            <img
              @click="muteAudio"
              v-else
              class="transition-all hover:opacity-80 cursor-pointer md:h-[20px] md:w-[20px] h-[18px] w-[18px]"
              src="../assets/imgs/mute.png"
              alt=""
            />
            <input
              @change="updateVolume"
              v-model="audioVolume"
              class="volumeline ml-3 w-[45%]"
              max="10"
              type="range"
              name="volume"
            />
          </div>
        </div>
        <audio
          class="hidden"
          id="player"
          controls
          controlslist="nodownload noplaybackrate"
        >
          <source src="../assets/audio.mp3" type="audio/mp3" />
        </audio>
      </div>
     <img @click="closePlayer" class="absolute left-[96%] -top-2  h-[14px] w-[14px] md:left-[78%] md:top-0 md:h-[16px] md:w-[16px] opacity-60 transition-all cursor-pointer hover:opacity-100" src="../assets/imgs/close.png" />
    </div>
  </div>
</template>

<script setup>
import { watchEffect, ref } from "vue";
import { useStore } from "vuex"

let isPlay = ref(false);
let currentTime = ref("00:00");
let duration = ref("00:00");
let durationWidth = ref(-10);
let audioVolume = ref(0);
const store = useStore()

function closePlayer(){
  store.state.home.activaSurahID = 0
  store.state.home.playerContent = null
}

watchEffect(function() {
 if(store.state.home.playerContent !== null){
  setTimeout(() => {
    isPlay.value = false
    onPlay()
  }, 100);
}
})

function onPlay() {
  var player = document.querySelector("#player");
  var timeline = document.querySelector(".timeline");
  var volumeEl = document.querySelector(".volumeline");

  if (isPlay.value == false) {
    isPlay.value = true;
    audioVolume.value = player.volume;
    volumeEl.style.backgroundSize = `${Math.floor(
      (100 * player.volume) / 1
    )}% 100%`;
    player.play();
    player.addEventListener("timeupdate", (event) => {
      currentTime.value = formatTime(player.currentTime);
      duration.value = formatTime(player.duration);
      durationWidth.value = Math.floor(
        (100 * player.currentTime) / player.duration
      );
      timeline.style.backgroundSize = `${Math.floor(
        (100 * player.currentTime) / player.duration
      )}% 100%`;
    });
  } else {
    isPlay.value = false;
    player.pause();
  }
}

function formatTime(audio_duration) {
  let sec = Math.floor(audio_duration);
  let min = Math.floor(sec / 60);
  min = min >= 10 ? min : "0" + min;
  sec = Math.floor(sec % 60);
  sec = sec >= 10 ? sec : "0" + sec;
  return min + ":" + sec;
}

function updateVolume() {
  var player = document.querySelector("#player");
  var volumeEl = document.querySelector(".volumeline");

  player.volume = audioVolume.value / 10;
  volumeEl.style.backgroundSize = `${Math.floor(
    (100 * player.volume) / 1
  )}% 100%`;
}

function muteAudio() {
  if (audioVolume.value > 0) {
    audioVolume.value = 0;
    updateVolume();
  } else {
    audioVolume.value = 10;
    updateVolume();
  }
}
</script>

<style scoped>
.image-text{
  text-shadow: 1px 1px 2px #00000079;
}

audio::-webkit-media-controls-play-button {
  display: none;
}

audio::-webkit-media-controls-panel {
  background-color: #181818 !important;
  border-radius: 0px !important;
  outline: none !important;
}

audio::-webkit-media-controls-current-time-display,
audio::-webkit-media-controls-time-remaining-display {
  display: none;
}

audio::-webkit-media-controls-timeline {
  background-color: #fff !important;
  border-radius: 100px;
  margin-left: 13px;
  margin-right: 13px;
  width: 50%;
}

/* Range input style */

.timeline {
  -webkit-appearance: none;
  height: 5px;
  border-radius: 20px;
  cursor: pointer;
  background-color: rgba(161, 161, 161, 0.884);
  background-size: 0% 100%;
  background-image: linear-gradient(white, white);
  background-repeat: no-repeat;
}

.volumeline {
  -webkit-appearance: none;
  height: 5px;
  border-radius: 20px;
  cursor: pointer;
  background-color: rgba(161, 161, 161, 0.884);
  background-size: 0% 100%;
  background-image: linear-gradient(white, white);
  background-repeat: no-repeat;
}

.timeline::-webkit-slider-thumb,
.volumeline::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  cursor: pointer;
  opacity: 0;
  transition: all 0.1s;
  background-color: white;
}

.timeline::-webkit-slider-thumb:hover,
.volumeline::-webkit-slider-thumb:hover {
  background-color: white;
}

.timeline:hover::-webkit-slider-thumb,
.volumeline:hover::-webkit-slider-thumb {
  opacity: 1;
}
</style>
