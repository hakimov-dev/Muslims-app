<template>
  <div
    :id="surahAbout.number"
    :class="$store.state.home.activaSurahID == surahAbout.number ? '!bg-[#282828]' : ''"
    class="card cursor-pointer group transition-all hover:bg-[#282828] bg-[#171717] md:p-[8px] p-[6px] md:w-[235px] md:h-[310px] w-[175px] h-[250px] shadow-xl my-[20px] rounded-xl"
  >
    <div
      class="img-wrap flex flex-col md:h-[160px] h-[120px] overflow-hidden relative"
    >
      <div class="md:h-[160px] h-[120px] !rounded-xl shadow-xl bg-[#c4c4c4] select-none text-center flex items-center justify-center">
       <h1 class="text-[#000] font-semibold image-text text-[22px]">{{surahAbout.name}}</h1>
      </div>
      <img
        v-if="$store.state.home.activaSurahID !== surahAbout.number"
        :class="$store.state.home.activaSurahID !== surahAbout.number ? 'md:group-hover:top-[70%] group-hover:top-[60%]' : ''"
        class="transition-all h-[40px] w-[40px] p-[10px] rounded-full bg-white absolute top-[120%] md:left-[75%] left-[70%]"
        src="../../../assets/imgs/play.png"
        alt=""
      />

      <section
      v-if="$store.state.home.playerContent === null"
      :class="$store.state.home.activaSurahID == surahAbout.number ? 'top-[60%] md:top-[70%]' : ''" 
      class="h-[40px] w-[40px] p-[10px] rounded-full bg-white absolute top-[120%] md:left-[75%] left-[70%]">
      <span class="loader-player"></span>
      </section>
      
      <img
        v-else
        :class="$store.state.home.activaSurahID == surahAbout.number ? 'top-[60%] md:top-[70%]' : ''"
        class="transition-all h-[40px] w-[40px] p-[10px] rounded-full bg-white absolute top-[120%] md:left-[75%] left-[70%]"
        :src="$store.state.home.isPlayAudio == true ? require('../../../assets/imgs/pause.png') : require('../../../assets/imgs/play.png')"
        alt=""
      />
    </div>
    <div class="text-wrap flex flex-col p-3 text-white leading-[30px]">
      <h1 class="mp3-name text-[18px] font-medium flex items-center w-full">
        {{ surahAbout.englishName }} <span class="surah-name-arabic text-[11px] opacity-60 md:inline-block hidden ml-[5px]">({{surahAbout.name}})</span>
      </h1>
      <h1 class="mp3-author text-[14px] opacity-60">Alafasy</h1>
      <h1 class="ayah-number text-[14px] opacity-60">
        {{ surahAbout.numberOfAyahs }} ayahs
      </h1>
      <h1 class="revelation-type text-[14px] opacity-60 md:block hidden">
        Revelation type: {{ surahAbout.revelationType }}
      </h1>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  surahAbout: Object
});
</script>

<style scoped>
.loader-player{
  margin-top: -5.5px;
  margin-left: -5px;
   width: 30px;
    height: 30px;
    border: 5px solid;
    border-color: #131417 transparent;
    border-radius: 50%;
    display: inline-block;
    -webkit-animation: rotation 1s linear infinite;
            animation: rotation 1s linear infinite;
}

.image-text{
  text-shadow: 1px 1px 2px #00000079;
}


 @-webkit-keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
