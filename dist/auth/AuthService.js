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
const jsonwebtoken_1 = tslib_1.__importDefault(require("jsonwebtoken"));
const typedi_1 = require("typedi");
const typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
const UserRepository_1 = require("../api/repositories/UserRepository");
const CustomerRepository_1 = require("../api/repositories/CustomerRepository");
const Logger_1 = require("../decorators/Logger");
let AuthService = class AuthService {
    constructor(log, userRepository, customerRepository) {
        this.log = log;
        this.userRepository = userRepository;
        this.customerRepository = customerRepository;
    }
    parseBasicAuthFromRequest(req) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const authorization = req.header('authorization');
            console.log(authorization);
            console.log(authorization.split(' ')[0]);
            if (authorization && authorization.split(' ')[0] === 'Bearer') {
                console.log('Credentials provided by the client');
                this.log.info('Credentials provided by the client');
                if (!authorization) {
                    return undefined;
                }
                console.log(authorization.split(' ')[1]);
                const UserId = yield this.decryptToken(authorization.split(' ')[1]);
                return UserId;
                console.log('I m here');
            }
            this.log.info('No credentials provided by the client');
            return undefined;
        });
    }
    decryptToken(encryptString) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((subresolve, subreject) => {
                jsonwebtoken_1.default.verify(encryptString, '123##$$)(***&', (err, decoded) => {
                    if (err) {
                        console.log(err);
                        return subresolve(undefined);
                    }
                    console.log(decoded);
                    return subresolve(decoded.id);
                });
            });
        });
    }
    validateUser(userId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log('userId' + userId);
            const user = yield this.userRepository.findOne({
                where: {
                    userId,
                },
            });
            console.log(user);
            if (user) {
                return user;
            }
            return undefined;
        });
    }
    validateCustomer(userId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log('customerId' + userId);
            const customer = yield this.customerRepository.findOne({
                where: {
                    id: userId,
                },
            });
            console.log(customer);
            if (customer) {
                return customer;
            }
            return undefined;
        });
    }
};
AuthService = tslib_1.__decorate([
    typedi_1.Service(),
    tslib_1.__param(0, Logger_1.Logger(__filename)),
    tslib_1.__param(1, typeorm_typedi_extensions_1.OrmRepository()),
    tslib_1.__param(2, typeorm_typedi_extensions_1.OrmRepository()),
    tslib_1.__metadata("design:paramtypes", [Object, UserRepository_1.UserRepository,
        CustomerRepository_1.CustomerRepository])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=AuthService.js.map