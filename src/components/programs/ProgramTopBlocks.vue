<script setup>
import {tPrograms} from "@/content/texts.js";

defineProps({
  currentProgram: {
    type: Object,
    required: true
  }
})

</script>

<template>
  <div class="blocks">
    <div class="block">
      <div class="texts">
        <p class="block-title">{{ tPrograms.processOfStudy.block1.title }}</p>
        <p class="block-description">{{ currentProgram.topBlocks.block1Description }}</p>
      </div>
      <div class="number">
        <p class="block-number">{{ tPrograms.processOfStudy.block1.number }}</p>
      </div>
    </div>
    <div class="block">
      <div class="texts">
        <p class="block-title">{{ tPrograms.processOfStudy.block2.title }}</p>
        <p class="block-description">{{ currentProgram.topBlocks.block2Description }}</p>
      </div>
      <div class="number">
        <p class="block-number">{{ tPrograms.processOfStudy.block2.number }}</p>
      </div>
    </div>
    <div class="block">
      <div class="texts">
        <p class="block-title">{{ tPrograms.processOfStudy.block3.title }}</p>
        <p class="block-description">{{ currentProgram.topBlocks.block3Description }}</p>
      </div>
      <div class="number">
        <p class="block-number">{{ tPrograms.processOfStudy.block3.number }}</p>
      </div>
    </div>
    <div class="block">
      <div class="texts">
        <p class="block-title">{{ tPrograms.processOfStudy.block4.title }}</p>
        <p class="block-description">{{ tPrograms.processOfStudy.block4.description }}</p>
      </div>
      <div class="number">
        <p class="block-number">{{ tPrograms.processOfStudy.block4.number }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.blocks {
  display: grid;
  grid-template: repeat(2, 1fr) / repeat(2, 1fr);
  gap: 16px;
  .block {
    height: 118px;
    border-radius: 10px;
    padding: 10px 1px 10px 10px;
    box-shadow: 0px 6px 10px 0px rgba(175, 175, 175, 0.29);
    position: relative;
    .texts {
      align-self: flex-start;
      position: absolute;
      left: 10px;
      bottom: 10px;
      p.block-title {
        font-weight: 450;
        line-height: 120%;
      }
      p.block-description {
        line-height: 120%;
      }
    }
    .number {
      position: absolute;
      right: 10px;
      top: 10px;
      p.block-number {
        font-size: 20px;
        font-weight: 500;
        line-height: 120%;
        color: $red;
      }
    }
  }
}
@include min-width($bp-lg) {
  .blocks {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
    .block {
      height: 118px;
      padding: 20px;
      .texts {
        top: 20px;
        left: 20px;
        p.block-title {
          font-size: 26px;
        }
        p.block-description {
          font-size: 20px;
        }
      }
      .number {
        top: 20px;
        right: 20px;
        p.block-number {
          font-size: 24px;
        }
      }
    }
  }
}
</style>