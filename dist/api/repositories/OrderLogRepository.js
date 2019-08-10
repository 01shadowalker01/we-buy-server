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
const OrderLog_1 = require("../models/OrderLog");
let OrderLogRepository = class OrderLogRepository extends typeorm_1.Repository {
};
OrderLogRepository = tslib_1.__decorate([
    typeorm_1.EntityRepository(OrderLog_1.OrderLog)
], OrderLogRepository);
exports.OrderLogRepository = OrderLogRepository;
//# sourceMappingURL=OrderLogRepository.js.map