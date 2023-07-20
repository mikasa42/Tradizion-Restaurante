import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

}
