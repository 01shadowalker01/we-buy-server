import {MigrationInterface, QueryRunner, TableForeignKey} from 'typeorm';

export class CreateCategoryRelationToCategoryDescriptionTable1546593427323 implements MigrationInterface {
    private tableForeignKey = new TableForeignKey({
        name: 'fk_Category_CategoryDescription',
        columnNames: ['category_id'],
        referencedColumnNames: ['category_id'],
        referencedTableName: 'category',
        onDelete: 'CASCADE',
    });
    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createForeignKey('category_description', this.tableForeignKey);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropForeignKey('category_description', this.tableForeignKey);
    }
}
