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
let ProductSpecial = class ProductSpecial extends BaseModel_1.BaseModel {
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
    index_1.PrimaryGeneratedColumn({ name: 'product_special_id' }),
    tslib_1.__metadata("design:type", Number)
], ProductSpecial.prototype, "productSpecialId", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'product_id' }),
    tslib_1.__metadata("design:type", Number)
], ProductSpecial.prototype, "productId", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'customer_group_id' }),
    tslib_1.__metadata("design:type", Number)
], ProductSpecial.prototype, "customerGroupId", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'priority' }),
    tslib_1.__metadata("design:type", Number)
], ProductSpecial.prototype, "priority", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'price' }),
    tslib_1.__metadata("design:type", Number)
], ProductSpecial.prototype, "price", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'date_start' }),
    tslib_1.__metadata("design:type", Date)
], ProductSpecial.prototype, "dateStart", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'date_end' }),
    tslib_1.__metadata("design:type", Date)
], ProductSpecial.prototype, "dateEnd", void 0);
tslib_1.__decorate([
    typeorm_1.BeforeInsert(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ProductSpecial.prototype, "createDetails", null);
tslib_1.__decorate([
    typeorm_1.BeforeUpdate(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ProductSpecial.prototype, "updateDetails", null);
ProductSpecial = tslib_1.__decorate([
    typeorm_1.Entity('product_special')
], ProductSpecial);
exports.ProductSpecial = ProductSpecial;
//# sourceMappingURL=ProductSpecial.js.map