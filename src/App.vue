<script setup>
import { RouterView } from "vue-router";
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
</script>

<template>
  <AppHeader v-cloak />
  <RouterView v-cloak/>
  <AppFooter v-cloak/>
</template>

<style scoped lang="scss">
[v-cloak] {
  display: none;
}
</style>