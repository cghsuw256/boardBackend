import { User } from "src/entity/user.entity";
import { Repository } from "typeorm";
import { Request, Response } from "express";
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    userReg(req: Request, res: Response): Promise<void>;
    findOne(account: string): Promise<User>;
    getSignIn(res: Response, req: Request): Promise<Response<any, Record<string, any>>>;
    getUserById(id: number): Promise<User[]>;
}
