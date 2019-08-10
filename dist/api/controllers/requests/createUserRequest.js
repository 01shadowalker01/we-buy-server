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
class CreateUser {
}
tslib_1.__decorate([
    class_validator_1.IsEmail({}, {
        message: 'Please provide username as emailId',
    }),
    class_validator_1.IsNotEmpty({
        message: 'username is required',
    }),
    tslib_1.__metadata("design:type", String)
], CreateUser.prototype, "username", void 0);
tslib_1.__decorate([
    class_validator_1.MaxLength(10, {
        message: 'password is maximum 10 character',
    }),
    class_validator_1.MinLength(5, {
        message: 'password is minimum 5 character',
    }),
    class_validator_1.IsNotEmpty({
        message: 'password is required',
    }),
    tslib_1.__metadata("design:type", String)
], CreateUser.prototype, "password", void 0);
tslib_1.__decorate([
    class_validator_1.MaxLength(30, {
        message: 'First name is maximum 30 character',
    }),
    class_validator_1.IsNotEmpty({
        message: 'First name is required',
    }),
    tslib_1.__metadata("design:type", String)
], CreateUser.prototype, "firstName", void 0);
tslib_1.__decorate([
    class_validator_1.MaxLength(30, {
        message: 'Last name is maximum 30 character',
    }),
    class_validator_1.IsNotEmpty({
        message: 'Last name is required',
    }),
    tslib_1.__metadata("design:type", String)
], CreateUser.prototype, "lastName", void 0);
tslib_1.__decorate([
    class_validator_1.IsEmail({}, {
        message: 'Please provide valid email Id',
    }),
    class_validator_1.IsNotEmpty({
        message: 'Email - Id is required',
    }),
    tslib_1.__metadata("design:type", String)
], CreateUser.prototype, "email", void 0);
tslib_1.__decorate([
    class_validator_1.IsNotEmpty({
        message: 'User Group Id is required',
    }),
    tslib_1.__metadata("design:type", Number)
], CreateUser.prototype, "userGroupId", void 0);
exports.CreateUser = CreateUser;
//# sourceMappingURL=createUserRequest.js.map