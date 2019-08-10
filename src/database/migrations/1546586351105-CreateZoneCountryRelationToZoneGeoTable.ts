import {MigrationInterface, QueryRunner, TableForeignKey} from 'typeorm';

export class CreateZoneCountryRelationToZoneGeoTable1546586351105 implements MigrationInterface {
    private tableForeignKey = new TableForeignKey({
        name: 'fk_Zone_ZoneGeo',
        columnNames: ['zone_id'],
        referencedColumnNames: ['zone_id'],
        referencedTableName: 'zone',
        onDelete: 'CASCADE',
    });

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createForeignKey('zone_to_geo_zone', this.tableForeignKey);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropForeignKey('zone_to_geo_zone', this.tableForeignKey);
    }
}
