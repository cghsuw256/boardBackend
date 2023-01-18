/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Board } from "src/entity/board.entity";
import { User } from "../entity/user.entity";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

@Module({
  imports: [TypeOrmModule.forFeature([User, Board])],
  exports: [TypeOrmModule],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}