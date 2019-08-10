import {MigrationInterface, QueryRunner, TableColumn} from 'typeorm';

export class AddColumnProductViewLog1558073984389 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.addColumn('product_view_log', new TableColumn({

            name: 'customer_id',
            type: 'int',
            length: '11',
            isPrimary: false,
            isNullable: true,
        })
    );
    }
    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropColumn('product_view_log', 'customer_id');
    }

}
