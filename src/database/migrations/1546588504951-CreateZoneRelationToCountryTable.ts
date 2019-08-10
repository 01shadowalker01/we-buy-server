import {MigrationInterface, QueryRunner, TableForeignKey} from 'typeorm';

export class CreateZoneRelationToCountryTable1546588504951 implements MigrationInterface {
    private tableForeignKey = new TableForeignKey({
        name: 'fk_Zone_Country',
        columnNames: ['country_id'],
        referencedColumnNames: ['country_id'],
        referencedTableName: 'country',
        onDelete: 'CASCADE',
    });
    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createForeignKey('zone', this.tableForeignKey);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropForeignKey('zone', this.tableForeignKey);
    }
}
