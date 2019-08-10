import {MigrationInterface, QueryRunner, TableForeignKey} from 'typeorm';

export class AddOrderRelationToCustomerTable1546594752832 implements MigrationInterface {

    private tableForeignKey = new TableForeignKey({
        name: 'fk_order_customer1',
        columnNames: ['customer_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'customer',
        onDelete: 'CASCADE',
    });

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createForeignKey('order', this.tableForeignKey);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropForeignKey('order', this.tableForeignKey);
    }
}
