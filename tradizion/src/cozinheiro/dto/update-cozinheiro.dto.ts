import { PartialType } from '@nestjs/mapped-types';
import { CreateCozinheiroDto } from './create-cozinheiro.dto';

export class UpdateCozinheiroDto extends PartialType(CreateCozinheiroDto) {}
