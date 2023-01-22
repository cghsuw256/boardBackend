/* eslint-disable prettier/prettier */
import { Controller, Delete, Get, Param, Post, Put, Req, Res } from "@nestjs/common";
import { BoardService } from "./board.service";
import { Request, Response } from 'express';

@Controller("board")
export class BoardController {
  constructor(private readonly boardService: BoardService) {}
  
  @Post('reg')
  createBoard(@Req() req: Request, @Res() res: Response) {
    return this.boardService.createBoard(req, res);
  }

  // @Post("date")
  // getBoardByDate(@Req() req: Request, @Res() res: Response) {
  //   return this.boardService.getBoardByDate(req, res);
  // }

  @Delete(":id")
  deleteBoardById(@Param("id") id: number, @Res() res: Response) {
    return this.boardService.deleteBoardById(id, res);
  }

  @Put(":id")
  updateBoardById(@Param("id") id: number, @Req() req: Request, @Res() res: Response) {
    return this.boardService.updateBoardById(id, req, res);
  }

  @Get()
  getAll() {
    return this.boardService.getAll();
  }
}