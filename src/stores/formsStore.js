import { defineStore } from "pinia";
import { reactive, nextTick } from "vue";
import { useVuelidate } from '@vuelidate/core'
import { validators } from '@/validation/validationRules.js'

export const useFormsStore = defineStore("forms", () => {

    const resetOrder = {
        nameTel: ['telephone', '__nextTick__', 'name'],
        nameTelAgree: ['telephone', '__nextTick__', 'name', 'agreement'],
        programNameTelAgree: ['telephone', '__nextTick__', 'program', 'name', 'agreement'],
        email: ['email']
    }

    const forms = reactive({
        formStartYourFutureInCyber: {
            data: {
                name: '',
                telephone: '',
                agreement: true,
            },
            rules: {
                name: {...validators.name},
                telephone: {...validators.telephone},
                agreement: {...validators.agreement},
            },
            resetOrder: resetOrder.nameTelAgree,
            failedSubmit: false
        },
        formLeaveRequestForAcceptanceDocuments: {
            data: {
                program: '',
                name: '',
                telephone: '',
                agreement: true,
            },
            rules: {
                program: {...validators.program},
                name: {...validators.name},
                telephone: {...validators.telephone},
                agreement: {...validators.agreement},
            },
            resetOrder: resetOrder.programNameTelAgree,
            failedSubmit: false
        },
        takeMasterClasses: {
            data: {
                name: '',
                telephone: '',
            },
            rules: {
                name: {...validators.name},
                telephone: {...validators.telephone},
            },
            resetOrder: resetOrder.nameTel,
            failedSubmit: false
        },
        formLeaveRequestAndAct: {
            data: {
                name: '',
                telephone: '',
                agreement: true,
            },
            rules: {
                name: {...validators.name},
                telephone: {...validators.telephone},
                agreement: {...validators.agreement},
            },
            resetOrder: resetOrder.nameTelAgree,
            failedSubmit: false
        },
        formReserveStudyPlace: {
            data: {
                name: '',
                telephone: '',
                agreement: true,
            },
            rules: {
                name: {...validators.name},
                telephone: {...validators.telephone},
                agreement: {...validators.agreement},
            },
            resetOrder: resetOrder.nameTelAgree,
            failedSubmit: false
        },
        formProgramsStartYourCareer: {
            data: {
                name: '',
                telephone: '',
                agreement: true,
            },
            rules: {
                name: {...validators.name},
                telephone: {...validators.telephone},
                agreement: {...validators.agreement},
            },
            resetOrder: resetOrder.nameTelAgree,
            failedSubmit: false
        },
        formProgramsLeaveRequest: {
            data: {
                name: '',
                telephone: '',
                agreement: true,
            },
            rules: {
                name: {...validators.name},
                telephone: {...validators.telephone},
                agreement: {...validators.agreement},
            },
            resetOrder: resetOrder.nameTelAgree,
            failedSubmit: false
        },
        formProgramsLeaveRequestForDocuments: {
            data: {
                name: '',
                telephone: '',
                agreement: true,
            },
            rules: {
                name: {...validators.name},
                telephone: {...validators.telephone},
                agreement: {...validators.agreement},
            },
            resetOrder: resetOrder.nameTelAgree,
            failedSubmit: false
        },
        modalForm: {
            data: {
                name: '',
                telephone: '',
                agreement: true,
            },
            rules: {
                name: {...validators.name},
                telephone: {...validators.telephone},
                agreement: {...validators.agreement},
            },
            resetOrder: resetOrder.nameTelAgree,
            failedSubmit: false
        },
        footerForm: {
            data: {
                email: ''
            },
            rules: {
                email: {...validators.email},
            },
            resetOrder: resetOrder.email,
            failedSubmit: false
        }
    })

    const getVuelidate = (formName) => {
        return useVuelidate(
            forms[formName].rules,
            forms[formName].data
        )
    }

    const handleSubmit = async (formName, v$) => {
        v$.value.$touch()
        if (v$.value.$invalid) {
            forms[formName].failedSubmit = true
            return
        }
        const formData = {...forms[formName].data}

        const form = forms[formName].data
        const resetOrder = forms[formName].resetOrder
        for (const elem of resetOrder) {
            if (elem === '__nextTick__') {
                await nextTick()
            } else {
                form[elem] = typeof form[elem] === 'boolean' ? true : ''
            }
        }
        v$.value.$reset()
        forms[formName].failedSubmit = false
        alert(`Форма отправлена: ${JSON.stringify(formData)}`)
    }

    return { forms, getVuelidate, handleSubmit }
})