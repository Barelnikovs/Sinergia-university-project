<script setup>
import {watch} from "vue";
import { useModalsStore } from "@/stores/modalsStore.js";
const modalsStore = useModalsStore();

watch(() => modalsStore.pageDarkOverlay, (newValue) => {
  if (newValue) {
    document.body.classList.add('no-scroll')
  } else {
    document.body.classList.remove('no-scroll')
  }
})

const closeModalWindows = () => {
  modalsStore.closeMobileMenu()
  modalsStore.closeModalWindow()
}
</script>

<template>
  <transition name="fade">
    <div
        class="overlay"
        v-if="modalsStore.pageDarkOverlay"
        @click="closeModalWindows()"
    ></div>
  </transition>
</template>

<style scoped lang="scss">
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  backdrop-filter: blur(1px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>