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
const categoryRepository_1 = require("../repositories/categoryRepository");
const index_1 = require("typeorm/index");
let CategoryService = class CategoryService {
    constructor(categoryRepository, log) {
        this.categoryRepository = categoryRepository;
        this.log = log;
    }
    // create Category
    create(category) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info('Create a new category => ', category.toString());
            return this.categoryRepository.save(category);
        });
    }
    // findone category
    findOne(category) {
        return this.categoryRepository.findOne(category);
    }
    // delete Category
    delete(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info('Delete a user');
            yield this.categoryRepository.delete(id);
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
        condition.order = { sortOrder: (sortOrder === 2) ? 'DESC' : 'ASC' };
        if (count) {
            return this.categoryRepository.count(condition);
        }
        return this.categoryRepository.find(condition);
    }
    // find category
    find(category) {
        return this.categoryRepository.find(category);
    }
};
CategoryService = tslib_1.__decorate([
    typedi_1.Service(),
    tslib_1.__param(0, typeorm_typedi_extensions_1.OrmRepository()),
    tslib_1.__param(1, Logger_1.Logger(__filename)),
    tslib_1.__metadata("design:paramtypes", [categoryRepository_1.CategoryRepository, Object])
], CategoryService);
exports.CategoryService = CategoryService;
//# sourceMappingURL=categoryService.js.map