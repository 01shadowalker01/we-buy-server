"use strict";
/*
 * spurtcommerce API
 * version 2.1
 * http://api.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const microframework_w3tec_1 = require("microframework-w3tec");
const banner_1 = require("./lib/banner");
const logger_1 = require("./lib/logger");
const eventDispatchLoader_1 = require("./loaders/eventDispatchLoader");
const expressLoader_1 = require("./loaders/expressLoader");
const homeLoader_1 = require("./loaders/homeLoader");
const iocLoader_1 = require("./loaders/iocLoader");
const monitorLoader_1 = require("./loaders/monitorLoader");
const publicLoader_1 = require("./loaders/publicLoader");
const typeormLoader_1 = require("./loaders/typeormLoader");
const winstonLoader_1 = require("./loaders/winstonLoader");
/**
 * EXPRESS TYPESCRIPT BOILERPLATE
 * ----------------------------------------
 *
 * This is a boilerplate for Node.js Application written in TypeScript.
 * The basic layer of this app is express. For further information visit
 * the 'README.md' file.
 */
const log = new logger_1.Logger(__filename);
microframework_w3tec_1.bootstrapMicroframework({
    /**
     * Loader is a place where you can configure all your modules during microframework
     * bootstrap process. All loaders are executed one by one in a sequential order.
     */
    loaders: [
        winstonLoader_1.winstonLoader,
        iocLoader_1.iocLoader,
        eventDispatchLoader_1.eventDispatchLoader,
        typeormLoader_1.typeormLoader,
        expressLoader_1.expressLoader,
        monitorLoader_1.monitorLoader,
        homeLoader_1.homeLoader,
        publicLoader_1.publicLoader,
    ],
})
    .then(() => banner_1.banner(log))
    .catch(error => log.error('Application is crashed: ' + error));
//# sourceMappingURL=app.js.map