<script setup>

import {tMain} from "@/content/texts.js";
import CardsOurGraduates from "@/components/cards/CardsOurGraduates.vue";
</script>

<template>
  <section>
    <div class="container">
      <div class="title">
        <h2>{{ tMain.ourGraduates.title.part1 }}<span class="painted">{{ tMain.ourGraduates.title.paintedPart }}</span></h2>
      </div>
    </div>
    <div class="cards">
      <CardsOurGraduates />
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  margin-bottom: 50px;
  .title {
    margin-bottom: 20px;
    h2 {
      font-size: 36px;
      font-weight: 450;
      line-height: 110%;

    }
  }
  .cards {
    display: flex;
    flex-direction: row;
    gap: 16px;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    scroll-behavior: smooth;
    scrollbar-width: none;
    scroll-snap-type: x mandatory;
    width: 100%;
    max-width: 100%;
    padding: 0 5%;
  }
}

@include min-width($bp-lg) {
  section {
    margin-bottom: 130px;
    .title {
      margin-bottom: 40px;
      h2 {
        font-size: 56px;
      }
    }
    .cards {
      gap: 20px;
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
        background: #b1b1b1; /* Цвет ползунка */
        border-radius: 8px;
        &:hover {
          background: #8e8e8e;
        }
      }
    }
  }
}
</style>