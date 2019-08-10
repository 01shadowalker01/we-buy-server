"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
class CreateProductOptionValueTable1554286329886 {
    constructor() {
        this.tableForeignKey = new typeorm_1.TableForeignKey({
            name: 'fk_product_option_value_product',
            columnNames: ['product_id'],
            referencedColumnNames: ['product_id'],
            referencedTableName: 'product',
            onDelete: 'CASCADE',
        });
    }
    up(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const table = new typeorm_1.Table({
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
                    }, {
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
                        default: 'CURRENT_TIMESTAMP',
                    }, {
                        name: 'modified_date',
                        type: 'DATETIME',
                        isPrimary: false,
                        isNullable: true,
                        default: 'CURRENT_TIMESTAMP',
                    },
                ],
            });
            const ifExsist = yield queryRunner.hasTable('product_option_value');
            if (!ifExsist) {
                yield queryRunner.createTable(table);
            }
            yield queryRunner.createForeignKey('product_option_value', this.tableForeignKey);
        });
    }
    down(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropTable('product_option_value', true);
            yield queryRunner.dropForeignKey('product_option_value', this.tableForeignKey);
        });
    }
}
exports.CreateProductOptionValueTable1554286329886 = CreateProductOptionValueTable1554286329886;
//# sourceMappingURL=1554286329886-CreateProductOptionValueTable.js.map