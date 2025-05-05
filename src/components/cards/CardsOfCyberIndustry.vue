<script setup>
import { useCardStore } from "@/stores/cardsStore.js";
const cardStore = useCardStore();
</script>

<template>
  <div class="card" v-for="(card, index) in cardStore.partsCyberIndustry" :key="index">
    <div class="video">
      <a :href="card.link" target="_blank" rel="noopener noreferrer">
        <img class="videoIcon" :src="card.videoIcon" alt="видео">
        <img class="playIcon" :src="card.play" alt="проигрывать">
      </a>
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
      a {
        display: block;
        position: relative;
        height: 168px;
        width: 285px;
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
        .playIcon {
          height: 56px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
          transition: all 0.3s ease-in-out;
        }
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
        a {
          width: 476px;
          height: 280px;
        }
        .videoIcon {
          border-radius: 20px
        }
        .playIcon {
          height: 95px;
        }
      }
    }
  }
</style>