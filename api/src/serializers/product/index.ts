import * as yup from "yup";

export const createProductSerializer = yup.object().shape({
    name: yup.string().required(" name é um campo obrigatório"),
    model: yup.string().required(" model é um campo obrigatório"),
    bar_code: yup.string().length(13).required("bar_code é um Campo obrigatório"),
    description: yup.string().notRequired(),
    price: yup.number().required(" price é um campo obrigatório"),
    isPromotion: yup.boolean().notRequired().default(false),
    image_url: yup.string().url().notRequired().transform((value, originalValue) => {
        if(originalValue === "") {
            value = "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80"
            return value
        }
    }) ,
    iventory: yup.number().required("iventory é um campo obrigatótio").integer("Numero tem que ser inteiro"),
    categorie_name: yup.string().required("categorie_name é um campo obrigatório"),
})

export const updateProductSerializer = yup.object().shape({ 
    name: yup.string().notRequired(),
    model: yup.string().notRequired(),
    bar_code: yup.string().length(13).notRequired(),
    description: yup.string().notRequired(),
    price: yup.number().notRequired().transform((value)=> value + 0.00),
    isPromotion: yup.boolean().notRequired().default(false),
    image_url: yup.string().url().notRequired() ,
    categorie_name: yup.string().notRequired()
})

export const updateIventoryProductSerializer = yup.object().shape({
    iventory: yup.number().required("Campo obrigatório").integer("Numero tem que ser inteiro")
})
