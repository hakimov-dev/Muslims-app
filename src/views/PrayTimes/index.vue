<template>
  <div class="pray-times">
    <!-- <input
      class="md:w-[60%] md:mx-auto md:flex justify-center search outline-none border-[1px] text-white transition-all font-medium focus:border-gray-300 hover:border-gray-300 focus:border-gray-300 border-gray-500 w-[100%] p-2 px-10 bg-[#121416] rounded-[20px]"
      type="text"
      placeholder="Search city..."
      v-model="$store.state.prayTimes.cityName"
      @keypress.enter="$store.dispatch('prayTimes/searchCity', $store.state.prayTimes.cityName.trim())"
    /> -->
    <div
      class="pray-times-cards flex justify-evenly items-center flex-wrap mt-[3%]"
    >
      <PrayTimeCard v-for="(item, idx) in $store.state.prayTimes.prayTimes || 6" :id="idx +1" :content="item"/>
    </div>
  </div>
</template>

<script setup>
import PrayTimeCard from "./components/PrayTimeCard.vue";
import { useStore } from "vuex";

const store = useStore()

store.dispatch('prayTimes/getIpAdress')
</script>
