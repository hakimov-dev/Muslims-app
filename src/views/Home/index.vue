<template>
  <div class="main-page">
  <div class="alert alert-warning shadow-lg w-[93%] mx-auto sticky top-0">
   <div>
    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
    <span>Warning: This page is progressing this page have some problems by API servers... Sorry for quorted problems.</span>
   </div>
  </div>
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
