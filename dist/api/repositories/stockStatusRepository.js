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
const stockStatus_1 = require("../models/stockStatus");
let StockStatusRepository = class StockStatusRepository extends typeorm_1.Repository {
};
StockStatusRepository = tslib_1.__decorate([
    typeorm_1.EntityRepository(stockStatus_1.StockStatus)
], StockStatusRepository);
exports.StockStatusRepository = StockStatusRepository;
//# sourceMappingURL=stockStatusRepository.js.map