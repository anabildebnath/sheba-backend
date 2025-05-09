import { UsersService } from '../users/users.service';
declare const JwtStrategy_base: new (...args: any) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private users;
    constructor(users: UsersService);
    validate(payload: any): Promise<import("../users/entities/user.entity").User | null>;
}
export {};
