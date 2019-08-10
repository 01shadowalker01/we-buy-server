import {MigrationInterface, QueryRunner, TableForeignKey} from 'typeorm';

export class AddOrderProductRelationToProductTable1546593289549 implements MigrationInterface {

    private tableForeignKey = new TableForeignKey({
        name: 'fk_order_product_product1',
        columnNames: ['product_id'],
        referencedColumnNames: ['product_id'],
        referencedTableName: 'product',
        onDelete: 'CASCADE',
    });

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createForeignKey('order_product', this.tableForeignKey);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropForeignKey('order_product', this.tableForeignKey);
    }
}
