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
class UpdateUserRequest {
}
tslib_1.__decorate([
    class_validator_1.IsEmail({}, {
        message: 'Please provide username as emailId',
    }),
    class_validator_1.IsNotEmpty({
        message: 'username is required',
    }),
    tslib_1.__metadata("design:type", String)
], UpdateUserRequest.prototype, "username", void 0);
tslib_1.__decorate([
    class_validator_1.MaxLength(30, {
        message: 'First name is maximum 30 character',
    }),
    class_validator_1.IsNotEmpty({
        message: 'First name is required',
    }),
    tslib_1.__metadata("design:type", String)
], UpdateUserRequest.prototype, "firstName", void 0);
tslib_1.__decorate([
    class_validator_1.MaxLength(30, {
        message: 'Last name is maximum 30 character',
    }),
    class_validator_1.IsNotEmpty({
        message: 'Last name is required',
    }),
    tslib_1.__metadata("design:type", String)
], UpdateUserRequest.prototype, "lastName", void 0);
tslib_1.__decorate([
    class_validator_1.IsEmail({}, {
        message: 'Please provide valid email Id',
    }),
    class_validator_1.IsNotEmpty({
        message: 'Email - Id is required',
    }),
    tslib_1.__metadata("design:type", String)
], UpdateUserRequest.prototype, "email", void 0);
tslib_1.__decorate([
    class_validator_1.IsNotEmpty({
        message: 'User Group Id is required',
    }),
    tslib_1.__metadata("design:type", Number)
], UpdateUserRequest.prototype, "userGroupId", void 0);
exports.UpdateUserRequest = UpdateUserRequest;
//# sourceMappingURL=UpdateUserRequest.js.map