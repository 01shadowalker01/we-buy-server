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
const OrderProductRepository_1 = require("../repositories/OrderProductRepository");
let OrderProductService = class OrderProductService {
    constructor(orderProductRepository, log) {
        this.orderProductRepository = orderProductRepository;
        this.log = log;
    }
    createData(checkoutdata) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info('create a order product data');
            return this.orderProductRepository.save(checkoutdata);
        });
    }
    findData(productid, orderid, orderProductid) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info('find a order product data');
            return this.orderProductRepository.find({ where: { productId: productid, orderId: orderid, orderProductId: orderProductid } });
        });
    }
    find(order) {
        return this.orderProductRepository.find(order);
    }
    // public list( limit: number, offset: number, select: any[], relation: any = [], count: number | boolean): Promise<any> {
    //     const condition: any = {};
    //     condition.where = {};
    //     if (relation && relation.length > 0) {
    //         condition.relations = ['productInformationDetail'];
    //     }
    //     if (limit && limit > 0) {
    //         condition.take = limit;
    //         condition.skip = offset;
    //     }
    //     condition.order = {
    //         createdDate : 'DESC',
    //     };
    //     if (count) {
    //         return this.orderProductRepository.count(condition);
    //     } else {
    //         return this.orderProductRepository.find(condition);
    //     }
    // }
    // order list
    List(limit) {
        return this.orderProductRepository.List(limit);
    }
    // order count
    findAndCount(where) {
        return this.orderProductRepository.findAndCount(where);
    }
};
OrderProductService = tslib_1.__decorate([
    typedi_1.Service(),
    tslib_1.__param(0, typeorm_typedi_extensions_1.OrmRepository()),
    tslib_1.__param(1, Logger_1.Logger(__filename)),
    tslib_1.__metadata("design:paramtypes", [OrderProductRepository_1.OrderProductRepository, Object])
], OrderProductService);
exports.OrderProductService = OrderProductService;
//# sourceMappingURL=OrderProductService.js.map