import {MigrationInterface, QueryRunner, TableForeignKey} from 'typeorm';

export class CreateUserRelationToUserGroupTable1546521833384 implements MigrationInterface {

    private tableForeignKey = new TableForeignKey({
        name: 'fk_users_usergroup',
        columnNames: ['user_group_id'],
        referencedColumnNames: ['group_id'],
        referencedTableName: 'user_group',
        onDelete: 'CASCADE',
    });

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createForeignKey('users', this.tableForeignKey);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropForeignKey('users', this.tableForeignKey);
    }

}
