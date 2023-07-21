import { Cliente } from "src/garcom/entities/cliente.entity"
import { Funcionario } from "src/Gerente/entities/funcionario.entity"
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity({name:'user'})
export class User {
    @PrimaryGeneratedColumn()
    id_user:number
    @Column()
    username:string
    @Column()
    password:string
    @Column()
    createdAt:Date

    

}
