"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const board_entity_1 = require("../entity/board.entity");
const typeorm_2 = require("typeorm");
let BoardService = class BoardService {
    constructor(boardRepository) {
        this.boardRepository = boardRepository;
    }
    async createBoard(req, res) {
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
        });
        res.status(201).send({
            success: true,
            msg: "성공적으로 게시물을 추가했습니다.",
            resData
        });
    }
    async getAll() {
        return this.boardRepository.find();
    }
    async deleteBoardById(id, res) {
        const isBoard = await this.boardRepository.findBy({ id });
        if (isBoard.length == 0) {
            res.status(400).send({
                success: false,
                msg: `아이디가 ${id}인 게시물을 찾을 수 없습니다.`
            });
        }
        else {
            await this.boardRepository.delete({ id });
            res.status(200).send({
                success: true,
                msg: `성공적으로 아이디가 ${id}인 게시물을 삭제하였습니다. `
            });
        }
    }
    async updateBoardById(id, req, res) {
        const isBoard = await this.boardRepository.findBy({ id });
        const { title, content } = req.body;
        const date = new Date();
        if (isBoard.length == 0) {
            res.status(400).send({
                success: false,
                msg: `아이디가 ${id}인 게시물을 찾을 수 없습니다.`
            });
        }
        else {
            await this.boardRepository.update(title, content);
        }
    }
};
BoardService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(board_entity_1.Board)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BoardService);
exports.BoardService = BoardService;
//# sourceMappingURL=board.service.js.map