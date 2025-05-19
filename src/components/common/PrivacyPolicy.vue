<script setup>
import {tPrivacyPolicy} from "@/content/texts.js";

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  }
})

const emit = defineEmits(["update:modelValue"]);

const updateValue = (event) => {
  emit("update:modelValue", event.target.checked);
}
</script>

<template>
  <div class="privacyPolicy">
    <div class="checkbox-block">
      <label class="custom-checkbox">
        <input
            type="checkbox"
            name="agree"
            :checked="modelValue"
            @change="updateValue"
            required
        >
        <span class="checkmark">
          <img src="../../assets/images/icons/check_mark.svg" alt="check-mark">
        </span>
      </label>
    </div>
    <div>
      <p>{{ tPrivacyPolicy.text }}<a href="#" target="_blank" rel="noopener noreferrer">{{ tPrivacyPolicy.link }}</a></p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.privacyPolicy {
  display: flex;
  flex-direction: row;
  gap: 8px;
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
  p {
    font-size: 16px;
    font-weight: 300;
    line-height: 100%;
    a {
      color: $black;
      text-decoration: underline;
      text-underline-offset: 4px;
    }
  }
}
</style>