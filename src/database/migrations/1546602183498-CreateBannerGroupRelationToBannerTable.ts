import {MigrationInterface, QueryRunner, TableForeignKey} from 'typeorm';

export class CreateBannerGroupRelationToBannerTable1546602183498 implements MigrationInterface {
    private tableForeignKey = new TableForeignKey({
        name: 'fk_BannerGroup_Banner',
        columnNames: ['banner_group_id'],
        referencedColumnNames: ['banner_group_id'],
        referencedTableName: 'banner_group',
        onDelete: 'CASCADE',
    });
    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createForeignKey('banner', this.tableForeignKey);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropForeignKey('banner', this.tableForeignKey);
    }
}
