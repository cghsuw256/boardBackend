/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Board } from "src/entity/board.entity";
import { Between, Repository } from "typeorm";
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

  // async getBoardByDate(req: Request, res: Response) {
  //   const { id, firstDate, secondDate } = req.body;
  //   const sDate = firstDate + " 00:00:00";
  //   const eDate = secondDate + " 23:59:59";
  //   const isBoard = await this.boardRepository.findBy({
  //     id
  //   })
  //   if(isBoard.length == 0) {
  //     res.status(400).send({
  //       success: false,
  //       msg: `아이디가 ${id}인 게시물을 찾을 수 없습니다.`
  //     })
  //   } else {
  //     const result = await this.boardRepository.find({
  //       where:{
  //         id,
  //         createdAt: Between(sDate, eDate)
  //       }
  //     })
  //   }
  // }
  
  async deleteBoardById(id: number, res: Response) {
    const isBoard = await this.boardRepository.findBy({id})
    if(isBoard.length == 0) {
      res.status(400).send({
        success: false,
        msg: `아이디가 ${id}인 게시물을 찾을 수 없습니다.`
      })
    } else {
      await this.boardRepository.delete({id});
      res.status(200).send({
        success: true,
        msg: `성공적으로 아이디가 ${id}인 게시물을 삭제하였습니다. `
      })
    }
  }

  async updateBoardById(id: number, req: Request, res: Response) {
    const isBoard = await this.boardRepository.findBy({id});
    const { title, content } = req.body;
    const date = new Date();
    if(isBoard.length == 0) {
      res.status(400).send({
        success: false,
        msg: `아이디가 ${id}인 게시물을 찾을 수 없습니다.`
      })
    } else {
      await this.boardRepository.update(
        title,
        content
      )
    }
  }
}