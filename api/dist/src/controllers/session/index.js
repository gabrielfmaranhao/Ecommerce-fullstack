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
exports.sessionLoginController = void 0;
const errors_1 = require("../../errors");
const services_1 = require("../../services");
const sessionLoginController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const token = yield (0, services_1.sessionLoginService)(data);
        return res.status(201).json({ token: token });
    }
    catch (error) {
        if (error instanceof errors_1.AppError) {
            return res.status(error.statusCode).json({ status: error.statusCode, message: error.message });
        }
    }
});
exports.sessionLoginController = sessionLoginController;
