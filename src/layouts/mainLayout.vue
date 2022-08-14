<template>
    <div class="main-layout">
     <div class="flex md:flex-row flex-col-reverse items-start">
       <!-- Sidebar -->
       <div class="sidebar bg-[#000000] flex items-center md:flex-col text-white md:h-screen h-[10%] w-full md:w-[20%] md:py-4 md:px-3">
       <router-link to="/" class="logo select-none text-center md:flex items-center justify-center hidden border-b-2 border-gray-500 py-4 w-full">
        <img class="h-[40px] w-[40px] mr-2" src="../assets/imgs/logo.png" alt="">
        <h1 class="font-medium text-2xl">Muslims app</h1>
       </router-link>
       <div class="links items-center md:block md:w-auto w-full flex justify-evenly flex-row md:mt-[10%] md:py-0 py-2">
         
         <router-link 
         :class="$route.name !== 'home' ? 'opacity-60' : ''"
         class="flex items-center font-medium text-[18px] md:py-2 md:my-1 hover:opacity-100 transition-all" to="/">
          <img class="h-[30px] w-[30px] md:mr-2" src="../assets/imgs/quran.png" alt="">
          <h1 class="md:block hidden">Audio Quran</h1>
         </router-link>
         
         <router-link 
          :class="$route.name !== 'pray-time' ? 'opacity-60' : ''"
          class="md:flex items-center font-medium text-[18px] md:py-2 md:my-1 hover:opacity-100 transition-all" to="/pray-time">
          <img class="h-[30px] w-[30px] md:mr-2" src="../assets/imgs/mosque.png" alt="">
          <h1 class="md:block hidden">Prayer time</h1>
         </router-link>
       
         <router-link 
          :class="$route.name !== 'muslims-calendar' ? 'opacity-60' : ''"
          class="md:flex items-center font-medium text-[18px] md:py-2 md:my-1 hover:opacity-100 transition-all" to="/muslims-calendar">
          <img class="h-[30px] w-[30px] md:mr-2" src="../assets/imgs/calendar.png" alt="">
          <h1 class="md:block hidden">Calendar</h1>
         </router-link>

          <router-link 
           :class="$route.name !== 'user-settings' ? 'opacity-60' : ''"
           class="md:flex items-center font-medium text-[18px] md:py-2 md:my-1 hover:opacity-100 transition-all" to="/user-settings">
           <img class="h-[30px] w-[30px] md:mr-2" src="../assets/imgs/settings.png" alt="">
           <h1 class="md:block hidden">Settings</h1>
         </router-link> 
       </div>

       <a target="_blank" href="https://github.com/hakimov-dev/Muslims-app/discussions/1" class="text-red-500 md:block hidden md:mt-[100%]">Report bug?</a>
       </div>

       <!-- Navbar -->
       <div class="navbar md:w-[80%] w-[100%] justify-between md:py-0 py-3 md:h-[60px] h-[50px] md:block flex items-center">
       <router-link to="/" class="logo md:hidden select-none text-center flex items-center justify-center text-white">
         <img class="h-[40px] w-[40px] mr-2" src="../assets/imgs/logo.png" alt="">
         <h1 class="font-medium text-xl">Muslims app</h1>
       </router-link>
       <div class="user-dropdown md:mt-0 mt-[26%] p-4 flex flex-col items-center text-white select-none cursor-pointer w-auto float-right">
         <div class="flex items-center">
         <img class="h-[30px] w-[30px] rounded-full mr-2" src="../assets/imgs/user.png" alt="">
         <h1 class="md:text-[18px] text-[14px] md:block hidden">Hakimov-dev</h1>
         </div>
         <div class="links-box flex flex-col z-[111] items-stretch bg-[#282828] shadow-xl mt-2 md:p-2 p-1 w-full md:rounded-none rounded-[3px] text-center">
          <router-link class="p-1 m-1 md:flex hidden items-center justify-evenly hover:bg-[#4b4b4b] transition-all" to="/user-settings"><img class="md:w-[20px] h-[20px]" src="../assets/imgs/user2.png" alt=""><span>Your profile</span></router-link>
          <router-link class="p-1 m-1 flex items-center justify-evenly hover:bg-[#4b4b4b] transition-all" to="/favorite"><img class="md:w-[20px] md:h-[20px] w-[16px] h-[16px] md:mr-0 mr-2" src="../assets/imgs/saved.png" alt=""><span>Favorite</span></router-link>
          <hr class="h-[.5px] border-gray-500 px-2 md:block hidden">
          <div class="p-1 flex items-center p-1 mt-2 m-1 flex items-center justify-evenly hover:bg-[#4b4b4b] transition-all"><img class="md:w-[20px] md:h-[20px] w-[16px] h-[16px] md:mr-0 mr-2" src="../assets/imgs/logout.png" alt=""><span class="text-red-600">Log out</span></div>
         </div>
       </div>
       </div>
     </div>
    </div>
</template>

<script setup>

</script>

<style>
    .main-layout, .show-page{
        background:linear-gradient(120deg, #131518, #111212, #121212);
    }
</style>