<template>
    <div class="settings-navbar">
        <div class="desktop-nav flex w-[30%] justify-evenly items-center text-white font-medium text-[18px] pb-2">
          <router-link to="/user-settings">User settings</router-link>
          <router-link to="/update-passwords">Update password</router-link>
        </div>
    </div>
</template>

<style scoped>
  
  a{
    opacity: .6;
    transition: all .3s linear;
  }
   
  a:hover{
    opacity: 1;
  }
   

 .router-link-active,
 .router-link-exact-active{
   border-bottom: 1px solid white; 
   opacity: 1 !important;
 }
</style>