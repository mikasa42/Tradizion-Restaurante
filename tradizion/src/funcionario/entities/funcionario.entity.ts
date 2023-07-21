import { Ingrediente } from "src/ingredientes/entities/ingrediente.entity";
import { PedidoPrato } from "src/pedido-prato/entities/pedido-prato.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'funcionario'})
export class Funcionario {
    @PrimaryColumn()
    id_funcionario:number
    @OneToOne(() => User, {cascade: true })
    @JoinColumn({ name: 'id_funcionario' })
    user: User;

    @Column()
    cargo:string
    @Column()
    nome_funcionario:string

    @OneToMany(() => PedidoPrato,(pedidos)=> pedidos.funcionario)
    pedidos: PedidoPrato[]

    @OneToMany(() => Ingrediente,(ingrediente)=> ingrediente.funcionario)
    ingrediente: Ingrediente[]

}
