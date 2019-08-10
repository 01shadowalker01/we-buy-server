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
const ProductToCategory_1 = require("./ProductToCategory");
const ProductImage_1 = require("./ProductImage");
const customerWishlist_1 = require("./customerWishlist");
const ProductRelated_1 = require("./ProductRelated");
const OrderProduct_1 = require("./OrderProduct");
const ProductRating_1 = require("./ProductRating");
let Product = class Product extends BaseModel_1.BaseModel {
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
    typeorm_1.PrimaryGeneratedColumn({ name: 'product_id' }),
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", Number)
], Product.prototype, "productId", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'sku' }),
    tslib_1.__metadata("design:type", String)
], Product.prototype, "sku", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'upc' }),
    tslib_1.__metadata("design:type", String)
], Product.prototype, "upc", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'location' }),
    tslib_1.__metadata("design:type", String)
], Product.prototype, "location", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'quantity' }),
    tslib_1.__metadata("design:type", Number)
], Product.prototype, "quantity", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'minimum_quantity' }),
    tslib_1.__metadata("design:type", Number)
], Product.prototype, "minimumQuantity", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'subtract_stock' }),
    tslib_1.__metadata("design:type", Number)
], Product.prototype, "subtractStock", void 0);
tslib_1.__decorate([
    class_validator_1.IsNotEmpty(),
    typeorm_1.Column({ name: 'stock_status_id' }),
    tslib_1.__metadata("design:type", Number)
], Product.prototype, "stockStatusId", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'image' }),
    tslib_1.__metadata("design:type", String)
], Product.prototype, "image", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'image_path' }),
    tslib_1.__metadata("design:type", String)
], Product.prototype, "imagePath", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'manufacturer_id' }),
    tslib_1.__metadata("design:type", Number)
], Product.prototype, "manufacturerId", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'shipping' }),
    tslib_1.__metadata("design:type", Number)
], Product.prototype, "shipping", void 0);
tslib_1.__decorate([
    class_validator_1.IsNotEmpty(),
    typeorm_1.Column({ name: 'price' }),
    tslib_1.__metadata("design:type", Number)
], Product.prototype, "price", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'date_available' }),
    tslib_1.__metadata("design:type", Date)
], Product.prototype, "dateAvailable", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'sort_order' }),
    tslib_1.__metadata("design:type", Number)
], Product.prototype, "sortOrder", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'name' }),
    tslib_1.__metadata("design:type", String)
], Product.prototype, "name", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'description' }),
    tslib_1.__metadata("design:type", String)
], Product.prototype, "description", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'amount' }),
    tslib_1.__metadata("design:type", Number)
], Product.prototype, "amount", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'meta_tag_title' }),
    tslib_1.__metadata("design:type", String)
], Product.prototype, "metaTagTitle", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'meta_tag_description' }),
    tslib_1.__metadata("design:type", String)
], Product.prototype, "metaTagDescription", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'meta_tag_keyword' }),
    tslib_1.__metadata("design:type", String)
], Product.prototype, "metaTagKeyword", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'discount' }),
    tslib_1.__metadata("design:type", Number)
], Product.prototype, "discount", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'delete_flag' }),
    tslib_1.__metadata("design:type", Number)
], Product.prototype, "deleteFlag", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'is_featured' }),
    tslib_1.__metadata("design:type", Number)
], Product.prototype, "isFeatured", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'today_deals' }),
    tslib_1.__metadata("design:type", Number)
], Product.prototype, "todayDeals", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'condition' }),
    tslib_1.__metadata("design:type", Number)
], Product.prototype, "condition", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'rating' }),
    tslib_1.__metadata("design:type", Number)
], Product.prototype, "rating", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'wishlist_status' }),
    tslib_1.__metadata("design:type", Number)
], Product.prototype, "wishListStatus", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'is_active' }),
    tslib_1.__metadata("design:type", Number)
], Product.prototype, "isActive", void 0);
tslib_1.__decorate([
    typeorm_1.OneToMany(type => ProductToCategory_1.ProductToCategory, productToCategory => productToCategory.product),
    tslib_1.__metadata("design:type", Array)
], Product.prototype, "productToCategory", void 0);
tslib_1.__decorate([
    typeorm_1.OneToMany(type => ProductImage_1.ProductImage, productImage => productImage.product),
    tslib_1.__metadata("design:type", Array)
], Product.prototype, "productImage", void 0);
tslib_1.__decorate([
    typeorm_1.OneToMany(type => customerWishlist_1.CustomerWishlist, customerWishlist => customerWishlist.product),
    tslib_1.__metadata("design:type", Array)
], Product.prototype, "wishlist", void 0);
tslib_1.__decorate([
    typeorm_1.OneToMany(type => ProductRelated_1.ProductRelated, productRelated => productRelated.productRelated),
    tslib_1.__metadata("design:type", Array)
], Product.prototype, "relatedproduct", void 0);
tslib_1.__decorate([
    typeorm_1.OneToMany(type => ProductRating_1.ProductRating, productRating => productRating.product),
    tslib_1.__metadata("design:type", Array)
], Product.prototype, "productRating", void 0);
tslib_1.__decorate([
    typeorm_1.OneToMany(type => OrderProduct_1.OrderProduct, orderProduct => orderProduct.productInformationDetail),
    tslib_1.__metadata("design:type", Array)
], Product.prototype, "orderProduct", void 0);
tslib_1.__decorate([
    typeorm_1.BeforeInsert(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], Product.prototype, "createDetails", null);
tslib_1.__decorate([
    typeorm_1.BeforeUpdate(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], Product.prototype, "updateDetails", null);
Product = tslib_1.__decorate([
    typeorm_1.Entity('product')
], Product);
exports.Product = Product;
//# sourceMappingURL=ProductModel.js.map