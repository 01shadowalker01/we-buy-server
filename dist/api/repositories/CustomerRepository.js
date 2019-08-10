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
const Customer_1 = require("../models/Customer");
let CustomerRepository = class CustomerRepository extends typeorm_1.Repository {
    TodayCustomerCount(todaydate) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const query = yield this.manager.createQueryBuilder(Customer_1.Customer, 'customer');
            query.select(['COUNT(customer.id) as customerCount']);
            query.where('DATE(customer.createdDate) = :todaydate', { todaydate });
            console.log(query.getQuery());
            return query.getRawOne();
        });
    }
};
CustomerRepository = tslib_1.__decorate([
    typeorm_1.EntityRepository(Customer_1.Customer)
], CustomerRepository);
exports.CustomerRepository = CustomerRepository;
//# sourceMappingURL=CustomerRepository.js.map