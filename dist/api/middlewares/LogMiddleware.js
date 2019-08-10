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
const morgan_1 = tslib_1.__importDefault(require("morgan"));
const routing_controllers_1 = require("routing-controllers");
const env_1 = require("../../env");
const logger_1 = require("../../lib/logger");
let LogMiddleware = class LogMiddleware {
    constructor() {
        this.log = new logger_1.Logger(__dirname);
    }
    use(req, res, next) {
        return morgan_1.default(env_1.env.log.output, {
            stream: {
                write: this.log.info.bind(this.log),
            },
        })(req, res, next);
    }
};
LogMiddleware = tslib_1.__decorate([
    routing_controllers_1.Middleware({ type: 'before' })
], LogMiddleware);
exports.LogMiddleware = LogMiddleware;
//# sourceMappingURL=LogMiddleware.js.map