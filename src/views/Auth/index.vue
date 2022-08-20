<template>
          <div class="login form-wrap flex flex-col items-center text-center bg-[#131416] md:pt-[12%] pt-[55%] px-[8%] md:px-[3%] h-screen w-full md:w-[30%]">
        <router-link
           to="/"
           class="logo w-[70%] absolute -top-[20%] -left-[10px] z-[111] pt-[55%] select-none text-center flex items-center justify-center md:hidden py-4 w-full"
         >
          <img
            class="h-[40px] w-[40px] mr-2"
            src="../../assets/imgs/logo.png"
            alt=""
          />
           <h1 class="font-medium text-white text-2xl">Muslims app</h1>
          </router-link>

          <h1 class="text-[24px] font-semibold mb-[20px] text-white">Login</h1>
        <input
            class="md:flex text-[20px] justify-center outline-none border-[1px] text-white transition-all font-medium focus:border-gray-300 hover:border-gray-300 focus:border-gray-300 border-gray-500 w-[100%] p-2 px-4 bg-[#121416] rounded-[5px]"
            type="text"
            v-model="$store.state.auth.loginValue"
            placeholder="Enter your username.."
          />
          <input
            class="md:flex text-[20px] mt-[20px] justify-center outline-none border-[1px] text-white transition-all font-medium focus:border-gray-300 hover:border-gray-300 focus:border-gray-300 border-gray-500 w-[100%] p-2 px-4 bg-[#121416] rounded-[5px]"
            type="password"
            placeholder="Enter your password..."
            v-model="$store.state.auth.passwordValue"
          />

         <transition>
          <h1 class="text-red-600 text-[16px] mt-[3%]">The login or password is incorrect. Please check and try again!</h1>
         </transition>
          <button
          class="mt-[5%] uppercase border-[1px] text-white transition-all font-medium hover:border-gray-300 border-gray-500 w-[70%] p-2 px-4 bg-[#121416] rounded-[5px]"
          >
           Submit
          </button>
        </div>
</template>