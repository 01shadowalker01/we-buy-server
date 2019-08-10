"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
class AddColumnInOrderProduct1558005767816 {
    up(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.addColumn('order_product', new typeorm_1.TableColumn({
                name: 'product_price',
                type: 'DECIMAL(15,4)',
                isPrimary: false,
                isNullable: false,
            }));
        });
    }
    down(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropColumn('order_product', 'product_price');
        });
    }
}
exports.AddColumnInOrderProduct1558005767816 = AddColumnInOrderProduct1558005767816;
//# sourceMappingURL=1558005767816-AddColumnInOrderProduct.js.map