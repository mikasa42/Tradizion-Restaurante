import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'funcionario'})
export class Funcionario {
    @PrimaryGeneratedColumn()
    id_funcionario:number
    @Column()
    cargo:string
    @Column()
    nome_funcionario:string

}
