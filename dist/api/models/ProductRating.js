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
const class_transformer_1 = require("class-transformer");
const BaseModel_1 = require("./BaseModel");
const moment_1 = tslib_1.__importDefault(require("moment"));
const ProductModel_1 = require("./ProductModel");
const Customer_1 = require("./Customer");
let ProductRating = class ProductRating extends BaseModel_1.BaseModel {
    createDetails() {
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
    typeorm_1.PrimaryGeneratedColumn({ name: 'rating_id' }),
    tslib_1.__metadata("design:type", Number)
], ProductRating.prototype, "ratingId", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'product_id' }),
    tslib_1.__metadata("design:type", Number)
], ProductRating.prototype, "productId", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'order_product_id' }),
    tslib_1.__metadata("design:type", Number)
], ProductRating.prototype, "orderProductId", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'customer_id' }),
    tslib_1.__metadata("design:type", String)
], ProductRating.prototype, "customerId", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'first_name' }),
    tslib_1.__metadata("design:type", String)
], ProductRating.prototype, "firstName", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'last_name' }),
    tslib_1.__metadata("design:type", String)
], ProductRating.prototype, "lastName", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'email' }),
    tslib_1.__metadata("design:type", String)
], ProductRating.prototype, "email", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'image_path' }),
    tslib_1.__metadata("design:type", String)
], ProductRating.prototype, "imagePath", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'image' }),
    tslib_1.__metadata("design:type", String)
], ProductRating.prototype, "image", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'rating' }),
    tslib_1.__metadata("design:type", Number)
], ProductRating.prototype, "rating", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'review' }),
    tslib_1.__metadata("design:type", String)
], ProductRating.prototype, "review", void 0);
tslib_1.__decorate([
    class_transformer_1.Exclude(),
    typeorm_1.Column({ name: 'is_active' }),
    tslib_1.__metadata("design:type", Number)
], ProductRating.prototype, "isActive", void 0);
tslib_1.__decorate([
    typeorm_1.ManyToOne(type => ProductModel_1.Product, product => product.productRating),
    typeorm_1.JoinColumn({ name: 'product_id' }),
    tslib_1.__metadata("design:type", ProductModel_1.Product)
], ProductRating.prototype, "product", void 0);
tslib_1.__decorate([
    typeorm_1.ManyToOne(type => Customer_1.Customer, customer => customer.productRating),
    typeorm_1.JoinColumn({ name: 'customer_id' }),
    tslib_1.__metadata("design:type", Customer_1.Customer)
], ProductRating.prototype, "customer", void 0);
tslib_1.__decorate([
    typeorm_1.BeforeInsert(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ProductRating.prototype, "createDetails", null);
tslib_1.__decorate([
    typeorm_1.BeforeUpdate(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ProductRating.prototype, "updateDetails", null);
ProductRating = tslib_1.__decorate([
    typeorm_1.Entity('product_rating')
], ProductRating);
exports.ProductRating = ProductRating;
//# sourceMappingURL=ProductRating.js.map