import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'Cliente'})
export class CreateClienteDto {

    @PrimaryGeneratedColumn()
    id_cliente:number
    @Column()
    nome_cliente:string

  
}
