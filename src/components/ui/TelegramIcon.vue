<script setup>

</script>

<template>
  <a class="background" href="#" target="_blank" rel="noopener noreferrer">
    <img src="@/assets/images/icons/telegram.svg" alt="telegram">
  </a>
</template>

<style scoped lang="scss">
.background {
  background-color: rgba(41, 169, 234, 1);
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
.footerIcon {
  width: 40px;
  height: 40px;
  img {
    width: 24px;
    height: 24px;
  }
}
</style>