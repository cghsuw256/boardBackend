/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Req, Res } from "@nestjs/common";
import { BoardService } from "./board.service";
import { Request, Response } from 'express';

@Controller("board")
export class BoardController {
  constructor(private readonly boardService: BoardService) {}
  
  @Post('reg')
  createBoard(@Req() req: Request, @Res() res: Response) {
    return this.boardService.createBoard(req, res);
  }

  @Get()
  getAll() {
    return this.boardService.getAll();
  }
}