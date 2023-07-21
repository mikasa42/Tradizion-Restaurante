import { Ingrediente } from "src/ingredientes/entities/ingrediente.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'Fornecedor'})
export class Fornecedor {
    @PrimaryGeneratedColumn()
    id_fornecedor:number
    @Column()
    nome_fornecedor:string
    @Column()
    descricoes_fornecedor:string
    @ManyToMany(() => Ingrediente, (ingrediente)=>ingrediente.fornecedor)
    @JoinTable()
    ingrediente:Ingrediente
}
