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
import ProgramsStartYourCareer from "@/components/programs/ProgramsStartYourCareer.vue";
import ProgramsAboutProgram from "@/components/programs/ProgramsAboutProgram.vue";
import ProgramsSubjects from "@/components/programs/ProgramsSubjects.vue";
import ProgramsLeaveRequestForAcceptansDocument from '@/components/programs/ProgramsLeaveRequestForAcceptansDocument.vue'
import HomeBecomePartCyberIndustry from "@/components/home/HomeBecomePartCyberIndustry.vue";
import ProgramsPartners from "@/components/programs/ProgramsPartners.vue";
import ProgramsYourFutureInGameIndustry from "@/components/programs/ProgramsYourFutureInGameIndustry.vue";
import ProgramsHowToEnter from "@/components/programs/ProgramsHowToEnter.vue";
import ProgramsLeaveRequestForDocuments from "@/components/programs/ProgramsLeaveRequestForDocuments.vue";
import ProgramsCenterCareer from "@/components/programs/ProgramsCenterCareer.vue";
import ProgramsOtherSpecialties from "@/components/programs/ProgramsOtherSpecialties.vue";

import {computed} from "vue";
import { useDoublePagesStore } from "@/stores/doublePagesStore.js";
const doublePagesStore = useDoublePagesStore()
import { useRoute } from "vue-router";

const route = useRoute();

const currentProgram = computed(() => {
  const currentPageKebabCase = route.params.program.slice(1)
  const currentPageCamelCase = currentPageKebabCase.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase())
  return doublePagesStore.pages[currentPageCamelCase]
});
</script>

<template>
  <ProgramsTop :currentProgram="currentProgram" />
  <ProgramsStartYourCareer :title="currentProgram.description" />
  <ProgramsAboutProgram :description="currentProgram.aboutProgram" :textInBlocks="currentProgram.aboutProgramBlocks" />
  <ProgramsSubjects :subjects="currentProgram.whatSubjectYouStudy" />
  <ProgramsLeaveRequestForAcceptansDocument />
  <HomeBecomePartCyberIndustry />
  <ProgramsPartners />
  <ProgramsYourFutureInGameIndustry :blocks="currentProgram.yourFutureCards" />
  <ProgramsHowToEnter />
  <ProgramsLeaveRequestForDocuments />
  <ProgramsCenterCareer />
  <HomeYourCareer :career="currentProgram.yourCareerStartHere"/>
  <HomeOurGraduates />
  <HomeOurTeacher />
  <HomeStudentSpeakAndShow />
  <HomePayForStudy />
  <HomeAboutSinergia />
  <HomeHaveYouQuestions />
  <HomeFrequentlyAskedQuestions />
  <ProgramsOtherSpecialties />
</template>

<style scoped lang="scss">

</style>