import {MigrationInterface, QueryRunner, TableForeignKey} from 'typeorm';

export class CreatebannerRelationToBannerImageDescriptionTable1546594100673 implements MigrationInterface {
    private tableForeignKey = new TableForeignKey({
        name: 'fk_Banner_BannerImageDescription',
        columnNames: ['banner_id'],
        referencedColumnNames: ['banner_id'],
        referencedTableName: 'banner',
        onDelete: 'CASCADE',
    });
    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createForeignKey('banner_image_description', this.tableForeignKey);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropForeignKey('banner_image_description', this.tableForeignKey);
    }
}
