//File: src/users/users.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity'; // Correct entity import
import * as bcrypt from 'bcrypt'; // Correct bcrypt import

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {} // Correct repository usage

  async findOneByUsername(username: string) {
    return this.repo.findOne({ where: { username } });
  }

  async create(username: string, password: string, isAdmin = false) {
    const user = this.repo.create({ username, password: await bcrypt.hash(password, 10), isAdmin });
    return this.repo.save(user);
  }
}
