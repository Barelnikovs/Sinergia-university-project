<script setup>
import { computed } from 'vue'
import BaseInput from "@/components/ui/BaseInput.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
import WriteToMessage from "@/components/common/WriteToMessage.vue";
import PrivacyPolicy from "@/components/common/PrivacyPolicy.vue";
import t from "@/content/buttonsAndInputs.js";
import { tMain } from "@/content/texts.js";
import { useFormsStore } from '@/stores/formsStore.js'
const formsStore = useFormsStore()

const v$ = formsStore.getVuelidate('formStartYourFutureInCyber')
const isSubmitFailed = computed(() => formsStore.forms['formStartYourFutureInCyber'].failedSubmit)
const submitForm = async () => formsStore.handleSubmit('formStartYourFutureInCyber', v$)
</script>

<template>
  <div class="container">
    <section>
      <div class="title">
        <h2><span class="painted">{{ tMain.beginTheFuture.paintedPart }}</span>{{ tMain.beginTheFuture.part1 }}</h2>
      </div>
      <form @submit.prevent="submitForm">
        <div class="get-consultation">
          <BaseInput
              v-model.trim="v$.name.$model"
              :errors="v$.name.$errors"
              :showErrors="isSubmitFailed"
              name="name"
              :placeholder="t.placeholders.name"
              size="input-large"
          />
          <BaseInput
              v-model="v$.telephone.$model"
              :errors="v$.telephone.$errors"
              :showErrors="isSubmitFailed"
              name="telephone"
              :placeholder="t.placeholders.tel"
              size="input-large"
              mask="+{7} (000) 000 00 00"
          />
          <BaseButton
              :text-content="t.getConsultation"
              variant="btn-large"
              color="btn-black"
              type="submit"
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
  .title {
    margin-bottom: 20px;
    h2 {
      font-size: 26px;
      font-weight: 450;
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
    .title {
      margin-bottom: 40px;
    }
    .get-consultation {
      flex-direction: row;
      margin-bottom: 20px;
    }
  }
}
</style>