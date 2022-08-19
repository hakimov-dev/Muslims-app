<template>
  <div
    class="pray-time-card cursor-pointer group transition-all hover:bg-[#282828] bg-[#171717] md:p-[10px] p-[6px] md:w-[245px] md:h-[310px] w-[165px] h-[250px] shadow-xl md:mt-[2%] mt-[4%] md:m-[2%] rounded-xl"
  >
    <div
      class="img-wrap flex flex-col md:h-[160px] h-[120px] overflow-hidden relative"
    >
      <img
        class="md:h-[160px] h-[120px] !rounded-xl shadow-xl"
        :src="returnImage(props.id)"
        alt=""
      />
    </div>
    <div
      class="text-wrap flex flex-col p-3 text-white leading-[50px] text-center"
    >
      <h1 class="pray-name text-[18px] font-medium">Asr</h1>
      <h1 class="pray-time text-[16px] opacity-80">00:00</h1>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["id"]);

function returnImage(id) {
  if (id == 1) return require("../../../assets/imgs/fajr.jpg");
  else if (id == 2) return require("../../../assets/imgs/sunrise.jpg");
  else if (id == 3) return require("../../../assets/imgs/dhur.jpg");
  else if (id == 4) return require("../../../assets/imgs/asr.jpg");
  else if (id == 5) return require("../../../assets/imgs/maghrib.jpg");
  else if (id == 6) return require("../../../assets/imgs/isha.jpg");
}
</script>
