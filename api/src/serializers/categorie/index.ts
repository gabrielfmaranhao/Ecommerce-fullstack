import * as yup from "yup";


export const createCategorieSerializer = yup.object().shape({
    name: yup.string().required("Campo obrigatório")
})

export const updateCategorieSerializer = yup.object().shape({
    name: yup.string().notRequired(),
    isActive: yup.boolean().notRequired().transform((value) => true)
})