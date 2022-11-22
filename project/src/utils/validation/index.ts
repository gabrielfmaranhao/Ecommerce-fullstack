import * as yup from "yup";

export const validationRegisterUser = yup.object().shape({
    name:yup.string().required("Campo name obrigatório"),
    email:yup.string().email().required("Campo email obrigatório"),
    password: yup.string().matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
    .matches(/([a-z])/, "Deve conter ao menos 1 letra minúscula")
    .matches(/(\d)/, "Deve conter ao menos 1 número")
    .matches(/(\W)|_/, "Deve conter ao menos 1 caracter especial")
    .matches(/.{8,}/, "Deve conter ao menos 8 dígitos"),
    isAdm: yup.boolean().notRequired()
})

export const validationLoginUser = yup.object().shape({
    email: yup.string().email().required("Campo email obrigatório"),
    password: yup.string().required("")
})