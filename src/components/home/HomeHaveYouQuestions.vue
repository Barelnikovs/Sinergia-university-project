<script setup>
import { tMain } from '@/content/texts.js'
import t from '@/content/buttonsAndInputs.js'
import BaseButton from "@/components/ui/BaseButton.vue";
</script>

<template>
<section>
  <div class="container">
    <div class="all-content">
      <div class="title">
        <h2>{{ tMain.haveYouAnyQuestions.title.part1 }}<span class="painted">{{ tMain.haveYouAnyQuestions.title.paintedPart }}</span></h2>
      </div>
      <div class="paragraph">
        <p>{{ tMain.haveYouAnyQuestions.curator }}</p>
      </div>
      <div class="help-container">
        <div class="help-block">
          <p class="number">{{ tMain.haveYouAnyQuestions.number1 }}</p>
          <p class="text">{{ tMain.haveYouAnyQuestions.paragraph1 }}</p>
        </div>
        <div class="help-block">
          <p class="number">{{ tMain.haveYouAnyQuestions.number2 }}</p>
          <p class="text">{{ tMain.haveYouAnyQuestions.paragraph2 }}</p>
        </div>
        <div class="help-block">
          <p class="number">{{ tMain.haveYouAnyQuestions.number3 }}</p>
          <p class="text">{{ tMain.haveYouAnyQuestions.paragraph3 }}</p>
        </div>
        <div class="help-block">
          <p class="number">{{ tMain.haveYouAnyQuestions.number4 }}</p>
          <p class="text">{{ tMain.haveYouAnyQuestions.paragraph4 }}</p>
        </div>
      </div>
      <div class="image mobile">
        <img src="../../assets/images/main/have_you_any_questions.avif" alt="куратор">
      </div>
      <BaseButton color="btn-black" variant="btn-trust-professional" :text-content="t.trustProfessional" />
    </div>
    <div class="image desktop">
      <img src="../../assets/images/main/have_you_any_questions.avif" alt="куратор">
    </div>

  </div>
</section>
</template>

<style scoped lang="scss">
section {
  margin-bottom: 50px;
  .all-content {
    display: flex;
    flex-direction: column;
    gap: 20px;
    .title {
      h2 {
        font-size: 36px;
        font-weight: 450;
      }
    }
    .paragraph {
      p {
        font-size: 26px;
        font-weight: 450;
        line-height: 100%;
      }
    }
    .help-container {
      display: flex;
      flex-direction: column;
      gap: 20px;
      .help-block {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        gap: 14px;
        justify-content: space-between;
        .number {
          font-size: 70px;
          font-weight: 450;
          line-height: 100%;
          width: 23%;
          color: $red;
        }
        .text {
          font-size: 26px;
          line-height: 100%;
          padding-top: 8px;
        }
      }
    }

  }
  .image {
    width: 100%;
    height: 362px;
    overflow: hidden;
    img {
      height: 100%;
      width: 100%;
      border-radius: 10px;
      object-fit: cover;
      object-position: 0 25%;
    }
  }
  .image.desktop {
    display: none;
  }
}

@include min-width($bp-md) {
  section {
    margin-bottom: 130px;
    .all-content {
      gap: 40px;
      .title {
        h2 {
          font-size: 56px;
        }
      }
      .help-container {
        display: grid;
        grid-template: 1fr 1fr / 1fr 1fr;
        gap: 20px;
      }
      button {
        margin: 0 auto;
      }
    }
    .image {
      max-width: 463px;
      height: 552px;
      margin: 0 auto;
    }
  }
}

@include min-width($bp-lg) {
  section {
    .container {
      display: flex;
      flex-direction: row;
      gap: 50px;
      .all-content {
        .image.mobile {
          display: none;
        }
        button {
          margin: 0;
        }
      }
      .help-container {
        gap: 20px;
        .help-block {
          gap: 30px;
          .text {
            font-size: 26px;
            line-height: 100%;
            padding-top: 8px;
            max-width: 225px;
          }
        }
      }
      .image.desktop{
        display: block;
      }
    }

  }
}
</style>