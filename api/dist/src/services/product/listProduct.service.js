"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listProductService = void 0;
const data_source_1 = __importDefault(require("../../data-source"));
const products_entitie_1 = __importDefault(require("../../entities/products.entitie"));
const listProductService = () => {
    const productRepository = data_source_1.default.getRepository(products_entitie_1.default);
    return productRepository.find();
};
exports.listProductService = listProductService;
