<template>
  <div class="main-layout" @click="dropOpen = false">
    <div class="flex md:flex-row flex-col-reverse items-start">
      <!-- Sidebar -->
      <div
        class="z-[1111] sidebar bg-[#000000] md:fixed flex items-center md:flex-col text-white md:h-screen h-[10%] w-full md:w-[20%] md:py-4 md:px-3"
      >
        <router-link
          to="/"
          class="logo select-none text-center md:flex items-center justify-center hidden border-b-2 border-gray-500 py-4 w-full"
        >
          <img
            class="h-[40px] w-[40px] mr-2"
            src="../assets/imgs/logo.png"
            alt=""
          />
          <h1 class="font-medium text-2xl">Muslims app</h1>
        </router-link>
        <div
          class="links items-center md:block md:w-auto w-full flex justify-evenly flex-row md:mt-[10%] md:py-0 py-2"
        >
          <router-link
            :class="$route.name !== 'home' ? 'opacity-60' : ''"
            class="flex items-center font-medium text-[18px] md:py-2 md:my-1 hover:opacity-100 transition-all"
            to="/"
          >
            <img
              class="h-[30px] w-[30px] md:mr-2"
              src="../assets/imgs/quran.png"
              alt=""
            />
            <h1 class="md:block hidden">Audio Quran</h1>
          </router-link>

          <router-link
            :class="$route.name !== 'pray-time' ? 'opacity-60' : ''"
            class="md:flex items-center font-medium text-[18px] md:py-2 md:my-1 hover:opacity-100 transition-all"
            to="/pray-time"
          >
            <img
              class="h-[30px] w-[30px] md:mr-2"
              src="../assets/imgs/mosque.png"
              alt=""
            />
            <h1 class="md:block hidden">Prayer time</h1>
          </router-link>

          <router-link
            :class="$route.name !== 'muslims-calendar' ? 'opacity-60' : ''"
            class="md:flex items-center font-medium text-[18px] md:py-2 md:my-1 hover:opacity-100 transition-all"
            to="/muslims-calendar"
          >
            <img
              class="h-[30px] w-[30px] md:mr-2"
              src="../assets/imgs/calendar.png"
              alt=""
            />
            <h1 class="md:block hidden">Calendar</h1>
          </router-link>

          <router-link
            :class="$route.name !== 'user-settings' ? 'opacity-60' : ''"
            class="md:flex items-center font-medium text-[18px] md:py-2 md:my-1 hover:opacity-100 transition-all"
            to="/user-settings"
          >
            <img
              class="h-[30px] w-[30px] md:mr-2"
              src="../assets/imgs/settings.png"
              alt=""
            />
            <h1 class="md:block hidden">Settings</h1>
          </router-link>
        </div>

        <a
          target="_blank"
          href="https://github.com/hakimov-dev/Muslims-app/discussions/1"
          class="text-red-500 md:block hidden md:mt-[100%]"
          >Report bug?</a
        >
      </div>

      <div class="main-content w-[100%] flex flex-col">
        <!-- Navbar -->
        <div
          :class="
            scrollHeight > 10 ? 'fixed shadow-xl bg-[#000000] w-full z-[111]' : ''
          "
          class="transition-all navbar justify-between md:py-0 py-4 md:px-0 px-4 md:pl-[25%] md:pr-[3%] md:h-[90px] h-[70px] flex items-center"
        >
          <router-link
            to="/"
            class="logo md:hidden select-none text-center flex items-center justify-center text-white"
          >
            <img
              class="h-[40px] w-[40px] mr-2"
              src="../assets/imgs/logo.png"
              alt=""
            />
            <h1 class="font-medium text-xl">Muslims app</h1>
          </router-link>
          <input class="md:block hidden search outline-none border-[1px] text-white transition-all font-medium focus:border-gray-300 hover:border-gray-300 focus:border-gray-300 border-gray-500 w-[30%] p-2 px-10 bg-[#121416] rounded-[20px]" type="text" placeholder="Enter something for search...">
          <div
            @click.stop
            :class="dropOpen ? 'md:mt-[14%] mt-[25%] md:-mr-0 -mr-[8%] ' : 'md:mt-0'"
            class="user-dropdown p-4 flex flex-col items-center text-white select-none cursor-pointer w-auto float-right"
          >
            <div @click="dropOpen = !dropOpen" class="flex items-center">
              <img
                class="h-[30px] w-[30px] rounded-full mr-2"
                src="../assets/imgs/user2.png"
                alt=""
              />
              <h1 class="md:text-[18px] text-[14px] md:block hidden">
                Hakimov-dev
              </h1>
            </div>
            <transition>
              <div
                v-if="dropOpen"
                class="links-box flex flex-col z-[111] items-stretch bg-[#282828] shadow-xl mt-2 md:p-2 p-1 w-full md:rounded-none rounded-[3px] text-center"
              >
                <router-link
                  class="p-1 m-1 md:flex hidden items-center justify-evenly hover:bg-[#4b4b4b] transition-all"
                  to="/user-settings"
                  ><img
                    class="md:w-[20px] h-[20px]"
                    src="../assets/imgs/user.png"
                    alt=""
                  /><span>Your profile</span></router-link
                >
                <router-link
                  class="p-1 m-1 flex items-center justify-evenly hover:bg-[#4b4b4b] transition-all"
                  to="/favorite"
                  ><img
                    class="md:w-[20px] md:h-[20px] w-[16px] h-[16px] md:mr-0 mr-2"
                    src="../assets/imgs/saved.png"
                    alt=""
                  /><span>Favorite</span></router-link
                >
                <hr class="h-[.5px] border-gray-500 px-2 md:block hidden" />
                <div
                  class="p-1 flex items-center p-1 mt-2 m-1 flex items-center justify-evenly hover:bg-[#4b4b4b] transition-all"
                >
                  <img
                    class="md:w-[20px] md:h-[20px] w-[16px] h-[16px] md:mr-0 mr-2"
                    src="../assets/imgs/logout.png"
                    alt=""
                  /><span class="text-red-600">Log out</span>
                </div>
              </div>
            </transition>
          </div>
        </div>
        <!-- Show page -->
        <div :class="dropOpen ? 'min-h-[72.5vh]' : ''" class="show-page md:min-h-[60.5vh] min-h-[68.5vh] h-auto m-2 md:mb-[10%] mb-[35%] md:ml-[22%]">
          <router-view />
        </div>
        <!-- Music player -->
        <musicPlayer class="fixed w-full bottom-0 bg-[#181818] md:h-[13vh]" />
      </div>
    </div>
  </div>
</template>

<script>
import musicPlayer from '../components/musicPlayer.vue'
export default {
  data() {
    return {
      dropOpen: false,
      scrollHeight: 0
    };
  },

  components: {
    musicPlayer
  },

  mounted() {
    this.scroll();
  },

  methods: {
    isScrolledIntoView(el) {
      let rect = el.getBoundingClientRect();
      let elemTop = rect.top;
      let elemBottom = rect.bottom;

      let isVisible = elemTop < window.innerHeight && elemBottom >= 0;
      return isVisible;
    },

    scroll() {
      window.onscroll = () => {
        let scrolledTo = document.querySelector(".show-page");

        if (scrolledTo && this.isScrolledIntoView(scrolledTo)) {
          this.scrollHeight = window.pageYOffset;
        }
      };
    }
  }
};
</script>

<style>
.main-layout {
  background: linear-gradient(120deg, #131518, #111212, #121212);
}

.search{
  background-image: url('../assets/imgs/search-input.png');
  background-size: 20px;
  background-position-x: 13px;
  background-position-y: 55%;
  background-repeat: no-repeat;
}
</style>
