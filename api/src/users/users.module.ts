import { Module } from '@nestjs/common';
import { UserController } from './users.controller';
import { UsersService } from '../users/users.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
    controllers:[UserController],
    providers: [UsersService, PrismaService]
})
export class UsersModule {}
