import { Board } from "./board.entity";
export declare class User {
    id: number;
    name: string;
    gender: number;
    birth: string;
    account: string;
    password: string;
    salt: string;
    permission: number;
    Board: Board[];
    static id: any;
}
