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
exports.profileUserController = exports.deleteUserController = exports.updateUserController = exports.listIdUserController = exports.listUserController = exports.createUserController = void 0;
const errors_1 = require("../../errors");
const services_1 = require("../../services");
const createUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const date = req.body;
        const user = yield (0, services_1.createUserService)(date);
        return res.status(200).json(user);
    }
    catch (error) {
        if (error instanceof errors_1.AppError) {
            return res.status(error.statusCode).json({ status: error.statusCode, message: error.message });
        }
    }
});
exports.createUserController = createUserController;
const listUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const list = yield (0, services_1.listUserService)();
    return res.status(200).json(list);
});
exports.listUserController = listUserController;
const listIdUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const user = yield (0, services_1.listUserIdService)(id);
        return res.status(200).json(user);
    }
    catch (error) {
        if (error instanceof errors_1.AppError) {
            return res.status(error.statusCode).json({ status: error.statusCode, message: error.message });
        }
    }
});
exports.listIdUserController = listIdUserController;
const updateUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const id = req.params.id;
        const user = yield (0, services_1.updateUserService)(data, id);
        return res.status(201).json(user);
    }
    catch (error) {
        if (error instanceof errors_1.AppError) {
            return res.status(error.statusCode).json({ status: error.statusCode, message: error.message });
        }
    }
});
exports.updateUserController = updateUserController;
const deleteUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        yield (0, services_1.deleteUserService)(id);
        return res.status(200).json({});
    }
    catch (error) {
        if (error instanceof errors_1.AppError) {
            return res.status(error.statusCode).json({ status: error.statusCode, message: error.message });
        }
    }
});
exports.deleteUserController = deleteUserController;
const profileUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.user.id;
    const user = yield (0, services_1.profileUserService)(id);
    return res.status(200).json(user);
});
exports.profileUserController = profileUserController;
