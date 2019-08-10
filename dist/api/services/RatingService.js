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
const ratingRepository_1 = require("../repositories/ratingRepository");
const typeorm_1 = require("typeorm");
let ProductRatingService = class ProductRatingService {
    constructor(ratingRepository, log) {
        this.ratingRepository = ratingRepository;
        this.log = log;
    }
    // find one condition
    findOne(rating) {
        return this.ratingRepository.findOne(rating);
    }
    // find all rating
    findAll(rating) {
        this.log.info('Find all rating');
        return this.ratingRepository.find(rating);
    }
    // rating list
    list(limit, offset, select = [], relation = [], whereConditions = [], count) {
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
        if (limit && limit > 0) {
            condition.take = limit;
            condition.skip = offset;
        }
        console.log(condition);
        if (count) {
            return this.ratingRepository.count(condition);
        }
        else {
            return this.ratingRepository.find(condition);
        }
    }
    // create rating
    create(productRating) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const newRating = yield this.ratingRepository.save(productRating);
            return newRating;
        });
    }
    // update rating
    update(id, productRating) {
        this.log.info('Update a rating');
        productRating.ratingId = id;
        return this.ratingRepository.save(productRating);
    }
    // delete rating
    delete(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info('Delete a rating');
            const newRating = yield this.ratingRepository.delete(id);
            return newRating;
        });
    }
    // getting consolidated rating
    consolidateRating(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.ratingRepository.ratingConsolidate(id);
        });
    }
};
ProductRatingService = tslib_1.__decorate([
    typedi_1.Service(),
    tslib_1.__param(0, typeorm_typedi_extensions_1.OrmRepository()),
    tslib_1.__param(1, Logger_1.Logger(__filename)),
    tslib_1.__metadata("design:paramtypes", [ratingRepository_1.RatingRepository, Object])
], ProductRatingService);
exports.ProductRatingService = ProductRatingService;
//# sourceMappingURL=RatingService.js.map