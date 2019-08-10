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
require("reflect-metadata");
const class_validator_1 = require("class-validator");
class EditProfileRequest {
}
tslib_1.__decorate([
    class_validator_1.MaxLength(30, {
        message: 'username is maximum 30 character',
    }),
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", String)
], EditProfileRequest.prototype, "username", void 0);
tslib_1.__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsEmail(),
    tslib_1.__metadata("design:type", String)
], EditProfileRequest.prototype, "email", void 0);
tslib_1.__decorate([
    class_validator_1.MaxLength(10, {
        message: 'phonenumber is maximum 10 character',
    }),
    tslib_1.__metadata("design:type", String)
], EditProfileRequest.prototype, "phoneNumber", void 0);
exports.EditProfileRequest = EditProfileRequest;
//# sourceMappingURL=editProfileRequest.js.map