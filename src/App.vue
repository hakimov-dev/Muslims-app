<template>
    <component :is="layout">
       <router-view />
    </component>
</template>

<script>
import mainLayout from '@/layouts/mainLayout'

const layout = mainLayout
</script>