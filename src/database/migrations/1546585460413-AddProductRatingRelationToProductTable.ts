import {MigrationInterface, QueryRunner, TableForeignKey} from 'typeorm';

export class AddProductRatingRelationToProductTable1546585460413 implements MigrationInterface {
    private tableForeignKey = new TableForeignKey({
        name: 'fk_product_rating_product1',
        columnNames: ['product_id'],
        referencedColumnNames: ['product_id'],
        referencedTableName: 'product',
        onDelete: 'CASCADE',
    });
    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createForeignKey('product_rating', this.tableForeignKey);
    }
    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropForeignKey('product_rating', this.tableForeignKey);
    }
}
