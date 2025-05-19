<script setup>
import { tRequest } from '@/content/texts.js'
import tButtons from '@//content/buttonsAndInputs.js'
</script>

<template>
<div class="container">
  <h2 class="title">
    {{ tRequest.title.part1 }}
    <span class="painted">{{ tRequest.title.paintedPart }}</span>
  </h2>
  <p class="almost-finish">{{ tRequest.almostFinish }}</p>
  <p class="follow-for-social-media">{{ tRequest.followForSocialMedia.slice(0, 32) }}<br>{{ tRequest.followForSocialMedia.slice(33) }}</p>
  <img src="@/assets/images/icons/toButtom.svg" alt="ниже" class="image">
  <button>
    <img src="@/assets/images/icons/telegram.svg" alt="телеграм">
    {{ tButtons.follow }}
  </button>
</div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  padding-top: 30px;
  h2.title, p.almost-finish {
    text-align: center;
    font-weight: 450;
  }
  h2.title {
    font-size: 70px;
    line-height: 100%;
    .painted {
      display: inline-block;
      height: 70px;
    }
  }
  p.almost-finish {
    font-size: 34px;
    line-height: 120%;
  }
  p.follow-for-social-media {
    text-align: center;
    font-size: 26px;
    line-height: 120%;
    br {
      display: none;
    }
  }
  img.image {
    height: 90px;
    width: 90px;
    display: block;
    margin: auto;
  }
  button {
    width: clamp(350px, 100%, 375px);
    height: 80px;
    font-family: $futura-pt;
    font-weight: 450;
    font-size: 26px;
    background-color: rgba(41, 169, 234, 1);
    color: $white;
    border: none;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin: 0 auto;
    img {
      height: 24px;
      width: 24px;
      display: inline-block;
    }
  }
}
@include min-width($bp-md) {
  .container {
    padding-top: 170px;
    h2.title {
      font-size: 112px;
      .painted {
        height: 112px;
      }
    }

    p.follow-for-social-media {
      br {
        display: inline;
      }
    };
  }
}
</style>