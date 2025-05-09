// File: src/auth/auth.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { LoginDto } from './dto/login.dto'; // Correct import

@Controller('auth')
export class AuthController {
  @Post('login')
  login(@Body() loginDto: LoginDto) {
    // Implement login logic here
    console.log(loginDto); // Just for testing, you can remove this later
  }
}
