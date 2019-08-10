import {MigrationInterface, QueryRunner, TableForeignKey} from 'typeorm';

export class AddOrderProductRelationToOrderTable1546593359310 implements MigrationInterface {

    private tableForeignKey = new TableForeignKey({
        name: 'fk_order_product_order1',
        columnNames: ['order_id'],
        referencedColumnNames: ['order_id'],
        referencedTableName: 'order',
        onDelete: 'CASCADE',
    });

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createForeignKey('order_product', this.tableForeignKey);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropForeignKey('order_product', this.tableForeignKey);
    }
}
