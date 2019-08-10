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
const glob_1 = tslib_1.__importDefault(require("glob"));
const env_1 = require("../env");
/**
 * eventDispatchLoader
 * ------------------------------
 * This loads all the created subscribers into the project, so we do not have to
 * import them manually
 */
exports.eventDispatchLoader = (settings) => {
    if (settings) {
        const patterns = env_1.env.app.dirs.subscribers;
        patterns.forEach((pattern) => {
            glob_1.default(pattern, (err, files) => {
                for (const file of files) {
                    require(file);
                }
            });
        });
    }
};
//# sourceMappingURL=eventDispatchLoader.js.map