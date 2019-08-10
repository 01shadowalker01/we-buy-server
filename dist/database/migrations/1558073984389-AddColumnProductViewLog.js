"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
class AddColumnProductViewLog1558073984389 {
    up(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.addColumn('product_view_log', new typeorm_1.TableColumn({
                name: 'customer_id',
                type: 'int',
                length: '11',
                isPrimary: false,
                isNullable: true,
            }));
        });
    }
    down(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropColumn('product_view_log', 'customer_id');
        });
    }
}
exports.AddColumnProductViewLog1558073984389 = AddColumnProductViewLog1558073984389;
//# sourceMappingURL=1558073984389-AddColumnProductViewLog.js.map