"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
class AddOrderRelationToCurrencyTable1546594852304 {
    constructor() {
        this.tableForeignKey = new typeorm_1.TableForeignKey({
            name: 'fk_order_currency1',
            columnNames: ['currency_id'],
            referencedColumnNames: ['currency_id'],
            referencedTableName: 'currency',
            onDelete: 'CASCADE',
        });
    }
    up(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createForeignKey('order', this.tableForeignKey);
        });
    }
    down(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropForeignKey('order', this.tableForeignKey);
        });
    }
}
exports.AddOrderRelationToCurrencyTable1546594852304 = AddOrderRelationToCurrencyTable1546594852304;
//# sourceMappingURL=1546594852304-AddOrderRelationToCurrencyTable.js.map