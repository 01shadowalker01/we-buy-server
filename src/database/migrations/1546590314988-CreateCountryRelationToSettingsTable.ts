import {MigrationInterface, QueryRunner, TableForeignKey} from 'typeorm';

export class CreateCountryRelationToSettingsTable1546590314988 implements MigrationInterface {
    private tableForeignKey = new TableForeignKey({
        name: 'fk_Country_Settings',
        columnNames: ['country_id'],
        referencedColumnNames: ['country_id'],
        referencedTableName: 'country',
        onDelete: 'SET NULL',
    });
    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createForeignKey('settings', this.tableForeignKey);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropForeignKey('settings', this.tableForeignKey);
    }
}
