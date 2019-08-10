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
const ProductSpecial_1 = require("../models/ProductSpecial");
let ProductSpecialRepository = class ProductSpecialRepository extends typeorm_1.Repository {
    findSpecialPrice(productId, todaydate) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const query = yield this.manager.createQueryBuilder(ProductSpecial_1.ProductSpecial, 'productSpecial');
            query.select(['productSpecial.price as price']);
            query.where('productSpecial.productId = ' + productId);
            query.andWhere('(productSpecial.dateStart <= :todaydate AND productSpecial.dateEnd >= :todaydate)', { todaydate });
            query.orderBy('productSpecial.priority', 'ASC');
            query.addOrderBy('productSpecial.price', 'ASC');
            query.limit('1');
            console.log(query.getQuery());
            return query.getRawOne();
        });
    }
};
ProductSpecialRepository = tslib_1.__decorate([
    typeorm_1.EntityRepository(ProductSpecial_1.ProductSpecial)
], ProductSpecialRepository);
exports.ProductSpecialRepository = ProductSpecialRepository;
//# sourceMappingURL=ProductSpecialRepository.js.map