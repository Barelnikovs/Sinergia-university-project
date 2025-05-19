<script setup>
import BaseInput from "@/components/ui/BaseInput.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
import WriteToMessage from "@/components/common/WriteToMessage.vue";
import PrivacyPolicy from "@/components/common/PrivacyPolicy.vue";
import { tModal } from '@/content/texts.js'
import tButtons from '@/content/buttonsAndInputs.js'
import { useFormsStore } from "@/stores/formsStore.js";
const formsStore = useFormsStore();

defineProps({
  active: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <transition name="modal-fade">
    <div class="modal" v-if="active">
      <div class="modal__container">
        <div class="title-block">
          <p class="modal-title">{{ tModal.modalTitle }}</p>
          <p class="form-title">{{ tModal.formsTitle }}</p>
        </div>
        <form>
          <div class="fields">
            <BaseInput size="input-your-career" name="name" :placeholder="tButtons.placeholders.name" v-model="formsStore.modalForm.name" />
            <BaseInput size="input-your-career" name="telephone" :placeholder="tButtons.placeholders.tel" v-model="formsStore.modalForm.telephone" />
            <BaseButton color="btn-black" variant="get-master-classes" :text-content="tButtons.leaveRequest" />
          </div>
          <div class="messengers">
            <WriteToMessage />
            <PrivacyPolicy v-model="formsStore.modalForm.agreement" />
          </div>
        </form>
      </div>
    </div>
  </transition>
</template>

<style scoped lang="scss">
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  background-color: $white;
  border-radius: 20px;
  z-index: 10000;
  opacity: 1;
  transition: opacity 0.3s ease;
  &__container {
    padding: 20px 4.5%;
    .title-block {
      margin-bottom: 30px;
      p.modal-title {
        font-size: 26px;
        font-weight: 450;
        line-height: 100%;
        text-align: center;
        margin-bottom: 12px;
      }
      p.form-title {
        font-size: 20px;
        text-align: center;
      }
    }
    .fields {
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin-bottom: 20px;
    }
  }
}
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
@include min-width($bp-md) {
  .modal {
    width: 476px;
    &__container {
      padding: 50px;
      .title-block {
        margin-bottom: 50px;
        p.modal-title {
          font-size: 32px;
          margin-bottom: 20px;
        }
        p.form-title {
          font-size: 26px;
        }
      }
    }
  }
}
</style>