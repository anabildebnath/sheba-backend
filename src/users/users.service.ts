import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
constructor(@InjectRepository(User) private repo: Repository) {}

async findOneByUsername(username: string) {
return this.repo.findOne({ where: { username } });
}

async create(username: string, password: string, isAdmin = false) {
const user = this.repo.create({ username, password: await bcrypt.hash(password, 10), isAdmin });
return this.repo.save(user);
}
}
