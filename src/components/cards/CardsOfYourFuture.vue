<script setup>
import { useCardStore } from "@/stores/cardsStore.js";
const cardStore = useCardStore();
</script>

<template>
  <div class="card" v-for="(card, index) in cardStore.cardsOfYourFuture" :key="index">
    <div class="video">
      <img class="videoIcon" :src="card.videoIcon" alt="видео">
    </div>
    <div class="description">
      <p>{{ card.description }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  gap: 19px;
  width: 285px;
  scroll-snap-align: center;
  .video {
    display: block;
    position: relative;
    height: 176px;
    width: 237px;
    &:hover {
      .playIcon {
        transform: translate(-50%, -50%) scale(1.08);
      }
    }
    .videoIcon {
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-radius: 18px;
    }
  }
  .description {
    font-size: 20px;
    line-height: 120%;
    word-wrap: break-word;
    white-space: normal;
  }
}

@include min-width($bp-lg) {
  .card {
    gap: 30px;
    width: 476px;
    padding-bottom: 20px;
    scroll-snap-align: none;
    .video {
      width: 476px;
      height: 280px;
      .videoIcon {
        border-radius: 20px
      }
    }
  }
}
</style>