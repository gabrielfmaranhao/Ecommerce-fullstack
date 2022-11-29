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
const data_source_1 = __importDefault(require("../../../data-source"));
const app_1 = __importDefault(require("../../../app"));
const supertest_1 = __importDefault(require("supertest"));
const mock_1 = require("../../mock");
describe("Testes para a rota de usuário", () => {
    let connection;
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield data_source_1.default.initialize().then((dataSource) => __awaiter(void 0, void 0, void 0, function* () {
            connection = dataSource;
        })).catch((error) => console.error(error));
    }));
    afterAll(() => __awaiter(void 0, void 0, void 0, function* () { return yield connection.destroy(); }));
    test("POST /users - É possível criar um usuário ", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app_1.default).post("/users").send(mock_1.userMockAdm);
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty("id");
        expect(response.body).toHaveProperty("name");
        expect(response.body).toHaveProperty("email");
        expect(response.body).toHaveProperty("isAdm");
        expect(response.body).toHaveProperty("image_url");
        expect(response.body).toHaveProperty("isActive");
        expect(response.body).toHaveProperty("createdAt");
        expect(response.body).toHaveProperty("updatedAt");
    }));
    test("POST /users - Não é possível criar um usuário com o mesmo email", () => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield (0, supertest_1.default)(app_1.default).post("/users").send(mock_1.userMockAdm);
        const response = yield (0, supertest_1.default)(app_1.default).post("/users").send(mock_1.userMockAdm);
        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty("status");
        expect(response.body).toHaveProperty("message");
    }));
});
