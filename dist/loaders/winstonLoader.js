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
const winston_1 = require("winston");
const env_1 = require("../env");
exports.winstonLoader = (settings) => {
    winston_1.configure({
        transports: [
            new winston_1.transports.Console({
                level: env_1.env.log.level,
                handleExceptions: true,
                format: env_1.env.node !== 'development'
                    ? winston_1.format.combine(winston_1.format.json())
                    : winston_1.format.combine(winston_1.format.colorize(), winston_1.format.simple()),
            }),
        ],
    });
};
//# sourceMappingURL=winstonLoader.js.map