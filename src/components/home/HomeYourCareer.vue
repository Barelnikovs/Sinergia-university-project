<script setup>
import t from '@/content/buttonsAndInputs.js'
import { tMain } from '@/content/texts.js'
import BaseInput from "@/components/ui/BaseInput.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
import { useFormsStore } from "@/stores/formsStore.js";
import WriteToMessage from "@/components/common/WriteToMessage.vue";
import {computed} from "vue";
const formsStore = useFormsStore();

const v$ = formsStore.getVuelidate('formStartYourFutureInCyber')
const isSubmitFailed = computed(() => formsStore.forms['formStartYourFutureInCyber'].failedSubmit)
const submitForm = async () => formsStore.handleSubmit('formStartYourFutureInCyber', v$)
</script>

<template>
  <section>
    <div class="container">
      <div class="title">
        <h2>{{ tMain.yourCareerInCyberSport.part1 }}<span class="painted">{{ tMain.yourCareerInCyberSport.paintedPart }}</span>
          {{ tMain.yourCareerInCyberSport.part2 }}</h2>
      </div>
      <form class="form" @submit.prevent="submitForm">
        <div class="form__title">
          <p class="form__start-today">{{ tMain.startToday }}</p>
          <p class="form__take-master-classes">{{ tMain.takeFiveMasterClasses }}</p>
        </div>
        <BaseInput
            v-model="v$.name.$model"
            :errors="v$.name.$errors"
            :showErrors="isSubmitFailed"
            size="input-your-career"
            :placeholder="t.placeholders.name"
            :darkColor="true"
            name="name"
        />
        <BaseInput
            v-model="v$.telephone.$model"
            :errors="v$.telephone.$errors"
            :showErrors="isSubmitFailed"
            size="input-your-career"
            :placeholder="t.placeholders.tel"
            :darkColor="true"
            name="telephone"
            mask="+{7} (000) 000 00 00"
        />
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
      gap: 70px;
      .title {
        width: 55%;
      }
      .form {
        width: 45%;
      }
    }
  }
}

@include min-width($bp-lg) {
  section {
    margin-bottom: 130px;
    .container {
      gap: 80px;
    }
    .container .title {
      width: 65%;
      margin-bottom: 0;
      h2 {
        font-size: 50px;
        line-height: 110%;
      }
    }
    .container .form {
      width: 35%;
    }
  }
}
</style>