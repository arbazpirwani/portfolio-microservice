// src/migrations/1751123456789-CreateOrderDetail.ts
import {
    MigrationInterface,
    QueryRunner,
    Table,
} from "typeorm";

export class CreateOrderDetail1751123456789 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // Create order_detail without foreign keys
        await queryRunner.createTable(
            new Table({
                name: "order_detail",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "security_id",
                        type: "int",
                        isNullable: true,
                    },
                    {
                        name: "security_name",
                        type: "varchar",
                        length: "100",
                        isNullable: false,
                    },
                    {
                        name: "security_value",
                        type: "decimal",
                        precision: 10,
                        scale: 2,
                        isNullable: false,
                    },
                    {
                        name: "order_ref_no",
                        type: "varchar",
                        length: "50",
                        isUnique: true,
                        isNullable: false,
                    },
                    {
                        name: "order_status",
                        type: "varchar",
                        length: "20",
                        isNullable: false,
                    },
                    {
                        name: "transaction_type",
                        type: "varchar",
                        length: "10",
                        isNullable: false,
                    },
                    {
                        name: "order_value",
                        type: "decimal",
                        precision: 10,
                        scale: 2,
                        isNullable: false,
                    },
                    {
                        name: "quantity",
                        type: "int",
                        isNullable: false,
                    },
                    {
                        name: "created_on",
                        type: "timestamp",
                        default: "now()",
                        isNullable: false,
                    },
                    {
                        name: "created_by",
                        type: "int",
                        isNullable: false,
                    },
                ],
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Drop the order_detail table
        await queryRunner.dropTable("order_detail");
    }
}
