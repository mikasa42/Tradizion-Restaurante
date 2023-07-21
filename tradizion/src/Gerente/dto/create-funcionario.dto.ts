import { IsString } from "class-validator"

export class CreateFuncionarioDto {
    @IsString()
    cargo:string
    @IsString()
    nome_funcionario:string
}
