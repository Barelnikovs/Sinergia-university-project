<script setup>
import { useCardStore } from "@/stores/cardsStore.js";
const cardStore = useCardStore();
</script>

<template>
<div class="question-answer-container" v-for="question in cardStore.frequentlyAskedQuestions" :key="question.id">
  <div class="question-and-icon-block">
    <p class="question">{{ question.question }}</p>
    <div class="plus-icon">
      <img
          :class="{'active': question.active}"
          src="@/assets/images/icons/plus.svg"
          alt="плюс или крестик"
          @click="cardStore.toggleStatusFrequentlyAskedQuestions(question.id)"
      >
    </div>
  </div>
  <div :class="['answer-block', {'active': question.active}]">
    <p class="answer">{{ question.answer }}</p>
  </div>
</div>
</template>

<style scoped lang="scss">
.question-answer-container {
  border-bottom: 1px solid rgba(61, 61, 61, 1);
  margin-bottom: 30px;
  .question-and-icon-block {
    display: flex;
    justify-content: space-between;
    p.question {
      font-size: 26px;
      line-height: 100%;
      font-weight: 450;
      color: $white;
      margin-bottom: 20px;
    }
    .plus-icon img{
      width: 38px;
      cursor: pointer;
      transition: transform .2s ease;
    }
    .plus-icon img.active {
      width: 38px;
      cursor: pointer;
      transform: rotate(45deg);
    }
  }
  .answer-block {
    height: 0;
    overflow: hidden;
    opacity: 0;
    transition: height 0.3s ease, opacity 0.2s ease 0.1s;
    p.answer {
      font-size: 26px;
      line-height: 100%;
      color: rgba(186, 186, 186, 1);
      margin-bottom: 20px;
    }
  }
  .answer-block.active {
    height: 72px;
    opacity: 1;
    p.answer {
      visibility: visible;
      transition: all 0.3s ease;
    }
  }
}

@include min-width($bp-md) {
  .question-answer-container {
    margin-bottom: 50px;
    .question-and-icon-block {
      p.question {
        margin-bottom: 50px;
      }
    }
    .answer-block {
      p.answer {
        margin-bottom: 70px;
      }
    }
    .answer-block.active {
      height: 96px;
    }
  }
}
</style>