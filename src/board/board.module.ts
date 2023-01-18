/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Board } from "src/entity/board.entity";
import { User } from "src/entity/user.entity";
import { BoardService } from "./board.service";
import { BoardController } from "./board.controller";

@Module({
  imports:[TypeOrmModule.forFeature([User, Board])],
  exports:[TypeOrmModule],
  providers:[BoardService],
  controllers:[BoardController],
})
export class BoardModule {}