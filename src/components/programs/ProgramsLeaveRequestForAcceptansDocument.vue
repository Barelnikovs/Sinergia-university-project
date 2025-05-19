<script setup>
import t from "@/content/buttonsAndInputs.js";
import {tPrograms} from "@/content/texts.js";
import BaseInput from "@/components/ui/BaseInput.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
import WriteToMessage from "@/components/common/WriteToMessage.vue";
import PrivacyPolicy from "@/components/common/PrivacyPolicy.vue";
import { useFormsStore } from '@/stores/formsStore.js'
const formsStore = useFormsStore()
</script>

<template>
  <div class="container">
    <section>
      <div class="title">
        <h2>{{ tPrograms.leaveRequest }}</h2>
      </div>
      <form>
        <div class="get-consultation">
          <BaseInput
              v-model="formsStore.formProgramsLeaveRequest.name"
              type="text"
              :placeholder="t.placeholders.name"
              size="input-large"
              name="name"
          />
          <BaseInput
              v-model="formsStore.formProgramsLeaveRequest.telephone"
              type="tel"
              :placeholder="t.placeholders.tel"
              size="input-large"
              name="telephone"
          />
          <BaseButton
              :text-content="t.leaveRequest"
              variant="btn-large"
              color="btn-black"
          />
        </div>
        <WriteToMessage />
        <PrivacyPolicy v-model="formsStore.formProgramsLeaveRequest.agreement" />
      </form>
    </section>
  </div>
</template>

<style scoped lang="scss">
section {
  display: none;
}

@include min-width($bp-md) {
  section {
    display: block;
    margin-bottom: 130px;
    .title {
      margin-bottom: 40px;
      h2 {
        font-size: 26px;
        font-weight: 450;
      }
    }
    .get-consultation {
      display: flex;
      flex-direction: row;
      gap: 20px;
      margin-bottom: 20px;
    }
  }
}
</style>