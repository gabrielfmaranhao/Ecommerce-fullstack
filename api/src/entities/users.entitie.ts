import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity("user")
class User {
    @PrimaryGeneratedColumn("uuid")
    id: string
    @Column({type:"varchar", length:150, nullable: false})
    name: string
    @Column({type:"varchar", length:150, nullable: false, unique: true})
    email: string
    @Column({type:"varchar", length:150, nullable: false})
    password: string
    @Column({type: "boolean", default: true})
    isActive: boolean
    @Column({type: "boolean", default: false})
    isAdm: boolean
    @Column({type:"varchar", length: 200, default:"https://thumbs.dreamstime.com/z/vetor-de-%C3%ADcone-perfil-do-avatar-padr%C3%A3o-foto-usu%C3%A1rio-m%C3%ADdia-social-183042379.jpg"})
    image_url: string
    @CreateDateColumn({type: "date"})
    createdAt: Date
    @UpdateDateColumn({type: "date"})
    updatedAt: Date
}

export default User