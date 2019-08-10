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
const Contact_1 = require("../models/Contact");
let ContactRepository = class ContactRepository extends typeorm_1.Repository {
};
ContactRepository = tslib_1.__decorate([
    typeorm_1.EntityRepository(Contact_1.Contact)
], ContactRepository);
exports.ContactRepository = ContactRepository;
//# sourceMappingURL=ContactRepository.js.map