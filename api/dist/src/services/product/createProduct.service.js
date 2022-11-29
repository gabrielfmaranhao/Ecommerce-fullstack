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
exports.createProductService = void 0;
const data_source_1 = __importDefault(require("../../data-source"));
const products_entitie_1 = __importDefault(require("../../entities/products.entitie"));
const categories_entitie_1 = __importDefault(require("../../entities/categories.entitie"));
const errors_1 = require("../../errors");
const createProductService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const categoryRepository = data_source_1.default.getRepository(categories_entitie_1.default);
    const productsRepository = data_source_1.default.getRepository(products_entitie_1.default);
    const findCategorie = yield categoryRepository.findOneBy({ name: data.categorie_name });
    if (!findCategorie) {
        throw new errors_1.AppError("Categorie não exite", 400);
    }
    if (findCategorie.isActive === false) {
        throw new errors_1.AppError("Categorie não exite", 400);
    }
    const verifyBarCode = yield productsRepository.findOneBy({ bar_code: data.bar_code });
    const verifyModel = yield productsRepository.findOneBy({ model: data.model });
    if (verifyBarCode) {
        throw new errors_1.AppError("Bar code já existe");
    }
    if (verifyModel) {
        throw new errors_1.AppError("model já existe");
    }
    const newProduct = productsRepository.create(Object.assign(Object.assign({}, data), { categorie: findCategorie }));
    yield productsRepository.save(newProduct);
    return newProduct;
});
exports.createProductService = createProductService;
