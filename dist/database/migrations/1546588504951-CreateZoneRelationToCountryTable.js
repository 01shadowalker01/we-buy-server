"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
class CreateZoneRelationToCountryTable1546588504951 {
    constructor() {
        this.tableForeignKey = new typeorm_1.TableForeignKey({
            name: 'fk_Zone_Country',
            columnNames: ['country_id'],
            referencedColumnNames: ['country_id'],
            referencedTableName: 'country',
            onDelete: 'CASCADE',
        });
    }
    up(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createForeignKey('zone', this.tableForeignKey);
        });
    }
    down(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropForeignKey('zone', this.tableForeignKey);
        });
    }
}
exports.CreateZoneRelationToCountryTable1546588504951 = CreateZoneRelationToCountryTable1546588504951;
//# sourceMappingURL=1546588504951-CreateZoneRelationToCountryTable.js.map