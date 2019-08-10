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
const categoryModel_1 = require("../models/categoryModel");
let CategoryRepository = class CategoryRepository extends typeorm_1.Repository {
};
CategoryRepository = tslib_1.__decorate([
    typeorm_1.EntityRepository(categoryModel_1.Category)
], CategoryRepository);
exports.CategoryRepository = CategoryRepository;
//# sourceMappingURL=categoryRepository.js.map