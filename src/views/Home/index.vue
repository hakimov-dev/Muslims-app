<template>
  <div class="main-page">
    <input
      class="md:hidden inline search outline-none border-[1px] text-white transition-all font-medium focus:border-gray-300 hover:border-gray-300 focus:border-gray-300 border-gray-500 w-[100%] p-2 px-10 bg-[#121416] rounded-[20px]"
      type="text"
      placeholder="Search surah..."
    />
    <div class="cards flex justify-between items-center flex-wrap md:p-[3%]">
      <Card v-for="item in 114" />
    </div>
  </div>
</template>

<script setup>
import Card from "./components/mp3Card.vue";

console.log($cookies.isKey('user_favorite'))
</script>
