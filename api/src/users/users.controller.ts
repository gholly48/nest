import { Controller, Get, Post, Param, Delete, Body, Put } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  create(@Body() data) {
    return this.userService.create(data);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data) {
    return this.userService.update(+id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.userService.delete(+id);
  }  
}
