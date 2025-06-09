<script setup>
import BaseInput from "@/components/ui/BaseInput.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
import BaseSelect from "@/components/ui/BaseSelect.vue";
import WriteToMessage from "@/components/common/WriteToMessage.vue";
import PrivacyPolicy from "@/components/common/PrivacyPolicy.vue";
import t from "@/content/buttonsAndInputs.js";
import {tMain} from "@/content/texts.js";
import { useFormsStore } from "@/stores/formsStore.js";
import {computed} from "vue";
const formsStore = useFormsStore();

const v$ = formsStore.getVuelidate('formLeaveRequestForAcceptanceDocuments')
const isSubmitFailed = computed(() => formsStore.forms['formLeaveRequestForAcceptanceDocuments'].failedSubmit)
const submitForm = async () => formsStore.handleSubmit('formLeaveRequestForAcceptanceDocuments', v$)
</script>

<template>
  <div class="container">
    <section>

      <div class="title">
        <h2>{{ tMain.leaveRequestForDocument }}</h2>
      </div>

      <form @submit.prevent="submitForm">
        <div class="get-consultation">
          <BaseSelect
              v-model="v$.program.$model"
              :errors="v$.program.$errors"
              :showErrors="isSubmitFailed"
              :placeholder="t.placeholders.programs"
              :options="t.optionsSelect"
              name="program"
          />
          <BaseInput
              v-model.trim="v$.name.$model"
              :errors="v$.name.$errors"
              :showErrors="isSubmitFailed"
              :placeholder="t.placeholders.name"
              size="input-small"
              name="name"
          />
          <BaseInput
              v-model="v$.telephone.$model"
              :errors="v$.telephone.$errors"
              :showErrors="isSubmitFailed"
              :placeholder="t.placeholders.tel"
              size="input-small"
              name="telephone"
              mask="+{7} (000) 000 00 00"
          />
          <BaseButton
              :text-content="t.getConsultation"
              variant="btn-small"
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