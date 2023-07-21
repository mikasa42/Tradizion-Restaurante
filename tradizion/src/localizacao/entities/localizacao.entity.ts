import { Fornecedor } from "src/fornecedor/entities/fornecedor.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'Localizacao'})
export class Localizacao {
    @PrimaryGeneratedColumn()
    id_localizacao:number
    @Column()
    cep:number
    @Column()
    logadouro:string
    @Column()
    numero:number
    @Column()
    bairro:string
    @Column()
    status:string

    @OneToOne(() => Fornecedor, (fornecedor)=> fornecedor.localizacao)
    @JoinColumn()
    fornecedor:Fornecedor

}
