import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from "typeorm";

import { UserDetailEntity } from "./UserDetailEntity";

@Entity()
export class UserLoginDetailsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => UserDetailEntity)
  @JoinColumn()
  user_detail_id: UserDetailEntity;


  @CreateDateColumn()
  created_on: Date;
}
