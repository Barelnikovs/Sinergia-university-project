<script setup>
import tButtons from '@/content/buttonsAndInputs.js'
import {tHeader, tFooter} from "@/content/texts.js";
import TelegramIcon from "@/components/ui/TelegramIcon.vue";
import WhatsappIcon from "@/components/ui/whatsappIcon.vue";

const props = defineProps({
  active: Boolean,
})
const emit = defineEmits(['close', 'openRequest'])
</script>

<template>
<div :class="['mobile-menu', {'active': active}]">
  <img
      class="cross"
      src="@/assets/images/icons/plus.svg"
      alt="закрыть"
      @click="emit('close')"
  >
  <div class="download">
    <a href="#" target="_blank" rel="noopener noreferrer">
      {{ tHeader.download }}<img src="@/assets/images/icons/download.svg" alt="download program">
    </a>
  </div>
  <div class="email">
    <p>{{ tFooter.email }}</p>
  </div>
  <div class="messengers">
    <TelegramIcon class="mobile-menu-icon"/>
    <WhatsappIcon class="mobile-menu-icon" />
  </div>
  <button @click="emit('openRequest')">{{ tButtons.leaveRequest }}</button>
</div>
</template>

<style scoped lang="scss">
@use "sass:color";

.mobile-menu {
  background-color: $white;
  width: 270px;
  height: clamp(271px, 70%, 400px);
  padding: 80px 0 35px 35px;
  border-radius: 0 0 0 20px;
  overflow: hidden;
  position: fixed;
  right: -400px;
  top: 0;
  z-index: 10000;
  opacity: 0;
  transition: all 0.3s ease;
  &.active {
    opacity: 1;
    right: 0;
  }
  img.cross {
    position: absolute;
    top: 10px;
    right: 15px;
    transform: rotate(45deg);
  }
  .download {
    margin-bottom: 30px;
    a {
      color: $red;
      font-size: 20px;
      display: inline-block;
      img {
        width: 24px;
        height: 24px;
        display: inline-block;
        vertical-align: middle;
        margin-left: 5px;
        margin-bottom: 2px;
      }
    }
  }
  .email {
    margin-bottom: 60px;
    p {
      font-size: 18px;
    }
  }
  .messengers {
    display: flex;
    flex-direction: row;
    gap: 12px;
    margin-bottom: 30px;
  }
  button {
    font-family: $futura-pt;
    font-weight: 450;
    font-size: 20px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    background-color: $btn-black;
    color: $white;
    height: 50px;
    width: clamp(184px, 80%, 275px);
    &:hover {
      background-color: color.adjust($btn-black, $lightness: -10%);
    }
  }
}

@include min-width($bp-md) {
  .mobile-menu {
    display: none;
  }
}
</style>