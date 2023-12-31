import { PedidoPrato } from "src/pedido-prato/entities/pedido-prato.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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
    validade_produto:Date /*Datetime */
    @Column()
    descricoes_produto:string

    @OneToMany(() => PedidoPrato,(pedidos)=> pedidos.produto)
    pedidos: PedidoPrato[]

}
