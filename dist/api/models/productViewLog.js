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
const class_transformer_1 = require("class-transformer");
let ProductViewLog = class ProductViewLog extends BaseModel_1.BaseModel {
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
], ProductViewLog.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'product_id' }),
    tslib_1.__metadata("design:type", Number)
], ProductViewLog.prototype, "productId", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'customer_id' }),
    tslib_1.__metadata("design:type", Number)
], ProductViewLog.prototype, "customerId", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'first_name' }),
    tslib_1.__metadata("design:type", String)
], ProductViewLog.prototype, "firstName", void 0);
tslib_1.__decorate([
    class_transformer_1.Exclude(),
    typeorm_1.Column({ name: 'last_name' }),
    tslib_1.__metadata("design:type", String)
], ProductViewLog.prototype, "lastName", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'username' }),
    tslib_1.__metadata("design:type", String)
], ProductViewLog.prototype, "username", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'email' }),
    tslib_1.__metadata("design:type", String)
], ProductViewLog.prototype, "email", void 0);
tslib_1.__decorate([
    class_transformer_1.Exclude(),
    typeorm_1.Column({ name: 'mobile' }),
    tslib_1.__metadata("design:type", Number)
], ProductViewLog.prototype, "mobileNumber", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'address' }),
    tslib_1.__metadata("design:type", String)
], ProductViewLog.prototype, "address", void 0);
tslib_1.__decorate([
    class_transformer_1.Exclude(),
    typeorm_1.Column({ name: 'is_active' }),
    tslib_1.__metadata("design:type", Number)
], ProductViewLog.prototype, "isActive", void 0);
tslib_1.__decorate([
    typeorm_1.BeforeInsert(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ProductViewLog.prototype, "createDetails", null);
tslib_1.__decorate([
    typeorm_1.BeforeUpdate(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ProductViewLog.prototype, "updateDetails", null);
ProductViewLog = tslib_1.__decorate([
    typeorm_1.Entity('product_view_log')
], ProductViewLog);
exports.ProductViewLog = ProductViewLog;
//# sourceMappingURL=productViewLog.js.map