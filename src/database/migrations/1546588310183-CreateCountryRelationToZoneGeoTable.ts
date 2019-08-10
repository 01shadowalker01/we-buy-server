import {MigrationInterface, QueryRunner, TableForeignKey} from 'typeorm';

export class CreateCountryRelationToZoneGeoTable1546588310183 implements MigrationInterface {
    private tableForeignKey = new TableForeignKey({
        name: 'fk_Country_ZoneGeo',
        columnNames: ['country_id'],
        referencedColumnNames: ['country_id'],
        referencedTableName: 'country',
        onDelete: 'CASCADE',
    });

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createForeignKey('zone_to_geo_zone', this.tableForeignKey);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropForeignKey('zone_to_geo_zone', this.tableForeignKey);
    }
}
