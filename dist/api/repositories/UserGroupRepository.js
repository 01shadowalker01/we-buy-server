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
const typeorm_1 = require("typeorm");
const UserGroup_1 = require("../models/UserGroup");
let UserGroupRepository = class UserGroupRepository extends typeorm_1.Repository {
};
UserGroupRepository = tslib_1.__decorate([
    typeorm_1.EntityRepository(UserGroup_1.UserGroup)
], UserGroupRepository);
exports.UserGroupRepository = UserGroupRepository;
//# sourceMappingURL=UserGroupRepository.js.map