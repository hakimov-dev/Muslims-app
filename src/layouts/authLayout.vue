<template>
    <div class="auth-layout flex items-center">
        <div class="img-wrap md:block hidden w-[70%] text-center">
           <router-link
           to="/"
           class="logo w-[20%] absolute z-[111] md:mt-[1%] select-none text-center md:flex items-center justify-center hidden py-4 w-full"
         >
          <img
            class="h-[40px] w-[40px] mr-2"
            src="../assets/imgs/logo.png"
            alt=""
          />
           <h1 class="font-medium text-white text-2xl">Muslims app</h1>
          </router-link>
          <img class="relative w-full h-screen object-fill pointer-events-none" src="../assets/imgs/mosque.jpg" alt="">
        </div>
    </div>
</template>

<style scoped>
.img-wrap::after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 70%;
  height: 100%;
  background: #0e0b0b4b;
  }
</style>