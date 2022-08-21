<template>
<div
    class="card cursor-pointer group transition-all hover:bg-[#282828] bg-[#171717] md:p-[10px] p-[6px] md:w-[240px] md:h-[310px] w-[175px] h-[250px] shadow-xl my-[20px] rounded-xl"
  >
    <div
      class="img-wrap flex flex-col md:h-[160px] h-[120px] overflow-hidden relative"
    >
      <div class="md:h-[160px] h-[120px] !rounded-xl shadow-xl bg-[#c4c4c4] select-none text-center flex items-center justify-center">
       <h1 class="text-[#00000] font-semibold image-text text-[22px]">Loading</h1>
      </div>
    </div>
    <div class="text-wrap flex flex-col p-3 text-white leading-[30px]">
      <h1 class="mp3-name text-[18px] font-medium flex items-center w-full">
        Loading name
      </h1>
      <h1 class="mp3-author text-[14px] opacity-60">Alafasy</h1>
      <h1 class="ayah-number text-[14px] opacity-60">
        load ayahs
      </h1>
      <h1 class="revelation-type text-[14px] opacity-60 md:block hidden">
        Revelation type: loading
      </h1>
    </div>
  </div>
</template>