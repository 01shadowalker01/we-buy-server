"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
class CreateCountryRelationToZoneGeoTable1546588310183 {
    constructor() {
        this.tableForeignKey = new typeorm_1.TableForeignKey({
            name: 'fk_Country_ZoneGeo',
            columnNames: ['country_id'],
            referencedColumnNames: ['country_id'],
            referencedTableName: 'country',
            onDelete: 'CASCADE',
        });
    }
    up(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createForeignKey('zone_to_geo_zone', this.tableForeignKey);
        });
    }
    down(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropForeignKey('zone_to_geo_zone', this.tableForeignKey);
        });
    }
}
exports.CreateCountryRelationToZoneGeoTable1546588310183 = CreateCountryRelationToZoneGeoTable1546588310183;
//# sourceMappingURL=1546588310183-CreateCountryRelationToZoneGeoTable.js.map