import { defineStore } from "pinia";
import { tMain } from "@/content/texts.js";
import t from "@/content/buttonsAndInputs.js";
import tPrograms from '@/content/programsStudy.js'
import { computed, ref } from "vue";

export const useCardStore = defineStore('cards', () => {
    const partsCyberIndustry = [
        {
            videoIcon: 'src/assets/images/main/part_of_team_1.avif',
            link: '#',
            play: 'src/assets/images/icons/play_yellow.svg',
            description: tMain.becomePartOfCyber.scrollBar.video1
        },
        {
            videoIcon: 'src/assets/images/main/part_of_team_2.avif',
            link: '#',
            play: 'src/assets/images/icons/play_yellow.svg',
            description: tMain.becomePartOfCyber.scrollBar.video2
        },
        {
            videoIcon: 'src/assets/images/main/part_of_team_3.avif',
            link: '#',
            play: 'src/assets/images/icons/play_yellow.svg',
            description: tMain.becomePartOfCyber.scrollBar.video3
        },
        {
            videoIcon: 'src/assets/images/main/part_of_team_4.avif',
            link: '#',
            play: 'src/assets/images/icons/play_yellow.svg',
            description: tMain.becomePartOfCyber.scrollBar.video4
        },
        {
            videoIcon: 'src/assets/images/main/part_of_team_5.avif',
            link: '#',
            play: 'src/assets/images/icons/play_yellow.svg',
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
                title: tPrograms.college.gameDeveloper.title,
                terms: [
                    tPrograms.textsFromCards.terms.term310,
                    tPrograms.textsFromCards.terms.term410,
                ],
                formats: [
                    tPrograms.textsFromCards.formats.faceToFace,
                    tPrograms.textsFromCards.formats.distance,
                ],
                description: tPrograms.college.gameDeveloper.description,
                diploma: tPrograms.textsFromCards.diplomaCollege,
                link: 'game-developer'
            },
            {
                title: tPrograms.college.gameArtist.title,
                terms: [
                    tPrograms.textsFromCards.terms.term310,
                    tPrograms.textsFromCards.terms.term410,
                ],
                formats: [
                    tPrograms.textsFromCards.formats.faceToFace,
                    tPrograms.textsFromCards.formats.distance,
                ],
                description: tPrograms.college.gameArtist.description,
                diploma: tPrograms.textsFromCards.diplomaCollege,
                link: 'game-artist'
            },
            {
                title: tPrograms.college.digitalMedia.title,
                terms: [
                    tPrograms.textsFromCards.terms.term110,
                    tPrograms.textsFromCards.terms.term210,
                    tPrograms.textsFromCards.terms.term310,
                ],
                formats: [
                    tPrograms.textsFromCards.formats.faceToFace,
                    tPrograms.textsFromCards.formats.distance,
                ],
                description: tPrograms.college.digitalMedia.description,
                diploma: tPrograms.textsFromCards.diplomaCollege,
                link: 'digital-media'
            },
            {
                title: tPrograms.college.gameDesigner.title,
                terms: [
                    tPrograms.textsFromCards.terms.term310,
                    tPrograms.textsFromCards.terms.term410,
                ],
                formats: [
                    tPrograms.textsFromCards.formats.faceToFace,
                    tPrograms.textsFromCards.formats.distance,
                ],
                description: tPrograms.college.gameDesigner.description,
                diploma: tPrograms.textsFromCards.diplomaCollege,
                link: 'game-designer-college'
            },
            {
                title: tPrograms.college.motionDesigner.title,
                terms: [
                    tPrograms.textsFromCards.terms.term310,
                    tPrograms.textsFromCards.terms.term410,
                ],
                formats: [
                    tPrograms.textsFromCards.formats.faceToFace,
                    tPrograms.textsFromCards.formats.distance,
                ],
                description: tPrograms.college.motionDesigner.description,
                diploma: tPrograms.textsFromCards.diplomaCollege,
                link: 'motion-designer'
            },
        ],
        2: [
            {
                title: tPrograms.bachelor.designDeveloperGames.title,
                terms: [
                    tPrograms.textsFromCards.terms.term406,
                ],
                formats: [
                    tPrograms.textsFromCards.formats.inAbsentia,
                ],
                description: tPrograms.bachelor.designDeveloperGames.description,
                diploma: tPrograms.textsFromCards.diplomaBachelor,
                link: 'design-and-developer-games'
            },
            {
                title: tPrograms.bachelor.managerInGameIndustry.title,
                terms: [
                    tPrograms.textsFromCards.terms.term206,
                    tPrograms.textsFromCards.terms.term306,
                    tPrograms.textsFromCards.terms.term400,
                    tPrograms.textsFromCards.terms.term406,
                ],
                formats: [
                    tPrograms.textsFromCards.formats.faceToFace,
                    tPrograms.textsFromCards.formats.distance,
                    tPrograms.textsFromCards.formats.weekendDay,
                ],
                description: tPrograms.bachelor.managerInGameIndustry.description,
                diploma: tPrograms.textsFromCards.diplomaBachelor,
                link: 'management-bachelor'
            },
            {
                title: tPrograms.bachelor.gameDesign.title,
                terms: [
                    tPrograms.textsFromCards.terms.term400,
                ],
                formats: [
                    tPrograms.textsFromCards.formats.faceToFace,
                ],
                description: tPrograms.bachelor.gameDesign.description,
                diploma: tPrograms.textsFromCards.diplomaBachelor,
                link: 'game-design-bachelor',
            },
        ],
        3: [
            {
                title: tPrograms.master.managerInCyberSport.title,
                terms: [
                    tPrograms.textsFromCards.terms.term200,
                ],
                formats: [
                    tPrograms.textsFromCards.formats.faceToFace,
                ],
                description: tPrograms.master.managerInCyberSport.description,
                diploma: tPrograms.textsFromCards.diplomaMaster,
                link: 'management-master'
            },
        ],
        4: [
            {
                title: tPrograms.courses.managerCyberSportOrganization.title,
                terms: [
                    tPrograms.textsFromCards.terms.term001,
                ],
                formats: [
                    tPrograms.textsFromCards.formats.distance,
                ],
                description: tPrograms.courses.managerCyberSportOrganization.description,
                diploma: tPrograms.textsFromCards.diplomaCourses,
            },
            {
                title: tPrograms.courses.adminOfCyberTour.title,
                terms: [
                    tPrograms.textsFromCards.terms.term001,
                ],
                formats: [
                    tPrograms.textsFromCards.formats.distance,
                ],
                description: tPrograms.courses.adminOfCyberTour.description,
                diploma: tPrograms.textsFromCards.diplomaCourses,
            },
            {
                title: tPrograms.courses.liveBroadcastHost.title,
                terms: [
                    tPrograms.textsFromCards.terms.term001,
                ],
                formats: [
                    tPrograms.textsFromCards.formats.faceToFace,
                    tPrograms.textsFromCards.formats.distance,
                ],
                description: tPrograms.courses.liveBroadcastHost.description,
                diploma: tPrograms.textsFromCards.diplomaCourses,
            },
            {
                title: tPrograms.courses.eventManager.title,
                terms: [
                    tPrograms.textsFromCards.terms.term001,
                ],
                formats: [
                    tPrograms.textsFromCards.formats.faceToFace,
                    tPrograms.textsFromCards.formats.distance,
                ],
                description: tPrograms.courses.eventManager.description,
                diploma: tPrograms.textsFromCards.diplomaCourses,
            },
            {
                title: tPrograms.courses.multimediaDesign.title,
                terms: [
                    tPrograms.textsFromCards.terms.term001,
                ],
                formats: [
                    tPrograms.textsFromCards.formats.faceToFace,
                    tPrograms.textsFromCards.formats.distance,
                ],
                description: tPrograms.courses.multimediaDesign.description,
                diploma: tPrograms.textsFromCards.diplomaCourses,
            },
            {
                title: tPrograms.courses.streamTechnologies.title,
                terms: [
                    tPrograms.textsFromCards.terms.term001,
                ],
                formats: [
                    tPrograms.textsFromCards.formats.faceToFace,
                    tPrograms.textsFromCards.formats.distance,
                ],
                description: tPrograms.courses.streamTechnologies.description,
                diploma: tPrograms.textsFromCards.diplomaCourses,
            },
            {
                title: tPrograms.courses.streamTechnologies.title,
                terms: [
                    tPrograms.textsFromCards.terms.term001,
                ],
                formats: [
                    tPrograms.textsFromCards.formats.faceToFace,
                    tPrograms.textsFromCards.formats.distance,
                ],
                description: tPrograms.courses.streamTechnologies.description,
                diploma: tPrograms.textsFromCards.diplomaCourses,
            },
            {
                title: tPrograms.courses.streamer.title,
                terms: [
                    tPrograms.textsFromCards.terms.term002,
                ],
                formats: [
                    tPrograms.textsFromCards.formats.faceToFace,
                    tPrograms.textsFromCards.formats.distance,
                ],
                description: tPrograms.courses.streamer.description,
                diploma: tPrograms.textsFromCards.diplomaCourses,
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
            link: '#',
            description: tMain.OurStudentsSpeak.video1
        },
        {
            videoIcon: new URL('@/assets/images/main/students_speak_and_show_2.avif', import.meta.url).href,
            link: '#',
            description: tMain.OurStudentsSpeak.video2
        },
        {
            videoIcon: new URL('@/assets/images/main/students_speak_and_show_1.avif', import.meta.url).href,
            link: '#',
            description: tMain.OurStudentsSpeak.video3
        },
        {
            videoIcon: new URL('@/assets/images/main/students_speak_and_show_2.avif', import.meta.url).href,
            link: '#',
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
        toggleStatusFrequentlyAskedQuestions
    };
})