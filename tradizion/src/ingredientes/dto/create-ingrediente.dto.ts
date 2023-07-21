import { Entity } from "typeorm";

@Entity({name:'Ingrediente'})
export class CreateIngredienteDto {

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
