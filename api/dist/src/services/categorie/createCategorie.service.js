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
exports.createCategorieService = void 0;
const categories_entitie_1 = __importDefault(require("../../entities/categories.entitie"));
const data_source_1 = __importDefault(require("../../data-source"));
const errors_1 = require("../../errors");
const createCategorieService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const categorieRepository = data_source_1.default.getRepository(categories_entitie_1.default);
    const findCategorie = yield categorieRepository.findOneBy({ name: data.name });
    if (findCategorie) {
        throw new errors_1.AppError("Categorie já existe", 401);
    }
    const categorie = categorieRepository.create({ name: data.name });
    yield categorieRepository.save(categorie);
    return categorie;
});
exports.createCategorieService = createCategorieService;
