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
class CreateRole {
}
tslib_1.__decorate([
    class_validator_1.IsNotEmpty({
        message: 'name is required',
    }),
    tslib_1.__metadata("design:type", String)
], CreateRole.prototype, "name", void 0);
tslib_1.__decorate([
    class_validator_1.IsNotEmpty({
        message: 'status is required',
    }),
    tslib_1.__metadata("design:type", Number)
], CreateRole.prototype, "status", void 0);
exports.CreateRole = CreateRole;
//# sourceMappingURL=createRoleRequest.js.map