<template>
    <div class="user-settings md:p-[3%] md:pt-[1%]">
        <SettingNav />
        <!-- User settings content -->
        <div v-if="$route.name == 'user-settings'" class="flex flex-col items-center md:w-[50%] mt-[3%]">
         <div class="img-wrap flex justify-center items-center text-center">
          <img class="md:h-[120px] md:w-[120px] rounded-full object-contain bg-black p-3 select-none" src="../../assets/imgs/user2.png" alt="">
         </div>
         <div class="inputs-wrap mt-[20px] md:w-[70%] w-[80%]">
          <input class="md:flex justify-center outline-none border-[1px] text-white transition-all font-medium focus:border-gray-300 hover:border-gray-300 focus:border-gray-300 border-gray-500 w-[100%] p-2 px-4 bg-[#121416] rounded-[5px]" type="text" placeholder="Enter your username..">
          <input class="md:flex my-[30px] justify-center outline-none border-[1px] text-white transition-all font-medium focus:border-gray-300 hover:border-gray-300 focus:border-gray-300 border-gray-500 w-[100%] p-2 px-4 bg-[#121416] rounded-[5px]" type="text" placeholder="Enter your name...">
          <input class="md:flex justify-center outline-none border-[1px] text-white transition-all font-medium focus:border-gray-300 hover:border-gray-300 focus:border-gray-300 border-gray-500 w-[100%] p-2 px-4 bg-[#121416] rounded-[5px]" type="text" placeholder="Enter your surname...">
         </div>
         <button class="mt-[5%] border-[1px] text-white transition-all font-medium hover:border-gray-300 border-gray-500 w-[70%] p-2 px-4 bg-[#121416] rounded-[5px]">Submit</button>
         <a
          target="_blank"
          href="https://github.com/hakimov-dev/Muslims-app/discussions/1"
          class="text-red-500 md:hidden block mt-[10%]"
          >Report bug?</a
        >
        </div>
        <!-- Update password page -->
         <div v-if="$route.name == 'update-pasword'" class="flex flex-col items-center md:w-[50%] mt-[3%]">
         <div class="inputs-wrap mt-[20px] md:w-[70%] w-[80%]">
          <input class="md:flex justify-center outline-none border-[1px] text-white transition-all font-medium focus:border-gray-300 hover:border-gray-300 focus:border-gray-300 border-gray-500 w-[100%] p-2 px-4 bg-[#121416] rounded-[5px]" type="text" placeholder="Enter your old password">
          <input class="md:flex my-[30px] justify-center outline-none border-[1px] text-white transition-all font-medium focus:border-gray-300 hover:border-gray-300 focus:border-gray-300 border-gray-500 w-[100%] p-2 px-4 bg-[#121416] rounded-[5px]" type="text" placeholder="Enter your new password">
          <input class="md:flex justify-center outline-none border-[1px] text-white transition-all font-medium focus:border-gray-300 hover:border-gray-300 focus:border-gray-300 border-gray-500 w-[100%] p-2 px-4 bg-[#121416] rounded-[5px]" type="text" placeholder="Enter your new password again">
         </div>
         <button class="mt-[5%] border-[1px] text-white transition-all font-medium hover:border-gray-300 border-gray-500 w-[70%] p-2 px-4 bg-[#121416] rounded-[5px]">Submit</button>
        </div>
    </div>
</template>

<script setup>
import SettingNav from './components/SettingNavbar.vue'
</script>