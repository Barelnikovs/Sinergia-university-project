<script setup>
import tButton from '@/content/buttonsAndInputs.js'
import BaseButton from "@/components/ui/BaseButton.vue";
import ProgramTopBlocks from "@/components/programs/ProgramTopBlocks.vue";
import { computed } from 'vue'
import programs from "@/constants/programs.js";
import { useRoute } from "vue-router";
const route = useRoute();

defineProps({
  currentProgram: {
    type: Object,
    required: true
  }
})
const longTitle = computed(() => {
  return route.params.program.slice(1) === programs.MANAGEMENT_IN_GAME_INDUSTRY_AND_E_SPORT ||
      route.params.program.slice(1) === programs.MANAGEMENT_IN_E_SPORT_AND_PHIGITAL_SPORT
})
</script>

<template>
<section>
  <div class="container">
    <div class="pages-title">
      <div class="title-image-and-buttons">
        <div class="title-and-text">
          <p class="place-of-study">{{ currentProgram.place }}</p>
          <h1 :class="['title', { 'fz-70': longTitle }]"><span class="painted">{{ currentProgram.title.paintedPart }}</span>{{ currentProgram.title.part1 }}</h1>
          <p class="description">{{ currentProgram.description }}</p>
        </div>
        <div class="image mobile">
          <img :src="currentProgram.mainImage" alt="специалист">
        </div>
        <div class="buttons">
          <BaseButton color="btn-red" variant="btn-program-top" :text-content="tButton.programOfStudy" />
          <BaseButton color="btn-black" variant="btn-program-top" :text-content="tButton.howToEnter" class="mobile-tablet"/>
          <a href="#" class="howToEnter">{{ tButton.howToEnter }}</a>
        </div>
      </div>
      <div class="image desktop">
        <img :src="currentProgram.mainImage" alt="специалист">
      </div>
    </div>
    <ProgramTopBlocks :currentProgram="currentProgram" />
  </div>
</section>
</template>

<style scoped lang="scss">
section {
  margin-bottom: 40px;
  .container {
    display: flex;
    flex-direction: column;
    .pages-title {
      display: flex;
      flex-direction: column;
      .title-image-and-buttons {
        display: flex;
        flex-direction: column;
        .title-and-text {
          display: flex;
          flex-direction: column;
          p.place-of-study {
            font-size: 20px;
            line-height: 120%;
            margin-bottom: 8px;
          }
          h1.title {
            font-size: 36px;
            font-weight: 450;
            line-height: 90%;
            margin-bottom: 23px;
          }
          p.description {
            font-size: 20px;
            line-height: 120%;
            margin-bottom: 12px;
          }
        }
        .image.mobile {
          margin-bottom: 10px;
          width: 95svw;
          height: 315px;
          overflow: hidden;
          @include min-width($bp-sm) {
            height: 351px;
          }
          img {
            width: 100%;
            height: 90%;
            object-fit: cover;
            object-position: 35% 0;
            display: block;
          }
        }
        .buttons {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 40px;
          a.howToEnter {
            display: none;
          }
        }
      }
      .image.desktop {
        display: none;
      }
    }
  }
}

@include min-width($bp-md) {
  section {
    margin-bottom: 80px;
    .container {
      .pages-title {
        margin-bottom: 45px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 50px;
        .title-image-and-buttons {
          width: 50%;
          overflow: visible;
          .title-and-text {
            p.place-of-study {
              font-size: 24px;
            }
            h1.title {
              font-size: 48px;
              .painted {
                height: 48px;
                display: inline-block;
              }
            }
            p.description {
              font-size: 24px;
              margin-bottom: 30px;
            }
          }
          .image.mobile {
            display: none;
          }
          .buttons {
            margin-bottom: 0;
          }
        }
        .image.desktop {
          display: block;
          width: 55%;
          margin-right: -8%;
          padding-top: 10px;
          img {
            width: 100%;
            height: 280px;
            object-fit: cover;
            object-position: 35% 0;
          }
        }
      }
    }
  }
}
@include min-width($bp-lg) {
  section {
    padding-top: 20px;
    margin-bottom: 120px;
    .container .pages-title {
      gap: 50px;
      .title-image-and-buttons {
        width: 45%;
        .title-and-text {
          p.place-of-study {
            margin-bottom: 16px;
          }
          h1.title {
            font-size: 80px;
            margin-bottom: 36px;
            line-height: 90%;
            &.fz-70 {
              font-size: 70px;
            }
            .painted {
              height: 70px;
            }
          }
          p.description {
            margin-bottom: 37px;
            width: 100%;
          }
        }
        .buttons {
          flex-direction: row;
          gap: 40px;
          margin-right: -50px;
          a.howToEnter {
            align-self: center;
            display: block;
            color: $red;
            text-decoration: underline;
            text-underline-offset: 5px;
            font-size: 24px;
            font-weight: 450;
          }
        }

      }
      .image.desktop {
        width: 55%;
        padding-top: 0;
        margin-right: -15px;
        text-align: right;
        img {
          height: 427px;
          width: auto;
          object-position: -50% 0;
        }
      }
    }
  }
}
</style>