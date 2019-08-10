"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
class CreateZoneCountryRelationToZoneGeoTable1546586351105 {
    constructor() {
        this.tableForeignKey = new typeorm_1.TableForeignKey({
            name: 'fk_Zone_ZoneGeo',
            columnNames: ['zone_id'],
            referencedColumnNames: ['zone_id'],
            referencedTableName: 'zone',
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
exports.CreateZoneCountryRelationToZoneGeoTable1546586351105 = CreateZoneCountryRelationToZoneGeoTable1546586351105;
//# sourceMappingURL=1546586351105-CreateZoneCountryRelationToZoneGeoTable.js.map