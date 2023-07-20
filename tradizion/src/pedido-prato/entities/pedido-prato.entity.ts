import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'pedidoPrato'})
export class PedidoPrato {
    @PrimaryGeneratedColumn()
    id_pedido:number
    @Column()
    data:number /*Colocar como campo datetime */
    @Column()
    status:string

}
