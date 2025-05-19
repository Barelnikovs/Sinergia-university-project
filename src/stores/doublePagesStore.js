import { defineStore } from "pinia";
import { tPrograms } from "@/content/texts.js";

export const useDoublePagesStore = defineStore("pages", () => {
    const pages = {
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
                block3Description: tPrograms.processOfStudy.block3.description.meddleEducation
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
            whatSubjectYouStudy: tPrograms.whatSubjectYouStudy.subjects.gameDeveloper,
            yourFutureCards: {
                card1: {
                    image: new URL('@/assets/images/double pages/game-dev-1.avif', import.meta.url).href,
                    salary: tPrograms.yourFutureInGameIndustry.salary.from80,
                    text: tPrograms.yourFutureInGameIndustry.specialties.gameTester,
                },
                card2: {
                    image: new URL('@/assets/images/double pages/game-dev-2.avif', import.meta.url).href,
                    salary: tPrograms.yourFutureInGameIndustry.salary.from150,
                    text: tPrograms.yourFutureInGameIndustry.specialties.gameDeveloper,
                },
                card3: {
                    image: new URL('@/assets/images/double pages/game-dev-3.avif', import.meta.url).href,
                    salary: tPrograms.yourFutureInGameIndustry.salary.from100,
                    text: tPrograms.yourFutureInGameIndustry.specialties.gameDesigner,
                },
                card4: {
                    image: new URL('@/assets/images/double pages/game-dev-4.avif', import.meta.url).href,
                    salary: tPrograms.yourFutureInGameIndustry.salary.from120,
                    text: tPrograms.yourFutureInGameIndustry.specialties.unity3D,
                },
                card5: {
                    image: new URL('@/assets/images/double pages/game-dev-5.avif', import.meta.url).href,
                    salary: tPrograms.yourFutureInGameIndustry.salary.from90,
                    text: tPrograms.yourFutureInGameIndustry.specialties.gameAnalyst,
                },
                card6: {
                    image: new URL('@/assets/images/double pages/game-dev-6.avif', import.meta.url).href,
                    salary: tPrograms.yourFutureInGameIndustry.salary.from50,
                    text: tPrograms.yourFutureInGameIndustry.specialties.uxUiDeveloper,
                },
                card7: {
                    image: new URL('@/assets/images/double pages/game-dev-7.avif', import.meta.url).href,
                    salary: tPrograms.yourFutureInGameIndustry.salary.from70,
                    text: tPrograms.yourFutureInGameIndustry.specialties.programmer,
                },
                card8: {
                    image: new URL('@/assets/images/double pages/game-dev-8.avif', import.meta.url).href,
                    salary: tPrograms.yourFutureInGameIndustry.salary.from120,
                    text: tPrograms.yourFutureInGameIndustry.specialties.fullStack,
                },
                card9: {
                    image: new URL('@/assets/images/double pages/game-dev-9.avif', import.meta.url).href,
                    salary: tPrograms.yourFutureInGameIndustry.salary.from200,
                    text: tPrograms.yourFutureInGameIndustry.specialties.androidIOS,
                }
            },
            yourCareerStartHere: tPrograms.yourCareerStartHere.gameDeveloper,
        },
        artistInGames: {
            place: tPrograms.studyPlaces.college,
            title: {
                part1: tPrograms.programs.artistInGames.title.part1,
                paintedPart: tPrograms.programs.artistInGames.title.paintedPart,
            },
            description: tPrograms.programs.artistInGames.description,
            mainImage: new URL('@/assets/images/double pages/header_artist.png', import.meta.url).href,
            topBlocks: {
                block1Description: tPrograms.processOfStudy.block1.description.faceToFaceAndDistance,
                block2Description: tPrograms.processOfStudy.block2.description.from8to10,
                block3Description: tPrograms.processOfStudy.block3.description.meddleEducation,
            },
            formStartYourCareer: tPrograms.formsTitle.artistInGames,
            aboutProgram: tPrograms.aboutProgram.description.artistInGames,
            aboutProgramBlocks: {
                format: tPrograms.aboutProgram.format.faceToFaceAndDistance,
                durationOfStudy: [
                    tPrograms.aboutProgram.durationOfStudy.duration310,
                    tPrograms.aboutProgram.durationOfStudy.duration410,
                ],
                diploma: tPrograms.aboutProgram.diploma.meddleEducation
            },
            whatSubjectYouStudy: tPrograms.whatSubjectYouStudy.subjects.artistInGames,
            yourFutureCards: {
                card1: {
                    image: new URL('@/assets/images/double pages/game-artist-1.avif', import.meta.url).href,
                    salary: tPrograms.yourFutureInGameIndustry.salary.from100,
                    text: tPrograms.yourFutureInGameIndustry.specialties.gameDesignerGames,
                },
                card2: {
                    image: new URL('@/assets/images/double pages/game-artist-2.avif', import.meta.url).href,
                    salary: tPrograms.yourFutureInGameIndustry.salary.from60,
                    text: tPrograms.yourFutureInGameIndustry.specialties.textureArtist,
                },
                card3: {
                    image: new URL('@/assets/images/double pages/game-artist-3.avif', import.meta.url).href,
                    salary: tPrograms.yourFutureInGameIndustry.salary.from60,
                    text: tPrograms.yourFutureInGameIndustry.specialties.environmentArtist,
                },
                card4: {
                    image: new URL('@/assets/images/double pages/game-artist-4.avif', import.meta.url).href,
                    salary: tPrograms.yourFutureInGameIndustry.salary.from150,
                    text: tPrograms.yourFutureInGameIndustry.specialties.vfxArtist,
                },
                card5: {
                    image: new URL('@/assets/images/double pages/game-artist-5.avif', import.meta.url).href,
                    salary: tPrograms.yourFutureInGameIndustry.salary.from80,
                    text: tPrograms.yourFutureInGameIndustry.specialties.modeler3D,
                },
                card6: {
                    image: new URL('@/assets/images/double pages/game-artist-6.avif', import.meta.url).href,
                    salary: tPrograms.yourFutureInGameIndustry.salary.from60,
                    text: tPrograms.yourFutureInGameIndustry.specialties.artist2D,
                },
                card7: {
                    image: new URL('@/assets/images/double pages/game-artist-7.avif', import.meta.url).href,
                    salary: tPrograms.yourFutureInGameIndustry.salary.from80,
                    text: tPrograms.yourFutureInGameIndustry.specialties.artist3D,
                },
                card8: {
                    image: new URL('@/assets/images/double pages/game-artist-8.avif', import.meta.url).href,
                    salary: tPrograms.yourFutureInGameIndustry.salary.from100,
                    text: tPrograms.yourFutureInGameIndustry.specialties.conceptArtist,
                },
                card9: {
                    image: new URL('@/assets/images/double pages/game-artist-9.avif', import.meta.url).href,
                    salary: tPrograms.yourFutureInGameIndustry.salary.from70,
                    text: tPrograms.yourFutureInGameIndustry.specialties.mentorForKids,
                },
            },
            yourCareerStartHere: tPrograms.yourCareerStartHere.artistInGames,
        },
        digitalMedia: {
            place: tPrograms.studyPlaces.college,
            title: {
                part1: tPrograms.programs.digitalMedia.title.part1,
                paintedPart: tPrograms.programs.digitalMedia.title.paintedPart,
            },
            description: tPrograms.programs.digitalMedia.description,
            mainImage: new URL('@/assets/images/double pages/header_digital_media.png', import.meta.url).href,
            topBlocks: {
                block1Description: tPrograms.processOfStudy.block1.description.faceToFaceAndDistance,
                block2Description: tPrograms.processOfStudy.block2.description.from8to10,
                block3Description: tPrograms.processOfStudy.block3.description.meddleEducation,
            },
            formStartYourCareer: tPrograms.formsTitle.digitalMedia,
            aboutProgram: tPrograms.aboutProgram.description.digitalMedia,
            aboutProgramBlocks: {
                format: tPrograms.aboutProgram.format.faceToFaceAndDistance,
                durationOfStudy: [
                    tPrograms.aboutProgram.durationOfStudy.duration110,
                    tPrograms.aboutProgram.durationOfStudy.duration210,
                    tPrograms.aboutProgram.durationOfStudy.duration310,
                ],
                diploma: tPrograms.aboutProgram.diploma.meddleEducation
            },
            whatSubjectYouStudy: tPrograms.whatSubjectYouStudy.subjects.digitalMedia,
            yourFutureCards: {
                card1: {
                    image: new URL('@/assets/images/double pages/digital-media-1.avif', import.meta.url).href,
                    salary: tPrograms.yourFutureInGameIndustry.salary.from90,
                    text: tPrograms.yourFutureInGameIndustry.specialties.tournamentOrganizer,
                },
                card2: {
                    image: new URL('@/assets/images/double pages/digital-media-2.avif', import.meta.url).href,
                    salary: tPrograms.yourFutureInGameIndustry.salary.from80,
                    text: tPrograms.yourFutureInGameIndustry.specialties.creator,
                },
                card3: {
                    image: new URL('@/assets/images/double pages/digital-media-3.avif', import.meta.url).href,
                    salary: tPrograms.yourFutureInGameIndustry.salary.from110,
                    text: tPrograms.yourFutureInGameIndustry.specialties.contentManager,
                },
                card4: {
                    image: new URL('@/assets/images/double pages/digital-media-4.avif', import.meta.url).href,
                    salary: tPrograms.yourFutureInGameIndustry.salary.from70,
                    text: tPrograms.yourFutureInGameIndustry.specialties.smmSpecialist,
                },
                card5: {
                    image: new URL('@/assets/images/double pages/digital-media-5.avif', import.meta.url).href,
                    salary: tPrograms.yourFutureInGameIndustry.salary.from80,
                    text: tPrograms.yourFutureInGameIndustry.specialties.internetMarketer,
                },
                card6: {
                    image: new URL('@/assets/images/double pages/digital-media-6.avif', import.meta.url).href,
                    salary: tPrograms.yourFutureInGameIndustry.salary.from110,
                    text: tPrograms.yourFutureInGameIndustry.specialties.PRManager,
                }
            },
            yourCareerStartHere: tPrograms.yourCareerStartHere.digitalMedia,
        },
        gameDesignerCollege: {
            place: tPrograms.studyPlaces.college,
            title: {
                part1: tPrograms.programs.gameDesignCollege.title.part1,
                paintedPart: tPrograms.programs.gameDesignCollege.title.paintedPart,
            },
            description: tPrograms.programs.gameDesignCollege.description,
            mainImage: new URL('@/assets/images/double pages/header_game_disign-college.png', import.meta.url).href,
            topBlocks: {
                block1Description: tPrograms.processOfStudy.block1.description.faceToFaceAndDistance,
                block2Description: tPrograms.processOfStudy.block2.description.from8to10,
                block3Description: tPrograms.processOfStudy.block3.description.meddleEducation,
            },
            formStartYourCareer: tPrograms.formsTitle.gameDesignCollege,
            aboutProgram: tPrograms.aboutProgram.description.gameDesignCollege,
            aboutProgramBlocks: {
                format: tPrograms.aboutProgram.format.faceToFaceAndDistance,
                durationOfStudy: [
                    tPrograms.aboutProgram.durationOfStudy.duration310,
                    tPrograms.aboutProgram.durationOfStudy.duration410,
                ],
                diploma: tPrograms.aboutProgram.diploma.meddleEducation
            },
            whatSubjectYouStudy: tPrograms.whatSubjectYouStudy.subjects.gameDesignCollege,
            yourFutureCards: {
                card1: {
                    image: new URL('@/assets/images/double pages/game-design-1.avif', import.meta.url).href,
                    salary: tPrograms.yourFutureInGameIndustry.salary.from100,
                    text: tPrograms.yourFutureInGameIndustry.specialties.gameDesigner,
                },
                card2: {
                    image: new URL('@/assets/images/double pages/game-design-2.avif', import.meta.url).href,
                    salary: tPrograms.yourFutureInGameIndustry.salary.from80,
                    text: tPrograms.yourFutureInGameIndustry.specialties.gameWriter,
                },
                card3: {
                    image: new URL('@/assets/images/double pages/game-design-3.avif', import.meta.url).href,
                    salary: tPrograms.yourFutureInGameIndustry.salary.from120,
                    text: tPrograms.yourFutureInGameIndustry.specialties.technicalGameDesigner,
                },
                card4: {
                    image: new URL('@/assets/images/double pages/game-design-4.avif', import.meta.url).href,
                    salary: tPrograms.yourFutureInGameIndustry.salary.from70,
                    text: tPrograms.yourFutureInGameIndustry.specialties.uXUIDesignerInGames,
                },
                card5: {
                    image: new URL('@/assets/images/double pages/game-design-5.avif', import.meta.url).href,
                    salary: tPrograms.yourFutureInGameIndustry.salary.from90,
                    text: tPrograms.yourFutureInGameIndustry.specialties.levelDesigner,
                },
                card6: {
                    image: new URL('@/assets/images/double pages/game-design-6.avif', import.meta.url).href,
                    salary: tPrograms.yourFutureInGameIndustry.salary.from90,
                    text: tPrograms.yourFutureInGameIndustry.specialties.gameAnalyst,
                },
                card7: {
                    image: new URL('@/assets/images/double pages/game-design-7.avif', import.meta.url).href,
                    salary: tPrograms.yourFutureInGameIndustry.salary.from100,
                    text: tPrograms.yourFutureInGameIndustry.specialties.gameBalancer,
                },
                card8: {
                    image: new URL('@/assets/images/double pages/game-design-8.avif', import.meta.url).href,
                    salary: tPrograms.yourFutureInGameIndustry.salary.from80,
                    text: tPrograms.yourFutureInGameIndustry.specialties.gameTester,
                },
                card9: {
                    image: new URL('@/assets/images/double pages/game-design-9.avif', import.meta.url).href,
                    salary: tPrograms.yourFutureInGameIndustry.salary.from150,
                    text: tPrograms.yourFutureInGameIndustry.specialties.gameProducer,
                },
                card10: {
                    image: new URL('@/assets/images/double pages/game-dev-4.avif', import.meta.url).href,
                    salary: tPrograms.yourFutureInGameIndustry.salary.from110,
                    text: tPrograms.yourFutureInGameIndustry.specialties.gameMechanicsDeveloper,
                }
            },
            yourCareerStartHere: tPrograms.yourCareerStartHere.gameDesignCollege,
        },
        motionDesigner: {
            place: tPrograms.studyPlaces.college,
            title: {
                part1: tPrograms.programs.motionDesign.title.part1,
                paintedPart: tPrograms.programs.motionDesign.title.paintedPart,
            },
            description: tPrograms.programs.motionDesign.description,
            mainImage: new URL('@/assets/images/double pages/header_motion_designer.png', import.meta.url).href,
            topBlocks: {
                block1Description: tPrograms.processOfStudy.block1.description.faceToFaceAndDistance,
                block2Description: tPrograms.processOfStudy.block2.description.from8to10,
                block3Description: tPrograms.processOfStudy.block3.description.meddleEducation,
            },
            formStartYourCareer: tPrograms.formsTitle.motionDesign,
            aboutProgram: tPrograms.aboutProgram.description.motionDesign,
            aboutProgramBlocks: {
                format: tPrograms.aboutProgram.format.faceToFaceAndDistance,
                durationOfStudy: [
                    tPrograms.aboutProgram.durationOfStudy.duration310,
                    tPrograms.aboutProgram.durationOfStudy.duration410,
                ],
                diploma: tPrograms.aboutProgram.diploma.meddleEducation
            },
            whatSubjectYouStudy: tPrograms.whatSubjectYouStudy.subjects.motionDesign,
            yourFutureCards: {
                card1: {
                    image: new URL('@/assets/images/double pages/motion-design-1.avif', import.meta.url).href,
                    salary: tPrograms.yourFutureInGameIndustry.salary.from80,
                    text: tPrograms.yourFutureInGameIndustry.specialties.motionDesigner,
                },
                card2: {
                    image: new URL('@/assets/images/double pages/motion-design-2.avif', import.meta.url).href,
                    salary: tPrograms.yourFutureInGameIndustry.salary.from90,
                    text: tPrograms.yourFutureInGameIndustry.specialties.animator2D3D,
                },
                card3: {
                    image: new URL('@/assets/images/double pages/motion-design-3.avif', import.meta.url).href,
                    salary: tPrograms.yourFutureInGameIndustry.salary.from100,
                    text: tPrograms.yourFutureInGameIndustry.specialties.VFXSpecialist,
                },
                card4: {
                    image: new URL('@/assets/images/double pages/motion-design-4.avif', import.meta.url).href,
                    salary: tPrograms.yourFutureInGameIndustry.salary.from70,
                    text: tPrograms.yourFutureInGameIndustry.specialties.graphicDesignerAnimator,
                },
                card5: {
                    image: new URL('@/assets/images/double pages/motion-design-5.avif', import.meta.url).href,
                    salary: tPrograms.yourFutureInGameIndustry.salary.from60,
                    text: tPrograms.yourFutureInGameIndustry.specialties.videoEditor,
                },
                card6: {
                    image: new URL('@/assets/images/double pages/motion-design-6.avif', import.meta.url).href,
                    salary: tPrograms.yourFutureInGameIndustry.salary.from110,
                    text: tPrograms.yourFutureInGameIndustry.specialties.cgArtist,
                },
                card7: {
                    image: new URL('@/assets/images/double pages/motion-design-7.avif', import.meta.url).href,
                    salary: tPrograms.yourFutureInGameIndustry.salary.from75,
                    text: tPrograms.yourFutureInGameIndustry.specialties.uxUiAnimator,
                },
                card8: {
                    image: new URL('@/assets/images/double pages/motion-design-8.avif', import.meta.url).href,
                    salary: tPrograms.yourFutureInGameIndustry.salary.from120,
                    text: tPrograms.yourFutureInGameIndustry.specialties.animationDirector,
                },
                card9: {
                    image: new URL('@/assets/images/double pages/motion-design-9.avif', import.meta.url).href,
                    salary: tPrograms.yourFutureInGameIndustry.salary.from85,
                    text: tPrograms.yourFutureInGameIndustry.specialties.MotionDesignerInAdvertisingAndMarketing,
                },
                card10: {
                    image: new URL('@/assets/images/double pages/motion-design-10.avif', import.meta.url).href,
                    salary: tPrograms.yourFutureInGameIndustry.salary.from110,
                    text: tPrograms.yourFutureInGameIndustry.specialties.Animation3DSpecialist,
                },
            },
            yourCareerStartHere: tPrograms.yourCareerStartHere.motionDesign,
        },
        gameDesignAndGameDevelopment: {
            place: tPrograms.studyPlaces.bachelor,
            title: {
                part1: tPrograms.programs.gameDesignAndDeveloping.title.part1,
                paintedPart: tPrograms.programs.gameDesignAndDeveloping.title.paintedPart,
            },
            description: tPrograms.programs.gameDesignAndDeveloping.description,
            mainImage: new URL('@/assets/images/double pages/header_game_design_and_development.png', import.meta.url).href,
            topBlocks: {
                block1Description: tPrograms.processOfStudy.block1.description.distance,
                block2Description: tPrograms.processOfStudy.block2.description.from10to12,
                block3Description: tPrograms.processOfStudy.block3.description.higherEducation,
            },
            formStartYourCareer: tPrograms.formsTitle.gameDesignAndDeveloping,
            aboutProgram: tPrograms.aboutProgram.description.gameDesignAndDeveloping,
            aboutProgramBlocks: {
                format: tPrograms.aboutProgram.format.distance,
                durationOfStudy: [
                    tPrograms.aboutProgram.durationOfStudy.duration406,
                ],
                diploma: tPrograms.aboutProgram.diploma.higherEducation
            },
            whatSubjectYouStudy: tPrograms.whatSubjectYouStudy.subjects.gameDesignAndDeveloping,
            yourFutureCards: {
                card1: {
                    image: new URL('@/assets/images/double pages/game-dev-1.avif', import.meta.url).href,
                    salary: tPrograms.yourFutureInGameIndustry.salary.from80,
                    text: tPrograms.yourFutureInGameIndustry.specialties.gameTester,
                },
                card2: {
                    image: new URL('@/assets/images/double pages/game-dev-2.avif', import.meta.url).href,
                    salary: tPrograms.yourFutureInGameIndustry.salary.from150,
                    text: tPrograms.yourFutureInGameIndustry.specialties.gameDeveloper,
                },
                card3: {
                    image: new URL('@/assets/images/double pages/game-dev-3.avif', import.meta.url).href,
                    salary: tPrograms.yourFutureInGameIndustry.salary.from100,
                    text: tPrograms.yourFutureInGameIndustry.specialties.gameDesigner,
                },
                card4: {
                    image: new URL('@/assets/images/double pages/game-dev-4.avif', import.meta.url).href,
                    salary: tPrograms.yourFutureInGameIndustry.salary.from120,
                    text: tPrograms.yourFutureInGameIndustry.specialties.unity3D,
                },
                card5: {
                    image: new URL('@/assets/images/double pages/game-dev-5.avif', import.meta.url).href,
                    salary: tPrograms.yourFutureInGameIndustry.salary.from90,
                    text: tPrograms.yourFutureInGameIndustry.specialties.gameAnalyst,
                },
                card6: {
                    image: new URL('@/assets/images/double pages/game-dev-6.avif', import.meta.url).href,
                    salary: tPrograms.yourFutureInGameIndustry.salary.from50,
                    text: tPrograms.yourFutureInGameIndustry.specialties.uxUiDeveloper,
                },
                card7: {
                    image: new URL('@/assets/images/double pages/game-dev-7.avif', import.meta.url).href,
                    salary: tPrograms.yourFutureInGameIndustry.salary.from70,
                    text: tPrograms.yourFutureInGameIndustry.specialties.programmer,
                },
                card8: {
                    image: new URL('@/assets/images/double pages/game-dev-8.avif', import.meta.url).href,
                    salary: tPrograms.yourFutureInGameIndustry.salary.from120,
                    text: tPrograms.yourFutureInGameIndustry.specialties.fullStack,
                },
                card9: {
                    image: new URL('@/assets/images/double pages/game-dev-9.avif', import.meta.url).href,
                    salary: tPrograms.yourFutureInGameIndustry.salary.from200,
                    text: tPrograms.yourFutureInGameIndustry.specialties.androidIOS,
                }
            },
            yourCareerStartHere: tPrograms.yourCareerStartHere.gameDesignAndDeveloping,
        },
        gameDesignerBachelor: {
            place: tPrograms.studyPlaces.bachelor,
            title: {
                part1: tPrograms.programs.gameDesignBachelor.title.part1,
                paintedPart: tPrograms.programs.gameDesignBachelor.title.paintedPart,
            },
            description: tPrograms.programs.gameDesignBachelor.description,
            mainImage: new URL('@/assets/images/double pages/header_game-design-bachelor.png', import.meta.url).href,
            topBlocks: {
                block1Description: tPrograms.processOfStudy.block1.description.faceToFace,
                block2Description: tPrograms.processOfStudy.block2.description.from8to8,
                block3Description: tPrograms.processOfStudy.block3.description.higherEducation,
            },
            formStartYourCareer: tPrograms.formsTitle.gameDesignBachelor,
            aboutProgram: tPrograms.aboutProgram.description.gameDesignBachelor,
            aboutProgramBlocks: {
                format: tPrograms.aboutProgram.format.faceToFace,
                durationOfStudy: [
                    tPrograms.aboutProgram.durationOfStudy.duration400,
                ],
                diploma: tPrograms.aboutProgram.diploma.higherEducation
            },
            whatSubjectYouStudy: tPrograms.whatSubjectYouStudy.subjects.gameDesignBachelor,
            yourFutureCards: {
                card1: {
                    image: new URL('@/assets/images/double pages/game-design-bachalor-1.avif', import.meta.url).href,
                    salary: tPrograms.yourFutureInGameIndustry.salary.from100,
                    text: tPrograms.yourFutureInGameIndustry.specialties.gameDesigner,
                },
                card2: {
                    image: new URL('@/assets/images/double pages/game-design-bachalor-2.avif', import.meta.url).href,
                    salary: tPrograms.yourFutureInGameIndustry.salary.from120,
                    text: tPrograms.yourFutureInGameIndustry.specialties.gameMechanicsDeveloper,
                },
                card3: {
                    image: new URL('@/assets/images/double pages/game-design-bachalor-3.avif', import.meta.url).href,
                    salary: tPrograms.yourFutureInGameIndustry.salary.from90,
                    text: tPrograms.yourFutureInGameIndustry.specialties.narrativedesigner,
                },
                card4: {
                    image: new URL('@/assets/images/double pages/game-design-bachalor-4.avif', import.meta.url).href,
                    salary: tPrograms.yourFutureInGameIndustry.salary.from80,
                    text: tPrograms.yourFutureInGameIndustry.specialties.uXUIDesignerInGames,
                },
                card5: {
                    image: new URL('@/assets/images/double pages/game-design-bachalor-5.avif', import.meta.url).href,
                    salary: tPrograms.yourFutureInGameIndustry.salary.from130,
                    text: tPrograms.yourFutureInGameIndustry.specialties.gameProducer2,
                },
                card6: {
                    image: new URL('@/assets/images/double pages/game-design-bachalor-6.avif', import.meta.url).href,
                    salary: tPrograms.yourFutureInGameIndustry.salary.from110,
                    text: tPrograms.yourFutureInGameIndustry.specialties.levelDesigner,
                },
                card7: {
                    image: new URL('@/assets/images/double pages/game-design-bachalor-7.avif', import.meta.url).href,
                    salary: tPrograms.yourFutureInGameIndustry.salary.from90,
                    text: tPrograms.yourFutureInGameIndustry.specialties.gameAnalyst,
                },
                card8: {
                    image: new URL('@/assets/images/double pages/game-design-bachalor-8.avif', import.meta.url).href,
                    salary: tPrograms.yourFutureInGameIndustry.salary.from100,
                    text: tPrograms.yourFutureInGameIndustry.specialties.GameMonetizationSpecialist,
                },
                card9: {
                    image: new URL('@/assets/images/double pages/game-design-bachalor-9.avif', import.meta.url).href,
                    salary: tPrograms.yourFutureInGameIndustry.salary.from150,
                    text: tPrograms.yourFutureInGameIndustry.specialties.vrArDeveloper,
                },
                card10: {
                    image: new URL('@/assets/images/double pages/game-design-bachalor-10.avif', import.meta.url).href,
                    salary: tPrograms.yourFutureInGameIndustry.salary.from85,
                    text: tPrograms.yourFutureInGameIndustry.specialties.gameWriter,
                }
            },
            yourCareerStartHere: tPrograms.yourCareerStartHere.gameDesignBachelor,
        },
        managementInGameIndustryAndESport: {
            place: tPrograms.studyPlaces.bachelor,
            title: {
                part1: tPrograms.programs.ManagementInGamingIndustryAndESport.title.part1,
                paintedPart: tPrograms.programs.ManagementInGamingIndustryAndESport.title.paintedPart,
            },
            description: tPrograms.programs.ManagementInGamingIndustryAndESport.description,
            mainImage: new URL('@/assets/images/double pages/header_manager_in_a_game_industry_and_cyber_sport.png', import.meta.url).href,
            topBlocks: {
                block1Description: tPrograms.processOfStudy.block1.description.faceToFaceAndDistance,
                block2Description: tPrograms.processOfStudy.block2.description.from8to10,
                block3Description: tPrograms.processOfStudy.block3.description.higherEducation,
            },
            formStartYourCareer: tPrograms.formsTitle.ManagementInGamingIndustryAndESport,
            aboutProgram: tPrograms.aboutProgram.description.ManagementInGamingIndustryAndESport,
            aboutProgramBlocks: {
                format: tPrograms.aboutProgram.format.faceToFaceAndDistance,
                durationOfStudy: [
                    tPrograms.aboutProgram.durationOfStudy.duration306,
                    tPrograms.aboutProgram.durationOfStudy.duration406,
                    tPrograms.aboutProgram.durationOfStudy.duration400,
                ],
                diploma: tPrograms.aboutProgram.diploma.higherEducation
            },
            whatSubjectYouStudy: tPrograms.whatSubjectYouStudy.subjects.ManagementInGamingIndustryAndESport,
            yourFutureCards: {
                card1: {
                    image: new URL('@/assets/images/double pages/cybersport-1.avif', import.meta.url).href,
                    salary: tPrograms.yourFutureInGameIndustry.salary.from90,
                    text: tPrograms.yourFutureInGameIndustry.specialties.tournamentOrganizer,
                },
                card2: {
                    image: new URL('@/assets/images/double pages/cybersport-2.avif', import.meta.url).href,
                    salary: tPrograms.yourFutureInGameIndustry.salary.from110,
                    text: tPrograms.yourFutureInGameIndustry.specialties.broadcastDirector,
                },
                card3: {
                    image: new URL('@/assets/images/double pages/cybersport-3.avif', import.meta.url).href,
                    salary: tPrograms.yourFutureInGameIndustry.salary.from110,
                    text: tPrograms.yourFutureInGameIndustry.specialties.contentManager,
                },
                card4: {
                    image: new URL('@/assets/images/double pages/cybersport-4.avif', import.meta.url).href,
                    salary: tPrograms.yourFutureInGameIndustry.salary.from70,
                    text: tPrograms.yourFutureInGameIndustry.specialties.smmManager,
                },
                card5: {
                    image: new URL('@/assets/images/double pages/cybersport-5.avif', import.meta.url).href,
                    salary: tPrograms.yourFutureInGameIndustry.salary.from80,
                    text: tPrograms.yourFutureInGameIndustry.specialties.internetMarketer,
                },
                card6: {
                    image: new URL('@/assets/images/double pages/cybersport-6.avif', import.meta.url).href,
                    salary: tPrograms.yourFutureInGameIndustry.salary.from90,
                    text: tPrograms.yourFutureInGameIndustry.specialties.projectManager,
                },
                card7: {
                    image: new URL('@/assets/images/double pages/cybersport-7.avif', import.meta.url).href,
                    salary: tPrograms.yourFutureInGameIndustry.salary.from120,
                    text: tPrograms.yourFutureInGameIndustry.specialties.teamManager,
                },
                card8: {
                    image: new URL('@/assets/images/double pages/cybersport-8.avif', import.meta.url).href,
                    salary: tPrograms.yourFutureInGameIndustry.salary.from180,
                    text: tPrograms.yourFutureInGameIndustry.specialties.projectManager2,
                }
            },
            yourCareerStartHere: tPrograms.yourCareerStartHere.managementInGamingIndustryAndESport,
        },
        managementInESportAndPhigitalSport: {
            place: tPrograms.studyPlaces.master,
            title: {
                part1: tPrograms.programs.ManagementInESportAndPhygitalSports.title.part1,
                paintedPart: tPrograms.programs.ManagementInESportAndPhygitalSports.title.paintedPart,
            },
            description: tPrograms.programs.ManagementInESportAndPhygitalSports.description,
            mainImage: new URL('@/assets/images/double pages/header_manager_in_cyber_sport_and_figital_sport.png', import.meta.url).href,
            topBlocks: {
                block1Description: tPrograms.processOfStudy.block1.description.faceToFace,
                block2Description: tPrograms.processOfStudy.block2.description.from4to4,
                block3Description: tPrograms.processOfStudy.block3.description.higherEducation,
            },
            formStartYourCareer: tPrograms.formsTitle.ManagementInESportAndPhygitalSports,
            aboutProgram: tPrograms.aboutProgram.description.ManagementInESportAndPhygitalSports,
            aboutProgramBlocks: {
                format: tPrograms.aboutProgram.format.faceToFace,
                durationOfStudy: [
                    tPrograms.aboutProgram.durationOfStudy.duration200
                ],
                diploma: tPrograms.aboutProgram.diploma.higherEducation
            },
            whatSubjectYouStudy: tPrograms.whatSubjectYouStudy.subjects.ManagementInESportAndPhygitalSports,
            yourFutureCards: {
                card1: {
                    image: new URL('@/assets/images/double pages/phigital-sport-1.avif', import.meta.url).href,
                    salary: tPrograms.yourFutureInGameIndustry.salary.from90,
                    text: tPrograms.yourFutureInGameIndustry.specialties.tournamentOrganizer,
                },
                card2: {
                    image: new URL('@/assets/images/double pages/phigital-sport-2.avif', import.meta.url).href,
                    salary: tPrograms.yourFutureInGameIndustry.salary.from250,
                    text: tPrograms.yourFutureInGameIndustry.specialties.directorDepartment,
                },
                card3: {
                    image: new URL('@/assets/images/double pages/phigital-sport-3.avif', import.meta.url).href,
                    salary: tPrograms.yourFutureInGameIndustry.salary.from90,
                    text: tPrograms.yourFutureInGameIndustry.specialties.projectManager,
                },
                card4: {
                    image: new URL('@/assets/images/double pages/phigital-sport-4.avif', import.meta.url).href,
                    salary: tPrograms.yourFutureInGameIndustry.salary.from200,
                    text: tPrograms.yourFutureInGameIndustry.specialties.facilityManager,
                },
                card5: {
                    image: new URL('@/assets/images/double pages/phigital-sport-5.avif', import.meta.url).href,
                    salary: tPrograms.yourFutureInGameIndustry.salary.from180,
                    text: tPrograms.yourFutureInGameIndustry.specialties.projectManager2,
                }
            },
            yourCareerStartHere: tPrograms.yourCareerStartHere.managementInESportAndPhygitalSports,
        },
    }

    return { pages };
})