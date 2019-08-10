"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
class AddColumnInOrderLog1558003725620 {
    up(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.addColumn('order_log', new typeorm_1.TableColumn({
                name: 'order_prefix_id',
                type: 'varchar',
                length: '45',
                isPrimary: false,
                isNullable: true,
            }));
        });
    }
    down(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropColumn('order_log', 'order_prefix_id');
        });
    }
}
exports.AddColumnInOrderLog1558003725620 = AddColumnInOrderLog1558003725620;
//# sourceMappingURL=1558003725620-AddColumnInOrderLog.js.map