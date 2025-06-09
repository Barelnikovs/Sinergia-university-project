<script setup>
import t from "@/content/buttonsAndInputs.js";
import {tMain} from "@/content/texts.js";
import BaseInput from "@/components/ui/BaseInput.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
import WriteToMessage from "@/components/common/WriteToMessage.vue";
import PrivacyPolicy from "@/components/common/PrivacyPolicy.vue";
import { useFormsStore } from '@/stores/formsStore.js'
import {computed} from "vue";
const formsStore = useFormsStore()

const v$ = formsStore.getVuelidate('formReserveStudyPlace')
const isSubmitFailed = computed(() => formsStore.forms['formReserveStudyPlace'].failedSubmit)
const submitForm = async () => formsStore.handleSubmit('formReserveStudyPlace', v$)
</script>

<template>
  <div class="container">
    <section>

      <div class="title-block">
        <div class="title">
          <h2>{{ tMain.haveNotDecidedYet.title.part1 }}<span class="painted">{{ tMain.haveNotDecidedYet.title.paintedPart }}</span>{{ tMain.haveNotDecidedYet.title.part2 }}</h2>
          <p>{{ tMain.haveNotDecidedYet.warning }}</p>
        </div>
        <WriteToMessage :forDesktop="true"/>
      </div>

      <form @submit.prevent="submitForm">
        <div class="get-consultation">
          <BaseInput
              v-model.trim="v$.name.$model"
              :errors="v$.name.$errors"
              :showErrors="isSubmitFailed"
              :placeholder="t.placeholders.name"
              size="input-large"
              name="name"
          />
          <BaseInput
              v-model="v$.telephone.$model"
              :errors="v$.telephone.$errors"
              :showErrors="isSubmitFailed"
              :placeholder="t.placeholders.tel"
              size="input-large"
              name="telephone"
              mask="+{7} (000) 000 00 00"
          />
          <BaseButton
              :text-content="t.bookPlace"
              variant="btn-large"
              color="btn-black"
          />
        </div>

        <WriteToMessage />
        <PrivacyPolicy
            v-model="v$.agreement.$model"
            :errors="v$.agreement.$errors"
            :showErrors="isSubmitFailed"
        />
      </form>

    </section>
  </div>
</template>

<style scoped lang="scss">
section {
  margin-bottom: 45px;
  .title-block {
    margin-bottom: 20px;
    h2 {
      font-size: 26px;
      font-weight: 450;
      margin-bottom: 8px;
    }
    p {
      font-size: 20px;
      line-height: 120%;
    }
  }
  .get-consultation {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 16px;
  }
}

@include min-width($bp-md) {
  section {
    margin-bottom: 130px;
    .title-block {
      display: flex;
      flex-direction: row;
      gap: 30px;
      margin-bottom: 40px;
      .title {
        width: 63%;
      }
    }
    .get-consultation {
      flex-direction: row;
      margin-bottom: 20px;
    }
  }
}

@include min-width($bp-lg) {
  section {
    .title-block {
      .title {
        padding-top: 10px;
        width: 75%;
      }
    }
  }
}
</style>