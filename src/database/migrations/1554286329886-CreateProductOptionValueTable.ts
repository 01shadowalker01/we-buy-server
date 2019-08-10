import {MigrationInterface, QueryRunner, Table, TableForeignKey} from 'typeorm';

export class CreateProductOptionValueTable1554286329886 implements MigrationInterface {
    private tableForeignKey = new TableForeignKey({
        name: 'fk_product_option_value_product',
        columnNames: ['product_id'],
        referencedColumnNames: ['product_id'],
        referencedTableName: 'product',
        onDelete: 'CASCADE',
    });
    public async up(queryRunner: QueryRunner): Promise<any> {
        const table = new Table({
            name: 'product_option_value',
            columns: [
                {
                    name: 'product_option_value_id',
                    type: 'int',
                    length: '11',
                    isGenerated: true,
                    generationStrategy: 'increment',
                    isPrimary: true,
                    isNullable: false,
                },  {
                    name: 'product_option_id',
                    type: 'int',
                    length: '11',
                    isPrimary: false,
                    isNullable: true,
                }, {
                    name: 'product_id',
                    type: 'int',
                    length: '11',
                    isPrimary: false,
                    isNullable: true,
                }, {
                    name: 'option_id',
                    type: 'int',
                    length: '11',
                    isPrimary: false,
                    isNullable: true,
                }, {
                    name: 'option_value_id',
                    type: 'int',
                    length: '11',
                    isPrimary: false,
                    isNullable: true,
                }, {
                    name: 'quantity',
                    type: 'int',
                    length: '11',
                    isPrimary: false,
                    isNullable: true,
                }, {
                    name: 'subtract',
                    type: 'int',
                    length: '11',
                    isPrimary: false,
                    isNullable: true,
                }, {
                    name: 'price',
                    type: 'DECIMAL',
                    isPrimary: false,
                    isNullable: true,
                }, {
                    name: 'price_prefix',
                    type: 'varchar',
                    length: '1',
                    isPrimary: false,
                    isNullable: true,
                }, {
                    name: 'points',
                    type: 'int',
                    length: '11',
                    isPrimary: false,
                    isNullable: true,
                }, {
                    name: 'points_prefix',
                    type: 'varchar',
                    length: '1',
                    isPrimary: false,
                    isNullable: true,
                }, {
                    name: 'weight',
                    type: 'DECIMAL',
                    isPrimary: false,
                    isNullable: true,
                }, {
                    name: 'weight_prefix',
                    type: 'varchar',
                    length: '1',
                    isPrimary: false,
                    isNullable: true,
                }, {
                    name: 'created_by',
                    type: 'integer',
                    length: '11',
                    isPrimary: false,
                    isNullable: true,
                }, {
                    name: 'modified_by',
                    type: 'integer',
                    length: '11',
                    isPrimary: false,
                    isNullable: true,
                }, {
                    name: 'created_date',
                    type: 'DATETIME',
                    isPrimary: false,
                    isNullable: true,
                    default:  'CURRENT_TIMESTAMP',
                }, {
                    name: 'modified_date',
                    type: 'DATETIME',
                    isPrimary: false,
                    isNullable: true,
                    default:  'CURRENT_TIMESTAMP',
                },
            ],
        });
        const ifExsist = await queryRunner.hasTable('product_option_value');
        if (!ifExsist) {
            await queryRunner.createTable(table);
        }
        await queryRunner.createForeignKey('product_option_value', this.tableForeignKey);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable('product_option_value', true);
        await queryRunner.dropForeignKey('product_option_value', this.tableForeignKey);
    }
}
