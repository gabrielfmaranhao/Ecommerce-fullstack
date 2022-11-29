"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyIsAdmMiddleware = void 0;
const verifyIsAdmMiddleware = (req, res, nex) => {
    if (!req.user.adm) {
        return res.status(403).json({ message: "user is not adm" });
    }
    return nex();
};
exports.verifyIsAdmMiddleware = verifyIsAdmMiddleware;
