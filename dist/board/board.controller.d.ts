import { BoardService } from "./board.service";
import { Request, Response } from 'express';
export declare class BoardController {
    private readonly boardService;
    constructor(boardService: BoardService);
    createBoard(req: Request, res: Response): Promise<void>;
    deleteBoardById(id: number, res: Response): Promise<void>;
    updateBoardById(id: number, req: Request, res: Response): Promise<void>;
    getAll(): Promise<import("../entity/board.entity").Board[]>;
}
