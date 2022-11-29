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
exports.listProductIdService = void 0;
const data_source_1 = __importDefault(require("../../data-source"));
const products_entitie_1 = __importDefault(require("../../entities/products.entitie"));
const errors_1 = require("../../errors");
const listProductIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const productRepository = data_source_1.default.getRepository(products_entitie_1.default);
    const findProduct = yield productRepository.findOneBy({ id });
    if (!findProduct) {
        throw new errors_1.AppError("Product is not exist");
    }
    return findProduct;
});
exports.listProductIdService = listProductIdService;
