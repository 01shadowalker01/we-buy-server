import {MigrationInterface, QueryRunner, TableForeignKey} from 'typeorm';

export class AddPageRelationToPageGroupTable1546585572765 implements MigrationInterface {

    private tableForeignKey = new TableForeignKey({
        name: 'fk_page_page_group1',
        columnNames: ['page_group_id'],
        referencedColumnNames: ['page_group_id'],
        referencedTableName: 'page_group',
        onDelete: 'CASCADE',
    });

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createForeignKey('page', this.tableForeignKey);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropForeignKey('page', this.tableForeignKey);
    }
}
