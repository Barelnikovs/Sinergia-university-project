<script setup>
  import { RouterLink } from "vue-router";
  import t from '@/content/texts.js'
</script>

<template>
  <div class="container">
    <header class="header">
      <div class="header__logo">
        <router-link to="/home">
          <img src="@/assets/images/main/logo.svg" alt="logo">
        </router-link>
      </div>
      <div class="header__download">
        <a href="#">
          {{ t.header.download }}
          <img src="@/assets/images/icons/download.svg" alt="download program">
        </a>
      </div>
    </header>
  </div>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
  &__logo {
    height: 38px;
  }
  &__download {
    a {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      color: $red;
      font-size: 20px;
      font-weight: 400;
      img {
        width: 24px;
        height: 24px;
        display: block;
      }
    }
  }
}
</style>