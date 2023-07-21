import { Column, Entity } from "typeorm";

@Entity({name:'pedidoPrato'})
export class CreatePedidoPratoDto {

    @PrimaryGeneratedColumn()
    id_pedido:number
    @Column()
    data:number /*Colocar como campo datetime */
    @Column()
    status:string
    @Column()
    mesa:number

  


    

}
