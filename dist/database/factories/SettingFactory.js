"use strict";
/*
 * spurtcommerce API
 * version 2.0.0
 * http://api.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_seeding_1 = require("typeorm-seeding");
const setting_1 = require("../../api/models/setting");
typeorm_seeding_1.define(setting_1.Settings, (faker, settings) => {
    const setiings = new setting_1.Settings();
    return setiings;
});
//# sourceMappingURL=SettingFactory.js.map