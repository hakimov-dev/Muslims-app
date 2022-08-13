<template>
    <div class="main-layout">
     <div class="flex md:flex-row flex-col-reverse items-start">
       <!-- Sidebar -->
       <div class="sidebar bg-[#000000] flex items-center md:flex-col text-white h-screen w-[20%] md:py-4 md:px-3">
       <router-link to="/" class="logo select-none text-center md:flex items-center justify-center hidden border-b-2 border-gray-500 py-4 w-full">
        <img class="h-[40px] w-[40px] mr-2" src="../assets/imgs/logo.png" alt="">
        <h1 class="font-medium text-2xl">Muslims app</h1>
       </router-link>
       <div class="links items-center md:flex-col mt-[10%]">
         
         <router-link 
         :class="$route.name !== 'home' ? 'opacity-60' : ''"
         class="flex items-center font-medium text-[18px] md:py-2 md:my-1 hover:opacity-100 transition-all" to="/">
          <img class="h-[30px] w-[30px] md:mr-2" src="../assets/imgs/quran.png" alt="">
          <h1 class="md:block hidden">Audio Quran</h1>
         </router-link>
         
         <router-link 
          :class="$route.name !== 'pray-time' ? 'opacity-60' : ''"
          class="flex items-center font-medium text-[18px] md:py-2 md:my-1 hover:opacity-100 transition-all" to="/pray-time">
          <img class="h-[30px] w-[30px] md:mr-2" src="../assets/imgs/mosque.png" alt="">
          <h1 class="md:block hidden">Prayer time</h1>
         </router-link>
       
         <router-link 
          :class="$route.name !== 'muslims-calendar' ? 'opacity-60' : ''"
          class="flex items-center font-medium text-[18px] md:py-2 md:my-1 hover:opacity-100 transition-all" to="/muslims-calendar">
          <img class="h-[30px] w-[30px] md:mr-2" src="../assets/imgs/calendar.png" alt="">
          <h1 class="md:block hidden">Calendar</h1>
         </router-link>

          <router-link 
           :class="$route.name !== 'user-settings' ? 'opacity-60' : ''"
           class="flex items-center font-medium text-[18px] md:py-2 md:my-1 hover:opacity-100 transition-all" to="/user-settings">
           <img class="h-[30px] w-[30px] md:mr-2" src="../assets/imgs/settings.png" alt="">
           <h1 class="md:block hidden">Settings</h1>
         </router-link>
       </div>

       <a target="_blank" href="https://github.com/hakimov-dev/Muslims-app/discussions/1" class="text-red-500 md:block hidden md:mt-[120%]">Report bug?</a>
       </div>
     </div>
    </div>
</template>