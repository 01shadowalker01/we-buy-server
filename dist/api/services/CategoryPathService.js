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
const CategoryPathRepository_1 = require("../repositories/CategoryPathRepository");
const index_1 = require("typeorm/index");
let CategoryPathService = class CategoryPathService {
    constructor(categoryPathRepository) {
        this.categoryPathRepository = categoryPathRepository;
    }
    // create CategoryPath
    create(categoryPath) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.categoryPathRepository.save(categoryPath);
        });
    }
    // findone CategoryPath
    findOne(categoryPath) {
        return this.categoryPathRepository.findOne(categoryPath);
    }
    // delete CategoryPath
    delete(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.categoryPathRepository.delete(id);
            return;
        });
    }
    // categoryList
    list(limit, offset, select = [], search = [], whereConditions = [], sortOrder, count) {
        const condition = {};
        if (select && select.length > 0) {
            condition.select = select;
        }
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
        if (limit && limit > 0) {
            condition.take = limit;
            condition.skip = offset;
        }
        if (sortOrder && sortOrder === 1) {
            condition.order = {
                sortOrder: 'ASC',
            };
        }
        if (sortOrder && sortOrder === 2) {
            condition.order = {
                sortOrder: 'DESC',
            };
        }
        console.log(condition);
        if (count) {
            return this.categoryPathRepository.count(condition);
        }
        return this.categoryPathRepository.find(condition);
    }
    // find categoryPath
    find(categoryPath) {
        return this.categoryPathRepository.find(categoryPath);
    }
};
CategoryPathService = tslib_1.__decorate([
    typedi_1.Service(),
    tslib_1.__param(0, typeorm_typedi_extensions_1.OrmRepository()),
    tslib_1.__metadata("design:paramtypes", [CategoryPathRepository_1.CategoryPathRepository])
], CategoryPathService);
exports.CategoryPathService = CategoryPathService;
//# sourceMappingURL=CategoryPathService.js.map