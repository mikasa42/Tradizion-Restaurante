import { Entity } from "typeorm";

@Entity ({name:'Produto'})
export class CreateProdutoDto {
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
    validade_produto:Date /*Datetime */
    @Column()
    descricoes_produto:string



}
