import { PedidoPrato } from "src/pedido-prato/entities/pedido-prato.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'funcionario'})
export class Funcionario {
    @PrimaryGeneratedColumn()
    id_funcionario:number
    @Column()
    cargo:string
    @Column()
    nome_funcionario:string

    @OneToMany(() => PedidoPrato,(pedidos)=> pedidos.funcionario)
    pedidos: PedidoPrato[]

}
