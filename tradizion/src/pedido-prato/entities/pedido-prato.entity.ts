import { Cliente } from "src/cliente/entities/cliente.entity";
import { Funcionario } from "src/funcionario/entities/funcionario.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'pedidoPrato'})
export class PedidoPrato {
    @PrimaryGeneratedColumn()
    id_pedido:number
    @Column()
    data:number /*Colocar como campo datetime */
    @Column()
    status:string

    @ManyToOne(() => Cliente, (clientes) => clientes.pedidos)
    cliente:Cliente;

    @ManyToOne(() => Funcionario, (funcionario) => funcionario.pedidos)
    funcionario:Funcionario;
    

}
