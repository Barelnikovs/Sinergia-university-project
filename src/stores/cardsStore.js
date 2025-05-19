import { defineStore } from "pinia";
import { tMain } from "@/content/texts.js";
import t from "@/content/buttonsAndInputs.js";
import { tPrograms } from '@/content/texts.js'
import programsStudy from "@/content/programsStudy.js";
import programs from "@/constants/programs.js";
import { computed, ref } from "vue";

export const useCardStore = defineStore('cards', () => {
    const partsCyberIndustry = [
        {
            videoIcon: new URL('@/assets/images/main/part_of_team_1.avif', import.meta.url).href,
            link: '#',
            description: tMain.becomePartOfCyber.scrollBar.video1
        },
        {
            videoIcon: new URL('@/assets/images/main/part_of_team_2.avif', import.meta.url).href,
            link: '#',
            description: tMain.becomePartOfCyber.scrollBar.video2
        },
        {
            videoIcon: new URL('@/assets/images/main/part_of_team_3.avif', import.meta.url).href,
            link: '#',
            description: tMain.becomePartOfCyber.scrollBar.video3
        },
        {
            videoIcon: new URL('@/assets/images/main/part_of_team_4.avif', import.meta.url).href,
            link: '#',
            description: tMain.becomePartOfCyber.scrollBar.video4
        },
        {
            videoIcon: new URL('@/assets/images/main/part_of_team_5.avif', import.meta.url).href,
            link: '#',
            description: tMain.becomePartOfCyber.scrollBar.video5
        },
    ]

    const placesOfStudy = ref([
        {
            id: 1,
            place: t.programSelection.college,
            active: true
        },
        {
            id: 2,
            place: t.programSelection.bachelor,
            active: false
        },
        {
            id: 3,
            place: t.programSelection.master,
            active: false
        },
        {
            id: 4,
            place: t.programSelection.courses,
            active: false
        },
    ])

    const programsOfStudiesPlace = {
        1: [
            {
                title: programsStudy.college.gameDeveloper.title,
                terms: [
                    programsStudy.textsFromCards.terms.term310,
                    programsStudy.textsFromCards.terms.term410,
                ],
                formats: [
                    programsStudy.textsFromCards.formats.faceToFace,
                    programsStudy.textsFromCards.formats.distance,
                ],
                description: programsStudy.college.gameDeveloper.description,
                diploma: programsStudy.textsFromCards.diplomaCollege,
                link: programs.GAME_DEVELOPER,
            },
            {
                title: programsStudy.college.gameArtist.title,
                terms: [
                    programsStudy.textsFromCards.terms.term310,
                    programsStudy.textsFromCards.terms.term410,
                ],
                formats: [
                    programsStudy.textsFromCards.formats.faceToFace,
                    programsStudy.textsFromCards.formats.distance,
                ],
                description: programsStudy.college.gameArtist.description,
                diploma: programsStudy.textsFromCards.diplomaCollege,
                link: programs.ARTIST_IN_GAME
            },
            {
                title: programsStudy.college.digitalMedia.title,
                terms: [
                    programsStudy.textsFromCards.terms.term110,
                    programsStudy.textsFromCards.terms.term210,
                    programsStudy.textsFromCards.terms.term310,
                ],
                formats: [
                    programsStudy.textsFromCards.formats.faceToFace,
                    programsStudy.textsFromCards.formats.distance,
                ],
                description: programsStudy.college.digitalMedia.description,
                diploma: programsStudy.textsFromCards.diplomaCollege,
                link: programs.DIGITAL_MEDIA
            },
            {
                title: programsStudy.college.gameDesigner.title,
                terms: [
                    programsStudy.textsFromCards.terms.term310,
                    programsStudy.textsFromCards.terms.term410,
                ],
                formats: [
                    programsStudy.textsFromCards.formats.faceToFace,
                    programsStudy.textsFromCards.formats.distance,
                ],
                description: programsStudy.college.gameDesigner.description,
                diploma: programsStudy.textsFromCards.diplomaCollege,
                link: programs.GAME_DESIGNER_COLLEGE
            },
            {
                title: programsStudy.college.motionDesigner.title,
                terms: [
                    programsStudy.textsFromCards.terms.term310,
                    programsStudy.textsFromCards.terms.term410,
                ],
                formats: [
                    programsStudy.textsFromCards.formats.faceToFace,
                    programsStudy.textsFromCards.formats.distance,
                ],
                description: programsStudy.college.motionDesigner.description,
                diploma: programsStudy.textsFromCards.diplomaCollege,
                link: programs.MOTION_DESIGNER
            },
        ],
        2: [
            {
                title: programsStudy.bachelor.designDeveloperGames.title,
                terms: [
                    programsStudy.textsFromCards.terms.term406,
                ],
                formats: [
                    programsStudy.textsFromCards.formats.inAbsentia,
                ],
                description: programsStudy.bachelor.designDeveloperGames.description,
                diploma: programsStudy.textsFromCards.diplomaBachelor,
                link: programs.GAME_DESIGNER_AND_GAME_DEVELOPMENT
            },
            {
                title: programsStudy.bachelor.managerInGameIndustry.title,
                terms: [
                    programsStudy.textsFromCards.terms.term206,
                    programsStudy.textsFromCards.terms.term306,
                    programsStudy.textsFromCards.terms.term400,
                    programsStudy.textsFromCards.terms.term406,
                ],
                formats: [
                    programsStudy.textsFromCards.formats.faceToFace,
                    programsStudy.textsFromCards.formats.distance,
                    programsStudy.textsFromCards.formats.weekendDay,
                ],
                description: programsStudy.bachelor.managerInGameIndustry.description,
                diploma: programsStudy.textsFromCards.diplomaBachelor,
                link: programs.MANAGEMENT_IN_GAME_INDUSTRY_AND_E_SPORT
            },
            {
                title: programsStudy.bachelor.gameDesign.title,
                terms: [
                    programsStudy.textsFromCards.terms.term400,
                ],
                formats: [
                    programsStudy.textsFromCards.formats.faceToFace,
                ],
                description: programsStudy.bachelor.gameDesign.description,
                diploma: programsStudy.textsFromCards.diplomaBachelor,
                link: programs.GAME_DESIGNER_BACHELOR
            },
        ],
        3: [
            {
                title: programsStudy.master.managerInCyberSport.title,
                terms: [
                    programsStudy.textsFromCards.terms.term200,
                ],
                formats: [
                    programsStudy.textsFromCards.formats.faceToFace,
                ],
                description: programsStudy.master.managerInCyberSport.description,
                diploma: programsStudy.textsFromCards.diplomaMaster,
                link: programs.MANAGEMENT_IN_E_SPORT_AND_PHIGITAL_SPORT
            },
        ],
        4: [
            {
                title: programsStudy.courses.managerCyberSportOrganization.title,
                terms: [
                    programsStudy.textsFromCards.terms.term001,
                ],
                formats: [
                    programsStudy.textsFromCards.formats.distance,
                ],
                description: programsStudy.courses.managerCyberSportOrganization.description,
                diploma: programsStudy.textsFromCards.diplomaCourses,
                link: null,
            },
            {
                title: programsStudy.courses.adminOfCyberTour.title,
                terms: [
                    programsStudy.textsFromCards.terms.term001,
                ],
                formats: [
                    programsStudy.textsFromCards.formats.distance,
                ],
                description: programsStudy.courses.adminOfCyberTour.description,
                diploma: programsStudy.textsFromCards.diplomaCourses,
                link: null,
            },
            {
                title: programsStudy.courses.liveBroadcastHost.title,
                terms: [
                    programsStudy.textsFromCards.terms.term001,
                ],
                formats: [
                    programsStudy.textsFromCards.formats.faceToFace,
                    programsStudy.textsFromCards.formats.distance,
                ],
                description: programsStudy.courses.liveBroadcastHost.description,
                diploma: programsStudy.textsFromCards.diplomaCourses,
                link: null,
            },
            {
                title: programsStudy.courses.eventManager.title,
                terms: [
                    programsStudy.textsFromCards.terms.term001,
                ],
                formats: [
                    programsStudy.textsFromCards.formats.faceToFace,
                    programsStudy.textsFromCards.formats.distance,
                ],
                description: programsStudy.courses.eventManager.description,
                diploma: programsStudy.textsFromCards.diplomaCourses,
                link: null,
            },
            {
                title: programsStudy.courses.multimediaDesign.title,
                terms: [
                    programsStudy.textsFromCards.terms.term001,
                ],
                formats: [
                    programsStudy.textsFromCards.formats.faceToFace,
                    programsStudy.textsFromCards.formats.distance,
                ],
                description: programsStudy.courses.multimediaDesign.description,
                diploma: programsStudy.textsFromCards.diplomaCourses,
                link: null,
            },
            {
                title: programsStudy.courses.streamTechnologies.title,
                terms: [
                    programsStudy.textsFromCards.terms.term001,
                ],
                formats: [
                    programsStudy.textsFromCards.formats.faceToFace,
                    programsStudy.textsFromCards.formats.distance,
                ],
                description: programsStudy.courses.streamTechnologies.description,
                diploma: programsStudy.textsFromCards.diplomaCourses,
                link: null,
            },
            {
                title: programsStudy.courses.streamTechnologies.title,
                terms: [
                    programsStudy.textsFromCards.terms.term001,
                ],
                formats: [
                    programsStudy.textsFromCards.formats.faceToFace,
                    programsStudy.textsFromCards.formats.distance,
                ],
                description: programsStudy.courses.streamTechnologies.description,
                diploma: programsStudy.textsFromCards.diplomaCourses,
                link: null,
            },
            {
                title: programsStudy.courses.streamer.title,
                terms: [
                    programsStudy.textsFromCards.terms.term002,
                ],
                formats: [
                    programsStudy.textsFromCards.formats.faceToFace,
                    programsStudy.textsFromCards.formats.distance,
                ],
                description: programsStudy.courses.streamer.description,
                diploma: programsStudy.textsFromCards.diplomaCourses,
                link: null,
            },
        ]

    }

    const cardsOfProgram = computed(() => {
        const activeProgram = placesOfStudy.value.find(obj => obj.active === true)
        return programsOfStudiesPlace[activeProgram.id]
    })

    const changeActivePlaceOfStudy = (id) => {
        placesOfStudy.value.forEach(place => {
            place.active = place.id === id
        })
    }

    const cardsOfYourFuture = [
        {
            videoIcon: 'src/assets/images/main/future_in_cyber_1.avif',
            description: tMain.yourFutureInCyberSport.scrollBar.img1
        },
        {
            videoIcon: 'src/assets/images/main/future_in_cyber_2.avif',
            description: tMain.yourFutureInCyberSport.scrollBar.img2
        },
        {
            videoIcon: 'src/assets/images/main/future_in_cyber_3.avif',
            description: tMain.yourFutureInCyberSport.scrollBar.img3
        },
        {
            videoIcon: 'src/assets/images/main/future_in_cyber_4.avif',
            description: tMain.yourFutureInCyberSport.scrollBar.img4
        },
        {
            videoIcon: 'src/assets/images/main/future_in_cyber_5.avif',
            description: tMain.yourFutureInCyberSport.scrollBar.img5
        },
    ]

    const cardsOurGraduates = [
        {
            videoIcon: new URL('@/assets/images/main/graduate_1.avif', import.meta.url).href,
            text: {
                name: tMain.ourGraduates.graduates.graduates1.name,
                description: tMain.ourGraduates.graduates.graduates1.description,
            },
        },
        {
            videoIcon: new URL('@/assets/images/main/graduate_2.png', import.meta.url).href,
            text: {
                name: tMain.ourGraduates.graduates.graduates2.name,
                description: tMain.ourGraduates.graduates.graduates2.description,
            },
        },
        {
            videoIcon: new URL('@/assets/images/main/graduate_3.png', import.meta.url).href,
            text: {
                name: tMain.ourGraduates.graduates.graduates3.name,
                description: tMain.ourGraduates.graduates.graduates3.description,
            },
        },
        {
            videoIcon: new URL('@/assets/images/main/graduate_4.png', import.meta.url).href,
            text: {
                name: tMain.ourGraduates.graduates.graduates4.name,
                description: tMain.ourGraduates.graduates.graduates4.description,
            },
        },
        {
            videoIcon: new URL('@/assets/images/main/graduate_5.png', import.meta.url).href,
            text: {
                name: tMain.ourGraduates.graduates.graduates5.name,
                description: tMain.ourGraduates.graduates.graduates5.description,
            },
        },
    ]

    const cardsOurTeachers = [
        {
            videoIcon: new URL('@/assets/images/main/teacher_1.png', import.meta.url).href,
            text: {
                name: tMain.ourTeachers.teachers.teacher1.name,
                description: tMain.ourTeachers.teachers.teacher1.description,
            },
        },
        {
            videoIcon: new URL('@/assets/images/main/teacher_2.png', import.meta.url).href,
            text: {
                name: tMain.ourTeachers.teachers.teacher2.name,
                description: tMain.ourTeachers.teachers.teacher2.description,
            },
        },
        {
            videoIcon: new URL('@/assets/images/main/teacher_3.png', import.meta.url).href,
            text: {
                name: tMain.ourTeachers.teachers.teacher3.name,
                description: tMain.ourTeachers.teachers.teacher3.description,
            },
        },
        {
            videoIcon: new URL('@/assets/images/main/teacher_4.png', import.meta.url).href,
            text: {
                name: tMain.ourTeachers.teachers.teacher4.name,
                description: tMain.ourTeachers.teachers.teacher4.description,
            },
        },
        {
            videoIcon: new URL('@/assets/images/main/teacher_5.png', import.meta.url).href,
            text: {
                name: tMain.ourTeachers.teachers.teacher5.name,
                description: tMain.ourTeachers.teachers.teacher5.description,
            },
        },
        {
            videoIcon: new URL('@/assets/images/main/teacher_6.png', import.meta.url).href,
            text: {
                name: tMain.ourTeachers.teachers.teacher6.name,
                description: tMain.ourTeachers.teachers.teacher6.description,
            },
        },
    ]

    const supportStudentsButtons = ref([
        {
            id: 'careersCenter',
            active: true,
            buttonsText: t.supportOfStudent.centerOfCareer,
        },
        {
            id: 'practiceAndProjects',
            active: false,
            buttonsText: t.supportOfStudent.practice,
        },
        {
            id: 'community',
            active: false,
            buttonsText: t.supportOfStudent.community,
        }
    ])

    const studentsSupportContent = [
        {
            id: 'careersCenter',
            title: tMain.supportOfStudent.centerOfCareer.title,
            description: tMain.supportOfStudent.centerOfCareer.description,
            image: 'src/assets/images/main/support_of_student_1.avif'
        },
        {
            id: 'practiceAndProjects',
            title: tMain.supportOfStudent.practiceAndProjects.title,
            description: tMain.supportOfStudent.practiceAndProjects.description,
            image: 'src/assets/images/main/support_of_student_2.avif'
        },
        {
            id: 'community',
            title: tMain.supportOfStudent.community.title,
            description: tMain.supportOfStudent.community.description,
            image: 'src/assets/images/main/support_of_student_3.avif'
        }
    ]

    const changeActiveStudentsSupportButton = (id) => {
        supportStudentsButtons.value.forEach((button) => {
            button.active = button.id === id
        })
    }

    const studentSupportCard = computed(() => {
        const activeButton = supportStudentsButtons.value.find((button) => button.active)
        return studentsSupportContent.find((obj) => obj.id === activeButton.id)
    })

    const cardsOfStudentSpeakAndShow = [
        {
            videoIcon: new URL('@/assets/images/main/students_speak_and_show_1.avif', import.meta.url).href,
            link: 'https://rutube.ru/video/private/0ce0e0a5b52590cff25afd0fb406d655/?p=rG5mdNjwAdF0MulP_Q8t9A',
            description: tMain.OurStudentsSpeak.video1
        },
        {
            videoIcon: new URL('@/assets/images/main/students_speak_and_show_2.avif', import.meta.url).href,
            link: 'https://rutube.ru/video/private/0ce0e0a5b52590cff25afd0fb406d655/?p=rG5mdNjwAdF0MulP_Q8t9A',
            description: tMain.OurStudentsSpeak.video2
        },
        {
            videoIcon: new URL('@/assets/images/main/students_speak_and_show_1.avif', import.meta.url).href,
            link: 'https://rutube.ru/video/private/0ce0e0a5b52590cff25afd0fb406d655/?p=rG5mdNjwAdF0MulP_Q8t9A',
            description: tMain.OurStudentsSpeak.video3
        },
        {
            videoIcon: new URL('@/assets/images/main/students_speak_and_show_2.avif', import.meta.url).href,
            link: 'https://rutube.ru/video/private/0ce0e0a5b52590cff25afd0fb406d655/?p=rG5mdNjwAdF0MulP_Q8t9A',
            description: tMain.OurStudentsSpeak.video4
        },
    ]

    const cardsAboutSinergia = [
        {
            class: 'block1',
            color: 'yellow',
            icon: new URL('@/assets/images/icons/about_sinargia_1.svg', import.meta.url).href,
            text: tMain.aboutUniversity.block1
        },
        {
            class: 'block2',
            color: 'black',
            icon: new URL('@/assets/images/icons/about_sinargia_2.svg', import.meta.url).href,
            text: tMain.aboutUniversity.block2
        },
        {
            class: 'block3',
            color: 'black',
            icon: new URL('@/assets/images/icons/about_sinargia_3.svg', import.meta.url).href,
            text: tMain.aboutUniversity.block3
        },
        {
            class: 'block4',
            color: 'red',
            icon: new URL('@/assets/images/icons/about_sinargia_4.svg', import.meta.url).href,
            text: tMain.aboutUniversity.block4
        },
        {
            class: 'block5',
            color: 'red',
            icon: new URL('@/assets/images/icons/about_sinargia_5.svg', import.meta.url).href,
            text: tMain.aboutUniversity.block5
        },
        {
            class: 'block6',
            color: 'yellow',
            icon: new URL('@/assets/images/icons/about_sinargia_6.svg', import.meta.url).href,
            text: tMain.aboutUniversity.block6
        },
        {
            class: 'block7',
            color: 'black',
            icon: new URL('@/assets/images/icons/about_sinargia_7.svg', import.meta.url).href,
            text: tMain.aboutUniversity.block7
        },
        {
            class: 'block8',
            color: 'red',
            icon: new URL('@/assets/images/icons/about_sinargia_8.svg', import.meta.url).href,
            text: tMain.aboutUniversity.block8
        }
    ]

    const frequentlyAskedQuestions = ref([
        {
            id: 1,
            active: false,
            question: tMain.oftenAsk.ask1,
            answer: tMain.oftenAsk.answer1,
        },
        {
            id: 2,
            active: false,
            question: tMain.oftenAsk.ask2,
            answer: tMain.oftenAsk.answer1,
        },
        {
            id: 3,
            active: false,
            question: tMain.oftenAsk.ask2,
            answer: tMain.oftenAsk.answer1,
        },
        {
            id: 4,
            active: false,
            question: tMain.oftenAsk.ask3,
            answer: tMain.oftenAsk.answer1,
        }
    ])

    const toggleStatusFrequentlyAskedQuestions = (id) => {
        frequentlyAskedQuestions.value.forEach((question) => {
            if (question.id === id) {
                question.active = !question.active
            }
        })
    }

    const cardsOfPartners = {
        partnersImage1: new URL('@/assets/images/double pages/partners_1.png', import.meta.url).href,
        partnersImage2: new URL('@/assets/images/double pages/partners_2.png', import.meta.url).href,
        partnersImage3: new URL('@/assets/images/double pages/partners_3.png', import.meta.url).href,
        partnersImage4: new URL('@/assets/images/double pages/partners_4.png', import.meta.url).href,
        partnersImage5: new URL('@/assets/images/double pages/partners_5.png', import.meta.url).href,
        partnersImage6: new URL('@/assets/images/double pages/partners_6.png', import.meta.url).href,
        partnersImage7: new URL('@/assets/images/double pages/partners_7.png', import.meta.url).href,
        partnersImage8: new URL('@/assets/images/double pages/partners_8.png', import.meta.url).href,
    }

    const cardsOtherSpecialties = [
        {
            id: programs.GAME_DEVELOPER,
            studiesPlace: tPrograms.otherDegree.degrees.gameDeveloper.place,
            title: tPrograms.otherDegree.degrees.gameDeveloper.degree,
            image: new URL('@/assets/images/double pages/other specialties 5.avif', import.meta.url).href,
        },
        {
            id: programs.ARTIST_IN_GAME,
            studiesPlace: tPrograms.otherDegree.degrees.artistInGames.place,
            title: tPrograms.otherDegree.degrees.artistInGames.degree,
            image: new URL('@/assets/images/double pages/other specialties 1.avif', import.meta.url).href,
        },
        {
            id: programs.DIGITAL_MEDIA,
            studiesPlace: tPrograms.otherDegree.degrees.digitalMedia.place,
            title: tPrograms.otherDegree.degrees.digitalMedia.degree,
            image: new URL('@/assets/images/double pages/other specialties 2.avif', import.meta.url).href,
        },
        {
            id: programs.GAME_DESIGNER_COLLEGE,
            studiesPlace: tPrograms.otherDegree.degrees.gameDesignCollege.place,
            title: tPrograms.otherDegree.degrees.gameDesignCollege.degree,
            image: new URL('@/assets/images/double pages/other specialties 3.avif', import.meta.url).href,
        },
        {
            id: programs.MOTION_DESIGNER,
            studiesPlace: tPrograms.otherDegree.degrees.motionDesign.place,
            title: tPrograms.otherDegree.degrees.motionDesign.degree,
            image: new URL('@/assets/images/double pages/other specialties 4.avif', import.meta.url).href,
        },
        {
            id: programs.GAME_DESIGNER_AND_GAME_DEVELOPMENT,
            studiesPlace: tPrograms.otherDegree.degrees.gameDesignAndDeveloping.place,
            title: tPrograms.otherDegree.degrees.gameDesignAndDeveloping.degree,
            image: new URL('@/assets/images/double pages/other specialties 5.avif', import.meta.url).href,
        },
        {
            id: programs.GAME_DESIGNER_BACHELOR,
            studiesPlace: tPrograms.otherDegree.degrees.gameDesignBachelor.place,
            title: tPrograms.otherDegree.degrees.gameDesignBachelor.degree,
            image: new URL('@/assets/images/double pages/other specialties 5.avif', import.meta.url).href,
        },
        {
            id: programs.MANAGEMENT_IN_GAME_INDUSTRY_AND_E_SPORT,
            studiesPlace: tPrograms.otherDegree.degrees.managementInGamingIndustryAndESport.place,
            title: tPrograms.otherDegree.degrees.managementInGamingIndustryAndESport.degree,
            image: new URL('@/assets/images/double pages/other specialties 5.avif', import.meta.url).href,
        },
        {
            id: programs.MANAGEMENT_IN_E_SPORT_AND_PHIGITAL_SPORT,
            studiesPlace: tPrograms.otherDegree.degrees.managementInESportAndPhygitalSports.place,
            title: tPrograms.otherDegree.degrees.managementInESportAndPhygitalSports.degree,
            image: new URL('@/assets/images/double pages/other specialties 5.avif', import.meta.url).href,
        },
    ]

    return {
        partsCyberIndustry,
        placesOfStudy,
        cardsOfProgram,
        changeActivePlaceOfStudy,
        cardsOfYourFuture,
        cardsOurGraduates,
        cardsOurTeachers,
        supportStudentsButtons,
        studentsSupportContent,
        changeActiveStudentsSupportButton,
        studentSupportCard,
        cardsOfStudentSpeakAndShow,
        cardsAboutSinergia,
        frequentlyAskedQuestions,
        toggleStatusFrequentlyAskedQuestions,
        cardsOfPartners,
        cardsOtherSpecialties
    };
})