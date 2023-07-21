import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { FuncionarioModule } from './Gerente/funcionario.module';
import { IngredientesModule } from './ingredientes/ingredientes.module';
import { ProdutoModule } from './produto/produto.module';
import { PedidoPratoModule } from './pedido-prato/pedido-prato.module';
import { ClienteModule } from './garcom/cliente.module';
import { LocalizacaoModule } from './localizacao/localizacao.module';
import { FornecedorModule } from './fornecedor/fornecedor.module';
import { CozinheiroModule } from './cozinheiro/cozinheiro.module';
import { AuthModule } from './auth/auth.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type:'sqlite',
    database:'db',
    entities:[],
    synchronize:true,
    autoLoadEntities:true
  }), UserModule, FuncionarioModule, IngredientesModule, ProdutoModule, PedidoPratoModule, ClienteModule, LocalizacaoModule, FornecedorModule, CozinheiroModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
