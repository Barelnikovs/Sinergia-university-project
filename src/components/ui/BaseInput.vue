<script setup>
import { computed } from "vue";

const props = defineProps({
  modelValue: [String, Number, Boolean],
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
    required: false,
    validator(value) {
      return ['input-large', 'input-small', 'input-your-career', 'input-footer'].includes(value);
    }
  },
  darkColor: {
    type: Boolean,
    default: false,
  },
  errors: {
    type: Array,
    required: false
  },
  showErrors: {
    type: Boolean,
    default: false,
  },
  mask: {
    type: String,
    default: ''
  },
})
const emit = defineEmits(["update:modelValue"])

function changeHandler(event) {
  if (props.type === 'checkbox') {
    emit('update:modelValue', event.target.checked);
  } else {
    emit('update:modelValue', event.target.value)
  }
}
function changeValue(value) {
  emit('update:modelValue', value)
}

const isMasked = computed(() => !!props.mask)
</script>

<template>
  <div :class="[size, 'input-wrapper']">

    <imask-input
      v-if="isMasked"
      :mask="mask"
      :model-value="modelValue"
      @update:model-value="changeValue"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      :class="['base-input', { 'input-dark': darkColor }, {'password': type === 'password'}]"
    />

    <div v-else-if="type === 'checkbox'" class="checkbox-block">
      <label class="custom-checkbox">
        <input
            :type="type"
            :name="name"
            :checked="modelValue"
            @change="changeHandler"
        >
        <span class="checkmark">
          <img src="../../assets/images/icons/check_mark.svg" alt="check-mark">
        </span>
      </label>
    </div>

    <input
        v-else
        :name="name"
        :type="type"
        :placeholder="placeholder"
        :value="modelValue"
        @input="changeHandler"
        :class="['base-input', { 'input-dark': darkColor }, {'password': type === 'password'}]"
    />

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
.input-wrapper {
  position: relative;
}

input[type="password"] {
  letter-spacing: 0 !important;
}
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type="number"] {
  -moz-appearance: textfield;
  appearance: textfield;
}

.base-input {
  font-family: $futura-pt;
  font-weight: 300;
  font-size: 26px;
  border: 1px solid $black;
  border-radius: 10px;
  height: 80px;
  padding: 0 30px;
  width: 100%;
  &.password {
    font-family: Verdana, sans-serif;
    &::placeholder {
      font-family: $futura-pt;
    }
  }
}

.checkbox-block {
  .custom-checkbox {
    width: 15px;
    height: 15px;
    input[type="checkbox"] {
      position: absolute;
      opacity: 0;
      width: 0;
      height: 0;
    }
    .checkmark {
      width: 15px;
      height: 15px;
      border: 1px solid $black;
      background-color: transparent;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        opacity: 0;
        transition: opacity 0.2s ease
      }
    }
    input[type="checkbox"]:checked + .checkmark img {
      opacity: 1;
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