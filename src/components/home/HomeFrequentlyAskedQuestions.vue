<script setup>
import t from '@/content/buttonsAndInputs.js'
import { tMain } from '@/content/texts.js'
import BaseButton from "@/components/ui/BaseButton.vue";
import Question from "@/components/common/Question.vue";
</script>

<template>
<section>
  <div class="container">
    <div class="title-and-button">
      <h2>{{ tMain.oftenAsk.title.part1 }}<span class="painted">{{ tMain.oftenAsk.title.paintedPart }}</span></h2>
      <BaseButton color="btn-red" variant="get-master-classes" :text-content="t.askYourQuestion" />
    </div>
    <div class="questions">
      <Question />
    </div>
    <BaseButton color="btn-red" variant="btn-large" :text-content="t.askYourQuestion" />
  </div>
</section>
</template>

<style scoped lang="scss">
section {
  padding: 40px 0 50px;
  background-color: $black;
  .container {
    display: flex;
    flex-direction: column;
    .title-and-button {
      margin-bottom: 20px;
      h2 {
        font-size: 36px;
        font-weight: 450;
        line-height: 110%;
        color: $white;
        span.painted {
          color: $black;
        }
      }
      button {
        display: none;
      }
    }
    .questions {
      display: flex;
      flex-direction: column;
    }
  }
}

@include min-width($bp-md) {
  section {
    padding: 110px 0 130px;
    .container {
      flex-direction: row;
      gap: 120px;
      .title-and-button {
        display: flex;
        flex-direction: column;
        gap: 50px;
        margin-bottom: 0;
        width: 28%;
        h2 {
          font-size: 56px;
        }
        button {
          display: inline-block;
        }
      }
      .questions {
        width: 62%;
      }
      & > button {
        display: none;
      }
    }
  }
}
</style>