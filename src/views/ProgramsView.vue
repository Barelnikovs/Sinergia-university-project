<script setup>
import ProgramsTop from "@/components/programs/ProgramsTop.vue";
import HomeYourCareer from "@/components/home/HomeYourCareer.vue";
import HomeOurGraduates from "@/components/home/HomeOurGraduates.vue";
import HomeOurTeacher from "@/components/home/HomeOurTeacher.vue";
import HomeStudentSpeakAndShow from "@/components/home/HomeStudentSpeakAndShow.vue";
import HomePayForStudy from "@/components/home/HomePayForStudy.vue";
import HomeAboutSinergia from "@/components/home/HomeAboutSinergia.vue";
import HomeHaveYouQuestions from "@/components/home/HomeHaveYouQuestions.vue";
import HomeFrequentlyAskedQuestions from "@/components/home/HomeFrequentlyAskedQuestions.vue";
import {computed, watch} from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

const currentProgram = computed(() => route.params.program.slice(1));


</script>

<template>
  <ProgramsTop />
  <HomeYourCareer />
  <HomeOurGraduates />
  <HomeOurTeacher />
  <HomeStudentSpeakAndShow />
  <HomePayForStudy />
  <HomeAboutSinergia />
  <HomeHaveYouQuestions />
  <HomeFrequentlyAskedQuestions />
</template>

<style scoped lang="scss">

</style>