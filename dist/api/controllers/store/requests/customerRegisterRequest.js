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
class CustomerRegisterRequest {
}
tslib_1.__decorate([
    class_validator_1.IsNotEmpty({
        message: 'username is required',
    }),
    tslib_1.__metadata("design:type", String)
], CustomerRegisterRequest.prototype, "name", void 0);
tslib_1.__decorate([
    class_validator_1.MinLength(5, {
        message: 'password is minimum 5 character',
    }),
    class_validator_1.IsNotEmpty({
        message: 'password is required',
    }),
    tslib_1.__metadata("design:type", String)
], CustomerRegisterRequest.prototype, "password", void 0);
tslib_1.__decorate([
    class_validator_1.MinLength(5, {
        message: 'Confirm password is minimum 5 character',
    }),
    class_validator_1.IsNotEmpty({
        message: 'Confirm password password is required',
    }),
    tslib_1.__metadata("design:type", String)
], CustomerRegisterRequest.prototype, "confirmPassword", void 0);
tslib_1.__decorate([
    class_validator_1.IsEmail({}, {
        message: 'Please provide valid emailId',
    }),
    class_validator_1.IsNotEmpty({
        message: 'Email Id is required',
    }),
    tslib_1.__metadata("design:type", String)
], CustomerRegisterRequest.prototype, "emailId", void 0);
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", Number)
], CustomerRegisterRequest.prototype, "phoneNumber", void 0);
exports.CustomerRegisterRequest = CustomerRegisterRequest;
//# sourceMappingURL=customerRegisterRequest.js.map