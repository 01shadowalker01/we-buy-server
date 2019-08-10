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
const typeorm_1 = require("typeorm");
const BaseModel_1 = require("./BaseModel");
const moment = require("moment/moment");
let Contact = class Contact extends BaseModel_1.BaseModel {
    createDetails() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.createdDate = moment().format('YYYY-MM-DD HH:mm:ss');
        });
    }
    updateDetails() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.modifiedDate = moment().format('YYYY-MM-DD HH:mm:ss');
        });
    }
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    tslib_1.__metadata("design:type", Number)
], Contact.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'name' }),
    tslib_1.__metadata("design:type", String)
], Contact.prototype, "name", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'email' }),
    tslib_1.__metadata("design:type", String)
], Contact.prototype, "email", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'phone_number' }),
    tslib_1.__metadata("design:type", String)
], Contact.prototype, "phoneNumber", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'message' }),
    tslib_1.__metadata("design:type", String)
], Contact.prototype, "message", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'is_active' }),
    tslib_1.__metadata("design:type", Number)
], Contact.prototype, "isActive", void 0);
tslib_1.__decorate([
    typeorm_1.BeforeInsert(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], Contact.prototype, "createDetails", null);
tslib_1.__decorate([
    typeorm_1.BeforeUpdate(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], Contact.prototype, "updateDetails", null);
Contact = tslib_1.__decorate([
    typeorm_1.Entity('contact')
], Contact);
exports.Contact = Contact;
//# sourceMappingURL=Contact.js.map