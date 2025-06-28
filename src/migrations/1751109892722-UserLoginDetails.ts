import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class UserLoginDetails1751109892722 implements MigrationInterface {
  /**
   * The Main Table Name
   */
  #TABLE_NAME = "user_login_details";

  /**
   * Up the Database
   * @param queryRunner
   */
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: this.#TABLE_NAME,
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
          },
          {
            name: "user_detail_id",
            type: "int",
          },
          {
            name: "user_status",
            type: "string",
          },
          {
            name: "created_on",
            type: "timestamp",
            default: "now()",
            isNullable: false,
          },
          {
            name: "modified_on",
            type: "timestamp",
            isNullable: false,
          },
        ],
      }),
      true
    );

    await queryRunner.createForeignKey(
      "user_login_details",
      new TableForeignKey({
        columnNames: ["user_detail_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "user_details",
        onDelete: "CASCADE",
      })
    );
  }

  /**
   * Down the query Runner
   * @param queryRunner
   */
  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable(this.#TABLE_NAME);
    const foreignKey = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf("user_detail_id") !== -1
    );

    await queryRunner.dropForeignKey(this.#TABLE_NAME, foreignKey);
    await queryRunner.dropTable(this.#TABLE_NAME);
  }
}
