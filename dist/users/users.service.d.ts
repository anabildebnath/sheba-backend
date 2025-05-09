import { Repository } from 'typeorm';
export declare class UsersService {
    private repo;
    constructor(repo: Repository);
    findOneByUsername(username: string): Promise<any>;
    create(username: string, password: string, isAdmin?: boolean): Promise<any>;
}
