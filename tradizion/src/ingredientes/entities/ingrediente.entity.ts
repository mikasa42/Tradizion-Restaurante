import { Fornecedor } from "src/fornecedor/entities/fornecedor.entity";
import { Funcionario } from "src/Gerente/entities/funcionario.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'Ingrediente'})
export class Ingrediente {
    @PrimaryGeneratedColumn()
    id_ingrediente:number
    @Column()
    nome_ingrediente:string
    @Column()
    categoria:string
    @Column()
    preco:number
    @Column()
    quantidade:number
    @Column()
    validade:number /* Mudar campo para datetime */
    @Column()
    descricoes_ingredientes:string

    @ManyToOne(() => Funcionario, (funcionario) => funcionario.ingrediente)
    funcionario:Funcionario;

    @ManyToMany(() => Fornecedor, (fornecedor)=>fornecedor.ingrediente)
    @JoinTable({name:'id_fornecedor'})
    fornecedor:Fornecedor
}
