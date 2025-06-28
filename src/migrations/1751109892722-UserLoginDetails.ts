// src/migrations/1751109892722-UserLoginDetails.ts
import {
    MigrationInterface,
    QueryRunner,
    Table,
    TableForeignKey,
} from "typeorm";

export class UserLoginDetails1751109892722 implements MigrationInterface {
    #TABLE_NAME = "user_login_details";

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Create user_login_details table
        await queryRunner.createTable(
            new Table({
                name: this.#TABLE_NAME,
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "user_detail_id",
                        type: "int",
                        isNullable: false,
                    },
                    {
                        name: "created_on",
                        type: "timestamp",
                        default: "now()",
                        isNullable: false,
                    },
                ],
            }),
            true
        );

        // Add foreign key to user_details
        await queryRunner.createForeignKey(
            this.#TABLE_NAME,
            new TableForeignKey({
                columnNames: ["user_detail_id"],
                referencedTableName: "user_details",
                referencedColumnNames: ["id"],
                onDelete: "CASCADE",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Drop foreign key
        const table = await queryRunner.getTable(this.#TABLE_NAME);
        const fk = table.foreignKeys.find(fk =>
            fk.columnNames.includes("user_detail_id")
        );
        if (fk) {
            await queryRunner.dropForeignKey(this.#TABLE_NAME, fk);
        }

        // Drop table
        await queryRunner.dropTable(this.#TABLE_NAME);
    }
}
