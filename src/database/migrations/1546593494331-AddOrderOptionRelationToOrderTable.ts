import {MigrationInterface, QueryRunner, TableForeignKey} from 'typeorm';

export class AddOrderOptionRelationToOrderTable1546593494331 implements MigrationInterface {

    private tableForeignKey = new TableForeignKey({
        name: 'fk_order_option_order1',
        columnNames: ['order_id'],
        referencedColumnNames: ['order_id'],
        referencedTableName: 'order',
        onDelete: 'CASCADE',
    });

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createForeignKey('order_option', this.tableForeignKey);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropForeignKey('order_option', this.tableForeignKey);
    }
}
