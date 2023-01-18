/* eslint-disable prettier/prettier */

import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Board } from "./board.entity";

@Entity("user", { schema: "typeorm" })
export class User {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", length: 10 })
  name: string;
  
  @Column("tinyint", { name: "gender" })
  gender: number;

  @Column("char", { name: "birth", length: 8})
  birth: string;

  @Column("varchar", { name: "account", length: 10 })
  account: string;

  @Column("char", { name: "password", length: 64 })
  password: string;

  @Column("varchar", { name: "salt", length: 10 })
  salt: string;

  @Column("tinyint", { name: "permission"})
  permission: number;

  @OneToMany(() => Board, (Board) => Board.user, { cascade: true })
  Board: Board[];

  static id: any;
}
