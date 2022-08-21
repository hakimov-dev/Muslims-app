<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import mainLayout from "@/layouts/mainLayout";
import authLayout from "@/layouts/authLayout.vue";

export default {
  components: { mainLayout, authLayout },

  computed: {
    layout() {
      return (this.$route.meta.layout || "auth") + "-layout";
    }
  }
};
</script>
