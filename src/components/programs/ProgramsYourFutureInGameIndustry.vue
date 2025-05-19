<script setup>
import { tPrograms } from "@/content/texts.js";

defineProps({
  blocks: {
    type: Object,
    required: true
  }
})
</script>

<template>
<section>
  <div class="container">
    <div class="title">
      <h2>
        <span class="painted">{{ tPrograms.yourFutureInGameIndustry.title.paintedPart }}</span>
        <br>
        {{ tPrograms.yourFutureInGameIndustry.title.part1 }}
      </h2>
    </div>
    <div class="blocks">
      <div class="block" v-for="(block, index) in blocks" :key="index">
        <div class="image-block">
          <img class="background" :src="block.image" alt="профессия">
          <div class="salary-background">
            <img src="@/assets/images/icons/money.svg" alt="деньги">
            <p class="salary">{{ block.salary }}</p>
          </div>
        </div>
        <div class="description">
          <p>{{ block.text }}</p>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<style scoped lang="scss">
section {
  padding: 40px 0;
  background-color: $black;
  color: $white;
  .container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    .title {
      h2 {
        font-size: 36px;
        font-weight: 450;
        span.painted {
          color: $black;
        }
      }
    }
    .blocks {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
      width: 100%;
      .block {
        display: flex;
        flex-direction: column;
        gap: 6px;
        min-width: 0;
        .image-block {
          position: relative;
          border-radius: 15px;
          overflow: hidden;
          width: 100%;
          height: 120px;
          img.background {
            height: 100%;
            width: 100%;
            object-fit: cover;
            object-position: center;
          }
          .salary-background {
            position: absolute;
            bottom: 0;
            left: 0;
            background-color: $yellow;
            height: 20px;
            width: 80px;
            padding: 5px;
            display: flex;
            align-items: center;
            justify-content: left;
            border-radius: 0 20px 0 0;
            img {
              height: 10px;
              width: 10px;
              display: block;
            }
            p {
              font-size: 9px;
              font-weight: 500;
              color: $black;
              padding: 0 5px;
            }
          }
        }
        .description p {
          font-weight: 450;
        }
      }
    }
  }
}
@include min-width($bp-lg) {
  section {
    padding: 120px 0;
    .container {
      gap: 40px;
      .title {
        h2 {
          font-size: 56px;
        }
      }
      .blocks {
        grid-template-columns: 1fr 1fr 1fr;
        gap: 20px;
        .block {
          gap: 20px;
          .image-block {
            border-radius: 10px;
            height: 280px;
            .salary-background {
              height: 38px;
              width: 154px;
              padding: 10px 5px 10px 10px;
              img {
                height: 19px;
                width: 19px;
              }
              p {
                font-size: 20px;
              }
            }
          }
          .description p {
            font-size: 26px;
          }
        }
      }
    }
  }
}
</style>