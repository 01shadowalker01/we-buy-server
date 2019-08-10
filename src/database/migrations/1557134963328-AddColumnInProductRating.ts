import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from 'typeorm';

export class AddColumnInProductRating1557134963328 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.addColumn('product_rating', new TableColumn({
            name: 'order_product_id',
            type: 'int',
            length: '11',
            isPrimary: false,
            isNullable: true,
        }));

        const foreignKey = new TableForeignKey({
            columnNames: ['order_product_id'],
            referencedColumnNames: ['order_product_id'],
            referencedTableName: 'order_product',
            onDelete: 'CASCADE',
        });
        await queryRunner.createForeignKey('product_rating', foreignKey);
    }
    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropColumn('customer', 'orderProductId');
    }
}
