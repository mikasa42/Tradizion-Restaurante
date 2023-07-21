import { Injectable } from '@nestjs/common';
import { CreateFuncionarioDto } from './dto/create-funcionario.dto';
import { UpdateFuncionarioDto } from './dto/update-funcionario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Funcionario } from './entities/funcionario.entity';

@Injectable()
export class FuncionarioService {
  constructor(@InjectRepository(Funcionario) private funcionarioRepository:Repository<Funcionario>){}
  create(createFuncionarioDto: CreateFuncionarioDto) {
    const newFuncionario = this.funcionarioRepository.create({

      ...createFuncionarioDto,
    })
      this.funcionarioRepository.save(newFuncionario)
  }

  findAll() {
    return `This action returns all funcionario`;
  }

  findOne(id: number) {
    return `This action returns a #${id} funcionario`;
  }

  update(id: number, updateFuncionarioDto: UpdateFuncionarioDto) {
    return `This action updates a #${id} funcionario`;
  }

  remove(id: number) {
    return `This action removes a #${id} funcionario`;
  }
}
