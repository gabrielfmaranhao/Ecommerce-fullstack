"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateIventoryProductSerializer = exports.updateProductSerializer = exports.createProductSerializer = void 0;
const yup = __importStar(require("yup"));
exports.createProductSerializer = yup.object().shape({
    name: yup.string().required(" name é um campo obrigatório"),
    model: yup.string().required(" model é um campo obrigatório"),
    bar_code: yup.string().length(13).required("bar_code é um Campo obrigatório"),
    description: yup.string().notRequired(),
    price: yup.number().required(" price é um campo obrigatório"),
    isPromotion: yup.boolean().notRequired().default(false),
    image_url: yup.string().url().notRequired(),
    iventory: yup.number().required("iventory é um campo obrigatótio").integer("Numero tem que ser inteiro"),
    categorie_name: yup.string().required("categorie_name é um campo obrigatório"),
});
exports.updateProductSerializer = yup.object().shape({
    name: yup.string().notRequired(),
    model: yup.string().notRequired(),
    bar_code: yup.string().length(13).notRequired(),
    description: yup.string().notRequired(),
    price: yup.number().notRequired().transform((value) => value + 0.00),
    isPromotion: yup.boolean().notRequired().default(false),
    image_url: yup.string().url().notRequired(),
    categorie_name: yup.string().notRequired()
});
exports.updateIventoryProductSerializer = yup.object().shape({
    iventory: yup.number().required("Campo obrigatório").integer("Numero tem que ser inteiro")
});
