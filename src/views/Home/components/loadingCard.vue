<template>
<div
    class="card cursor-pointer group transition-all bg-[#171717] md:p-[10px] p-[6px] md:w-[240px] md:h-[310px] w-[175px] h-[250px] shadow-xl my-[20px] rounded-xl"
  >
    <div
      class="img-wrap flex flex-col md:h-[160px] h-[120px] overflow-hidden relative"
    >
      <div class="md:h-[160px] h-[120px] !rounded-xl shadow-xl bg-gray-300 animate-pulse select-none text-center flex items-center justify-center">
       <h1 class="text-[#00000] font-semibold image-text text-[22px] hidden">Loading</h1>
      </div>
    </div>
    <div class="text-wrap flex flex-col p-3 text-white leading-[40px]">
      <h1 class="mp3-name bg-gray-300 animate-pulse text-gray-300 rounded-[3px] text-[18px] font-medium flex items-center w-full">
        Loading name
      </h1>
      <h1 class="ayah-number text-[14px] mt-[20px] opacity-60 w-[60%] bg-gray-300 animate-pulse text-gray-300 rounded-[3px]">
        load ayahs
      </h1>
    </div>
  </div>
</template>