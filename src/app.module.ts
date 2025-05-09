import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BullModule } from '@nestjs/bull';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ServicesModule } from './services/services.module';
import { BookingsModule } from './bookings/bookings.module';
import { AdminModule } from './admin/admin.module';
import { NotificationsModule } from './notifications/notifications.module';

@Module({
imports: [
ConfigModule.forRoot({ isGlobal: true }),
TypeOrmModule.forRoot({
type: 'postgres',
host: process.env.DATABASE_HOST,
port: +process.env.DATABASE_PORT,
username: process.env.POSTGRES_USER,
password: process.env.POSTGRES_PASSWORD,
database: process.env.POSTGRES_DB,
entities: [__dirname + '/**/*.entity{.ts,.js}'],
synchronize: true,
}),
BullModule.forRoot({
redis: { host: process.env.REDIS_HOST, port: +process.env.REDIS_PORT }
}),
AuthModule,
UsersModule,
ServicesModule,
BookingsModule,
AdminModule,
NotificationsModule,
],
})
export class AppModule {}
