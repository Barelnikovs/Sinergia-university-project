<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  placeholder: String,
  options: Array,
  name: {
    type: String,
    required: true,
  }
})

const emit = defineEmits(['update:modelValue'])

function changeHandler(event) {
  emit('update:modelValue', event.target.value)
}
</script>

<template>
  <select
      :value="modelValue"
      @change="changeHandler"
      :class="{ 'placeholder-shown': !modelValue && placeholder }">
    <option value="" disabled selected v-if="placeholder">{{ placeholder }}</option>
    <option v-for="option in options" :value="option" :key="option">
      {{ option }}
    </option>
  </select>
</template>

<style scoped lang="scss">
select {
  font-family: $futura-pt;
  font-weight: 450;
  font-size: 26px;
  border: 1px solid $btn-black;
  border-radius: 10px;
  cursor: pointer;
  width: clamp(250px, 100%, 400px);
  height: 80px;
  padding: 0 27px;
  color: $black;
  &.placeholder-shown {
    font-weight: 300;
    color: rgba(0, 0, 0, 0.5);
  }
  option {
    color: $black;
    &[disabled][selected] {
      display: none;
    }
  }
}

@include min-width($bp-md) {
  select {
    width: clamp(150px, 25%, 450px);
  }
}
</style>