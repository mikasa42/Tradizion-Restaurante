import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepository:Repository<User>){}
  create(createUserDto: CreateUserDto) {
    const  newUser = this.userRepository.create({
      ...createUserDto,
      createdAt: new Date()

    })
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
}
