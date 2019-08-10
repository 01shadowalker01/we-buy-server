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
const OrderProduct_1 = require("../models/OrderProduct");
let OrderProductRepository = class OrderProductRepository extends typeorm_1.Repository {
    List(limit) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const query = yield this.manager.createQueryBuilder(OrderProduct_1.OrderProduct, 'orderProduct');
            query.select(['DISTINCT product_id as productId', 'order_id as orderId', 'name as ProductName', 'quantity as Quantity', 'total as Total', ' created_date as CreatedDate']);
            // query.groupBy('productId');
            query.orderBy('created_date', 'DESC');
            query.limit(limit);
            return query.getRawMany();
        });
    }
};
OrderProductRepository = tslib_1.__decorate([
    typeorm_1.EntityRepository(OrderProduct_1.OrderProduct)
], OrderProductRepository);
exports.OrderProductRepository = OrderProductRepository;
//# sourceMappingURL=OrderProductRepository.js.map