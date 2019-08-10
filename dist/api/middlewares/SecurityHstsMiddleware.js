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
const helmet = tslib_1.__importStar(require("helmet"));
const routing_controllers_1 = require("routing-controllers");
let SecurityHstsMiddleware = class SecurityHstsMiddleware {
    use(req, res, next) {
        return helmet.hsts({
            maxAge: 31536000,
            includeSubdomains: true,
        })(req, res, next);
    }
};
SecurityHstsMiddleware = tslib_1.__decorate([
    routing_controllers_1.Middleware({ type: 'before' })
], SecurityHstsMiddleware);
exports.SecurityHstsMiddleware = SecurityHstsMiddleware;
//# sourceMappingURL=SecurityHstsMiddleware.js.map