import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UsersDAOService } from './users-dao.service';

@Controller('users')
@UseGuards(AuthGuard('jwt'))
export class UsersController {
  constructor(private readonly usersService: UsersDAOService) { }

  @Get()
  all() {
    return this.usersService.findAll(['id', 'email'], ['pessoa']);
  }

}
