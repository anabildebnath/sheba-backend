import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt'; // Correct import of bcrypt

@Injectable()
export class AuthService {
  constructor(private users: UsersService, private jwt: JwtService) {}

  async validateUser(username: string, pass: string) {
    const user = await this.users.findOneByUsername(username);
    if (user && (await bcrypt.compare(pass, user.password))) return user;
    throw new UnauthorizedException();
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.id };
    return { access_token: this.jwt.sign(payload) };
  }
}
