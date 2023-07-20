import { PedidoPrato } from "src/pedido-prato/entities/pedido-prato.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'cliente'})
export class Cliente {
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    nome_cliente:string

    @OneToMany(() => PedidoPrato,(pedidos)=> pedidos.cliente)
    pedidos: PedidoPrato[]

}
