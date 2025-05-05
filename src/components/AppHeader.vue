<script setup>
  import {tHeader} from "@/content/texts.js";
  import {RouterLink} from "vue-router";
</script>

<template>
  <div class="container">
    <header class="header">
      <div class="logoDownloadBlock">
        <div class="logo">
          <router-link to="/home">
            <img src="@/assets/images/main/logo.svg" alt="logo">
          </router-link>
        </div>
        <div class="download">
          <a href="#" target="_blank" rel="noopener noreferrer">
            {{ tHeader.download }}
            <img src="@/assets/images/icons/download.svg" alt="download program">
          </a>
        </div>
        <div class="callAndMenu">
          <img src="@/assets/images/icons/call.svg" alt="call">
          <img src="@/assets/images/icons/menu.svg" alt="menu">
        </div>
      </div>
    </header>
  </div>
  <div class="line"></div>
</template>

<style scoped lang="scss">
.header {
  .logoDownloadBlock {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 64px;
    .logo {
      img {
        height: 22px;
      }
    }
    .callAndMenu {
      display: flex;
      gap: 12px;
      img {
        height: 40px;
      }
    }
    .download {
      display: none;
    }
  }
}
@include min-width($bp-lg) {
  .header {
    margin-top: 60px;
    .logoDownloadBlock {
      display: flex;
      justify-content: space-between;
      .logo {
        img {
          height: 38px;
        }
      }
      .callAndMenu {
        display: none
      }
      .download {
        display: block;
        a {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          color: $red;
          font-size: 20px;
          img {
            width: 24px;
            height: 24px;
            display: block;
          }
        }
      }
    }
  }
}
.line {
  border-bottom: 1px solid rgba(239, 239, 239, 1);
  width: 100%;
}
@include min-width($bp-lg) {
  .line {
    display: none;
  }
}
</style>