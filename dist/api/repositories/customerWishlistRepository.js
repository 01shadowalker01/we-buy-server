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
const customerWishlist_1 = require("../models/customerWishlist");
let CustomerWishlistRepository = class CustomerWishlistRepository extends typeorm_1.Repository {
};
CustomerWishlistRepository = tslib_1.__decorate([
    typeorm_1.EntityRepository(customerWishlist_1.CustomerWishlist)
], CustomerWishlistRepository);
exports.CustomerWishlistRepository = CustomerWishlistRepository;
//# sourceMappingURL=customerWishlistRepository.js.map