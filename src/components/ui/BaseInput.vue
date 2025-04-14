<script setup>
const props = defineProps({
  type: String,
  placeholder: {
    type: String,
    default: '',
  },
  size: {
    type: String,
    required: true,
    validator(value) {
      return ['input-large', 'input-small'].includes(value);
    }
  },
  modelValue: {
    type: [String, Number],
    default: '',
  }
})
const emit = defineEmits(["update:modelValue"])

function changeHandler(event) {
  emit('update:modelValue', event.target.value)
}
</script>

<template>
  <input
      :type="type"
      :placeholder="placeholder"
      :value="modelValue" @input="changeHandler"
      :class="['base-input', size]"
  />
</template>

<style scoped lang="scss">
@import '@/assets/scss/main';

.base-input {
  font-family: $futura-pt;
  font-weight: 300;
  font-size: 26px;
  border: 1px solid $black;
  border-radius: 10px;
  height: 80px;
}

@include min-width($bp-sm) {
 .input-large, .input-small {
   width: 337px;
 }
}
@include min-width($bp-lg) {
  .input-large {
    width: 375px;
  }
  .input-small {
    width: 277px;
  }
}

</style>