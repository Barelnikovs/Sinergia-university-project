<script setup>
import { tPrograms } from "@/content/texts.js";

defineProps({
  description: {
    type: String,
    required: true,
  },
  textInBlocks: {
    type: Object,
    required: true,
  }
})
</script>

<template>
<section>
  <div class="container">
    <div class="title">
      <h2>{{ tPrograms.aboutProgram.title }}</h2>
      <p>{{ description }}</p>
    </div>
    <div class="blocks">
      <div class="block black">
        <div class="texts">
          <p class="texts-title">{{ tPrograms.aboutProgram.format.title }}</p>
          <p class="texts-description">{{ textInBlocks.format }}</p>
        </div>
        <div class="image">
          <img src="@/assets/images/icons/about_direction_1.svg" alt="иконка">
        </div>
      </div>
      <div class="block yellow">
        <div class="texts">
          <p class="texts-title">{{ tPrograms.aboutProgram.durationOfStudy.title }}</p>
          <p class="texts-description" v-for="(deadline, index) in textInBlocks.durationOfStudy" :key="index">{{ deadline }}</p>
        </div>
        <div class="image">
          <img src="@/assets/images/icons/about_direction_2.svg" alt="иконка">
        </div>
      </div>
      <div class="block red">
        <div class="texts">
          <p class="texts-title">{{ tPrograms.aboutProgram.diploma.title }}</p>
          <p class="texts-description">{{ textInBlocks.diploma }}</p>
        </div>
        <div class="image">
          <img src="@/assets/images/icons/about_direction_3.svg" alt="иконка">
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<style scoped lang="scss">
section {
  margin-bottom: 40px;
  .container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    .title {
      display: flex;
      flex-direction: column;
      gap: 20px;
      h2 {
        font-weight: 450;
        font-size: 36px;
      }
      p {
        font-size: 20px;
        line-height: 120%;
      }
    }
    .blocks {
      display: flex;
      flex-direction: column;
      gap: 20px;
      .block {
        display: flex;
        flex-direction: column;
        padding: 10px;
        gap: 20px;
        border-radius: 10px;
        &.black {
          background: $black;
          color: $white;
        }
        &.yellow {
          background: $yellow;
        }
        &.red {
          background: $red;
          color: $white;
        }
        .texts {
          align-self: flex-start;
          p.texts-title {
            font-weight: 500;
            font-size: 26px;
            margin-bottom: 8px;
          }
          p.texts-description {
            font-weight: 450;
            font-size: 26px;
            line-height: 120%;
          }
        }
        .image {
          align-self: flex-end;
          img {
            height: 57px;
          }
        }
      }
    }
  }
}
@include min-width($bp-md) {
  section {
    margin-bottom: 80px;
    .container {
      gap: 30px;
      .title {
        gap: 20px;
        h2 {
          font-size: 46px;
          align-self: center;
        }
        p {
          font-size: 24px;
          text-align: center;
        }
      }
      .blocks {
        flex-direction: column;
        .block {
          padding: 20px;
          gap: 0;
          .texts {
            p.texts-title {
              margin-bottom: 12px;
            }
          }
        }
      }
    }
  }
}
@include min-width($bp-lg) {
  section {
    margin-bottom: 120px;
    .container {
      gap: 40px;
      .title {
        h2 {
          font-size: 56px;
        }
        p {
          width: 80%;
          align-self: center;
        }
      }
      .blocks {
        flex-direction: row;
        .block {
          width: 33.333%;
        }
      }
    }
  }
}
</style>