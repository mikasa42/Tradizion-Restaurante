import { IsNotEmpty, Min } from "class-validator"

export class CreateUserDto {
    @Min(4)
    username:string
    @IsNotEmpty()
    password:string
}
