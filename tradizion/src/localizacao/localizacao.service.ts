import { Injectable } from '@nestjs/common';
import { CreateLocalizacaoDto } from './dto/create-localizacao.dto';
import { UpdateLocalizacaoDto } from './dto/update-localizacao.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Localizacao } from './entities/localizacao.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LocalizacaoService {
  constructor(@InjectRepository(Localizacao) private localizacaoRepository:Repository<Localizacao>){}
  create(createLocalizacaoDto: CreateLocalizacaoDto) {
    const newLocation = this.localizacaoRepository.create({
      ...createLocalizacaoDto,
    })
    this.localizacaoRepository.save(newLocation)
  }

  findAll() {
    return `This action returns all localizacao`;
  }

  findOne(id: number) {
    return `This action returns a #${id} localizacao`;
  }

  update(id: number, updateLocalizacaoDto: UpdateLocalizacaoDto) {
    return `This action updates a #${id} localizacao`;
  }

  remove(id: number) {
    return `This action removes a #${id} localizacao`;
  }
}
