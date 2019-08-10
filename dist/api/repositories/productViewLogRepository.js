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
const productViewLog_1 = require("../models/productViewLog");
let ProductViewLogRepository = class ProductViewLogRepository extends typeorm_1.Repository {
};
ProductViewLogRepository = tslib_1.__decorate([
    typeorm_1.EntityRepository(productViewLog_1.ProductViewLog)
], ProductViewLogRepository);
exports.ProductViewLogRepository = ProductViewLogRepository;
//# sourceMappingURL=productViewLogRepository.js.map