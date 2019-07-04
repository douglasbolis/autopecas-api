import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersDAOService } from './users-dao.service';
import { UsersController } from './users.controller';
import { Usuario } from '../models';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario])],
  providers: [UsersDAOService],
  controllers: [UsersController],
})
export class UsersModule {}
