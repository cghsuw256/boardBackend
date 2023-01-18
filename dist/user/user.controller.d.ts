import { UserService } from './user.service';
import { Request, Response } from "express";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    userReg(req: Request, res: Response): Promise<void>;
    login(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    getUserById(id: number): Promise<import("../entity/user.entity").User[]>;
}
