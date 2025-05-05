<script setup>
import {tMain} from "@/content/texts.js";
import t from '@/content/buttonsAndInputs.js'
import BaseButton from "@/components/ui/BaseButton.vue";
import HomeBanner from "@/components/home/HomeBanner.vue";
</script>

<template>
  <div class="container">
    <section>
      <div class="top-title">
        <h1>{{ tMain.mainTitle.part1 }}<span class="painted">{{ tMain.mainTitle.paintedPart }}</span>{{ tMain.mainTitle.part2 }}</h1>
      </div>
      <div class="top-description">
        <div>
          <p>{{ tMain.studyProgram }}</p>
        </div>
        <div>
          <BaseButton color="btn-red" variant="btn-header" :text-content="t.studyProgram" />
        </div>
      </div>
      <HomeBanner />
    </section>
  </div>
</template>

<style scoped lang="scss">
.container {
  section {
    margin-bottom: 80px;
    .top-title {
      margin: 20px 0;
      overflow: visible;
      h1 {
        font-size: 36px;
        font-weight: 450;
        overflow: visible;
      }
    }
    .top-description {
      margin-bottom: 30px;
      p {
        font-size: 20px;
        line-height: 120%;
      }
      button {
        display: none;
      }
    }
  }
}

@include min-width($bp-lg) {
  .container {
    section {
      margin-bottom: 80px;
      .top-title {
        margin: 80px 0 32px;
        h1 {
          font-size: 70px;
        }
      }
      .top-description {
        display: flex;
        justify-content: space-between;
        gap: 200px;
        button {
          display: block;
        }
      }
    }
  }
}

</style>