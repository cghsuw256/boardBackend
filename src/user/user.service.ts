/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { sign } from "jsonwebtoken";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/entity/user.entity";
import { Repository } from "typeorm";
import { Request, Response } from "express";
import { getRandom, hash } from "src/util/text";

@Injectable()
export class UserService{
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async userReg(req: Request, res: Response) {
    const { name, gender, birth, account, password, permission } = req.body;
    if(name == "" || name > 10) {
      res.status(400).send({
        success: false,
        msg: "올바른 이름을 입력해주세요"
      })
    }
    const isUser = await this.userRepository.find({
      where: {account: account}
    })
    if(isUser.length == 0) {
      const salt = getRandom('all', 10);
      const encrypt = hash(password + salt);
      const result = await this.userRepository.insert({
        name,
        gender,
        birth,
        account,
        password: encrypt,
        salt,
        permission
      })
      res.status(201).send({
        success: true,
        msg: "성공적으로 가입이 완료되었습니다.",
        result
      })
    }else{
      res.status(400).send({
        success: false,
        msg: "이미 해당하는 유저가 있습니다."
      })
    }
  }

  async findOne(account: string) {
    return await this.userRepository.findOneBy({ account });
  }

  async getSignIn(res: Response, req: Request) {
    const { account, password } = req.body;
    const user = await this.findOne(account);
    if (!user) {
      return res.status(400).send({
        success: false,
        msg: '해당하는 유저가 없습니다.',
      });
    } else {
      if (user.password === hash(password + user.salt)) {
        return res.status(200).send({
          success: true,
          msg: '로그인을 성공적으로 완료했습니다.',
          token: sign(
            {
              account: user.account,
              name: user.name,
              gender: user.gender,
              birth: user.birth,
              userid: user.id,
            },
            'SECRET',
            { expiresIn: user.permission < 3 ? '60m' : '15m' },
          ),
        });
      } else
        return res.status(400).send({
          success: false,
          msg: '아이디나 비밀번호를 확인해주세요.',
        });
    }
  }
  async getUserById(id:number){
    return this.userRepository.findBy({id: id})
  }
}