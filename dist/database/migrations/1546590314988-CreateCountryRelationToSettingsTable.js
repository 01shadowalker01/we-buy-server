"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
class CreateCountryRelationToSettingsTable1546590314988 {
    constructor() {
        this.tableForeignKey = new typeorm_1.TableForeignKey({
            name: 'fk_Country_Settings',
            columnNames: ['country_id'],
            referencedColumnNames: ['country_id'],
            referencedTableName: 'country',
            onDelete: 'SET NULL',
        });
    }
    up(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createForeignKey('settings', this.tableForeignKey);
        });
    }
    down(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropForeignKey('settings', this.tableForeignKey);
        });
    }
}
exports.CreateCountryRelationToSettingsTable1546590314988 = CreateCountryRelationToSettingsTable1546590314988;
//# sourceMappingURL=1546590314988-CreateCountryRelationToSettingsTable.js.map