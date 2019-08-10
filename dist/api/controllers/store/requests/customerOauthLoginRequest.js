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
class CustomerOauthLogin {
}
tslib_1.__decorate([
    class_validator_1.IsEmail({}, {
        message: 'Please give valid emailId',
    }),
    class_validator_1.IsNotEmpty({
        message: 'Email Id is required',
    }),
    tslib_1.__metadata("design:type", String)
], CustomerOauthLogin.prototype, "emailId", void 0);
exports.CustomerOauthLogin = CustomerOauthLogin;
//# sourceMappingURL=customerOauthLoginRequest.js.map