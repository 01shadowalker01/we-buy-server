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
const manufacturerRepository_1 = require("../repositories/manufacturerRepository");
const index_1 = require("typeorm/index");
let ManufacturerService = class ManufacturerService {
    constructor(manufacturerRepository, log) {
        this.manufacturerRepository = manufacturerRepository;
        this.log = log;
    }
    // create Manufacturer
    create(manufacturer) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.manufacturerRepository.save(manufacturer);
        });
    }
    // find condition
    findOne(manufacturer) {
        return this.manufacturerRepository.findOne(manufacturer);
    }
    // delete Manufacturer
    delete(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info('Delete a manufacturer');
            yield this.manufacturerRepository.delete(id);
            return;
        });
    }
    // Manufacturer List
    list(limit, offset, select = [], search = [], whereConditions = [], count) {
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
        if (count) {
            return this.manufacturerRepository.count(condition);
        }
        console.log(condition);
        return this.manufacturerRepository.find(condition);
    }
};
ManufacturerService = tslib_1.__decorate([
    typedi_1.Service(),
    tslib_1.__param(0, typeorm_typedi_extensions_1.OrmRepository()),
    tslib_1.__param(1, Logger_1.Logger(__filename)),
    tslib_1.__metadata("design:paramtypes", [manufacturerRepository_1.ManufacturerRepository, Object])
], ManufacturerService);
exports.ManufacturerService = ManufacturerService;
//# sourceMappingURL=manufacturerService.js.map