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
const ProductDiscount_1 = require("../models/ProductDiscount");
let ProductDiscountRepository = class ProductDiscountRepository extends typeorm_1.Repository {
    findDiscountPrice(productId, todaydate) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const query = yield this.manager.createQueryBuilder(ProductDiscount_1.ProductDiscount, 'productDiscount');
            query.select(['productDiscount.price as price']);
            query.where('productDiscount.productId = ' + productId);
            query.andWhere('(productDiscount.dateStart <= :todaydate AND productDiscount.dateEnd >= :todaydate)', { todaydate });
            query.orderBy('productDiscount.priority', 'ASC');
            query.addOrderBy('productDiscount.price', 'ASC');
            query.limit('1');
            console.log(query.getQuery());
            return query.getRawOne();
        });
    }
};
ProductDiscountRepository = tslib_1.__decorate([
    typeorm_1.EntityRepository(ProductDiscount_1.ProductDiscount)
], ProductDiscountRepository);
exports.ProductDiscountRepository = ProductDiscountRepository;
//# sourceMappingURL=ProductDiscountRepository.js.map