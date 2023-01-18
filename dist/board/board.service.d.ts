import { Board } from "src/entity/board.entity";
import { Repository } from "typeorm";
import { Request, Response } from "express";
export declare class BoardService {
    private boardRepository;
    constructor(boardRepository: Repository<Board>);
    createBoard(req: Request, res: Response): Promise<void>;
    getAll(): Promise<Board[]>;
}
