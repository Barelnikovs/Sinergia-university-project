<script setup>
import t from "@/content/buttonsAndInputs.js";
import {tMain} from "@/content/texts.js";
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
        <h2>{{ tMain.leaveRequestForAdmission.part1 }}<span class="painted">{{ tMain.leaveRequestForAdmission.paintedPart }}</span>{{ tMain.leaveRequestForAdmission.part2 }}</h2>
      </div>
      <form>
        <div class="get-consultation">
          <BaseInput
              v-model="formsStore.formLeaveRequestAndAct.name"
              type="text"
              :placeholder="t.placeholders.name"
              name="name"
              size="input-large"
          />
          <BaseInput
              v-model="formsStore.formLeaveRequestAndAct.telephone"
              type="tel"
              :placeholder="t.placeholders.tel"
              name="telephone"
              size="input-large"
          />
          <BaseButton
              :text-content="t.leaveRequest"
              variant="btn-large"
              color="btn-black"
          />
        </div>
        <WriteToMessage />
        <PrivacyPolicy v-model="formsStore.formLeaveRequestAndAct.agreement" />
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