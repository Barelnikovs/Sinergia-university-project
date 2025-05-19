<script setup>
import { computed } from 'vue'
import t from '@/content/buttonsAndInputs.js'
import { tPrograms } from "@/content/texts.js";
import { RouterLink, useRoute } from "vue-router";
const route = useRoute();
import BaseButton from "@/components/ui/BaseButton.vue";
import { useCardStore } from "@/stores/cardsStore.js";
const { cardsOtherSpecialties } = useCardStore();

const cardsWithoutCurrentPage = computed(() => {
  const currentPageString = route.params.program.slice(1)
  return cardsOtherSpecialties.filter(card => card.id !== currentPageString)
})
</script>

<template>
<section>
  <div class="container">
    <div class="title">
      <h2>
        {{ tPrograms.otherDegree.title.part1 }}<br>
        <span class="painted">{{ tPrograms.otherDegree.title.paintedPart }}</span>
      </h2>
    </div>
  </div>
  <div class="cards">
    <div class="card" v-for="card in cardsWithoutCurrentPage" :key="card.id">
      <div class="card-title">
        <p class="studies-place">{{ card.studiesPlace }}</p>
        <p class="program">{{ card.title }}</p>
      </div>
      <div class="image">
        <img :src="card.image" alt="профессия">
      </div>
      <div class="button">
        <router-link :to="`/programs/:${card.id}`" custom v-slot="{navigate}">
          <BaseButton @click="navigate" color="btn-red" variant="btn-read-more" :text-content="t.programSelection.more" />
        </router-link>
      </div>
    </div>
  </div>
</section>
</template>

<style scoped lang="scss">
section {
  padding: 40px 0 0;
  display: flex;
  flex-direction: column;
  gap: 30px;
  .container {
    .title {
      h2 {
        font-size: 36px;
        font-weight: 450;
      }
    }
  }
  .cards {
    display: flex;
    flex-direction: row;
    gap: 16px;
    overflow-x: auto;
    overflow-y: hidden;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
    width: 100%;
    padding: 15px 5%;
    .card {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex: 0 0 310px;
      border-radius: 10px;
      box-shadow: 0 6px 10px 0 rgba(175, 175, 175, 0.29);
      scroll-snap-align: center;
      padding: 10px;
      .card-title {
        align-self: flex-start;
        margin-bottom: 20px;
        p.studies-place {
          font-size: 20px;
          line-height: 120%;
        }
        p.program {
          font-size: 26px;
          font-weight: 450;
        }
      }
      .image {
        width: 100%;
        height: 188px;
        border-radius: 10px;
        overflow: hidden;
        margin-bottom: 30px;
        margin-top: auto;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
}
@include min-width($bp-md) {
  section {
    padding: 80px 0 0;
    gap: 40px;
    .container {
      .title {
        h2 {
          font-size: 46px;
        }
      }
    }
    .cards {
      gap: 20px;
      .card {
        padding: 15px;
        flex: 0 0 340;
      }
    }
  }
}
@include min-width($bp-lg) {
  section {
    padding: 120px 0 0;
    .container {
      .title {
        h2 {
          font-size: 56px;
        }
      }
    }
    .cards {
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
      .card {
        padding: 20px;
        flex: 0 0 377;
      }
    }
  }
}
</style>