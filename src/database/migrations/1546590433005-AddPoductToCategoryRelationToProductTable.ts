import {MigrationInterface, QueryRunner, TableForeignKey} from 'typeorm';

export class AddPoductToCategoryRelationToProductTable1546590433005 implements MigrationInterface {

    private tableForeignKey = new TableForeignKey({
        name: 'fk_product_to_category_product1',
        columnNames: ['product_id'],
        referencedColumnNames: ['product_id'],
        referencedTableName: 'product',
        onDelete: 'CASCADE',
    });

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createForeignKey('product_to_category', this.tableForeignKey);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropForeignKey('product_to_category', this.tableForeignKey);
    }
}
