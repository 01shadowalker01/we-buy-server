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
const zoneRepository_1 = require("../repositories/zoneRepository");
let ZoneService = class ZoneService {
    constructor(zoneRepository, log) {
        this.zoneRepository = zoneRepository;
        this.log = log;
    }
    // create zone
    create(zone) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.log.info('Create a new zone ');
            return this.zoneRepository.save(zone);
        });
    }
    // find Condition
    findOne(zone) {
        return this.zoneRepository.findOne(zone);
    }
    // update zone
    update(id, zone) {
        zone.zoneId = id;
        return this.zoneRepository.save(zone);
    }
    // zone List
    list(limit, offset, select = [], search = [], whereConditions = [], relation = [], count) {
        const condition = {};
        if (select && select.length > 0) {
            condition.select = select;
        }
        condition.where = {};
        if (relation && relation.length > 0) {
            condition.relations = relation;
        }
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
            return this.zoneRepository.count(condition);
        }
        else {
            return this.zoneRepository.find(condition);
        }
    }
    // delete Zone
    delete(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.zoneRepository.delete(id);
        });
    }
};
ZoneService = tslib_1.__decorate([
    typedi_1.Service(),
    tslib_1.__param(0, typeorm_typedi_extensions_1.OrmRepository()),
    tslib_1.__param(1, Logger_1.Logger(__filename)),
    tslib_1.__metadata("design:paramtypes", [zoneRepository_1.ZoneRepository, Object])
], ZoneService);
exports.ZoneService = ZoneService;
//# sourceMappingURL=zoneService.js.map