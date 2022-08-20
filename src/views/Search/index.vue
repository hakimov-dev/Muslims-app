<template>
    <div class="search-result">
        <div class="flex flex-col p-[3%] w-full">
        <!-- Search result links -->
         <div class="flex flex-col items-start w-full">
           <h1 class="title text-[22px] text-white">Search result links</h1>
           <!-- Content links -->
           <div class="content-links flex flex-col items-center w-[80%]">
            <div class="flex my-[10px] items-center link-card h-[50px] text-[16px] text-white font-medium rounded-md w-full p-[15px] transition-all bg-[#171717] hover:bg-[#252525]">Router link</div>
           </div>
         </div>
        <!-- Search result surah -->
         <div class="flex flex-col">
          <h1 class="title text-[22px] text-white">Search result surah</h1>
          <!-- Content cards -->
           <div class="content-links flex justify-between flex-row flex-wrap items-center w-[80%]">
             <Card v-for="item in 6"/>
           </div>
         </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import Card from '@/views/Home/components/mp3Card.vue'

const store = useStore()
const route = useRoute()
</script>