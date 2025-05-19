<script setup>

</script>

<template>
  <a class="background" href="https://api.whatsapp.com/send/?phone=79087880515&text&app_absent=0" target="_blank" rel="noopener noreferrer">
    <img src="@/assets/images/icons/whatsapp.svg" alt="whatsapp">
  </a>
</template>

<style scoped lang="scss">
.background {
  background-color: rgba(84, 204, 97, 1);
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    line-height: 0;
  }
}
.mainIcon {
  width: 56px;
  height: 56px;
  img {
    width: 34px;
    height: 34px;
  }
}
.footerIcon, .mobile-menu-icon {
  width: 40px;
  height: 40px;
  img {
    width: 24px;
    height: 24px;
  }
}
</style>