import {MigrationInterface, QueryRunner, TableForeignKey} from 'typeorm';

export class AddProductDiscountRelationToProductTable1546585326281 implements MigrationInterface {

    private tableForeignKey = new TableForeignKey({
        name: 'fk_product_discount_product1',
        columnNames: ['product_id'],
        referencedColumnNames: ['product_id'],
        referencedTableName: 'product',
        onDelete: 'CASCADE',
    });

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createForeignKey('product_discount', this.tableForeignKey);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropForeignKey('product_discount', this.tableForeignKey);
    }
}
