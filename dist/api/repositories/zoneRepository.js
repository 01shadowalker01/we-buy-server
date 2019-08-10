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
const zone_1 = require("../models/zone");
let ZoneRepository = class ZoneRepository extends typeorm_1.Repository {
};
ZoneRepository = tslib_1.__decorate([
    typeorm_1.EntityRepository(zone_1.Zone)
], ZoneRepository);
exports.ZoneRepository = ZoneRepository;
//# sourceMappingURL=zoneRepository.js.map