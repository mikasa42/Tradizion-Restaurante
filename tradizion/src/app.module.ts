import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { FuncionarioModule } from './funcionario/funcionario.module';
import { IngredientesModule } from './ingredientes/ingredientes.module';
import { ProdutoModule } from './produto/produto.module';
import { PedidoPratoModule } from './pedido-prato/pedido-prato.module';
import { ClienteModule } from './cliente/cliente.module';
import { LocalizacaoModule } from './localizacao/localizacao.module';
import { FornecedorModule } from './fornecedor/fornecedor.module';
import { HistoricoCompraModule } from './historico-compra/historico-compra.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type:'sqlite',
    database:'db',
    entities:[],
    synchronize:true,
    autoLoadEntities:true
  }), UserModule, FuncionarioModule, IngredientesModule, ProdutoModule, PedidoPratoModule, ClienteModule, LocalizacaoModule, FornecedorModule, HistoricoCompraModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
