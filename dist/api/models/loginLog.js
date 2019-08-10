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
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const BaseModel_1 = require("./BaseModel");
const moment_1 = tslib_1.__importDefault(require("moment"));
let LoginLog = class LoginLog extends BaseModel_1.BaseModel {
    hashPassword() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.createdDate = moment_1.default().format('YYYY-MM-DD HH:mm:ss');
        });
    }
    updateDetails() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.modifiedDate = moment_1.default().format('YYYY-MM-DD HH:mm:ss');
        });
    }
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    tslib_1.__metadata("design:type", Number)
], LoginLog.prototype, "id", void 0);
tslib_1.__decorate([
    class_validator_1.IsNotEmpty(),
    typeorm_1.Column({ name: 'customer_id' }),
    tslib_1.__metadata("design:type", Number)
], LoginLog.prototype, "customerId", void 0);
tslib_1.__decorate([
    class_validator_1.IsEmail(),
    typeorm_1.Column({ name: 'email_id' }),
    tslib_1.__metadata("design:type", String)
], LoginLog.prototype, "emailId", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'first_name' }),
    tslib_1.__metadata("design:type", String)
], LoginLog.prototype, "firstName", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'ip_address' }),
    tslib_1.__metadata("design:type", String)
], LoginLog.prototype, "ipAddress", void 0);
tslib_1.__decorate([
    typeorm_1.BeforeInsert(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], LoginLog.prototype, "hashPassword", null);
tslib_1.__decorate([
    typeorm_1.BeforeUpdate(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], LoginLog.prototype, "updateDetails", null);
LoginLog = tslib_1.__decorate([
    typeorm_1.Entity('login_log')
], LoginLog);
exports.LoginLog = LoginLog;
//# sourceMappingURL=loginLog.js.map