import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'historicoCompra'})
export class HistoricoCompra {
    @PrimaryGeneratedColumn()
    id_historico:number
    @Column()
    data:number/*Datetime */

}
