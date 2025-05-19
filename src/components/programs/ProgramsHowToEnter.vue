<script setup>
import { tPrograms } from '@/content/texts.js'
</script>

<template>
<section>
  <div class="container">
    <div class="title">
      <h2>
        {{ tPrograms.howToEnter.title.part1 }}
        <span class="painted">{{ tPrograms.howToEnter.title.paintedPart }}</span>
      </h2>
    </div>
    <div class="blocks">
      <div class="block yellow block1">
        <div class="number">
          <p>{{ tPrograms.howToEnter.blocks.block1.number }}</p>
        </div>
        <div class="description">
          <p>{{ tPrograms.howToEnter.blocks.block1.text }}</p>
        </div>
      </div>
      <div class="block black block2">
        <div class="number">
          <p>{{ tPrograms.howToEnter.blocks.block2.number }}</p>
        </div>
        <div class="description">
          <p>{{ tPrograms.howToEnter.blocks.block2.text }}</p>
        </div>
      </div>
      <div class="block yellow block3">
        <div class="number">
          <p>{{ tPrograms.howToEnter.blocks.block3.number }}</p>
        </div>
        <div class="description">
          <p>{{ tPrograms.howToEnter.blocks.block3.text }}</p>
        </div>
      </div>
      <div class="block black block4">
        <div class="number">
          <p>{{tPrograms.howToEnter.blocks.block4.number}}</p>
        </div>
        <div class="description">
          <p>{{ tPrograms.howToEnter.blocks.block4.text }}</p>
        </div>
      </div>
      <div class="block red block5">
        <div class="number">
          <p>{{ tPrograms.howToEnter.blocks.block5.number }}</p>
        </div>
        <div class="description">
          <p>{{ tPrograms.howToEnter.blocks.block5.text }}</p>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<style scoped lang="scss">
section {
  padding: 40px 0;
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
    .blocks {
      display: flex;
      flex-direction: column;
      gap: 20px;
      .block {
        height: 140px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 10px;
        border-radius: 10px;
        &.yellow {
          background-color: $yellow;
        }
        &.black {
          background-color: $black;
          color: $white;
        }
        &.red {
          background-color: $red;
          color: $white;
        }
        .number p {
          font-size: 40px;
          font-weight: 450;
          line-height: 100%;
        }
        .description p {
          font-size: 20px;
          line-height: 120%;
        }
      }
    }
  }
}
@include min-width($bp-md) {
  section {
    padding: 80px 0;
    .container {
      gap: 30px;
      .title {
        h2 {
          font-size: 46px;
        }
      }
      .blocks {
        .block {
          padding: 20px;
          .number {
            height: 56px;
            p {
              font-size: 56px;
              text-align: right;
            }
          }
          .description {
            p {
              font-size: 26px;
            };
          }
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
        grid-template-columns: 40% 7% 27% 25%;
        grid-template-rows: repeat(2, 1fr);
        display: grid;
        .block {
          display: flex;
          flex-direction: row-reverse;
          .description {
            align-self: flex-end;
          }
        }
        .block1 {
          grid-column: 1 / 2;
          grid-row: 1 / 2;
        }
        .block2 {
          grid-column: 2 / 4;
          grid-row: 1 / 2;
        }
        .block3 {
          grid-column: 4 / 5;
          grid-row: 1 / 2;
        }
        .block4 {
          grid-column: 1 / 3;
          grid-row: 2 / 3;
        }
        .block5 {
          grid-column: 3 / 5;
          grid-row: 2 / 3;
        }
      }
    }
  }
}
</style>