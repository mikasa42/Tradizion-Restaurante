import { Injectable } from '@nestjs/common';
import { CreateIngredienteDto } from './dto/create-ingrediente.dto';
import { UpdateIngredienteDto } from './dto/update-ingrediente.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Ingrediente } from './entities/ingrediente.entity';

@Injectable()
export class IngredientesService {
  constructor(@InjectRepository(Ingrediente) private ingredienteRepository:Repository<Ingrediente>){}

  create(createIngredienteDto: CreateIngredienteDto) {
    const newIngrediente = this.ingredienteRepository.create({
      ...createIngredienteDto,
    })
    this.ingredienteRepository.save(newIngrediente)
  }

  findAll() {
    return `This action returns all ingredientes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ingrediente`;
  }

  update(id: number, updateIngredienteDto: UpdateIngredienteDto) {
    return `This action updates a #${id} ingrediente`;
  }

  remove(id: number) {
    return `This action removes a #${id} ingrediente`;
  }
}
