<script setup>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import PageDarkOverlay from "@/components/common/PageDarkOverlay.vue";
import Modal from "@/components/common/Modal.vue";
import MobileMenu from "@/components/common/MobileMenu.vue";
import { RouterView } from "vue-router";
import { useModalsStore } from "@/stores/modalsStore.js";
const modalsStore = useModalsStore();
</script>

<template>
  <AppHeader v-cloak />
  <RouterView v-cloak/>
  <AppFooter v-cloak/>

  <PageDarkOverlay />
  <MobileMenu :active="modalsStore.mobileMenu" @close="modalsStore.closeMobileMenu" @openRequest="modalsStore.openRequest" />
  <Modal :active="modalsStore.modalWindow"/>
</template>

<style scoped lang="scss">
[v-cloak] {
  display: none;
}
</style>