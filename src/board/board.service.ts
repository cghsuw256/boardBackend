/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Board } from "src/entity/board.entity";
import { Repository } from "typeorm";
import { Request, Response } from "express";
import { User } from "src/entity/user.entity";
@Injectable()
export class BoardService{
  constructor(
    @InjectRepository(Board)
    private boardRepository: Repository<Board>
  ) {}

  async createBoard(req: Request, res: Response) {
    const { token, title, content } = req.body;
    const base64payload = token.split('.')[1];
    const payload = Buffer.from(base64payload, 'base64');
    const result = JSON.parse(payload.toString());
    const userId = result.userid;
    const author = result.name;
    const birth = result.birth;
    const resData = await this.boardRepository.insert({
      title: title,
      content: content,
      userId,
      author,
      birth
    })
    res.status(201).send({
      success: true,
      msg: "성공적으로 게시물을 추가했습니다.",
      resData
    })
  }

  async getAll() {
    return this.boardRepository.find();
  }
}