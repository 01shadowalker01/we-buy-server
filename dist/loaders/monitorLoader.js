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
const express_basic_auth_1 = tslib_1.__importDefault(require("express-basic-auth"));
const express_status_monitor_1 = tslib_1.__importDefault(require("express-status-monitor"));
const env_1 = require("../env");
exports.monitorLoader = (settings) => {
    if (settings && env_1.env.monitor.enabled) {
        const expressApp = settings.getData('express_app');
        expressApp.use(express_status_monitor_1.default());
        expressApp.get(env_1.env.monitor.route, env_1.env.monitor.username ? express_basic_auth_1.default({
            users: {
                [`${env_1.env.monitor.username}`]: env_1.env.monitor.password,
            },
            challenge: true,
        }) : (req, res, next) => next(), express_status_monitor_1.default().pageRoute);
    }
};
//# sourceMappingURL=monitorLoader.js.map