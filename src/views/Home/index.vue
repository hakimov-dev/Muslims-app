<template>
    <div class="main-page">
        <div class="cards flex justify-between items-center flex-wrap md:p-[4%]">
         <Card v-for="item in 10"/>
        </div>
    </div>
</template>

<script setup>
import Card from './components/mp3Card.vue'
</script>