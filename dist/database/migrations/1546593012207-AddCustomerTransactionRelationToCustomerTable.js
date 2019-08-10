"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
class AddCustomerTransactionRelationToCustomerTable1546593012207 {
    constructor() {
        this.tableForeignKey = new typeorm_1.TableForeignKey({
            name: 'fk_customer_transaction_customer1',
            columnNames: ['customer_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'customer',
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
exports.AddCustomerTransactionRelationToCustomerTable1546593012207 = AddCustomerTransactionRelationToCustomerTable1546593012207;
//# sourceMappingURL=1546593012207-AddCustomerTransactionRelationToCustomerTable.js.map