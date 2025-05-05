<script setup>
import tButton from '@/content/buttonsAndInputs.js'
import BaseButton from "@/components/ui/BaseButton.vue";
</script>

<template>
<section>
  <div class="container">
    <div class="title-image-and-buttons">
      <div class="title-and-text">
        <p class="place-of-study"></p>
        <h1 class="title"></h1>
        <p class="description"></p>
      </div>
      <div class="image">
        <img src="" alt="специалист">
      </div>
      <div class="buttons">
        <BaseButton color="btn-red" variant="btn-program-top" :text-content="tButton.programOfStudy" />
        <BaseButton color="btn-black" variant="btn-program-top" :text-content="tButton.howToEnter" />
      </div>
    </div>
    <div class="blocks">
      <div class="block">
        <div class="texts">
          <p class="block-title"></p>
          <p class="block-description"></p>
        </div>
        <div class="number">
          <p class="block-number"></p>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<style scoped lang="scss">

</style>