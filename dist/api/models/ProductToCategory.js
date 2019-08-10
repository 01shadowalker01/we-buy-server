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
const class_transformer_1 = require("class-transformer");
const BaseModel_1 = require("./BaseModel");
const moment_1 = tslib_1.__importDefault(require("moment"));
const ProductModel_1 = require("./ProductModel");
const categoryModel_1 = require("./categoryModel");
let ProductToCategory = class ProductToCategory extends BaseModel_1.BaseModel {
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
    typeorm_1.PrimaryGeneratedColumn({ name: 'product_to_category_id' }),
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", Number)
], ProductToCategory.prototype, "productToCategoryId", void 0);
tslib_1.__decorate([
    class_transformer_1.Exclude(),
    typeorm_1.Column({ name: 'product_id' }),
    tslib_1.__metadata("design:type", Number)
], ProductToCategory.prototype, "productId", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'category_id' }),
    tslib_1.__metadata("design:type", Number)
], ProductToCategory.prototype, "categoryId", void 0);
tslib_1.__decorate([
    class_transformer_1.Exclude(),
    typeorm_1.Column({ name: 'is_active' }),
    tslib_1.__metadata("design:type", Number)
], ProductToCategory.prototype, "isActive", void 0);
tslib_1.__decorate([
    typeorm_1.ManyToOne(type => ProductModel_1.Product, product => product.productToCategory),
    typeorm_1.JoinColumn({ name: 'product_id' }),
    tslib_1.__metadata("design:type", ProductModel_1.Product)
], ProductToCategory.prototype, "product", void 0);
tslib_1.__decorate([
    typeorm_1.ManyToOne(type => categoryModel_1.Category, category => category.productToCategory),
    typeorm_1.JoinColumn({ name: 'category_id' }),
    tslib_1.__metadata("design:type", categoryModel_1.Category)
], ProductToCategory.prototype, "category", void 0);
tslib_1.__decorate([
    typeorm_1.BeforeInsert(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ProductToCategory.prototype, "createDetails", null);
tslib_1.__decorate([
    typeorm_1.BeforeUpdate(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ProductToCategory.prototype, "updateDetails", null);
ProductToCategory = tslib_1.__decorate([
    typeorm_1.Entity('product_to_category')
], ProductToCategory);
exports.ProductToCategory = ProductToCategory;
//# sourceMappingURL=ProductToCategory.js.map