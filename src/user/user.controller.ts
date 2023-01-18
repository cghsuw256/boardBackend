/* eslint-disable prettier/prettier */
import { Controller, Get, Param, Post, Req, Res } from "@nestjs/common";
import { UserService } from './user.service';
import { Request, Response } from "express";

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('reg')
  userReg(@Req() req: Request, @Res() res: Response) {
    return this.userService.userReg(req, res);
  }

  @Post("signIn")
  login(@Req() req: Request, @Res() res: Response) {
    return this.userService.getSignIn(res, req);
  }

  @Get(":id")
  getUserById(@Param("id") id:number){
    return this.userService.getUserById(id);
  }
}