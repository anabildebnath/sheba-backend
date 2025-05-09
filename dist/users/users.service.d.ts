import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
export declare class UsersService {
    private repo;
    constructor(repo: Repository<User>);
    findOneByUsername(username: string): Promise<User | null>;
    create(username: string, password: string, isAdmin?: boolean): Promise<User>;
}
