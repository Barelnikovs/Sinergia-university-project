<script setup>
import tPrograms from '@/content/programsStudy.js'
import t from '@/content/buttonsAndInputs.js'
import BaseButton from "@/components/ui/BaseButton.vue";
import { useCardStore } from "@/stores/cardsStore.js";
const cardStore = useCardStore();
</script>

<template>
  <div class="card"  v-for="(card, index) in cardStore.cardsOfProgram" :key="index" >
    <div>
      <div class="title">
        <h3>{{ card.title }}</h3>
      </div>
      <div class="terms">
        <p>{{ tPrograms.textsFromCards.terms.title }}</p>
        <ul>
          <li v-for="term in card.terms">
            <p>{{ term }}</p>
          </li>
        </ul>
      </div>
      <div class="formats">
        <p>{{ tPrograms.textsFromCards.formats.title }}</p>
        <ul>
          <li v-for="format in card.formats">
            <p>{{ format }}</p>
          </li>
        </ul>
      </div>
      <div class="description">
        <p>{{ card.description }}</p>
      </div>
    </div>
    <div>
      <div class="diploma">
        <p>{{ card.diploma }}</p>
      </div>
      <div class="more" v-if="card.link">
        <router-link :to="`/programs/:${card.link}`" custom v-slot="{ navigate }">
          <BaseButton @click="navigate" :text-content="t.programSelection.more" color="btn-black" variant="btn-read-more" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
 .card {
   min-height: 600px;
   min-width: 325px;
   max-width: 325px;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   border: 1px solid $black;
   border-radius: 10px;
   padding: 20px;
   scroll-snap-align: center;
   .title {
     margin-bottom: 50px;
     h3 {
       font-size: 26px;
       font-weight: 450;
       line-height: 120%;
     }
   }
   .terms {
     margin-bottom: 45px;
   }
   .formats, .description, .diploma {
     margin-bottom: 20px;
   }
   .terms, .formats, .description, .diploma {
     p, li {
       font-size: 20px;
       line-height: 120%;
     }
     ul {
       padding-left: 24px;
       color: $yellow;
       p {
         color: $black;
       }
     }
   }
   .diploma {
     p {
       color: $red;
     }
   }
 }

 @include min-width($bp-lg) {
   .card {
     scroll-snap-align: none;
     max-width: none;
   }
 }
</style>