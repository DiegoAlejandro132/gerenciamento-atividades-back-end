import { Injectable } from '@nestjs/common';
import { CreateAtividadeDto } from './dto/create-atividade.dto';
import { UpdateAtividadeDto } from './dto/update-atividade.dto';
import { Repository } from 'typeorm';
import { Atividade } from './entities/atividade.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AtividadeService {

  constructor(
    @InjectRepository(Atividade)
    private atividadeRepo: Repository<Atividade>
    ){}

  create(createAtividadeDto: CreateAtividadeDto) {
    const atividade = this.atividadeRepo.create(createAtividadeDto)
    return this.atividadeRepo.save(atividade);
  }

  findAll() {
    return this.atividadeRepo.find();
  }

  findOne(id: number) {
    return 'this.atividadeRepo.findOne({where: {id: parseInt(id, 10)}})';
  }

  async update(id: number, updateAtividadeDto: UpdateAtividadeDto) {
    return await this.atividadeRepo.update(id, updateAtividadeDto);
  }

  async remove(id: number) {
    return await this.atividadeRepo.delete(id);
  }
}
