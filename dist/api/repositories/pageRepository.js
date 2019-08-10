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
const page_1 = require("../models/page");
let PageRepository = class PageRepository extends typeorm_1.Repository {
};
PageRepository = tslib_1.__decorate([
    typeorm_1.EntityRepository(page_1.Page)
], PageRepository);
exports.PageRepository = PageRepository;
//# sourceMappingURL=pageRepository.js.map