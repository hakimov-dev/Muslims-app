<template>
  <div class="search-result">
    <div class="flex flex-col p-[3%] w-full">
      <!-- Search result links -->
      <div class="flex flex-col items-start w-full">
        <h1 class="title text-[22px] text-white">Search result links</h1>
        <!-- Content links -->
        <div
          class="content-links flex flex-col items-center w-[80%]"
          v-if="resultLinks"
        >
          <router-link
            :to="item.link"
            v-for="item in resultLinks"
            class="flex my-[10px] items-center link-card h-[50px] text-[16px] text-white font-medium rounded-md w-full p-[15px] transition-all bg-[#171717] hover:bg-[#252525]"
            >{{ item.title }}</router-link
          >
        </div>
        <div class="content-links flex flex-col items-center w-[80%]" v-else>
          <div
            class="flex my-[10px] items-center link-card h-[50px] text-[16px] text-white font-medium rounded-md w-full p-[15px] transition-all bg-[#171717] hover:bg-[#252525]"
          >
            Links not found
          </div>
        </div>
      </div>
      <!-- Search result surah -->
      <div class="flex flex-col">
        <h1 class="title text-[22px] text-white">Search result surah</h1>
        <!-- Content cards -->
        <div
          class="content-links flex justify-between flex-row flex-wrap items-center w-[80%]"
        >
          <Card v-for="item in 6" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import Card from "@/views/Home/components/mp3Card.vue";

const store = useStore();
const route = useRoute();
let allLinks = ref([
  { title: "Home", link: "/" },
  { title: "Pray times", link: "/pray-time" },
  { title: "Muslims calendar", link: "/muslims-calendar" },
  { title: "Settings", link: "/user-settings" },
  { title: "Update password", link: "/update-passwords" },
  { title: "Favorite", link: "/favorite" }
]);
let resultLinks = ref([]);

const search = allLinks.value[allLinks.value.findIndex(x => x.title == store.state.searchValue || route.params.query)]

resultLinks.value.push(search)

store.state.searchValue = route.params.query;
</script>
