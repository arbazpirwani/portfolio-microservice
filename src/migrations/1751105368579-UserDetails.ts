import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class UserDetails1751105368579 implements MigrationInterface {
  /**
   * @private TABLE_NAME
   */
  #TABLE_NAME = "user_details";

  /**
   * Up the Table
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
            name: "first_name",
            type: "varchar",
            length: "70",
          },
          {
            name: "last_name",
            type: "varchar",
            length: "70",
          },
          {
            name: "email_address",
            type: "varchar",
            length: "255",
            isUnique: true,
            isNullable: false,
          },
          {
            name: "password",
            type: "varchar",
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
            isNullable: true,
          },
          {
            name: "modified_on",
            type: "timestamp",
            isNullable: false,
          },
          {
            name: "modified_by",
            type: "int",
            isNullable: true,
          },
        ],
      }),
      true
    );
  }

  /**
   * Drop The Table
   * @param queryRunner 
   */
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.#TABLE_NAME)
  }
}
