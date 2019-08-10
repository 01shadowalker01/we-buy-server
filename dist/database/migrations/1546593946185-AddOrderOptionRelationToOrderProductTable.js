"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
class AddOrderOptionRelationToOrderProductTable1546593946185 {
    constructor() {
        this.tableForeignKey = new typeorm_1.TableForeignKey({
            name: 'fk_order_option_order_product1',
            columnNames: ['order_product_id'],
            referencedColumnNames: ['order_product_id'],
            referencedTableName: 'order_product',
            onDelete: 'CASCADE',
        });
    }
    up(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createForeignKey('order_option', this.tableForeignKey);
        });
    }
    down(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropForeignKey('order_option', this.tableForeignKey);
        });
    }
}
exports.AddOrderOptionRelationToOrderProductTable1546593946185 = AddOrderOptionRelationToOrderProductTable1546593946185;
//# sourceMappingURL=1546593946185-AddOrderOptionRelationToOrderProductTable.js.map