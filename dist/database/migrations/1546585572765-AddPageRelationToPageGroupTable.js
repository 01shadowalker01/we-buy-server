"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
class AddPageRelationToPageGroupTable1546585572765 {
    constructor() {
        this.tableForeignKey = new typeorm_1.TableForeignKey({
            name: 'fk_page_page_group1',
            columnNames: ['page_group_id'],
            referencedColumnNames: ['page_group_id'],
            referencedTableName: 'page_group',
            onDelete: 'CASCADE',
        });
    }
    up(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createForeignKey('page', this.tableForeignKey);
        });
    }
    down(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropForeignKey('page', this.tableForeignKey);
        });
    }
}
exports.AddPageRelationToPageGroupTable1546585572765 = AddPageRelationToPageGroupTable1546585572765;
//# sourceMappingURL=1546585572765-AddPageRelationToPageGroupTable.js.map