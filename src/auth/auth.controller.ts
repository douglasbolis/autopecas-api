import {
  Controller,
  Post,
  Body,
  HttpStatus,
  UnauthorizedException,
  BadRequestException,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Res() res: Response, @Body() body: any) {
    try {
      const token = await this.authService.signIn(body);
      res.status(HttpStatus.OK).json(token);
    } catch (err) {
      throw new UnauthorizedException();
    }
  }

  @Post('signup')
  async signup(@Body() body: any) {
    try {
      await this.authService.signup(body);
    } catch (err) {
      throw new BadRequestException();
    }
  }

}
