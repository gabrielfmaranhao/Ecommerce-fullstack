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
exports.fixTableProduct1668802781467 = void 0;
class fixTableProduct1668802781467 {
    constructor() {
        this.name = 'fixTableProduct1668802781467';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "price" TYPE numeric`);
            yield queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "image_url" SET DEFAULT 'data:image/png;base64,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'`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "image_url" SET DEFAULT 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.celladorales.com%2Fproduct%2Fshipping-box%2F&psig=AOvVaw3UHB0kQmL1i1RUpuODb4p5&ust=1668499707450000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOiRyPWbrfsCFQAAAAAdAAAAABAE'`);
            yield queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "price" TYPE numeric`);
        });
    }
}
exports.fixTableProduct1668802781467 = fixTableProduct1668802781467;
