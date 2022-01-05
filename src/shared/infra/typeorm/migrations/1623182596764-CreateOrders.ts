import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateOrders1623182596764 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "orders",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid"
          },
          {
            name: "amount",
            type: "float",
          },
          {
            name: "customer_id",
            type: "uuid"
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          }
        ],
        foreignKeys: [
          {
            name: "FKCustomer",
            referencedTableName: "customers",
            referencedColumnNames: ["id"],
            columnNames: ["customer_id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          }
        ]
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("orders");
  }
}
