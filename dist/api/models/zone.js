"use strict";
/*
 * spurtcommerce API
 * version 2.1
 * http://api.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const BaseModel_1 = require("./BaseModel");
const class_transformer_1 = require("class-transformer");
const country_1 = require("./country");
const moment = require("moment/moment");
let Zone = class Zone extends BaseModel_1.BaseModel {
    createDetails() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.createdDate = moment().format('YYYY-MM-DD HH:mm:ss');
        });
    }
    updateDetails() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.modifiedDate = moment().format('YYYY-MM-DD HH:mm:ss');
        });
    }
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn({ name: 'zone_id' }),
    tslib_1.__metadata("design:type", Number)
], Zone.prototype, "zoneId", void 0);
tslib_1.__decorate([
    class_transformer_1.Exclude(),
    typeorm_1.Column({ name: 'country_id' }),
    tslib_1.__metadata("design:type", Number)
], Zone.prototype, "countryId", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'code' }),
    tslib_1.__metadata("design:type", String)
], Zone.prototype, "code", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'name' }),
    tslib_1.__metadata("design:type", String)
], Zone.prototype, "name", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'is_active' }),
    tslib_1.__metadata("design:type", Number)
], Zone.prototype, "isActive", void 0);
tslib_1.__decorate([
    typeorm_1.ManyToOne(type => country_1.Country, country => country.zone),
    typeorm_1.JoinColumn({ name: 'country_id' }),
    tslib_1.__metadata("design:type", country_1.Country)
], Zone.prototype, "country", void 0);
tslib_1.__decorate([
    typeorm_1.BeforeInsert(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], Zone.prototype, "createDetails", null);
tslib_1.__decorate([
    typeorm_1.BeforeUpdate(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], Zone.prototype, "updateDetails", null);
Zone = tslib_1.__decorate([
    typeorm_1.Entity('zone')
], Zone);
exports.Zone = Zone;
//# sourceMappingURL=zone.js.map