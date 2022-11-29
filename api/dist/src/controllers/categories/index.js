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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCategorieController = exports.updateCategorieController = exports.listProductCategorieController = exports.listCategorieController = exports.createCategorieController = void 0;
const errors_1 = require("../../errors");
const services_1 = require("../../services");
const createCategorieController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const categorie = yield (0, services_1.createCategorieService)(data);
        return res.status(201).json(categorie);
    }
    catch (error) {
        if (error instanceof errors_1.AppError) {
            return res.status(error.statusCode).json({ status: error.statusCode, message: error.message });
        }
    }
});
exports.createCategorieController = createCategorieController;
const listCategorieController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const list = yield (0, services_1.listCategorieService)();
    return res.status(200).json(list);
});
exports.listCategorieController = listCategorieController;
const listProductCategorieController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const name = req.params.name;
        const listProducts = yield (0, services_1.listProductCategorieService)(name);
        return res.status(200).json(listProducts);
    }
    catch (error) {
        if (error instanceof errors_1.AppError) {
            return res.status(error.statusCode).json({ status: error.statusCode, message: error.message });
        }
    }
});
exports.listProductCategorieController = listProductCategorieController;
const updateCategorieController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const name = req.params.name;
        const categorieUpdate = yield (0, services_1.updateCategorieService)(data, name);
        return res.status(201).json(categorieUpdate);
    }
    catch (error) {
        if (error instanceof errors_1.AppError) {
            return res.status(error.statusCode).json({ status: error.statusCode, message: error.message });
        }
    }
});
exports.updateCategorieController = updateCategorieController;
const deleteCategorieController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const name = req.params.name;
        yield (0, services_1.deleteCategorieService)(name);
        return res.status(200).json({});
    }
    catch (error) {
        if (error instanceof errors_1.AppError) {
            return res.status(error.statusCode).json({ status: error.statusCode, message: error.message });
        }
    }
});
exports.deleteCategorieController = deleteCategorieController;
