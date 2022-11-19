import { MigrationInterface, QueryRunner } from "typeorm";

export class fixTableProduct1668802488417 implements MigrationInterface {
    name = 'fixTableProduct1668802488417'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "price" TYPE numeric`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "image_url"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "image_url" character varying(500) NOT NULL DEFAULT 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.celladorales.com%2Fproduct%2Fshipping-box%2F&psig=AOvVaw3UHB0kQmL1i1RUpuODb4p5&ust=1668499707450000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOiRyPWbrfsCFQAAAAAdAAAAABAE'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "image_url"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "image_url" character varying(200) NOT NULL DEFAULT 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.celladorales.com%2Fproduct%2Fshipping-box%2F&psig=AOvVaw3UHB0kQmL1i1RUpuODb4p5&ust=1668499707450000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOiRyPWbrfsCFQAAAAAdAAAAABAE'`);
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "price" TYPE numeric`);
    }

}
