<script setup>
import { tMain } from '@/content/texts.js'
</script>

<template>
  <section>
    <div class="container">
      <div class="title">
        <h2><span class="painted">{{ tMain.payForStudy.title.paintedPart }}</span>{{ tMain.payForStudy.title.part1 }}</h2>
      </div>
      <div class="blocks">
        <div class="block block--one">
          <div class="block-title"><p>{{ tMain.payForStudy.tax.title }}</p></div>
          <div class="block-description"><p>{{ tMain.payForStudy.tax.paragraph1 }}</p></div>
        </div>
        <div class="block block--two">
          <div class="block-title"><p>{{ tMain.payForStudy.sale.title }}</p></div>
          <div class="block-description"><p>{{ tMain.payForStudy.sale.paragraph1 }}</p></div>
        </div>
        <div class="block block--three background-sinergia">
          <div class="block-title"><p>{{ tMain.payForStudy.credit.title }}</p></div>
          <div class="block-description"><p>{{ tMain.payForStudy.credit.paragraph1 }}</p></div>
          <div class="block-description"><p>{{ tMain.payForStudy.credit.paragraph2 }}</p></div>
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
    gap: 27px;
    .title h2{
      font-size: 36px;
      font-weight: 450;
    }
    .blocks {
      display: flex;
      flex-direction: column;
      gap: 20px;
      .block {
        border: 1px solid $black;
        border-radius: 10px;
        padding: 30px;
        .block-title {
          font-size: 26px;
          font-weight: 450;
          margin-bottom: 16px;
        }
        .block-description {
          font-size: 20px;
          line-height: 120%;
          margin-bottom: 10px;
        }

      }
      .background-sinergia {
        background-image: url("@/assets/images/icons/sinergia_background.svg");
        background-position: 72% 95%;
        background-repeat: no-repeat;
        overflow: hidden;
        min-height: 500px;
      }
    }
  }
}

@include min-width($bp-md) {
  section .container .blocks .background-sinergia {
    background-position: 125% 95%;
    min-height: 440px;
  }
}

@include min-width($bp-lg) {
  section {
    margin-bottom: 150px;
    .container {
      gap: 40px;
      .title h2 {
        font-size: 56px;
      }
      .blocks {
        display: grid;
        gap: 20px;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        .block {
          &.background-sinergia {
            max-height: none;
          }
          &--one {
            grid-row: 1/2;
          }
          &--two {
            grid-row: 2/3;
          }
          &--three {
            grid-row: 1/3;
          }
        }
      }
    }
  }
}
</style>