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
const ProductModel_1 = require("../models/ProductModel");
const ProductToCategory_1 = require("../models/ProductToCategory");
const OrderProduct_1 = require("../models/OrderProduct");
let ProductRepository = class ProductRepository extends typeorm_1.Repository {
    productList(limit, offset, select = [], searchConditions = [], whereConditions = [], categoryId = [], priceFrom, priceTo, price, count) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log(select);
            const query = yield this.manager.createQueryBuilder(ProductModel_1.Product, 'product');
            // Select
            if (select && select.length > 0) {
                query.select(select);
            }
            // Keyword Search
            if (searchConditions && searchConditions.length > 0) {
                searchConditions.forEach((table) => {
                    const operator = table.op;
                    if (operator === 'where' && table.value !== '') {
                        query.where(table.name + ' = ' + table.value);
                    }
                    else if (operator === 'and' && table.value !== '') {
                        query.andWhere(table.name + ' LIKE ' + "\'%" + table.value + "%\'");
                    }
                    else if (operator === 'or' && table.value !== '') {
                        query.orWhere(table.name + ' LIKE ' + "\'%" + table.value + "%\'");
                    }
                    else if (operator === 'andWhere' && table.value !== undefined && table.value !== '') {
                        query.andWhere(table.name + ' = ' + table.value);
                    }
                });
            }
            // Keyword Search
            if (categoryId) {
                if (whereConditions && whereConditions.length > 0) {
                    whereConditions.forEach((table) => {
                        const operator = table.op;
                        if (operator === 'inraw' && table.value !== undefined) {
                            const subQb = this.manager
                                .getRepository(ProductToCategory_1.ProductToCategory)
                                .createQueryBuilder('productToCategory')
                                .select('product_id')
                                .where('category_id = ' + table.value);
                            query.andWhere(table.name + ' IN (' + subQb.getSql() + ')');
                        }
                    });
                }
            }
            if (priceFrom && priceTo) {
                query.andWhere('(product.price >= :priceFrom AND product.price <= :priceTo)', { priceFrom, priceTo });
            }
            if (price) {
                query.orderBy('product.price', price === 1 ? 'ASC' : 'DESC');
            }
            query.orderBy('product.sortOrder', 'ASC');
            // Limit & Offset
            if (limit && limit > 0) {
                query.limit(limit);
                query.offset(offset);
            }
            console.log(query.getQuery());
            if (count) {
                return query.getCount();
            }
            return query.getMany();
        });
    }
    recentProductSelling(limit) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const query = yield this.manager.createQueryBuilder(OrderProduct_1.OrderProduct, 'orderProduct');
            query.select(['COUNT(orderProduct.order_id) as ordercount', 'orderProduct.product_id as product']);
            query.groupBy('product');
            query.orderBy('ordercount', 'DESC');
            query.limit(limit);
            console.log(query.getQuery());
            return query.getRawMany();
        });
    }
    productMaxPrice(maximum) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const query = yield this.manager.createQueryBuilder(ProductModel_1.Product, 'product');
            query.select(maximum);
            return query.getRawOne();
        });
    }
};
ProductRepository = tslib_1.__decorate([
    typeorm_1.EntityRepository(ProductModel_1.Product)
], ProductRepository);
exports.ProductRepository = ProductRepository;
//# sourceMappingURL=ProductRepository.js.map