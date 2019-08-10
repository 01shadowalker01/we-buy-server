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
class CreateCurrency {
}
tslib_1.__decorate([
    class_validator_1.MaxLength(30, {
        message: 'title is maximum 30 character',
    }),
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", String)
], CreateCurrency.prototype, "title", void 0);
tslib_1.__decorate([
    class_validator_1.MaxLength(3, {
        message: 'code is maximum 3 character',
    }),
    tslib_1.__metadata("design:type", String)
], CreateCurrency.prototype, "code", void 0);
tslib_1.__decorate([
    class_validator_1.MaxLength(30, {
        message: 'symbolLeft is maximum 30 character',
    }),
    tslib_1.__metadata("design:type", String)
], CreateCurrency.prototype, "symbolLeft", void 0);
tslib_1.__decorate([
    class_validator_1.MaxLength(30, {
        message: 'symbolRight is maximum 30 character',
    }),
    tslib_1.__metadata("design:type", String)
], CreateCurrency.prototype, "symbolRight", void 0);
tslib_1.__decorate([
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", Number)
], CreateCurrency.prototype, "value", void 0);
tslib_1.__decorate([
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", Number)
], CreateCurrency.prototype, "status", void 0);
exports.CreateCurrency = CreateCurrency;
//# sourceMappingURL=createCurrencyRequest.js.map