import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'Produto'})
export class Produto {
    @PrimaryGeneratedColumn()
    id_produto:number
    @Column()
    nome_produto:string
    @Column()
    categoria_produto:string
    @Column()
    preco:number
    @Column()
    quantidade_produto:number
    @Column()
    validade_produto:number /*Datetime */
    @Column()
    descricoes_produto:string

}
