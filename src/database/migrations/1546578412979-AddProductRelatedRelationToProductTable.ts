import {MigrationInterface, QueryRunner, TableForeignKey} from 'typeorm';

export class AddProductRelatedRelationToProductTable1546578412979 implements MigrationInterface {
    private tableForeignKey = new TableForeignKey({
        name: 'fk_product_related_product1',
        columnNames: ['product_id'],
        referencedColumnNames: ['product_id'],
        referencedTableName: 'product',
        onDelete: 'CASCADE',
    });
    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createForeignKey('product_related', this.tableForeignKey);
    }
    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropForeignKey('product_related', this.tableForeignKey);
    }

}
