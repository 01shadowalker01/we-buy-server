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
const ProductRelatedRepository_1 = require("../repositories/ProductRelatedRepository");
let ProductRelatedService = class ProductRelatedService {
    constructor(productRelatedRepository, log) {
        this.productRelatedRepository = productRelatedRepository;
        this.log = log;
    }
    // create related product
    create(product) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info('create a related product');
            const newProduct = yield this.productRelatedRepository.save(product);
            return newProduct;
        });
    }
    // find related product
    findAll(Id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info('find a related product');
            return yield this.productRelatedRepository.find(Id);
        });
    }
    // related product list
    list(limit, offset, relation = [], select = [], whereConditions = [], count) {
        const condition = {};
        if (select && select.length > 0) {
            condition.select = select;
        }
        if (relation && relation.length > 0) {
            condition.relations = relation;
        }
        if (whereConditions && whereConditions.length > 0) {
            condition.where = whereConditions;
        }
        if (count) {
            return this.productRelatedRepository.count(condition);
        }
        return this.productRelatedRepository.find(condition);
    }
    // delete related product
    delete(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info('Delete a related product');
            const newProduct = yield this.productRelatedRepository.delete(id);
            return newProduct;
        });
    }
    // find one related product
    findOne(relatedProduct) {
        return this.productRelatedRepository.findOne(relatedProduct);
    }
};
ProductRelatedService = tslib_1.__decorate([
    typedi_1.Service(),
    tslib_1.__param(0, typeorm_typedi_extensions_1.OrmRepository()),
    tslib_1.__param(1, Logger_1.Logger(__filename)),
    tslib_1.__metadata("design:paramtypes", [ProductRelatedRepository_1.ProductRelatedRepository, Object])
], ProductRelatedService);
exports.ProductRelatedService = ProductRelatedService;
//# sourceMappingURL=ProductRelatedService.js.map