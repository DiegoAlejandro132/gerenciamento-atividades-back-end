import { Injectable } from '@nestjs/common';
import { CreateTarefaDto } from './dto/create-tarefa.dto';
import { UpdateTarefaDto } from './dto/update-tarefa.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Tarefa } from './entities/tarefa.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TarefaService {

  constructor(
    @InjectRepository(Tarefa)
    private tarefaRepo: Repository<Tarefa>
  ){}

  async create(createTarefaDto: CreateTarefaDto) {
    const tarefa = await this.tarefaRepo.create(createTarefaDto)
    return await this.tarefaRepo.save(tarefa) ;
  }

  async findAll() {
    const query = "SELECT *, DATE_FORMAT(created_at, '%Y-%m-%d') as criado_em, DATE_FORMAT(prazo, '%Y-%m-%d') as prazo_exibicao FROM tarefa"
    return await this.tarefaRepo.query(query);
  }

  findOne(id: number) {
    return `This action returns a #${id} tarefa`;
  }

  async update(id: number, updateTarefaDto: UpdateTarefaDto) {
    return await this.tarefaRepo.update(id, updateTarefaDto);
  }

  remove(id: number) {
    return `This action removes a #${id} tarefa`;
  }
}
