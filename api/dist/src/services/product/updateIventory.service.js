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
exports.updateProductService = void 0;
const data_source_1 = __importDefault(require("../../data-source"));
const products_entitie_1 = __importDefault(require("../../entities/products.entitie"));
const categories_entitie_1 = __importDefault(require("../../entities/categories.entitie"));
const errors_1 = require("../../errors");
const updateProductService = (data, id) => __awaiter(void 0, void 0, void 0, function* () {
    const categoryRepository = data_source_1.default.getRepository(categories_entitie_1.default);
    const productsRepository = data_source_1.default.getRepository(products_entitie_1.default);
    const findProduct = yield productsRepository.findOneBy({ id });
    if (!findProduct) {
        throw new errors_1.AppError("product is not exists");
    }
    const verifyCategory = yield categoryRepository.findOneBy({ name: data.categorie_name });
    const verifyBarCode = yield productsRepository.findOneBy({ bar_code: data.bar_code });
    const verifyModel = yield productsRepository.findOneBy({ model: data.model });
    if (!verifyCategory) {
        throw new errors_1.AppError("Categorie is not exists");
    }
    if (verifyBarCode && verifyBarCode.bar_code !== findProduct.bar_code) {
        throw new errors_1.AppError("Bar code is exist");
    }
    if (verifyModel && verifyModel.model !== findProduct.model) {
        throw new errors_1.AppError("Model is exist");
    }
    yield productsRepository.update(id, data);
    const product = yield productsRepository.findOneBy({ id });
    return product;
});
exports.updateProductService = updateProductService;
