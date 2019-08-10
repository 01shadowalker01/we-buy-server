import {MigrationInterface, QueryRunner, TableForeignKey} from 'typeorm';

export class AddPoductToCategoryRelationToCategoryTable1546590872444 implements MigrationInterface {

    private tableForeignKey = new TableForeignKey({
        name: 'fk_product_to_category_category1',
        columnNames: ['category_id'],
        referencedColumnNames: ['category_id'],
        referencedTableName: 'category',
        onDelete: 'CASCADE',
    });

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createForeignKey('product_to_category', this.tableForeignKey);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropForeignKey('product_to_category', this.tableForeignKey);
    }
}
