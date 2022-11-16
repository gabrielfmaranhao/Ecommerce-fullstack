import * as yup from "yup";

export const createUserSerializer = yup.object().shape({
    name: yup.string().required("Nome é um campo obrigatório"),
    email: yup.string().email("Coloque um email válido").required("Email é um campo obrigatório"),
    password: yup.string().required("Password é um campo obrigatótio"),
    isAdm: yup.boolean().notRequired(),
    image_url: yup.string().default("https://thumbs.dreamstime.com/z/vetor-de-%C3%ADcone-perfil-do-avatar-padr%C3%A3o-foto-usu%C3%A1rio-m%C3%ADdia-social-183042379.jpg").notRequired(),
})

export const updateUserSerializer = yup.object().shape({
    name: yup.string().notRequired(),
    email: yup.string().email().notRequired(),
    password: yup.string().notRequired(),
    isAdm: yup.boolean().notRequired(),
    image_url: yup.string().notRequired()
})