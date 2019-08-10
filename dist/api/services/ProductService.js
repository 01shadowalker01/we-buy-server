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
const ProductRepository_1 = require("../repositories/ProductRepository");
const typeorm_1 = require("typeorm");
let ProductService = class ProductService {
    constructor(productRepository, log) {
        this.productRepository = productRepository;
        this.log = log;
    }
    // find product
    find(product) {
        return this.productRepository.find(product);
    }
    // find one product
    findOne(findCondition) {
        return this.productRepository.findOne(findCondition);
    }
    // product list
    list(limit, offset, select = [], relation = [], whereConditions = [], search = [], price, count) {
        const condition = {};
        if (select && select.length > 0) {
            condition.select = select;
        }
        if (relation && relation.length > 0) {
            condition.relations = relation;
        }
        condition.where = {};
        if (whereConditions && whereConditions.length > 0) {
            whereConditions.forEach((item) => {
                const operator = item.op;
                if (operator === 'where' && item.value !== '') {
                    condition.where[item.name] = item.value;
                }
                else if (operator === 'like' && item.value !== '') {
                    condition.where[item.name] = typeorm_1.Like('%' + item.value + '%');
                }
            });
        }
        if (search && search.length > 0) {
            search.forEach((item) => {
                const operator = item.op;
                if (operator === 'like' && item.value !== '') {
                    condition.where[item.name] = typeorm_1.Like('%' + item.value + '%');
                }
            });
        }
        if (price && price === 1) {
            condition.order = {
                price: 'ASC',
            };
        }
        if (price && price === 2) {
            condition.order = {
                price: 'DESC',
            };
        }
        if (limit && limit > 0) {
            condition.take = limit;
            condition.skip = offset;
        }
        console.log(condition);
        if (count) {
            return this.productRepository.count(condition);
        }
        return this.productRepository.find(condition);
    }
    // create product
    create(product) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const newProduct = yield this.productRepository.save(product);
            return newProduct;
        });
    }
    // update product
    update(id, product) {
        this.log.info('Update a product');
        product.productId = id;
        return this.productRepository.save(product);
    }
    // delete product
    delete(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info('Delete a product');
            const newProduct = yield this.productRepository.delete(id);
            return newProduct;
        });
    }
    // product list
    productList(limit, offset, select = [], searchConditions = [], whereConditions = [], categoryId = [], priceFrom, priceTo, price, count) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.productRepository.productList(limit, offset, select, searchConditions, whereConditions, categoryId, priceFrom, priceTo, price, count);
        });
    }
    // Recent selling product
    recentProductSelling(limit) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.productRepository.recentProductSelling(limit);
        });
    }
    // Maximum Product price
    productMaxPrice(maximum) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.productRepository.productMaxPrice(maximum);
        });
    }
};
ProductService = tslib_1.__decorate([
    typedi_1.Service(),
    tslib_1.__param(0, typeorm_typedi_extensions_1.OrmRepository()),
    tslib_1.__param(1, Logger_1.Logger(__filename)),
    tslib_1.__metadata("design:paramtypes", [ProductRepository_1.ProductRepository, Object])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=ProductService.js.map