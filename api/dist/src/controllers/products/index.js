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
exports.listProducIdProductsController = exports.updateInventoryProductsController = exports.deleteProductsController = exports.updateProductsController = exports.listProductsController = exports.createProductsController = void 0;
const errors_1 = require("../../errors");
const services_1 = require("../../services");
const createProductsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const product = yield (0, services_1.createProductService)(data);
        return res.status(201).json(product);
    }
    catch (error) {
        if (error instanceof errors_1.AppError) {
            res.status(error.statusCode).json({ status: error.statusCode, message: error.message });
        }
    }
});
exports.createProductsController = createProductsController;
const listProductsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const list = yield (0, services_1.listProductService)();
    return res.status(200).json(list);
});
exports.listProductsController = listProductsController;
const updateProductsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const id = req.params.id;
        const product = yield (0, services_1.updateProductService)(data, id);
        return res.status(200).json(product);
    }
    catch (error) {
        if (error instanceof errors_1.AppError) {
            res.status(error.statusCode).json({ status: error.statusCode, message: error.message });
        }
    }
});
exports.updateProductsController = updateProductsController;
const deleteProductsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        yield (0, services_1.deleteProductService)(id);
        return res.status(200).json({});
    }
    catch (error) {
        if (error instanceof errors_1.AppError) {
            res.status(error.statusCode).json({ status: error.statusCode, message: error.message });
        }
    }
});
exports.deleteProductsController = deleteProductsController;
const updateInventoryProductsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const iventory = req.body;
        const bar_code = req.params.id;
        const iventoryProduct = yield (0, services_1.updateIventoryProductService)(iventory, bar_code);
        return res.status(201).json(iventoryProduct);
    }
    catch (error) {
        if (error instanceof errors_1.AppError) {
            res.status(error.statusCode).json({ status: error.statusCode, message: error.message });
        }
    }
});
exports.updateInventoryProductsController = updateInventoryProductsController;
const listProducIdProductsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const product = yield (0, services_1.listProductIdService)(id);
        return res.status(200).json(product);
    }
    catch (error) {
        if (error instanceof errors_1.AppError) {
            res.status(error.statusCode).json({ status: error.statusCode, message: error.message });
        }
    }
});
exports.listProducIdProductsController = listProducIdProductsController;
// export const createProductsController = async (req: Request, res: Response) => {
//     try {
//     } catch (error) {
//         if(error instanceof AppError) {
//             res.status(error.statusCode).json({status: error.statusCode, message: error.message})
//         }
//     }
// }
// export const createProductsController = async (req: Request, res: Response) => {
//     try {
//     } catch (error) {
//         if(error instanceof AppError) {
//             res.status(error.statusCode).json({status: error.statusCode, message: error.message})
//         }
//     }
// }
