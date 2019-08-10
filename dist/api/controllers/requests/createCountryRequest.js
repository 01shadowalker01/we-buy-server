"use strict";
/*
 * spurtcommerce API
 * version 2.2
 * http://api.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
require("reflect-metadata");
const class_validator_1 = require("class-validator");
class CreateCountry {
}
tslib_1.__decorate([
    class_validator_1.MaxLength(30, {
        message: 'name is maximum 30 character',
    }),
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", String)
], CreateCountry.prototype, "name", void 0);
tslib_1.__decorate([
    class_validator_1.MaxLength(2, {
        message: 'isoCode2 is maximum 2 character',
    }),
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", String)
], CreateCountry.prototype, "isoCode2", void 0);
tslib_1.__decorate([
    class_validator_1.MaxLength(3, {
        message: 'isoCode3 is maximum 3 character',
    }),
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", String)
], CreateCountry.prototype, "isoCode3", void 0);
tslib_1.__decorate([
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", Number)
], CreateCountry.prototype, "postcodeRequired", void 0);
tslib_1.__decorate([
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", Number)
], CreateCountry.prototype, "status", void 0);
exports.CreateCountry = CreateCountry;
//# sourceMappingURL=createCountryRequest.js.map