<script setup>
import t from "@/content/buttonsAndInputs.js";
import {tMain} from "@/content/texts.js";
import BaseInput from "@/components/ui/BaseInput.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
import BaseSelect from "@/components/ui/BaseSelect.vue";
import WriteToMessage from "@/components/common/WriteToMessage.vue";
import PrivacyPolicy from "@/components/common/PrivacyPolicy.vue";
import { useFormsStore } from '@/stores/formsStore.js'
const formsStore = useFormsStore()
</script>

<template>
  <div class="container">
    <section>

      <div class="title">
        <h2>{{ tMain.leaveRequestForDocument }}</h2>
      </div>

      <form>
        <div class="get-consultation">
          <BaseSelect
              v-model="formsStore.formLeaveRequestForAcceptanceDocuments.program"
              :placeholder="t.placeholders.programs"
              :options="t.optionsSelect"
          />
          <BaseInput
              v-model="formsStore.formLeaveRequestForAcceptanceDocuments.name"
              type="text"
              :placeholder="t.placeholders.name"
              size="input-small"
          />
          <BaseInput
              v-model="formsStore.formLeaveRequestForAcceptanceDocuments.telephone"
              type="tel"
              :placeholder="t.placeholders.tel"
              size="input-small"
          />
          <BaseButton
              :text-content="t.getConsultation"
              variant="btn-small"
              color="btn-black"
          />
        </div>

        <WriteToMessage />
        <PrivacyPolicy v-model="formsStore.formLeaveRequestForAcceptanceDocuments.agreement" />
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