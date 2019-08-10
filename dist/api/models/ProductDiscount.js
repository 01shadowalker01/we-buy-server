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
const index_1 = require("typeorm/index");
const BaseModel_1 = require("./BaseModel");
const moment = require("moment");
let ProductDiscount = class ProductDiscount extends BaseModel_1.BaseModel {
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
    index_1.PrimaryGeneratedColumn({ name: 'product_discount_id' }),
    tslib_1.__metadata("design:type", Number)
], ProductDiscount.prototype, "productDiscountId", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'product_id' }),
    tslib_1.__metadata("design:type", Number)
], ProductDiscount.prototype, "productId", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'quantity' }),
    tslib_1.__metadata("design:type", Number)
], ProductDiscount.prototype, "quantity", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'priority' }),
    tslib_1.__metadata("design:type", Number)
], ProductDiscount.prototype, "priority", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'price' }),
    tslib_1.__metadata("design:type", Number)
], ProductDiscount.prototype, "price", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'is_active' }),
    tslib_1.__metadata("design:type", Number)
], ProductDiscount.prototype, "isActive", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'date_start' }),
    tslib_1.__metadata("design:type", Date)
], ProductDiscount.prototype, "dateStart", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'date_end' }),
    tslib_1.__metadata("design:type", Date)
], ProductDiscount.prototype, "dateEnd", void 0);
tslib_1.__decorate([
    typeorm_1.BeforeInsert(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ProductDiscount.prototype, "createDetails", null);
tslib_1.__decorate([
    typeorm_1.BeforeUpdate(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ProductDiscount.prototype, "updateDetails", null);
ProductDiscount = tslib_1.__decorate([
    typeorm_1.Entity('product_discount')
], ProductDiscount);
exports.ProductDiscount = ProductDiscount;
//# sourceMappingURL=ProductDiscount.js.map