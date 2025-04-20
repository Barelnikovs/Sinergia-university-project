<script setup>

import {tMain} from "@/content/texts.js";
</script>

<template>
  <div class="banner-block">
    <p>{{ tMain.banner.part1 }}<br>{{ tMain.banner.part2 }}</p>
    <a href="#" target="_blank" rel="noopener noreferrer">
      <img class="banner min" src="@/assets/images/main/banner_min.svg" alt="Видео">
      <img class="banner max" src="@/assets/images/main/banner_max.svg" alt="Видео">
      <img class="play" src="@/assets/images/icons/play%20yellow.svg" alt="Воспроизвести">
    </a>
  </div>
</template>

<style scoped lang="scss">
.banner-block {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  p {
    display: block;
    width: clamp(210px, 62%, 635px);
    font-size: 20px;
    font-weight: 450;
  }
  a {
    position: relative;
    width: 100%;
    .banner {
      width: 100%;
    }
    .max {
      display: none;
    }
    .play {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: clamp(56px, 6%, 95px);
    }
  }
}
@include min-width($bp-md) {
  .banner-block {
    position: relative;
    p {
      position: absolute;
      left: 35%;
      top: -0.8%;
    }
    a {
      position: relative;
      width: 100%;
      &:hover {
        .play {
          transform: translate(-50%, -50%) scale(1.05);
        }
      }
      .min {
        display: none;
      }
      .max {
        display: inline-block;
      }
      .play {
        height: 95px;
        transition: all 0.3s ease;
      }
    }
  }
}
</style>