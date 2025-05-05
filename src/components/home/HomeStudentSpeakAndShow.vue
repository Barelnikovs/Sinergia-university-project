<script setup>
import { tMain } from "@/content/texts.js";
import CardsOfStudentSpeakAndShow from "@/components/cards/CardsOfStudentSpeakAndShow.vue";
</script>

<template>
  <section>
    <div class="container">
      <div class="title">
        <h2><span class="painted">{{ tMain.OurStudentsSpeak.title.paintedPart }}</span>{{ tMain.OurStudentsSpeak.title.part1 }}</h2>
      </div>
    </div>
    <div class="cards">
      <CardsOfStudentSpeakAndShow />
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  margin-bottom: 50px;
  padding: 40px 0 50px;
  background-color: $black;
  .title {
    margin-bottom: 20px;
    h2 {
      font-size: 36px;
      font-weight: 450;
      line-height: 100%;
      color: $white;
      span.painted {
        color: $black;
      }
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
    padding: 110px 0 0;
    .title {
      margin-bottom: 40px;
      width: 550px;
      h2 {
        font-size: 56px;
      }
    }
    .cards {
      gap: 20px;
      scrollbar-width: auto;
      scroll-snap-type: none;
      padding-bottom: 110px;
      &::-webkit-scrollbar {
        height: 12px;
      }
      &::-webkit-scrollbar-track {
        background: #353535;
        border-radius: 4px;
      }
      &::-webkit-scrollbar-thumb {
        background: #5e5e5e; /* Цвет ползунка */
        border-radius: 8px;
        &:hover {
          background: #787878;
        }
      }
    }
  }
}
</style>