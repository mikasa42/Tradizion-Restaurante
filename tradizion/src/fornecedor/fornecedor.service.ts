import { Injectable } from '@nestjs/common';
import { CreateFornecedorDto } from './dto/create-fornecedor.dto';
import { UpdateFornecedorDto } from './dto/update-fornecedor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Fornecedor } from './entities/fornecedor.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FornecedorService {
  constructor(@InjectRepository(Fornecedor) private fornecedorRepository:Repository<Fornecedor>){}
  create(createFornecedorDto: CreateFornecedorDto) {
    const newFornecedor = this.fornecedorRepository.create({
      ...createFornecedorDto,
    })
    this.fornecedorRepository.save(newFornecedor);
  }

  findAll() {
    return `This action returns all fornecedor`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fornecedor`;
  }

  update(id: number, updateFornecedorDto: UpdateFornecedorDto) {
    return `This action updates a #${id} fornecedor`;
  }

  remove(id: number) {
    return `This action removes a #${id} fornecedor`;
  }
}
