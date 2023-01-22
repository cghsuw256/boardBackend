import { UserService } from './user.service';
import { Request, Response } from "express";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    userReg(req: Request, res: Response): Promise<void>;
    login(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    getAll(res: Response): Promise<void>;
    getUserById(id: number, res: Response): Promise<void>;
    deleteUserById(id: number, res: Response): Promise<void>;
}
