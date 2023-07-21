import { Ingrediente } from "src/ingredientes/entities/ingrediente.entity";
import { Localizacao } from "src/localizacao/entities/localizacao.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

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

    @OneToOne(() => Localizacao, (localizacao) => localizacao.fornecedor)
    @JoinColumn({name:'id_localizacao'})
    localizacao:Localizacao
}
