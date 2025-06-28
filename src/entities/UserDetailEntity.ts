import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  
} from "typeorm";

@Entity()
export class UserDetailEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: "70",
  })
  first_name: string;

  @Column({
    length: "70",
  })
  last_name: string;

  @Column()
  email_address: boolean;

  @Column()
  password: string;

  @CreateDateColumn()
  created_on: Date;

  @Column({
    nullable: true,
  })
  created_by: number;

  @UpdateDateColumn()
  modified_on: Date;

  @Column({
    nullable: true,
  })
  modified_by: number;
}
