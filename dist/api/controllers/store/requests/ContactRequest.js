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
class ContactRequest {
}
tslib_1.__decorate([
    class_validator_1.IsNotEmpty({
        message: 'name is required',
    }),
    tslib_1.__metadata("design:type", String)
], ContactRequest.prototype, "name", void 0);
tslib_1.__decorate([
    class_validator_1.IsEmail({}, {
        message: 'Please provide a emailId',
    }),
    class_validator_1.IsNotEmpty({
        message: 'Email Id is required',
    }),
    tslib_1.__metadata("design:type", String)
], ContactRequest.prototype, "email", void 0);
tslib_1.__decorate([
    class_validator_1.IsNotEmpty({
        message: 'Phone Number is required',
    }),
    tslib_1.__metadata("design:type", String)
], ContactRequest.prototype, "phoneNumber", void 0);
tslib_1.__decorate([
    class_validator_1.MinLength(6, {
        message: 'Message is minimum 6 character',
    }),
    class_validator_1.IsNotEmpty({
        message: 'Message is required',
    }),
    tslib_1.__metadata("design:type", String)
], ContactRequest.prototype, "message", void 0);
exports.ContactRequest = ContactRequest;
//# sourceMappingURL=ContactRequest.js.map