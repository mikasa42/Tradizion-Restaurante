import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'Fornecedor'})
export class Fornecedor {
    @PrimaryGeneratedColumn()
    id_fornecedor:number
    @Column()
    nome_fornecedor:string
    @Column()
    descricoes_fornecedor:string
}
