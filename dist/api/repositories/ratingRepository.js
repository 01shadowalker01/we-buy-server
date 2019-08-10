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
const ProductRating_1 = require("../models/ProductRating");
let RatingRepository = class RatingRepository extends typeorm_1.Repository {
    ratingConsolidate(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const consolidate = yield this.manager.createQueryBuilder(ProductRating_1.ProductRating, 'rating')
                .select(['COUNT(rating.rating) as RatingCount'])
                .addSelect(['SUM(rating.rating) as RatingSum'])
                .where('rating.productId = :productId', { productId: id })
                .getRawOne();
            return consolidate;
        });
    }
};
RatingRepository = tslib_1.__decorate([
    typeorm_1.EntityRepository(ProductRating_1.ProductRating)
], RatingRepository);
exports.RatingRepository = RatingRepository;
//# sourceMappingURL=ratingRepository.js.map