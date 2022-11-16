import * as yup from "yup";
import bcrypt from "bcrypt";

export const createUserSerializer = yup.object().shape({
    name: yup.string().required("Nome é um campo obrigatório"),
    email: yup.string().email("Coloque um email válido").required("Email é um campo obrigatório"),
    password: yup.string()
    .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
    .matches(/([a-z])/, "Deve conter ao menos 1 letra minúscula")
    .matches(/(\d)/, "Deve conter ao menos 1 número")
    .matches(/(\W)|_/, "Deve conter ao menos 1 caracter especial")
    .matches(/.{8,}/, "Deve conter ao menos 8 dígitos")
    .required("Password é um campo obrigatório"),
    isAdm: yup.boolean().notRequired(),
    image_url: yup.string().default("https://thumbs.dreamstime.com/z/vetor-de-%C3%ADcone-perfil-do-avatar-padr%C3%A3o-foto-usu%C3%A1rio-m%C3%ADdia-social-183042379.jpg").notRequired(),
})

export const updateUserSerializer = yup.object().shape({
    name: yup.string().notRequired(),
    email: yup.string().email().notRequired(),
    password: yup.string().notRequired(),
    isAdm: yup.boolean().notRequired(),
    image_url: yup.string().notRequired(),
    isActive: yup.boolean().default(true).transform(()=>true).notRequired()
})