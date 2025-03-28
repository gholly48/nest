import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as Bcrypt from 'bcryptjs'

@Injectable()
export class UsersService {
  delete(arg0: number) {
    throw new Error('Method not implemented.');
  }
  constructor( private prisma: PrismaService) {}
   
     async findAll() {
       return this.prisma.users.findMany();
      }
    
      async findOne(id: number) {
        return this.prisma.users.findUnique({ where: { id } });
      }
    
      async create(user: { id: number; username: string; email: string; password: string }) {
        const hashedPass = Bcrypt.hashSync(user.password, 10)
        const newUser = this.prisma.users.create({ data: { ...user, password: hashedPass} });
        return newUser
      }
    
      async update(id: number, user: { username: string }) {
        return this.prisma.users.update({ where: { id }, data: user });
      }
    
      async remove(id: number) {
        return this.prisma.users.delete({ where: { id } });
      }
}
