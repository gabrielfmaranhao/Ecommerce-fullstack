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
exports.createUserService = void 0;
const users_entitie_1 = __importDefault(require("../../entities/users.entitie"));
const data_source_1 = __importDefault(require("../../data-source"));
const errors_1 = require("../../errors");
const bcrypt_1 = __importDefault(require("bcrypt"));
const createUserService = (date) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = data_source_1.default.getRepository(users_entitie_1.default);
    const findUser = yield userRepository.findOneBy({ email: date.email });
    if (findUser) {
        throw new errors_1.AppError("User já existe", 401);
    }
    date.password = yield bcrypt_1.default.hash(date.password, 10);
    const user = userRepository.create(date);
    yield userRepository.save(user);
    return user;
});
exports.createUserService = createUserService;
