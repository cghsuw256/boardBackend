import { User } from './user.entity';
export declare class Board {
    id: number;
    userId: number;
    title: string;
    content: string;
    author: string;
    birth: string;
    createdAt: Date;
    updatedAt: Date;
    user: User;
}
