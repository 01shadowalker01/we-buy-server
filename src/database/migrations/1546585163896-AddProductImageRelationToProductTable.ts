import {MigrationInterface, QueryRunner, TableForeignKey} from 'typeorm';

export class AddProductImageRelationToProductTable1546585163896 implements MigrationInterface {

    private tableForeignKey = new TableForeignKey({
        name: 'fk_product_image_product1',
        columnNames: ['product_id'],
        referencedColumnNames: ['product_id'],
        referencedTableName: 'product',
        onDelete: 'CASCADE',
    });

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createForeignKey('product_image', this.tableForeignKey);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropForeignKey('product_image', this.tableForeignKey);
    }
}
