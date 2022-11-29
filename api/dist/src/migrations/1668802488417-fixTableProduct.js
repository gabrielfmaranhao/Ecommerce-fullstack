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
exports.fixTableProduct1668802488417 = void 0;
class fixTableProduct1668802488417 {
    constructor() {
        this.name = 'fixTableProduct1668802488417';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "price" TYPE numeric`);
            yield queryRunner.query(`ALTER TABLE "products" DROP COLUMN "image_url"`);
            yield queryRunner.query(`ALTER TABLE "products" ADD "image_url" character varying(500) NOT NULL DEFAULT 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.celladorales.com%2Fproduct%2Fshipping-box%2F&psig=AOvVaw3UHB0kQmL1i1RUpuODb4p5&ust=1668499707450000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOiRyPWbrfsCFQAAAAAdAAAAABAE'`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "products" DROP COLUMN "image_url"`);
            yield queryRunner.query(`ALTER TABLE "products" ADD "image_url" character varying(200) NOT NULL DEFAULT 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.celladorales.com%2Fproduct%2Fshipping-box%2F&psig=AOvVaw3UHB0kQmL1i1RUpuODb4p5&ust=1668499707450000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOiRyPWbrfsCFQAAAAAdAAAAABAE'`);
            yield queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "price" TYPE numeric`);
        });
    }
}
exports.fixTableProduct1668802488417 = fixTableProduct1668802488417;
