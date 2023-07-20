import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({name:'user'})
export class User {
    @PrimaryGeneratedColumn()
    id_user:number
    @Column()
    username:string
    @Column()
    password:string
    @Column()
    createdAt:Date

}
