"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
class AddColumnInProductRating1557134963328 {
    up(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.addColumn('product_rating', new typeorm_1.TableColumn({
                name: 'order_product_id',
                type: 'int',
                length: '11',
                isPrimary: false,
                isNullable: true,
            }));
            const foreignKey = new typeorm_1.TableForeignKey({
                columnNames: ['order_product_id'],
                referencedColumnNames: ['order_product_id'],
                referencedTableName: 'order_product',
                onDelete: 'CASCADE',
            });
            yield queryRunner.createForeignKey('product_rating', foreignKey);
        });
    }
    down(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropColumn('customer', 'orderProductId');
        });
    }
}
exports.AddColumnInProductRating1557134963328 = AddColumnInProductRating1557134963328;
//# sourceMappingURL=1557134963328-AddColumnInProductRating.js.map