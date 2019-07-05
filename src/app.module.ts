import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { ENVIRONMENTS } from './config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PessoaModule } from './pessoa/pessoa.module';
import { ProdutosModule } from './produtos/produtos.module';

@Module({
  imports: [
    AuthModule,
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
    UsersModule,
    PessoaModule,
    ProdutosModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
