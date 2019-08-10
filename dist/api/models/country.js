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
const zone_1 = require("./zone");
let Country = class Country {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn({ name: 'country_id' }),
    tslib_1.__metadata("design:type", Number)
], Country.prototype, "countryId", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'name' }),
    tslib_1.__metadata("design:type", String)
], Country.prototype, "name", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'iso_code_2' }),
    tslib_1.__metadata("design:type", String)
], Country.prototype, "isoCode2", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'iso_code_3' }),
    tslib_1.__metadata("design:type", String)
], Country.prototype, "isoCode3", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'address_format' }),
    tslib_1.__metadata("design:type", String)
], Country.prototype, "addressFormat", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'postcode_required' }),
    tslib_1.__metadata("design:type", Number)
], Country.prototype, "postcodeRequired", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'is_active' }),
    tslib_1.__metadata("design:type", Number)
], Country.prototype, "isActive", void 0);
tslib_1.__decorate([
    typeorm_1.OneToMany(type => zone_1.Zone, zone => zone.country),
    tslib_1.__metadata("design:type", Array)
], Country.prototype, "zone", void 0);
Country = tslib_1.__decorate([
    typeorm_1.Entity('country')
], Country);
exports.Country = Country;
//# sourceMappingURL=country.js.map