/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Board } from './entity/board.entity';
import { User } from './entity/user.entity';
import { UserModule } from './user/user.module';
import { BoardModule } from './board/board.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mysql',
      host:'localhost',
      port: 3306,
      username: 'root',
      password: '6482',
      database: 'board',
      entities: [Board, User],
      synchronize: false,
      autoLoadEntities: true,
    }),
    UserModule,
    BoardModule
  ],
})
export class AppModule {}
