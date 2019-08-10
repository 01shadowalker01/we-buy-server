"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
class AddPoductToCategoryRelationToCategoryTable1546590872444 {
    constructor() {
        this.tableForeignKey = new typeorm_1.TableForeignKey({
            name: 'fk_product_to_category_category1',
            columnNames: ['category_id'],
            referencedColumnNames: ['category_id'],
            referencedTableName: 'category',
            onDelete: 'CASCADE',
        });
    }
    up(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createForeignKey('product_to_category', this.tableForeignKey);
        });
    }
    down(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropForeignKey('product_to_category', this.tableForeignKey);
        });
    }
}
exports.AddPoductToCategoryRelationToCategoryTable1546590872444 = AddPoductToCategoryRelationToCategoryTable1546590872444;
//# sourceMappingURL=1546590872444-AddPoductToCategoryRelationToCategoryTable.js.map