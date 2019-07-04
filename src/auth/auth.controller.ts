import {
  Controller,
  Post,
  Body,
  Res,
  HttpStatus,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Res() res, @Body() body: any) {
    try {
      const token = await this.authService.signIn(body);
      res.status(HttpStatus.OK).json(token);
    } catch (err) {
      throw new UnauthorizedException();
    }
  }

}
