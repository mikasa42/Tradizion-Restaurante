import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepository:Repository<User>){}
  
  /* Tentei usar a metodologia de criptocrafia hash mas não */
  async create(createUserDto: CreateUserDto):Promise<User> {

    const hashed_password = await this.hashPassword(createUserDto.password);
    delete createUserDto.password;
    const  newUser = this.userRepository.create({
      ...createUserDto,
      password: '${hashed_password}', /* Password recebe string então tentei passar a nova senha assim .... */
    })/*Isto está errado mas n sei consertar */
    this.userRepository.save(newUser);
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id_user: number) {
    return this.userRepository.findOneBy({id_user});
  }

  update(id_user: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(
      {id_user},
      {...updateUserDto}
    
    );
  }

  remove(id_user: number) {
    return this.userRepository.delete({id_user});
  }
  async hashPassword(password:string):Promise<string> {
    const salt = await bcrypt.genSalt();
    return bcrypt.hash(password,salt);
    
  }
}


