import { defineStore } from "pinia";
import { reactive } from "vue";

export const useFormsStore = defineStore("forms", () => {
    const formStartYourFutureInCyber = reactive({
        name: '',
        telephone: '',
        agreement: true,
    })

    const formLeaveRequestForAcceptanceDocuments = reactive({
        program: '',
        name: '',
        telephone: '',
        agreement: true,
    })

    const takeMasterClasses = reactive({
        name: '',
        telephone: '',
    })

    const formLeaveRequestAndAct = reactive({
        name: '',
        telephone: '',
        agreement: true,
    })

    const formReserveStudyPlace = reactive({
        name: '',
        telephone: '',
        agreement: true,
    })

    return { formStartYourFutureInCyber, formLeaveRequestForAcceptanceDocuments, takeMasterClasses, formLeaveRequestAndAct, formReserveStudyPlace }
})