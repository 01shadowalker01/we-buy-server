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
const index_1 = require("typeorm/index");
const CustomerRepository_1 = require("../repositories/CustomerRepository");
let CustomerService = class CustomerService {
    constructor(customerRepository, log) {
        this.customerRepository = customerRepository;
        this.log = log;
    }
    // create customer
    create(customer) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info('Create a new customer ');
            return this.customerRepository.save(customer);
        });
    }
    // find Condition
    findOne(customer) {
        return this.customerRepository.findOne(customer);
    }
    // update customer
    update(id, customer) {
        customer.customerId = id;
        return this.customerRepository.save(customer);
    }
    // customer List
    list(limit, offset, search = [], whereConditions = [], order, count) {
        const condition = {};
        condition.where = {};
        if (whereConditions && whereConditions.length > 0) {
            whereConditions.forEach((item) => {
                condition.where[item.name] = item.value;
            });
        }
        if (search && search.length > 0) {
            search.forEach((table) => {
                const operator = table.op;
                if (operator === 'where' && table.value !== '') {
                    condition.where[table.name] = table.value;
                }
                else if (operator === 'like' && table.value !== '') {
                    condition.where[table.name] = index_1.Like('%' + table.value + '%');
                }
            });
        }
        if (order && order > 0) {
            condition.order = {
                createdDate: 'DESC',
            };
            condition.take = 5;
        }
        condition.order = {
            createdDate: 'DESC',
        };
        if (limit && limit > 0) {
            condition.take = limit;
            condition.skip = offset;
        }
        if (count) {
            return this.customerRepository.count(condition);
        }
        else {
            return this.customerRepository.find(condition);
        }
    }
    // delete customer
    delete(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.customerRepository.delete(id);
        });
    }
    // today customer count
    todayCustomerCount(todaydate) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.customerRepository.TodayCustomerCount(todaydate);
        });
    }
};
CustomerService = tslib_1.__decorate([
    typedi_1.Service(),
    tslib_1.__param(0, typeorm_typedi_extensions_1.OrmRepository()),
    tslib_1.__param(1, Logger_1.Logger(__filename)),
    tslib_1.__metadata("design:paramtypes", [CustomerRepository_1.CustomerRepository, Object])
], CustomerService);
exports.CustomerService = CustomerService;
//# sourceMappingURL=CustomerService.js.map