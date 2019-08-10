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
const loginLog_1 = require("../models/loginLog");
let LoginLogRepository = class LoginLogRepository extends typeorm_1.Repository {
    logList(limit) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const query = yield this.manager.createQueryBuilder(loginLog_1.LoginLog, 'LoginLog');
            query.select(['COUNT(LoginLog.id) as logcount', 'DATE(created_date) as createdDate']);
            query.groupBy('createdDate');
            query.orderBy('createdDate', 'DESC');
            query.limit(limit);
            console.log(query.getQuery());
            return query.getRawMany();
        });
    }
};
LoginLogRepository = tslib_1.__decorate([
    typeorm_1.EntityRepository(loginLog_1.LoginLog)
], LoginLogRepository);
exports.LoginLogRepository = LoginLogRepository;
//# sourceMappingURL=LoginLogRepository.js.map