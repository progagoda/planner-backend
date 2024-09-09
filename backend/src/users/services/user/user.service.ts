import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../../../entities/user.entity';
import { CreateUserInput } from '../../inputs/create-user-input';
import { UpdateUserInput } from '../../inputs/update-user-input';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async createUser(userInput: CreateUserInput): Promise<UserEntity> {
    return await this.userRepository.save(userInput);
  }

  async getOneUser(id: number): Promise<UserEntity> {
    return await this.userRepository.findOne({ where: { id: id } });
  }

  async getAllUsers(): Promise<UserEntity[]> {
    return await this.userRepository.find();
  }

  async deleteUser(id: number): Promise<number> {
    await this.userRepository.delete({ id: id });
    return id;
  }

  async updateUser(updateUserInput: UpdateUserInput): Promise<UserEntity> {
    await this.userRepository.update(updateUserInput.id, {
      ...updateUserInput,
    });
    return await this.userRepository.findOne({
      where: { id: updateUserInput.id },
    });
  }
}
