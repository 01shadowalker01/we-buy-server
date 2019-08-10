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
let EmailTemplate = class EmailTemplate extends BaseModel_1.BaseModel {
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
    typeorm_1.PrimaryGeneratedColumn({ name: 'id' }),
    tslib_1.__metadata("design:type", Number)
], EmailTemplate.prototype, "emailTemplateId", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'shortname' }),
    tslib_1.__metadata("design:type", String)
], EmailTemplate.prototype, "title", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'subject' }),
    tslib_1.__metadata("design:type", String)
], EmailTemplate.prototype, "subject", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'message' }),
    tslib_1.__metadata("design:type", String)
], EmailTemplate.prototype, "content", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'is_active' }),
    tslib_1.__metadata("design:type", Number)
], EmailTemplate.prototype, "isActive", void 0);
tslib_1.__decorate([
    typeorm_1.BeforeInsert(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], EmailTemplate.prototype, "createDetails", null);
tslib_1.__decorate([
    typeorm_1.BeforeUpdate(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], EmailTemplate.prototype, "updateDetails", null);
EmailTemplate = tslib_1.__decorate([
    typeorm_1.Entity('email_template')
], EmailTemplate);
exports.EmailTemplate = EmailTemplate;
//# sourceMappingURL=emailTemplate.js.map