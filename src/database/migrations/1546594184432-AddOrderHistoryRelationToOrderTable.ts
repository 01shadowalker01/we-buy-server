import {MigrationInterface, QueryRunner, TableForeignKey} from 'typeorm';

export class AddOrderHistoryRelationToOrderTable1546594184432 implements MigrationInterface {

    private tableForeignKey = new TableForeignKey({
        name: 'fk_order_history_order1',
        columnNames: ['order_id'],
        referencedColumnNames: ['order_id'],
        referencedTableName: 'order',
        onDelete: 'CASCADE',
    });

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createForeignKey('order_history', this.tableForeignKey);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropForeignKey('order_history', this.tableForeignKey);
    }
}
