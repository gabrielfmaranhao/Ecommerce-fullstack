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
exports.updateUserSerializer = exports.createUserSerializer = void 0;
const yup = __importStar(require("yup"));
exports.createUserSerializer = yup.object().shape({
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
});
exports.updateUserSerializer = yup.object().shape({
    name: yup.string().notRequired(),
    email: yup.string().email().notRequired(),
    password: yup.string().notRequired(),
    isAdm: yup.boolean().notRequired(),
    image_url: yup.string().notRequired(),
    isActive: yup.boolean().default(true).transform(() => true).notRequired()
});
