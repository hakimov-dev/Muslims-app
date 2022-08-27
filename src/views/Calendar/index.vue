<template>
  <div class="muslims-calendar md:p-[3%] md:pt-[1%]">
    <!-- Date picker -->
    <div class="flex justify-between items-center">
      <input
        v-model="date"
        class="p-1 px-2 text-white outline-none border-[1px] text-white transition-all font-medium focus:border-gray-300 hover:border-gray-300 focus:border-gray-300 border-gray-500 p-2 px-6 bg-[#121416] rounded-[10px] cursor-pointer"
        type="date"
        name="date"
        id="date"
      />
      <!-- <input
        class="md:mr-[1%] md:w-[30%] md:mx-auto md:flex justify-center search outline-none border-[1px] text-white transition-all font-medium focus:border-gray-300 hover:border-gray-300 focus:border-gray-300 border-gray-500 w-[50%] p-2 px-10 bg-[#121416] rounded-[20px]"
        type="text"
        placeholder="Search city..."
      /> -->
    </div>
    <CalendarTable />
  </div>
</template>

<script setup>
import CalendarTable from "./components/CalendarTable.vue";
import { ref } from "vue";
import { useStore } from 'vuex'

let date = ref("");

const newDate = new Date();

date.value = `${newDate.getFullYear()}-${String(
  newDate.getMonth() + 1
).padStart(2, "0")}-${String(newDate.getDate()).padStart(2, "0")}`;
</script>

<style scoped>
input[type="date"]::-webkit-calendar-picker-indicator {
  content: url("../../assets/imgs/calendar-input.png");
  margin-right: 4px;
}
</style>
