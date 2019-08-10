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
class CreateOrderStatus {
}
tslib_1.__decorate([
    class_validator_1.IsNotEmpty({
        message: 'name is required',
    }),
    tslib_1.__metadata("design:type", String)
], CreateOrderStatus.prototype, "name", void 0);
tslib_1.__decorate([
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", String)
], CreateOrderStatus.prototype, "colorCode", void 0);
tslib_1.__decorate([
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", Number)
], CreateOrderStatus.prototype, "status", void 0);
exports.CreateOrderStatus = CreateOrderStatus;
//# sourceMappingURL=createOrderStatusRequest.js.map