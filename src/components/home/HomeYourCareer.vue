<script setup>
import t from '@/content/buttonsAndInputs.js'
import { tMain } from '@/content/texts.js'
import BaseInput from "@/components/ui/BaseInput.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
import { useFormsStore } from "@/stores/formsStore.js";
import WriteToMessage from "@/components/common/WriteToMessage.vue";
const formsStore = useFormsStore();
</script>

<template>
  <section>
    <div class="container">
      <div class="title">
        <h2>{{ tMain.yourCareerInCyberSport.part1 }}<span class="painted"><span>{{ tMain.yourCareerInCyberSport.paintedPart }}</span></span>
          {{ tMain.yourCareerInCyberSport.part2 }}</h2>
      </div>
      <form class="form">
        <div class="form__title">
          <p class="form__start-today">{{ tMain.startToday }}</p>
          <p class="form__take-master-classes">{{ tMain.takeFiveMasterClasses }}</p>
        </div>
        <BaseInput v-model="formsStore.takeMasterClasses.name" size="input-your-career" :placeholder="t.placeholders.name" :darkColor="true"/>
        <BaseInput v-model="formsStore.takeMasterClasses.telephone" size="input-your-career" :placeholder="t.placeholders.tel" :darkColor="true" />
        <BaseButton variant="get-master-classes" color="btn-red" :text-content="t.getMasterClasses" />
      </form>
      <WriteToMessage />
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  background-color: $black;
  color: $white;
  padding: 35px 0;
  margin-bottom: 50px;
  .container {
    display: flex;
    flex-direction: column;
    .title {
      margin-bottom: 20px;
      h2 {
        font-size: 36px;
        font-weight: 450;
        line-height: 110%;
        .painted {
          color: $black;
          position: relative;
          span {
            position: relative;
          }
        }
      }
    }
    .form {
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin-bottom: 16px;
      &__title {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }
      &__start-today {
        font-size: 26px;
        font-weight: 450;
        line-height: 100%;
      }
      &__take-master-classes {
        font-size: 20px;
        font-weight: 500;
        line-height: 100%;
        color: $yellow;
      }
    }
  }
}

@include min-width($bp-md) {
  section {
    padding: 110px 0 130px;
    .container {
      flex-direction: row;
      gap: 88px;
    }
  }
}

@include min-width($bp-lg) {
  section {
    margin-bottom: 130px;
    .container .title {
      width: 70%;
      margin-bottom: 0;
      h2 {
        font-size: 56px;
        line-height: 100%;
      }
    }
    .container .form {
      width: 30%;
    }
  }
}
</style>