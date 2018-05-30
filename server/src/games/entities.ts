import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { BaseEntity } from "typeorm/repository/BaseEntity";
import { createEmptyBoard } from "./logic";

//import User from "../users/entity";
export type Board = string[][];

@Entity()
export default class Game extends BaseEntity {
  @PrimaryGeneratedColumn() id?: number;

  @Column("json", { nullable: true })
  board: Board;
}
