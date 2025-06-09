<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  showErrors: {
    type: Boolean,
    default: false,
  },
  errors: {
    type: Array,
    required: false,
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
  <div class="wrapper">
    <select
        :value="modelValue"
        @change="changeHandler"
        :class="{ 'placeholder-shown': !modelValue && placeholder }">
      <option value="" disabled selected v-if="placeholder">{{ placeholder }}</option>
      <option v-for="option in options" :value="option" :key="option">
        {{ option }}
      </option>
    </select>
    <transition name="fade">
      <div v-if="showErrors && errors && errors.length" class="error-container">
        <div v-for="elem in errors" :key="elem.$uid">
          {{ elem.$message }}
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  width: clamp(250px, 100%, 400px);
  height: 80px;
  select {
    font-family: $futura-pt;
    font-weight: 450;
    font-size: 26px;
    border: 1px solid $btn-black;
    border-radius: 10px;
    cursor: pointer;
    width: 100%;
    height: 100%;
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
  .error-container {
    width: fit-content;
    min-width: 200px;
    border-radius: 10px;
    padding: 3px 10px;
    background-color: $red;
    color: $white;
    opacity: 1;
    z-index: 10;
    position: absolute;
    top: 100%;
    margin-top: 3px;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s ease;
  }
  .fade-enter-from, .fade-leave-to {
    opacity: 0;
  }
}

@include min-width($bp-md) {
  .wrapper {
    width: clamp(150px, 25%, 450px);
  }
}
</style>