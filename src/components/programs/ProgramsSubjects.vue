<script setup>
import { tPrograms } from "@/content/texts.js";

defineProps({
  subjects: {
    type: Object,
    required: true,
  }
})
</script>

<template>
<section>
  <div class="container">
    <div class="title">
      <h2><span class="painted">{{ tPrograms.whatSubjectYouStudy.title.paintedPart }}</span>{{ tPrograms.whatSubjectYouStudy.title.part1 }}</h2>
    </div>
    <div class="subjects">
      <div class="subject" v-for="(subjects, index) in subjects" :key="index">
        <p class="name-of-subject">{{ subjects }}</p>
      </div>
    </div>
  </div>
</section>
</template>

<style scoped lang="scss">
section {
  margin-bottom: 40px;
  .container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    .title {
      h2 {
        font-size: 36px;
        font-weight: 450;
      }
    }
    .subjects {
      display: flex;
      flex-direction: column;
      gap: 20px;
      .subject {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        border: 1px solid $black;
        padding: 20px 16px;
        p.name-of-subject {
          font-size: 26px;
          font-weight: 450;
          text-align: center;
        }
      }
    }
  }
}
@include min-width($bp-md) {
  section {
    margin-bottom: 80px;
    .container {
      gap: 30px;
      .title {
        h2 {
          font-size: 46px;
        }
      }
      .subjects {
        display: grid;
        grid-template-columns: 1fr 1fr;
        .subject {
          padding: 10px 20px;
        }
      }
    }
  }
}
@include min-width($bp-lg) {
  section {
    margin-bottom: 120px;
    .container {
      gap: 40px;
      .title {
        h2 {
          font-size: 56px;
        }
      }
      .subjects {
        .subject {
          padding: 15px;
        }
      }
    }
  }
}
</style>