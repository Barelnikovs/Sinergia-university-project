<script setup>
import { tPrograms } from "@/content/texts.js";
import { useCardStore } from "@/stores/cardsStore.js";
const cardStore = useCardStore();
</script>

<template>
<section>
  <div class="container">
    <div class="title">
      <h2><span class="painted">{{ tPrograms.internshipsWithPartners.title.paintedPart }}</span>{{ tPrograms.internshipsWithPartners.title.part1 }}</h2>
    </div>
    <div class="description">
      <p>{{ tPrograms.internshipsWithPartners.description }}</p>
    </div>
  </div>
  <div class="partners">
    <div class="partner" v-for="(partnerImg, index) in cardStore.cardsOfPartners" :key="index">
      <img :src="partnerImg" alt="партнёр">
    </div>
  </div>
</section>
</template>

<style scoped lang="scss">
section {
  margin-bottom: 25px;
  .container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    .title {
      h2 {
        font-size: 36px;
        font-weight: 450;
      }
    }
    .description {
      p {
        font-size: 20px;
        line-height: 120%;
      }
    }
  }
  .partners {
    padding: 20px 5svw 15px;
    display: flex;
    flex-direction: row;
    gap: 20px;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
    .partner {
      scroll-snap-align: center;
      height: 138px;
      flex: 0 0 178px;
      background-color: $white;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0px 6px 10px 0px rgba(175, 175, 175, 0.29);
      img {
        display: block;
      }
    }
  }
}
@include min-width($bp-lg) {
  section {
    margin-bottom: 125px;
    .container {
      .title {
        h2 {
          font-size: 56px;
        }
      }
      .description {
        p {
          font-size: 24px;
        }
      }
    }
    .partners {
      padding: 40px 19.5svw 15px;
      scrollbar-width: auto;
      scroll-snap-type: none;
      &::-webkit-scrollbar {
        height: 12px;
      }
      &::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 4px;
      }
      &::-webkit-scrollbar-thumb {
        background: #b1b1b1;
        border-radius: 8px;

        &:hover {
          background: #8e8e8e;
        }
      }
    }
  }
}
</style>