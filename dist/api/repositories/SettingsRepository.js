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
const setting_1 = require("../models/setting");
let SettingsRepository = class SettingsRepository extends typeorm_1.Repository {
};
SettingsRepository = tslib_1.__decorate([
    typeorm_1.EntityRepository(setting_1.Settings)
], SettingsRepository);
exports.SettingsRepository = SettingsRepository;
//# sourceMappingURL=SettingsRepository.js.map