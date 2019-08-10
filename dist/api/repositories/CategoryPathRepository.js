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
const CategoryPath_1 = require("../models/CategoryPath");
let CategoryPathRepository = class CategoryPathRepository extends typeorm_1.Repository {
};
CategoryPathRepository = tslib_1.__decorate([
    typeorm_1.EntityRepository(CategoryPath_1.CategoryPath)
], CategoryPathRepository);
exports.CategoryPathRepository = CategoryPathRepository;
//# sourceMappingURL=CategoryPathRepository.js.map