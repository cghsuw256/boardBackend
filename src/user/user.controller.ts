/* eslint-disable prettier/prettier */
import { Controller, Delete, Get, Param, Post, Req, Res } from "@nestjs/common";
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

  @Get("")
  getAll(@Res() res: Response) {
    return this.userService.getAll(res);
  }

  @Get(":id")
  getUserById(@Param("id") id:number, @Res() res: Response){
    return this.userService.getUserById(id, res);
  }

  @Delete(":id")
  deleteUserById(@Param("id") id:number, @Res() res: Response) {
    return this.userService.deleteUserById(id, res);
  }
}