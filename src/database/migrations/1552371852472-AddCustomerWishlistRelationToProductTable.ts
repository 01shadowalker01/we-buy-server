import {MigrationInterface, QueryRunner, TableForeignKey} from 'typeorm';

export class AddCustomerWishlistRelationToProductTable1552371852472 implements MigrationInterface {

    private tableForeignKey = new TableForeignKey({
        name: 'fk_wishlist_product',
        columnNames: ['product_id'],
        referencedColumnNames: ['product_id'],
        referencedTableName: 'product',
        onDelete: 'CASCADE',
    });

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createForeignKey('customer_wishlist', this.tableForeignKey);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropForeignKey('customer_wishlist', this.tableForeignKey);
    }
}
