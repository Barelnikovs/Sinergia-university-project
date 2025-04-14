<script setup>
const props = defineProps({
  textContent: String,
  variant: {
    type: String,
    required: true,
    validator(value) {
      return ['btn-header', 'btn-programs', 'btn-read-more', 'btn-large', '.btn-small'].includes(value);
    }
  },
  color: {
    type: String,
    required: true,
    validator(value) {
      return ['btn-white', 'btn-black', 'btn-red'].includes(value);
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
@import '@/assets/scss/main';

.base-button {
  font-family: $futura-pt;
  font-weight: 450;
  font-size: 26px;
  border: none;
  border-radius: 10px;
}
@include min-width($bp-sm) {
  .btn-programs {
    width: 72px;
    height: 37px;
    font-size: 9px !important;
  }
  .btn-read-more {
    width: 288px;
    height: 60px;
  }
  .btn-large {
    width: 335px;
    height: 80px;
  }
  .btn-small {
    width: 335px;
    height: 80px;
  }
}

@include min-width($bp-lg) {
  .btn-header {
    width: 375px;
    height: 64px;
  }
  .btn-programs {
    width: 277px;
    height: 80px;
  }
  .btn-read-more {
    width: 337px;
    height: 60px;
  }
  .btn-large {
    width: 375px;
    height: 80px;
  }
  .btn-small {
    width: 277px;
    height: 80px;
  }
}

.btn-white {
  background-color: $btn-white;
  border: 1px solid $black;
  &:hover {
    background-color: darken($btn-white, 10%);
  }
}
.btn-black {
  background-color: $btn-black;
  color: $white;
  &:hover {
    background-color: darken($btn-black, 10%);
  }
}
.btn-red, .active {
  background-color: $btn-red;
  color: $white;
  &:hover {
    background-color: darken($btn-red, 10%)
  }
}

</style>