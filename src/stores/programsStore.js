import { defineStore } from "pinia";
import { tPrograms } from "@/content/texts.js";

export const useProgramsStore = defineStore("programs", () => {
    const programs = {
        gameDeveloper: {
            place: tPrograms.studyPlaces.college,
            title: {
                part1: tPrograms.programs.gameDeveloper.title.part1,
                paintedPart: tPrograms.programs.gameDeveloper.title.paintedPart,
            },
            description: tPrograms.programs.gameDeveloper.description,
            mainImage: new URL('@/assets/images/double pages/header_gamedev.png', import.meta.url).href,
            topBlocks: {
                block1Description: tPrograms.processOfStudy.block1.description.faceToFaceAndDistance,
                block2Description: tPrograms.processOfStudy.block2.description.from8to10,
                block3Description: tPrograms.processOfStudy.block3.description.meddleEducation,
            },
            formStartYourCareer: tPrograms.formsTitle.gameDeveloper,
            aboutProgram: tPrograms.aboutProgram.description.gameDeveloper,
            aboutProgramBlocks: {
                format: tPrograms.aboutProgram.format.faceToFaceAndDistance,
                durationOfStudy: [
                    tPrograms.aboutProgram.durationOfStudy.duration310,
                    tPrograms.aboutProgram.durationOfStudy.duration410,
                ],
                diploma: tPrograms.aboutProgram.diploma.meddleEducation
            },
            whatSubjectYouStudy: tPrograms.whatSubjectYouStudy.gameDeveloper,
        }
    }

    return programs;
})