import {MigrationInterface, QueryRunner, TableForeignKey} from 'typeorm';

export class AddCustomerWishlistRelationToCustomerTable1552371397992 implements MigrationInterface {

    private tableForeignKey = new TableForeignKey({
        name: 'fk_wishlist_customer',
        columnNames: ['customer_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'customer',
        onDelete: 'CASCADE',
    });

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createForeignKey('customer_wishlist', this.tableForeignKey);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropForeignKey('customer_wishlist', this.tableForeignKey);
    }
}
