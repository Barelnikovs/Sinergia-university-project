<script setup>
defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
  },
  type: {
    type: String,
    default: 'text'
  },
  name: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    default: '',
  },
  size: {
    type: String,
    required: true,
    validator(value) {
      return ['input-large', 'input-small', 'input-your-career', 'input-footer'].includes(value);
    }
  },
  darkColor: {
    type: Boolean,
    default: false,
  },
})
const emit = defineEmits(["update:modelValue"])

function changeHandler(event) {
  emit('update:modelValue', event.target.value)
}
</script>

<template>
    <input
        type="text"
        :placeholder="placeholder"
        :value="modelValue"
        @input="changeHandler"
        :class="['base-input', { 'input-dark': darkColor }, size]"
    />
</template>

<style scoped lang="scss">
.base-input {
  font-family: $futura-pt;
  font-weight: 300;
  font-size: 26px;
  border: 1px solid $black;
  border-radius: 10px;
  height: 80px;
  padding: 0 30px;
}

.input-large, .input-small, .input-your-career, .input-footer {
  width: clamp(290px, 100%, 450px);
}

.input-dark {
  background-color: $darkGray;
  &::placeholder {
    color: $whitePlaceholder;
  }
}
@include min-width($bp-md) {
  .input-large {
    width: clamp(200px, 33.333%, 376px);
  }
  .input-small {
    width: clamp(150px, 25%, 450px);
  }
  .input-your-career {
    width: clamp(200px, 100%, 376px);
  }
  .input-footer {
    width: clamp(200px, 100%, 450px);
  }
}
</style>