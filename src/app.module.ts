import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AtividadeModule } from './atividade/atividade.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Atividade } from './atividade/entities/atividade.entity'
import { Tarefa } from './tarefa/entities/tarefa.entity'
import { TarefaModule } from './tarefa/tarefa.module';
import { MovimentoFinanceiroModule } from './movimento-financeiro/movimento-financeiro.module';
import { MovimentoFinanceiroModule } from './movimento-financeiro/movimento-financeiro.module';

@Module({
  imports: [
    AtividadeModule,
    TarefaModule,
    TypeOrmModule.forRoot({
      type: 'mysql', 
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'gerenciamentoAtividades',
      entities: [Atividade, Tarefa],
      synchronize: false,
    }),
    MovimentoFinanceiroModule,  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
