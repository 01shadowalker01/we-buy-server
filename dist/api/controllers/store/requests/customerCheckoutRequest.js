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
class CustomerCheckoutRequest {
}
tslib_1.__decorate([
    class_validator_1.IsNotEmpty({
        message: 'Shipping First name is required',
    }),
    tslib_1.__metadata("design:type", String)
], CustomerCheckoutRequest.prototype, "shippingFirstName", void 0);
tslib_1.__decorate([
    class_validator_1.IsNotEmpty({
        message: 'Shipping Address 1 is required',
    }),
    tslib_1.__metadata("design:type", String)
], CustomerCheckoutRequest.prototype, "shippingAddress_1", void 0);
tslib_1.__decorate([
    class_validator_1.IsNotEmpty({
        message: 'Shipping City is required',
    }),
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], CustomerCheckoutRequest.prototype, "shippingCity", void 0);
tslib_1.__decorate([
    class_validator_1.IsNotEmpty({
        message: 'Shipping Post Code is required',
    }),
    tslib_1.__metadata("design:type", Number)
], CustomerCheckoutRequest.prototype, "shippingPostCode", void 0);
tslib_1.__decorate([
    class_validator_1.IsNotEmpty({
        message: 'Shipping Country is required',
    }),
    class_validator_1.IsString(),
    tslib_1.__metadata("design:type", String)
], CustomerCheckoutRequest.prototype, "shippingCountry", void 0);
tslib_1.__decorate([
    class_validator_1.IsNotEmpty({
        message: 'Shipping Zone is required',
    }),
    tslib_1.__metadata("design:type", String)
], CustomerCheckoutRequest.prototype, "shippingZone", void 0);
tslib_1.__decorate([
    class_validator_1.IsNotEmpty({
        message: 'Phone Number is required',
    }),
    tslib_1.__metadata("design:type", Number)
], CustomerCheckoutRequest.prototype, "phoneNumber", void 0);
tslib_1.__decorate([
    class_validator_1.IsEmail(),
    class_validator_1.IsNotEmpty({
        message: 'Email Id is required',
    }),
    tslib_1.__metadata("design:type", String)
], CustomerCheckoutRequest.prototype, "emailId", void 0);
tslib_1.__decorate([
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", Array)
], CustomerCheckoutRequest.prototype, "productDetails", void 0);
exports.CustomerCheckoutRequest = CustomerCheckoutRequest;
//# sourceMappingURL=customerCheckoutRequest.js.map