import {defineStore} from "pinia";
import {ref, watch} from "vue";

export const useModalsStore = defineStore("modalsStore", () => {

    const mobileMenu = ref(false)

    const closeMobileMenu = () => mobileMenu.value = false

    const openMobileMenu = () => mobileMenu.value = true

    const modalWindow = ref(false)

    const openModalWindow = () => modalWindow.value = true

    const closeModalWindow = () => modalWindow.value = false

    const pageDarkOverlay = ref(false)

    watch([mobileMenu, modalWindow], (newValue) => {
        if (newValue.includes(true)) {
            pageDarkOverlay.value = true
        } else {
            pageDarkOverlay.value = false
        }
    })

    const openRequest = () => {
        closeMobileMenu()
        openModalWindow()
    }

    return {
        mobileMenu,
        closeMobileMenu,
        openMobileMenu,
        modalWindow,
        openModalWindow,
        closeModalWindow,
        pageDarkOverlay,
        openRequest,
    }
})