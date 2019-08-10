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
const moment = require("moment");
const Order_1 = require("./Order");
let OrderStatus = class OrderStatus extends BaseModel_1.BaseModel {
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
    typeorm_1.PrimaryGeneratedColumn({ name: 'order_status_id' }),
    tslib_1.__metadata("design:type", Number)
], OrderStatus.prototype, "orderStatusId", void 0);
tslib_1.__decorate([
    class_validator_1.IsNotEmpty(),
    typeorm_1.Column({ name: 'name' }),
    tslib_1.__metadata("design:type", String)
], OrderStatus.prototype, "name", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'is_active' }),
    tslib_1.__metadata("design:type", Number)
], OrderStatus.prototype, "isActive", void 0);
tslib_1.__decorate([
    typeorm_1.OneToMany(type => Order_1.Order, order => order.orderStatus),
    tslib_1.__metadata("design:type", Array)
], OrderStatus.prototype, "statusOfOrder", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'color_code' }),
    tslib_1.__metadata("design:type", String)
], OrderStatus.prototype, "colorCode", void 0);
tslib_1.__decorate([
    typeorm_1.BeforeInsert(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], OrderStatus.prototype, "createDetails", null);
tslib_1.__decorate([
    typeorm_1.BeforeUpdate(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], OrderStatus.prototype, "updateDetails", null);
OrderStatus = tslib_1.__decorate([
    typeorm_1.Entity('order_status')
], OrderStatus);
exports.OrderStatus = OrderStatus;
//# sourceMappingURL=orderStatus.js.map