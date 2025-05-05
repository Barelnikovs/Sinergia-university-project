<script setup>
import { useCardStore } from "@/stores/cardsStore.js";
const cardStore = useCardStore();

</script>

<template>
<div class="main-block">
  <div class="texts-block">
    <p class="title">{{ cardStore.studentSupportCard.title }}</p>
    <p class="description">{{ cardStore.studentSupportCard.description }}</p>
  </div>
  <div class="image-block">
    <div class="image">
      <img :src="cardStore.studentSupportCard.image" alt="фотография">
    </div>

  </div>
</div>
</template>

<style scoped lang="scss">
.main-block {
  .texts-block {
    min-height: 120px;
    .title {
      display: none;
    }
    .description {
      font-size: 20px;
      line-height: 120%;
    }
  }
  .image-block {
    display: none;
  }
}

@include min-width($bp-md) {
  .main-block {
    border: 1px solid $red;
    border-radius: 10px;
    width: 70%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 20px;
    max-height: 280px;
    padding: 20px;
    .texts-block {
      display: flex;
      flex-direction: column;
      gap: 20px;
      min-width: auto;
      width: 100%;
      .title {
        display: inline;
        font-size: 26px;
        font-weight: 450;
      }
    }
  }
}

@include min-width($bp-lg) {
  .main-block {
    .texts-block {
      width: 50%;
    }
    .image-block {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50%;
      .image {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        height: 100%;
        width: 100%;
        border-radius: 10px;
        img {
          display: block;
          border-radius: 10px;
          object-fit: cover;
        }
      }
    }
  }
}
</style>