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
const ProductDiscountRepository_1 = require("../repositories/ProductDiscountRepository");
let ProductDiscountService = class ProductDiscountService {
    constructor(productDiscountRepository, log) {
        this.productDiscountRepository = productDiscountRepository;
        this.log = log;
    }
    // create a data
    create(Data) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info('create a data');
            return this.productDiscountRepository.save(Data);
        });
    }
    // findone a data
    findOne(id) {
        this.log.info('Find a data');
        return this.productDiscountRepository.findOne(id);
    }
    // find a data
    findAll(productDiscount) {
        this.log.info('Find a data');
        return this.productDiscountRepository.find(productDiscount);
    }
    // delete product option
    delete(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info('Delete a product option');
            const deleteProductDiscount = yield this.productDiscountRepository.delete(id);
            return deleteProductDiscount;
        });
    }
    // find special price
    findDiscountPrice(productId, todayDate) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.productDiscountRepository.findDiscountPrice(productId, todayDate);
        });
    }
};
ProductDiscountService = tslib_1.__decorate([
    typedi_1.Service(),
    tslib_1.__param(0, typeorm_typedi_extensions_1.OrmRepository()),
    tslib_1.__param(1, Logger_1.Logger(__filename)),
    tslib_1.__metadata("design:paramtypes", [ProductDiscountRepository_1.ProductDiscountRepository, Object])
], ProductDiscountService);
exports.ProductDiscountService = ProductDiscountService;
//# sourceMappingURL=ProductDiscountService.js.map