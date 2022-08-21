<template>
  <div
    :id="surahAbout.number"
    class="card cursor-pointer group transition-all hover:bg-[#282828] bg-[#171717] md:p-[10px] p-[6px] md:w-[240px] md:h-[310px] w-[175px] h-[250px] shadow-xl my-[20px] rounded-xl"
  >
    <div
      class="img-wrap flex flex-col md:h-[160px] h-[120px] overflow-hidden relative"
    >
      <img
        class="md:h-[160px] h-[120px] !rounded-xl shadow-xl"
        src="https://kartinkin.net/uploads/posts/2021-07/1626954887_7-kartinkin-com-p-koran-fon-krasivo-7.jpg"
        alt=""
      />
      <img
        class="group-hover:top-[70%] transition-all h-[40px] w-[40px] p-[10px] rounded-full bg-white absolute top-[120%] left-[75%]"
        src="../../../assets/imgs/play.png"
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

<style></style>
