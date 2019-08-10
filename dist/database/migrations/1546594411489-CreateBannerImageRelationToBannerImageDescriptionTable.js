"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
class CreateBannerImageRelationToBannerImageDescriptionTable1546594411489 {
    constructor() {
        this.tableForeignKey = new typeorm_1.TableForeignKey({
            name: 'fk_BannerImage_BannerImageDescription',
            columnNames: ['banner_image_id'],
            referencedColumnNames: ['banner_image_id'],
            referencedTableName: 'banner_image',
            onDelete: 'CASCADE',
        });
    }
    up(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createForeignKey('banner_image_description', this.tableForeignKey);
        });
    }
    down(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropForeignKey('banner_image_description', this.tableForeignKey);
        });
    }
}
exports.CreateBannerImageRelationToBannerImageDescriptionTable1546594411489 = CreateBannerImageRelationToBannerImageDescriptionTable1546594411489;
//# sourceMappingURL=1546594411489-CreateBannerImageRelationToBannerImageDescriptionTable.js.map