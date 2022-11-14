import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import Products from "./products.entitie";
@Entity("categories")
class Categorie {
    @PrimaryGeneratedColumn("uuid")
    id: string
    @Column({type: "varchar", length:150, unique: true, nullable: false })
    name: string
    @Column({type: "boolean", default: true})
    isActive: boolean
    @CreateDateColumn({type: "date"})
    createdAt: Date
    @UpdateDateColumn({type: "date"})
    updatedAt: Date
    @OneToMany(() => Products, product => product.categorie)
    Products: Products[]
}

export default Categorie