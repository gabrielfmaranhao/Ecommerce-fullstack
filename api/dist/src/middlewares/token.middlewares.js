"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyAuthTokenMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
const verifyAuthTokenMiddleware = (req, res, next) => {
    let token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ status: 401, message: "Precisa de token" });
    }
    token = token.split(" ")[1];
    jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY, (error, decode) => {
        if (error) {
            return res.status(401).json({
                message: "Invalid token",
            });
        }
        req.user = { adm: decode.isAdm, id: decode.sub };
    });
    return next();
};
exports.verifyAuthTokenMiddleware = verifyAuthTokenMiddleware;
