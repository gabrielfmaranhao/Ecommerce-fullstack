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
exports.profileUserService = void 0;
const data_source_1 = __importDefault(require("../../data-source"));
const users_entitie_1 = __importDefault(require("../../entities/users.entitie"));
const profileUserService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(id);
    const userRepository = data_source_1.default.getRepository(users_entitie_1.default);
    const user = yield userRepository.findOneBy({ id });
    return user;
});
exports.profileUserService = profileUserService;
