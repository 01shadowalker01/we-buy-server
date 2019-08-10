import {MigrationInterface, QueryRunner, TableForeignKey} from 'typeorm';

export class AddOrderOptionRelationToOrderProductTable1546593946185 implements MigrationInterface {

    private tableForeignKey = new TableForeignKey({
        name: 'fk_order_option_order_product1',
        columnNames: ['order_product_id'],
        referencedColumnNames: ['order_product_id'],
        referencedTableName: 'order_product',
        onDelete: 'CASCADE',
    });

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createForeignKey('order_option', this.tableForeignKey);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropForeignKey('order_option', this.tableForeignKey);
    }
}
