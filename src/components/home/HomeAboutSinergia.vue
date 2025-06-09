<script setup>
import { tMain } from '@/content/texts.js'
import { useCardStore } from "@/stores/cardsStore.js";
const cardStore = useCardStore();
</script>

<template>
<section>
  <div class="container">
    <div class="title">
      <h2>{{ tMain.aboutUniversity.title.part1 }}<span class="painted">{{ tMain.aboutUniversity.title.paintedPart }}</span></h2>
    </div>
    <div class="blocks">
      <div
          v-for="(block, index) in cardStore.cardsAboutSinergia"
          :key="index"
          :class="['block', block.class, block.color ]"
      >
        <div class="block__image">
          <img :src="block.icon" alt="Иконка">
        </div>
        <div class="block__text">
          <p>{{ block.text }}</p>
        </div>
      </div>
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
    .blocks {
      display: grid;
      grid-template: repeat(4, 1fr)/ repeat(2, 1fr);
      gap: 16px;
      .block {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        border-radius: 10px;
        padding: 5px 10px;
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
        &__image {
          img {
            width: 47px;
          }
        }
        &__text {
          p {
            line-height: 110%;
          }
        }
      }
    }
  }
}
@include min-width($bp-md) {
  section {
    margin-bottom: 70px;
    .container {
      gap: 50px;
      .title {
        h2 {
          font-size: 46px;
        }
      }
      .blocks {
        grid-template-columns: repeat(3, 1fr);
        height: 450px;
      }
    }
  }
}

@include min-width($bp-lg) {
  section {
    margin-bottom: 130px;
    .container {
      .title {
        h2 {
          font-size: 56px;
        }
      }
      &__image {
        img {
          width: auto;
        }
      }
      &__text {
        p {
          font-size: 24px;
        }
      }
      .blocks {
        width: 100%;
        height: 300px;
        grid-template: repeat(2, 1fr) / 1fr 1.2fr 0.25fr 1fr 0.25fr 1.2fr 1fr;
        .block {
          padding: 24px;
          &__text {
            p {
              font-size: 24px;
            }
          }
        }
        .block1, .block5 {
          flex-direction: column;
          align-items: flex-start;
        }
        .block1 {
          grid-row: 1 / 3;
          img {
            width: 55px;
          }
        }
        .block2 {
          grid-row: 1 / 2;
          grid-column: 2 / 4;
          img {
            width: 60px;
          }
        }
        .block3 {
          grid-row: 1 / 2;
          grid-column: 4 / 6;
          padding: 15px;
          img {
            width: 70px;
          }
        }
        .block4 {
          grid-row: 1 / 2;
          grid-column: 6 / 7;
          img {
            width: 60px;
          }
        }
        .block5 {
          grid-row: 1 / 3;
          grid-column: 7 / 8;
          img {
            width: 65px;
          }
        }
        .block6 {
          grid-row: 2 / 3;
          grid-column: 2 / 3;
          img {
            width: 62px;
          }
        }
        .block7 {
          grid-row: 2 / 3;
          grid-column: 3 / 5;
          padding: 10px;
          img {
            width: 56px;
          }
        }
        .block8 {
          grid-row: 2 / 3;
          grid-column: 5 / 7;
          padding: 15px;
          img {
            width: 73px;
          }
        }
      }

    }
  }
}
</style>