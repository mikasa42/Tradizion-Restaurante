import { PedidoPrato } from "src/pedido-prato/entities/pedido-prato.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'cliente'})
export class Cliente {
    @PrimaryColumn()
    id_cliente:number
    @OneToOne(() => User, {cascade: true })
    @JoinColumn({ name: 'id_cliente' })
    users: User;

    @Column()
    nome_cliente:string

    @OneToMany(() => PedidoPrato,(pedidos)=> pedidos.cliente)
    @JoinColumn({name:'id_pedido'})/* Inserindo o campo id_pedido nesta tabela  */
    pedidos: PedidoPrato[]

   

}
