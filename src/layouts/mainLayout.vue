<template>
  <div v-if="!$store.state.settings.refreshPage" class="main-layout" @click="dropOpen = false">
    <div class="flex md:flex-row flex-col-reverse items-start">
    <input class="hidden" type="text">
      <!-- Sidebar -->
      <div
        class="z-[1111] sidebar bg-[#000000] fixed top-[92%] md:top-0 flex items-center md:flex-col text-white md:h-screen h-[8%] w-full md:w-[20%] md:py-4 md:px-3"
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
            :class="
              $route.name !== 'user-settings'
                ? $route.name !== 'update-pasword'
                  ? 'opacity-60'
                  : ''
                : ''
            "
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
            scrollHeight > 10
              ? 'fixed shadow-xl bg-[#070707] w-full z-[111]'
              : ''
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
          <div class="md:flex hidden items-center w-[10%] justify-between">
            <button id="left" @click="prevNext($event)" :class="from === null ? 'opacity-60 cursor-not-allowed' : ''" class="transition-all bg-[#030303] h-[40px] w-[40px] rounded-full flex flex-row items-center justify-center"><img id="left" src="../assets/imgs/left-arrow.png" class="h-[16px] w-[18px] mr-[3px]" alt=""></button>
            <button id="right" @click="prevNext($event)" :class="to === null ? 'opacity-60 cursor-not-allowed' : ''" class="transition-all bg-[#030303] h-[40px] w-[40px] rounded-full flex flex-row items-center justify-center"><img id="right" src="../assets/imgs/right-arrow.png" class="h-[16px] w-[18px] ml-[3px]" alt=""></button>
          </div>
          <div
            @click.stop
            class="user-dropdown p-4 flex flex-col items-center text-white select-none cursor-pointer w-auto float-right"
          >
            <div @click="dropOpen = !dropOpen" class="flex items-center">
              <img
                :class="$store.state.settings.user.pic == null ? 'h-[30px] w-[30px]' : 'h-[35px] w-[35px]'"
                class="rounded-full mr-2"
                :src="$store.state.settings.user.pic !== null ? $store.state.settings.user.pic : require('../assets/imgs/user2.png')"
                alt=""
              />
              <h1 class="md:text-[18px] text-[14px] md:block hidden capitalize">
                {{ $cookies.get('user_username') || 'Loading...'}}
              </h1>
            </div>
            <transition>
              <div
                v-if="dropOpen"
                :class="scrollHeight > 0 ? 'mt-[3%]' : 'md:top-[10%] top-[6%]'"
                class="links-box group absolute w-[30%] md:mr-0 mr-[6%] md:w-[10%] flex flex-col z-[111] items-stretch bg-[#282828] hover:bg-[#4b4b4b] transition-all shadow-xl mt-2 md:p-0 p-1 w-full md:rounded-none rounded-[3px] text-center"
              >
                <div
                  class="p-1 flex items-center group-hover::bg-[#4b4b4b] mt-2 m-1 flex items-center justify-evenly transition-all"
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
        <div
          :class="dropOpen ? 'min-h-[72.5vh]' : ''"
          class="show-page md:min-h-[65.5vh] min-h-[68.5vh] h-auto m-2 md:mb-[10%] mb-[35%] md:ml-[22%]"
        >
          <router-view />
        </div>
        <!-- Music player -->
        <transition>
         <musicPlayer class="fixed w-full bottom-0 bg-[#181818] md:h-[13vh]" />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import musicPlayer from "../components/musicPlayer.vue";
export default {
  data() {
    return {
      dropOpen: false,
      scrollHeight: 0,
      to: null, 
      from: null
    };
  },

  components: {
    musicPlayer
  },

  mounted() {
    this.scroll();
    if(this.$store.state.settings.user.username == ''){
     this.$store.state.settings.user.username = $cookies.get('user_username')
     this.$store.state.settings.user.surname = $cookies.get('user_lastname')
     this.$store.state.settings.user.name = $cookies.get('user_name')
     var pic = $cookies.get('user_pic') == "null" ? null : JSON.parse($cookies.get('user_pic'))
     this.$store.state.settings.user.pic = pic == null ? null : URL.createObjectURL(new File(["logo"], "logo.png", JSON.parse(pic)))
     console.log(new File(["logo"], "logo.png", JSON.parse(pic)))
    }
  },

  watch: { 
     '$route' (to, from) {
          if(to !== from)
            this.from = from
  }},

  methods: {
    
    prevNext(event){
    if(event.target.id == 'left'){
      this.to = this.from
      this.$router.push(`${this.from.path}`)
    }else{
      this.$router.push(`${this.from.path}`)
      this.to = null
    }
    },

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
}
</script>

<style>
.main-layout {
  background: linear-gradient(120deg, #131518, #111212, #121212);
}

.search {
  background-image: url("../assets/imgs/search-input.png");
  background-size: 20px;
  background-position-x: 13px;
  background-position-y: 55%;
  background-repeat: no-repeat;
}
</style>
