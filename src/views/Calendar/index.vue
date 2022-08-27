<template>
  <div class="muslims-calendar md:p-[3%] md:pt-[1%]">
    <!-- Date picker -->
    <div class="flex justify-between items-center">
      <date-picker type="month" @change="Calendar($store.state.calendar.inputDate)" v-model:value="$store.state.calendar.inputDate"></date-picker>
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
import DatePicker from 'vue-datepicker-next';
import 'vue-datepicker-next/index.css';

import { useStore } from 'vuex'


const store = useStore()

store.dispatch('prayTimes/getIpAdress')

store.state.calendar.inputDate = new Date();

Calendar(store.state.calendar.inputDate)

function Calendar(value){
 if(value !== ''){
  store.dispatch('calendar/getCalendar', {month: value.getMonth() + 1, year: value.getFullYear()})
 }
}
</script>

<style scoped>
input[type="date"]::-webkit-calendar-picker-indicator {
  content: url("../../assets/imgs/calendar-input.png");
  margin-right: 4px;
}
</style>
