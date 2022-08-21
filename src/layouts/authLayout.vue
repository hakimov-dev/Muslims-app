<template>
    <div class="auth-layout flex items-center" v-if="$route.name == 'auth' || $route.name == 'login'">
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
       <router-view />
    </div>
    <section class="loading bg-[#121415] h-screen w-full overflow-hidden relative text-center flex items-center justify-center" v-else>
      <span class="loader"></span>
    </section>
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

  .loader {
    width: 48px;
    height: 48px;
    display: inline-block;
    position: relative;
  }
  .loader::after, .loader::before {
    content: "";
    width: 48px;
    height: 48px;
    border: 2px solid #FFF;
    position: absolute;
    left: 0;
    top: 0;
    -webkit-animation: rotation 2s ease-in-out infinite;
            animation: rotation 2s ease-in-out infinite;
  }
  .loader::after {
    border-color: #0fff;
    -webkit-animation-delay: 1s;
            animation-delay: 1s;
  }

  @-webkit-keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>