import {MigrationInterface, QueryRunner, TableForeignKey} from 'typeorm';

export class CreateBannerImageRelationToBannerImageDescriptionTable1546594411489 implements MigrationInterface {
    private tableForeignKey = new TableForeignKey({
        name: 'fk_BannerImage_BannerImageDescription',
        columnNames: ['banner_image_id'],
        referencedColumnNames: ['banner_image_id'],
        referencedTableName: 'banner_image',
        onDelete: 'CASCADE',
    });
    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createForeignKey('banner_image_description', this.tableForeignKey);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropForeignKey('banner_image_description', this.tableForeignKey);
    }
}
