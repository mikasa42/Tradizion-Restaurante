import { Controller } from '@nestjs/common';
import { HistoricoCompraService } from './historico-compra.service';

@Controller('historico-compra')
export class HistoricoCompraController {
  constructor(private readonly historicoCompraService: HistoricoCompraService) {}
}
