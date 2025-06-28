import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
} from "typeorm";

@Entity("order_detail")
export class OrderDetailEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "int", nullable: true })
    security_id: number | null;

    @Column({ type: "varchar", length: 100 })
    security_name: string;

    @Column({ type: "decimal", precision: 10, scale: 2 })
    security_value: number;

    @Column({ type: "varchar", length: 50, unique: true })
    order_ref_no: string;

    @Column({ type: "varchar", length: 20 })
    order_status: string;

    @Column({ type: "varchar", length: 10 })
    transaction_type: string;

    @Column({ type: "decimal", precision: 10, scale: 2 })
    order_value: number;

    @Column({ type: "int" })
    quantity: number;

    @CreateDateColumn()
    created_on: Date;

    @Column({ type: "int", nullable: false })
    created_by: number;
}
