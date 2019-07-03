import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { ENVIRONMENTS } from './config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: ENVIRONMENTS.DB.HOST,
      port: ENVIRONMENTS.DB.PORT,
      username: ENVIRONMENTS.DB.USERNAME,
      password: ENVIRONMENTS.DB.PASSWORD,
      database: ENVIRONMENTS.DB.DATABASE,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
