<script setup>
const props = defineProps({
  textContent: String,
  variant: {
    type: String,
    required: true,
    validator(value) {
      return ['btn-header', 'btn-programs', 'btn-read-more', 'btn-large', 'btn-small', 'get-master-classes', 'btn-support', 'btn-trust-professional', 'btn-footer', 'btn-program-top', 'mobile-menu'].includes(value);
    }
  },
  color: {
    type: String,
    required: true,
    validator(value) {
      return ['btn-white', 'btn-black', 'btn-red', 'btn-white-red'].includes(value);
    }
  }
})
</script>

<template>
<button :class="['base-button', variant, color]">
  {{ textContent }}
</button>
</template>

<style scoped lang="scss">
@use "sass:color";

.base-button {
  font-family: $futura-pt;
  font-weight: 450;
  font-size: 26px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}
.btn-programs, .btn-support {
  width: clamp(65px, 25%, 85px);
  height: 37px;
  font-size: 10px;
}
.btn-programs {
  width: clamp(65px, 25%, 85px)
}
.btn-support {
  width: clamp(65px, 33.333%, 105px)
}
.btn-read-more {
  width: clamp(200px, 100%, 450px);
  height: 60px;
}
.btn-large, .get-master-classes, .btn-trust-professional {
  width: clamp(200px, 100%, 376px);
  height: 80px;
}
.btn-small {
  width: 335px;
  height: 80px;
}
.btn-footer, .btn-program-top {
  width: clamp(200px, 100%, 450px);
  height: 80px;
}
.mobile-menu {
  height: 50px;
  width: clamp(184px, 80%, 275px);
}

@include min-width($bp-md) {
  .mobile {
    display: none;
  }

  .base-button {
    padding: 0 10px;
  }

  .btn-header {
    width: 375px;
    height: 64px;
  }
  .btn-programs {
    width: clamp(277px, 25%, 300px);
    height: 80px;
    font-size: 26px;
  }
  .btn-read-more {
    width: clamp(200px, 100%, 400px);
    height: 60px;
  }
  .btn-large {
    width: clamp(200px, 33.333%, 376px);
    height: 80px;
  }
  .btn-support, .get-master-classes {
    width: clamp(200px, 100%, 376px);
    height: 80px;
    font-size: 26px;
  }
  .btn-small {
    width: clamp(150px, 25%, 450px);
    height: 80px;
    padding: 0 5px;
  }
  .btn-trust-professional {
    width: clamp(200px, 70%, 376px);
  }
  .btn-program-top {
    height: 60px;
  }
}
@include min-width($bp-lg) {
  .mobile-tablet {
    display: none;
  }
  .btn-program-top {
    width: 278px;
    font-size: 24px;
  }
}

.btn-white-red {
  color: $red;
  background-color: $white;
  border: 1px solid $red;
  font-size: 20px;
  width: auto;
  line-height: 100%;
  padding: 20px;
  &:hover {
    background-color: color.adjust($white, $lightness: -3%);
  }
}
.btn-white {
  background-color: $btn-white;
  border: 1px solid $black;
  &:hover {
    background-color: color.adjust($btn-white, $lightness: -10%);
  }
}
.btn-black {
  background-color: $btn-black;
  color: $white;
  &:hover {
    background-color: color.adjust($btn-black, $lightness: -10%);
  }
}
.btn-red, .active {
  background-color: $btn-red;
  color: $white;
  &:hover {
    background-color: color.adjust($btn-red, $lightness: +10%);
  }
}

</style>