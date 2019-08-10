"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
class AddCustomerWishlistRelationToProductTable1552371852472 {
    constructor() {
        this.tableForeignKey = new typeorm_1.TableForeignKey({
            name: 'fk_wishlist_product',
            columnNames: ['product_id'],
            referencedColumnNames: ['product_id'],
            referencedTableName: 'product',
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
exports.AddCustomerWishlistRelationToProductTable1552371852472 = AddCustomerWishlistRelationToProductTable1552371852472;
//# sourceMappingURL=1552371852472-AddCustomerWishlistRelationToProductTable.js.map