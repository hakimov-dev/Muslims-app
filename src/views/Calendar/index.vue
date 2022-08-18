<template>
    <div class="muslims-calendar md:p-[3%] md:pt-[1%]"> 
        <!-- Date picker -->
        <input v-model="date" class="p-1 px-3 outline-none border-[1px] text-white transition-all font-medium focus:border-gray-300 hover:border-gray-300 focus:border-gray-300 border-gray-500 p-2 px-10 bg-[#121416] rounded-[10px] cursor-pointer" type="date" name="date" id="date">
    </div>
</template>

<script setup>
import { ref } from 'vue'

 let date = ref('')

</script>

<style scoped>
 input[type="date"]::-webkit-calendar-picker-indicator{
    content: url('../../assets/imgs/calendar-input.png');
    margin-right: 4px;
 }
</style>