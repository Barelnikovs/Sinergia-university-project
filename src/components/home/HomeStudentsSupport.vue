<script setup>
import { useCardStore } from "@/stores/cardsStore.js";
const { supportStudentsButtons, changeActiveStudentsSupportButton } = useCardStore();
import { tMain } from '@/content/texts.js'
import t from '@/content/buttonsAndInputs.js'
import BaseButton from "@/components/ui/BaseButton.vue";
import StudentsSupportContent from '../common/StudentsSupportContent.vue'
</script>

<template>
<section>
  <div class="container">
      <div class="title">
        <h2><span class="painted">{{ tMain.supportOfStudent.title.paintedPart }}</span>{{ tMain.supportOfStudent.title.part1 }}</h2>
      </div>
      <div class="buttons-and-info">
        <div class="buttons">
          <BaseButton
              v-for="button in supportStudentsButtons"
              :color="button.active ? 'btn-red' : 'btn-white'"
              variant="btn-support"
              :textContent="button.buttonsText"
              @click="changeActiveStudentsSupportButton(button.id)"
          />
        </div>
        <StudentsSupportContent />
      </div>
      <div class="becomeStudent">
        <BaseButton color="btn-black" variant="btn-large" :textContent="t.becomeStudent" />
      </div>
  </div>
</section>
</template>

<style scoped lang="scss">
section {
  margin-bottom: 50px;
  .container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    .title {
      h2 {
        font-size: 36px;
        font-weight: 450;
      }
    }
    .buttons-and-info {
      display: flex;
      flex-direction: column;
      gap: 20px;
      .buttons {
        display: flex;
        flex-direction: row;
        gap: 16px;
      }
    }
    .becomeStudent {
      display: flex;
      justify-content: center;
    }
  }
}

@include min-width($bp-md) {
  section {
    margin-bottom: 130px;
    .container {
      gap: 40px;
      .title {
        h2 {
          font-size: 56px;
        }
      }
      .buttons-and-info {
        flex-direction: row;
        gap: 20px;
        .buttons {
          flex-direction: column;
          gap: 20px;
          flex: 3;
          width: 30%;
        }
      }
    }
  }
}
</style>