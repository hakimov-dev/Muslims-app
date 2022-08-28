<template>
  <div class="pray-times">
    <div
      class="pray-times-cards flex justify-evenly items-center flex-wrap mt-[3%]"
    >
      <PrayTimeCard
        v-for="(item, idx) in $store.state.prayTimes.prayTimes || 6"
        :id="idx + 1"
        :content="item"
      />
    </div>
  </div>
</template>

<script setup>
import PrayTimeCard from "./components/PrayTimeCard.vue";
import { useStore } from "vuex";

const store = useStore();

store.dispatch("prayTimes/getIpAdress");
</script>
