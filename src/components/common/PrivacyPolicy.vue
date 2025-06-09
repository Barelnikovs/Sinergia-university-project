<script setup>
import { tPrivacyPolicy } from "@/content/texts.js";
import BaseInput from "@/components/ui/BaseInput.vue";

const props = defineProps(['modelValue', 'errors', 'showErrors'])
const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <div class="privacyPolicy">
    <BaseInput
        name="agree"
        type="checkbox"
        :modelValue="modelValue"
        @update:model-value="emit('update:modelValue', $event)"
        :errors="errors"
        :showErrors="showErrors"
    />
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