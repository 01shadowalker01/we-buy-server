"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
class AddCustomerTransactionRelationToOrderTable1546592870823 {
    constructor() {
        this.tableForeignKey = new typeorm_1.TableForeignKey({
            name: 'fk_customer_transaction_order1',
            columnNames: ['order_id'],
            referencedColumnNames: ['order_id'],
            referencedTableName: 'order',
            onDelete: 'CASCADE',
        });
    }
    up(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createForeignKey('customer_transaction', this.tableForeignKey);
        });
    }
    down(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropForeignKey('customer_transaction', this.tableForeignKey);
        });
    }
}
exports.AddCustomerTransactionRelationToOrderTable1546592870823 = AddCustomerTransactionRelationToOrderTable1546592870823;
//# sourceMappingURL=1546592870823-AddCustomerTransactionRelationToOrderTable.js.map