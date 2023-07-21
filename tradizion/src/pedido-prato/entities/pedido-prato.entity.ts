import { Cliente } from "src/garcom/entities/cliente.entity";
import { Funcionario } from "src/Gerente/entities/funcionario.entity";
import { Produto } from "src/produto/entities/produto.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'pedidoPrato'})
export class PedidoPrato {
    @PrimaryGeneratedColumn()
    id_pedido:number
    @Column()
    data:number /*Colocar como campo datetime */
    @Column()
    status:string
    @Column()
    mesa:number

    @ManyToOne(() => Cliente, (clientes) => clientes.pedidos)
    cliente:Cliente;

    @ManyToOne(() => Funcionario, (funcionario) => funcionario.pedidos)
    funcionario:Funcionario;

    @ManyToOne(() => Produto, (produto) => produto.pedidos)
    @JoinColumn({name:'id_produto'})
    produto:Produto;
    

}
