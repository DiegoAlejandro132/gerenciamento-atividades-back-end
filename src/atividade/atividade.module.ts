import { Module } from '@nestjs/common';
import { AtividadeService } from './atividade.service';
import { AtividadeController } from './atividade.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Atividade } from './entities/atividade.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Atividade])],
  controllers: [AtividadeController],
  providers: [AtividadeService]
})
export class AtividadeModule {}
