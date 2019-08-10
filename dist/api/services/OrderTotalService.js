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
const typedi_1 = require("typedi");
const typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
const Logger_1 = require("../../decorators/Logger");
const OrderTotalRepository_1 = require("../repositories/OrderTotalRepository");
let OrderTotalService = class OrderTotalService {
    constructor(orderTotalRepository, log) {
        this.orderTotalRepository = orderTotalRepository;
        this.log = log;
    }
    // create order total data
    createOrderTotalData(orderTotalData) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info('create a order total data');
            return this.orderTotalRepository.save(orderTotalData);
        });
    }
};
OrderTotalService = tslib_1.__decorate([
    typedi_1.Service(),
    tslib_1.__param(0, typeorm_typedi_extensions_1.OrmRepository()),
    tslib_1.__param(1, Logger_1.Logger(__filename)),
    tslib_1.__metadata("design:paramtypes", [OrderTotalRepository_1.OrderTotalRepository, Object])
], OrderTotalService);
exports.OrderTotalService = OrderTotalService;
//# sourceMappingURL=OrderTotalService.js.map