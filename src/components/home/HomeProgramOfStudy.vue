<script setup>
import BaseButton from "@/components/ui/BaseButton.vue";
import { useCardStore } from "@/stores/cardsStore.js";
import CardsOfProgramStudy from "@/components/cards/CardsOfProgramStudy.vue";
import { tMain } from "../../content/texts.js";
const cardStore = useCardStore();


</script>

<template>
  <section id="program-of-study">
    <div class="container">
      <div class="title">
        <h2>{{ tMain.programsStudy }}</h2>
      </div>
      <div class="placeOfStudy">
        <BaseButton
            v-for="place in cardStore.placesOfStudy"
            :key="place.id"
            :text-content="place.place"
            :color="place.active ? 'btn-red' : 'btn-white'"
            variant="btn-programs"
            @click="cardStore.changeActivePlaceOfStudy(place.id)"
        />
      </div>
    </div>
    <div class="programs">
      <CardsOfProgramStudy />
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
    }
  }
  .placeOfStudy {
    margin-bottom: 16px;
    display: flex;
    flex-direction: row;
    gap: 16px;
  }
  .programs {
    display: flex;
    flex-direction: row;
    gap: 16px;
    overflow-x: auto;
    overflow-y: hidden;
    scrollbar-width: none;
    scroll-snap-type: x mandatory;
    padding: 0 5%;
  }
}

@include min-width($bp-md) {
  section {
    .programs {
      padding: 0 6.8%;
    }
  }
}

@include min-width($bp-lg) {
  section {
    margin-bottom: 120px;
    .title {
      margin-bottom: 20px;
      h2 {
        font-size: 56px;
      }
    }
    .placeOfStudy {
      margin-bottom: 20px;
      gap: 20px;
    }
    .programs {
      width: clamp(1024px, 61%, 1920px);
      margin: 0 auto;
      flex-wrap: wrap;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      overflow-x: visible;
      overflow-y: visible;
      scrollbar-width: auto;
      scroll-snap-type: none;
      padding: 0;
    }
  }
}
</style>