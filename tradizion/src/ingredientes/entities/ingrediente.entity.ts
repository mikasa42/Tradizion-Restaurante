import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}
