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
const customerWishlistRepository_1 = require("../repositories/customerWishlistRepository");
let CustomerWishlistService = class CustomerWishlistService {
    constructor(customerWishlistRepository, log) {
        this.customerWishlistRepository = customerWishlistRepository;
        this.log = log;
    }
    create(productdata) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info('create a wishlist product');
            return this.customerWishlistRepository.save(productdata);
        });
    }
    // find Condition
    findOne(customer) {
        return this.customerWishlistRepository.findOne(customer);
    }
    // delete customer wishlist
    delete(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info('delete a wishlist product');
            return yield this.customerWishlistRepository.delete(id);
        });
    }
    // customer wishlist
    list(limit, offset, select = [], whereConditions = [], count) {
        const condition = {};
        if (select && select.length > 0) {
            condition.select = select;
        }
        if (whereConditions && whereConditions.length > 0) {
            condition.where = whereConditions;
        }
        if (limit && limit > 0) {
            condition.take = limit;
            condition.skip = offset;
        }
        console.log(condition);
        if (count) {
            return this.customerWishlistRepository.count(condition);
        }
        return this.customerWishlistRepository.find(condition);
    }
    // find customer
    find(customerId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info('Find a customer');
            return this.customerWishlistRepository.find(customerId);
        });
    }
};
CustomerWishlistService = tslib_1.__decorate([
    typedi_1.Service(),
    tslib_1.__param(0, typeorm_typedi_extensions_1.OrmRepository()),
    tslib_1.__param(1, Logger_1.Logger(__filename)),
    tslib_1.__metadata("design:paramtypes", [customerWishlistRepository_1.CustomerWishlistRepository, Object])
], CustomerWishlistService);
exports.CustomerWishlistService = CustomerWishlistService;
//# sourceMappingURL=CustomerWishlistService.js.map