<template>
  <div class="user-settings md:p-[3%] md:pt-[1%]">
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
            class="bg-black md:h-[120px] md:w-[120px] rounded-full object-contain p-3 select-none"
            src="../../assets/imgs/user2.png"
            alt=""
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
        <p
          class="errorText text-red-600 pt-3"
          v-if="$store.state.settings.updateProfileError !== ''"
        >
          {{ $store.state.settings.updateProfileError }}
        </p>
        <button
          @click="$store.commit('settings/postUserAbouts', imageObj)"
          class="mt-[5%] border-[1px] text-white transition-all font-medium hover:border-gray-300 border-gray-500 w-[70%] p-2 px-4 bg-[#121416] rounded-[5px]"
        >
          Submit
        </button>
        <a
          target="_blank"
          href="https://github.com/hakimov-dev/Muslims-app/issues/new"
          class="text-red-500 md:hidden block mt-[10%]"
          >Report bug?</a
        >
      </div>
    </transition>
  </div>
</template>
