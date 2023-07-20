import { PartialType } from '@nestjs/mapped-types';
import { CreatePedidoPratoDto } from './create-pedido-prato.dto';

export class UpdatePedidoPratoDto extends PartialType(CreatePedidoPratoDto) {}
