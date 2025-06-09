import { helpers, maxLength, minLength, email, required } from '@vuelidate/validators'

// Кастомные валидаторы
const onlyLettersAnsSpace = (value) => value === '' || /^[\p{L}\s]+$/u.test(value)
const numberIsComplete = (value) => {
    if (value === '') return true
    const digitsCount = value.match(/\d/g).length
    return digitsCount === 11
}
const checkboxChecked = (value) => value === true

export const validators = {
    program: {
        required: helpers.withMessage("Обязательное поле", required)
    },
    name: {
        required: helpers.withMessage("Обязательное поле", required),
        minLength: helpers.withMessage('Введите более 1 символа', minLength(2)),
        maxLength: helpers.withMessage('Введите меньше 18 символов', maxLength(17)),
        onlyLettersAnsSpace: helpers.withMessage('Допустимы только буквы и пробелы', onlyLettersAnsSpace)
    },
    telephone: {
        required: helpers.withMessage("Обязательное поле", required),
        numberIsComplete: helpers.withMessage('Номер не введён полностью', numberIsComplete),
    },
    agreement: {
        checked: helpers.withMessage('Это поле обязательно для выбора', checkboxChecked),
    },
    email: {
        email: helpers.withMessage('Введён некорректный email', email),
    }
}