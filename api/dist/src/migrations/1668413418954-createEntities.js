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
exports.createEntities1668413418954 = void 0;
class createEntities1668413418954 {
    constructor() {
        this.name = 'createEntities1668413418954';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE "products" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(150) NOT NULL, "model" character varying(150) NOT NULL, "bar_code" character varying(13) NOT NULL, "description" character varying(500), "price" numeric NOT NULL, "iventory" integer NOT NULL, "isActive" boolean NOT NULL DEFAULT true, "isPromotion" boolean NOT NULL DEFAULT false, "image_url" character varying(200) NOT NULL DEFAULT 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.celladorales.com%2Fproduct%2Fshipping-box%2F&psig=AOvVaw3UHB0kQmL1i1RUpuODb4p5&ust=1668499707450000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOiRyPWbrfsCFQAAAAAdAAAAABAE', "createdAt" date NOT NULL DEFAULT now(), "updatedAt" date NOT NULL DEFAULT now(), "categorieId" uuid, CONSTRAINT "UQ_fe52498d76ba7545ad5b2553c02" UNIQUE ("model"), CONSTRAINT "UQ_85bc6c26c940e2b0201b4442034" UNIQUE ("bar_code"), CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "categories" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(150) NOT NULL, "isActive" boolean NOT NULL DEFAULT true, "createdAt" date NOT NULL DEFAULT now(), "updatedAt" date NOT NULL DEFAULT now(), CONSTRAINT "UQ_8b0be371d28245da6e4f4b61878" UNIQUE ("name"), CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_fdd3002b65ba9c7dd1751ecfdd7" FOREIGN KEY ("categorieId") REFERENCES "categories"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_fdd3002b65ba9c7dd1751ecfdd7"`);
            yield queryRunner.query(`DROP TABLE "categories"`);
            yield queryRunner.query(`DROP TABLE "products"`);
        });
    }
}
exports.createEntities1668413418954 = createEntities1668413418954;
