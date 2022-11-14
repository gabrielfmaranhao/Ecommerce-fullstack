import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm";
import Categorie from "./categories.entitie";

@Entity("products")
class Products {
    @PrimaryGeneratedColumn("uuid")
    id: string
    @Column({type:"varchar", nullable: false, length:150})
    name: string
    @Column({type:"varchar", nullable: false, length:150, unique: true})
    model: string
    @Column({type:"varchar", nullable: false, length:13, unique: true})
    bar_code: string
    @Column({type:"varchar", nullable: true, length:500})
    description: string
    @Column({type: "decimal", scale: 2, nullable: false})
    price: number
    @Column({type: "int", nullable: false})
    iventory: number
    @Column({type:"boolean", default: true})
    isActive: boolean
    @Column({type:"boolean", default: false})
    isPromotion: boolean
    @Column({type:"varchar", length: 200, default:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.celladorales.com%2Fproduct%2Fshipping-box%2F&psig=AOvVaw3UHB0kQmL1i1RUpuODb4p5&ust=1668499707450000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOiRyPWbrfsCFQAAAAAdAAAAABAE"})
    image_url: string
    @CreateDateColumn({type: "date"})
    createdAt: Date
    @UpdateDateColumn({type: "date"})
    updatedAt: Date
    @ManyToOne(()=> Categorie, categorie => categorie.Products, {eager: true, onDelete:"CASCADE"})
    categorie: Categorie
}
export default Products