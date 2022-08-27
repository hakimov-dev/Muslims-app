<template>
  <div class="user-settings md:p-[3%] md:pt-[1%]">
    <SettingNav />
    <!-- User settings content -->
    <transition>
      <div
        v-if="$route.name == 'user-settings'"
        class="flex flex-col items-center md:w-[50%] mt-[3%]"
      >
        <div
          class="img-wrap flex justify-center items-center text-center relative"
        >
          <img
            class="md:h-[120px] md:w-[120px] rounded-full object-contain bg-black p-3 select-none"
            :src="$store.state.settings.user.pic ? $store.state.settings.user.pic : require('../../assets/imgs/user2.png')"
            alt=""
          />
          <label
            for="file"
            class="absolute md:-bottom-[1%] bottom-2 right-[3%] cursor-pointer md:-right-[1%] h-[35px] w-[35px] bg-[#1b1b1b] pt-[9px] pl-[9px] rounded-full"
          >
            <img
              class="h-[17px] w-[17px]"
              src="../../assets/imgs/edit.png"
              alt=""
            />
          </label>
          <input
            class="hidden"
            type="file"
            name="file"
            accept="image/*"
            id="file"
          />
        </div>
        <div class="inputs-wrap mt-[20px] md:w-[70%] w-[80%]">
          <input
            class="md:flex justify-center capitalize outline-none border-[1px] text-white transition-all font-medium focus:border-gray-300 hover:border-gray-300 focus:border-gray-300 border-gray-500 w-[100%] p-2 px-4 bg-[#121416] rounded-[5px]"
            type="text"
            v-model="$store.state.settings.user.username"
            placeholder="Enter your username.."
            maxlength="30"
          />
          <input
            class="md:flex my-[30px] capitalize justify-center outline-none border-[1px] text-white transition-all font-medium focus:border-gray-300 hover:border-gray-300 focus:border-gray-300 border-gray-500 w-[100%] p-2 px-4 bg-[#121416] rounded-[5px]"
            type="text"
            v-model="$store.state.settings.user.name"
            placeholder="Enter your name..."
            maxlength="30"
          />
          <input
            class="md:flex justify-center capitalize outline-none border-[1px] text-white transition-all font-medium focus:border-gray-300 hover:border-gray-300 focus:border-gray-300 border-gray-500 w-[100%] p-2 px-4 bg-[#121416] rounded-[5px]"
            type="text"
            v-model="$store.state.settings.user.surname"
            placeholder="Enter your surname..."
            maxlength="30"
          />
        </div>
         <p class="errorText text-red-600 pt-3" v-if="$store.state.settings.updateProfileError !== ''">{{ $store.state.settings.updateProfileError }}</p>
        <button
          @click="$store.commit('settings/getUserAbouts', null)"
          class="mt-[5%] border-[1px] text-white transition-all font-medium hover:border-gray-300 border-gray-500 w-[70%] p-2 px-4 bg-[#121416] rounded-[5px]"
        >
          Submit
        </button>
        <a
          target="_blank"
          href="https://github.com/hakimov-dev/Muslims-app/discussions/1"
          class="text-red-500 md:hidden block mt-[10%]"
          >Report bug?</a
        >
      </div>
    </transition>
    <!-- Update password page -->
    <transition>
      <div
        v-if="$route.name == 'update-pasword'"
        class="flex flex-col items-center md:w-[50%] mt-[3%]"
      >
        <div class="inputs-wrap mt-[20px] md:w-[70%] w-[80%]">
          <input
            class="md:flex justify-center outline-none border-[1px] text-white transition-all font-medium focus:border-gray-300 hover:border-gray-300 focus:border-gray-300 border-gray-500 w-[100%] p-2 px-4 bg-[#121416] rounded-[5px]"
            type="text"
            placeholder="Enter your old password"
          />
          <input
            class="md:flex my-[30px] justify-center outline-none border-[1px] text-white transition-all font-medium focus:border-gray-300 hover:border-gray-300 focus:border-gray-300 border-gray-500 w-[100%] p-2 px-4 bg-[#121416] rounded-[5px]"
            type="text"
            placeholder="Enter your new password"
          />
          <input
            class="md:flex justify-center outline-none border-[1px] text-white transition-all font-medium focus:border-gray-300 hover:border-gray-300 focus:border-gray-300 border-gray-500 w-[100%] p-2 px-4 bg-[#121416] rounded-[5px]"
            type="text"
            placeholder="Enter your new password again"
          />
        </div>
        <button
          class="mt-[5%] border-[1px] text-white transition-all font-medium hover:border-gray-300 border-gray-500 w-[70%] p-2 px-4 bg-[#121416] rounded-[5px]"
        >
          Submit
        </button>
      </div>
    </transition>
  </div>
</template>

<script setup>
import SettingNav from "./components/SettingNavbar.vue";
</script>
