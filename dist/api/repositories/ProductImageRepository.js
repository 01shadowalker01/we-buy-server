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
const ProductImage_1 = require("../models/ProductImage");
let ProductImageRepository = class ProductImageRepository extends typeorm_1.Repository {
};
ProductImageRepository = tslib_1.__decorate([
    typeorm_1.EntityRepository(ProductImage_1.ProductImage)
], ProductImageRepository);
exports.ProductImageRepository = ProductImageRepository;
//# sourceMappingURL=ProductImageRepository.js.map