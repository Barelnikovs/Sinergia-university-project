<script setup>
import { computed } from "vue";
import useVuelidate from "@vuelidate/core";
import { minLength, helpers } from "@vuelidate/validators";
import t from "@/content/buttonsAndInputs.js";
import {tMain} from "@/content/texts.js";
import BaseInput from "@/components/ui/BaseInput.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
import WriteToMessage from "@/components/common/WriteToMessage.vue";
import PrivacyPolicy from "@/components/common/PrivacyPolicy.vue";
import { useFormsStore } from '@/stores/formsStore.js'
const formsStore = useFormsStore()

const rules = computed(() => ({
  name: {
    minLength: helpers.withMessage(`Минимальная длинна: 3 символа`, minLength(3)),
  },
}))

const v$ = useVuelidate(rules, formsStore.formStartYourFutureInCyber)
</script>

<template>
  <div class="container">
    <section>
      <div class="title">
        <h2><span class="painted">{{ tMain.beginTheFuture.paintedPart }}</span>{{ tMain.beginTheFuture.part1 }}</h2>
      </div>
      <form>
        <div class="get-consultation">
          <BaseInput
              v-model="v$.name.$model"
              type="text"
              name="name"
              :placeholder="t.placeholders.name"
              :errors="v$.name.$errors"
              size="input-large"
          />
          <BaseInput
              v-model="formsStore.formStartYourFutureInCyber.telephone"
              type="tel"
              name="telephone"
              :placeholder="t.placeholders.tel"
              size="input-large"
          />
          <BaseButton
              :text-content="t.getConsultation"
              variant="btn-large"
              color="btn-black"
          />
        </div>

        <WriteToMessage />
        <PrivacyPolicy v-model="formsStore.formStartYourFutureInCyber.agreement" />
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