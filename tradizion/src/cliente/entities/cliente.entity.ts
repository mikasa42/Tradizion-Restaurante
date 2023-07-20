import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'cliente'})
export class Cliente {
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    nome_cliente:string

}
