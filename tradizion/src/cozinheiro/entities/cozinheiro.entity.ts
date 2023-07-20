import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'cozinheiro'})
export class Cozinheiro {
    @PrimaryGeneratedColumn()
    id_cozinheiro:number
    /*
    Status_pedido
    id_pedido
    */
}
