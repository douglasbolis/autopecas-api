import { Controller, Get } from '@nestjs/common';
import { UsersDAOService } from './users-dao.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersDAOService) { }

  @Get()
  all() {
    return this.usersService.findAll();
  }

}
