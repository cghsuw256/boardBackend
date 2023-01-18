/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Index, PrimaryColumn } from "typeorm";
import { User } from './user.entity';

@Index("FK_User_TO_Board_1",["userId"], {})
@Entity('Board', { schema: 'typeorm'})
export class Board {
  @PrimaryGeneratedColumn({ type: "int", name:"id"})
  id: number;

  @Column({name: 'userId'})
  userId: number;

  @Column('varchar', { name: 'title', length: 50})
  title: string;

  @Column('varchar', { name: 'content'})
  content: string;

  @Column('varchar', { name: 'author'})
  author:string;

  @Column('char', { name: 'birth', length: 8})
  birth: string;

  @Column("datetime", {name: "createdAt", default: () => "CURRENT_TIMESTAMP"})
  createdAt: Date;

  @Column("datetime", {name: "updatedAt", default: null})
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.Board, {
    onDelete: 'CASCADE',
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "userId", referencedColumnName: "id" }])
  user: User;
}