"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionLoginService = void 0;
const bcrypt_1 = require("bcrypt");
const data_source_1 = __importDefault(require("../../data-source"));
const users_entitie_1 = __importDefault(require("../../entities/users.entitie"));
const errors_1 = require("../../errors");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const sessionLoginService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = data_source_1.default.getRepository(users_entitie_1.default);
    const findUser = yield userRepository.findOneBy({ email: data.email });
    if (!findUser) {
        throw new errors_1.AppError("Password ou usuário inválido", 400);
    }
    const passwordMatch = yield (0, bcrypt_1.compare)(data.password, findUser.password);
    if (!passwordMatch) {
        throw new errors_1.AppError("Password ou usuário inválido", 400);
    }
    if (!findUser.isActive) {
        throw new errors_1.AppError("Password ou usuário inválido", 400);
    }
    const token = jsonwebtoken_1.default.sign({ isAdm: findUser.isAdm }, process.env.SECRET_KEY, { subject: findUser.id, expiresIn: "24h" });
    return token;
});
exports.sessionLoginService = sessionLoginService;
