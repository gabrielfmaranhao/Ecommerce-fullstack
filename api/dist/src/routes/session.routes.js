"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionRoutes = void 0;
const express_1 = require("express");
const controllers_1 = require("../controllers");
const middlewares_1 = require("../middlewares");
const serializers_1 = require("../serializers");
exports.sessionRoutes = (0, express_1.Router)();
exports.sessionRoutes.post("", (0, middlewares_1.serializerMiddleware)(serializers_1.sessionLoginSerializer), controllers_1.sessionLoginController);
