//File: src/common/pipes/validation.pipe.ts
import { ValidationPipe } from '@nestjs/common';

export class AppValidationPipe extends ValidationPipe {
constructor() {
super({ whitelist: true, transform: true });
}
}
