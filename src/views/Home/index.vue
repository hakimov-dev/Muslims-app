<template>
  <div class="main-page">
    <input
      class="md:hidden inline search outline-none border-[1px] text-white transition-all font-medium focus:border-gray-300 hover:border-gray-300 focus:border-gray-300 border-gray-500 w-[100%] p-2 px-10 bg-[#121416] rounded-[20px]"
      type="text"
      placeholder="Search surah..."
    />
    <div
      v-if="$store.state.home.surahList"
      class="cards flex justify-between items-center flex-wrap md:p-[3%]"
    >
      <Card v-for="item in $store.state.home.surahList" 
        @click="playAudio(item.number)" 
        :surah-about="item" />
    </div>
    <div
      v-else
      class="cards flex justify-between items-center flex-wrap md:p-[3%]"
    >
      <LoadingCard v-for="item in 8" />
    </div>
  </div>
</template>

<script setup>
import Card from "./components/mp3Card.vue";
import LoadingCard from "./components/loadingCard.vue"
import { useStore } from "vuex";

const store = useStore();

function playAudio(id){
 if(store.state.home.activaSurahID !== id){
  store.state.home.activaSurahID = 0
  store.state.home.playerContent = null
  store.state.home.playerAudios = []

  store.state.home.activaSurahID = id
  store.dispatch('home/getSurahById', id)
 }else{
   store.state.home.clickAgainCard = true
 }
}

store.dispatch("home/getAbouts");
</script>
