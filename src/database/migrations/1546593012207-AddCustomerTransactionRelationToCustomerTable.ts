import {MigrationInterface, QueryRunner, TableForeignKey} from 'typeorm';

export class AddCustomerTransactionRelationToCustomerTable1546593012207 implements MigrationInterface {

    private tableForeignKey = new TableForeignKey({
        name: 'fk_customer_transaction_customer1',
        columnNames: ['customer_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'customer',
        onDelete: 'CASCADE',
    });

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createForeignKey('customer_transaction', this.tableForeignKey);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropForeignKey('customer_transaction', this.tableForeignKey);
    }
}
