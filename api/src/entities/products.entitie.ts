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
    @Column({type:"varchar", default:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80"})
    image_url: string
    @CreateDateColumn({type: "date"})
    createdAt: Date
    @UpdateDateColumn({type: "date"})
    updatedAt: Date
    @ManyToOne(()=> Categorie, categorie => categorie.Products, {eager: true, onDelete:"CASCADE"})
    categorie: Categorie
}
export default Products