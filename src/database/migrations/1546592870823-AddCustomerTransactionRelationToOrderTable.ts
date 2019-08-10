import {MigrationInterface, QueryRunner, TableForeignKey} from 'typeorm';

export class AddCustomerTransactionRelationToOrderTable1546592870823 implements MigrationInterface {

    private tableForeignKey = new TableForeignKey({
        name: 'fk_customer_transaction_order1',
        columnNames: ['order_id'],
        referencedColumnNames: ['order_id'],
        referencedTableName: 'order',
        onDelete: 'CASCADE',
    });

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createForeignKey('customer_transaction', this.tableForeignKey);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropForeignKey('customer_transaction', this.tableForeignKey);
    }
}
