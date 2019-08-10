"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
class AddColumnInCustomer1555504622184 {
    up(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.addColumn('customer', new typeorm_1.TableColumn({
                name: 'local',
                type: 'varchar',
                length: '255',
                isPrimary: false,
                isNullable: true,
            }));
            yield queryRunner.addColumn('customer', new typeorm_1.TableColumn({
                name: 'oauth_data',
                type: 'varchar',
                length: '255',
                isPrimary: false,
                isNullable: true,
            }));
        });
    }
    down(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropColumn('customer', 'local');
            yield queryRunner.dropColumn('customer', 'oauth_data');
        });
    }
}
exports.AddColumnInCustomer1555504622184 = AddColumnInCustomer1555504622184;
//# sourceMappingURL=1555504622184-AddColumnInCustomer.js.map