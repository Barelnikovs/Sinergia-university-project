<script setup>
import {tMain} from "@/content/texts.js";
import TelegramIcon from "@/components/ui/TelegramIcon.vue";
import WhatsappIcon from "@/components/ui/whatsappIcon.vue";

defineProps({
  forDesktop: {
    type: Boolean,
    default: false,
  }
})
</script>

<template>
  <div :class="['writeToMessenger', { 'desktop': forDesktop }]">
    <div class="writeToMessenger__text">
      <p>{{ tMain.writeToMessenger.part1 }}<br>{{ tMain.writeToMessenger.part2 }}</p>
    </div>
    <div class="messengers">
      <TelegramIcon class="mainIcon"/>
      <WhatsappIcon class="mainIcon" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.writeToMessenger {
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 16px;
  &:not(.desktop) {
    display: flex;
  }
  &.desktop {
    display: none;
  }
  &__text {
    width: 40%;
  }
  p {
    font-size: 26px;
    font-weight: 450;
    line-height: 100%;
  }
  .messengers {
    display: flex;
    gap: 17px;
  }
}

@include min-width($bp-md) {
  .writeToMessenger {
    height: 56px;
    align-items: center;
    width: 37%;
    &:not(.desktop) {
      display: none;
    }
    &.desktop {
      display: flex;
    }
    &__text {
      p {
        font-size: 20px;
      }
    }
  }
}

@include min-width($bp-lg) {
  .writeToMessenger {
    width: 25%;
    height: 56px;
  }
}
</style>