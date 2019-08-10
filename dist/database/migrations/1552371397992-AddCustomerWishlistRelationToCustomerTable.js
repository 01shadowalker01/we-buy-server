"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
class AddCustomerWishlistRelationToCustomerTable1552371397992 {
    constructor() {
        this.tableForeignKey = new typeorm_1.TableForeignKey({
            name: 'fk_wishlist_customer',
            columnNames: ['customer_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'customer',
            onDelete: 'CASCADE',
        });
    }
    up(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createForeignKey('customer_wishlist', this.tableForeignKey);
        });
    }
    down(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropForeignKey('customer_wishlist', this.tableForeignKey);
        });
    }
}
exports.AddCustomerWishlistRelationToCustomerTable1552371397992 = AddCustomerWishlistRelationToCustomerTable1552371397992;
//# sourceMappingURL=1552371397992-AddCustomerWishlistRelationToCustomerTable.js.map