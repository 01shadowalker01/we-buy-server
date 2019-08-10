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
let Settings = class Settings extends BaseModel_1.BaseModel {
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
    typeorm_1.PrimaryGeneratedColumn({ name: 'settings_id' }),
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", Number)
], Settings.prototype, "settingsId", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'url' }),
    tslib_1.__metadata("design:type", String)
], Settings.prototype, "url", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'meta_tag_title' }),
    tslib_1.__metadata("design:type", String)
], Settings.prototype, "metaTagTitle", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'meta_tag_description' }),
    tslib_1.__metadata("design:type", String)
], Settings.prototype, "metaTagDescription", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'meta_tag_keywords' }),
    tslib_1.__metadata("design:type", String)
], Settings.prototype, "metaTagKeyword", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'store_name' }),
    tslib_1.__metadata("design:type", String)
], Settings.prototype, "storeName", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'store_owner' }),
    tslib_1.__metadata("design:type", String)
], Settings.prototype, "storeOwner", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'store_address' }),
    tslib_1.__metadata("design:type", String)
], Settings.prototype, "storeAddress", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'country_id' }),
    tslib_1.__metadata("design:type", Number)
], Settings.prototype, "countryId", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'zone_id' }),
    tslib_1.__metadata("design:type", Number)
], Settings.prototype, "zoneId", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'order_status' }),
    tslib_1.__metadata("design:type", Number)
], Settings.prototype, "orderStatus", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'store_email' }),
    tslib_1.__metadata("design:type", String)
], Settings.prototype, "storeEmail", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'store_telephone' }),
    tslib_1.__metadata("design:type", String)
], Settings.prototype, "storeTelephone", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'store_fax' }),
    tslib_1.__metadata("design:type", String)
], Settings.prototype, "storeFax", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'store_logo' }),
    tslib_1.__metadata("design:type", String)
], Settings.prototype, "storeLogo", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'store_logo_path' }),
    tslib_1.__metadata("design:type", String)
], Settings.prototype, "storeLogoPath", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'maintenance_mode' }),
    tslib_1.__metadata("design:type", Number)
], Settings.prototype, "maintenanceMode", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'store_language_name' }),
    tslib_1.__metadata("design:type", String)
], Settings.prototype, "storeLanguageName", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'store_currency_id' }),
    tslib_1.__metadata("design:type", Number)
], Settings.prototype, "storeCurrencyId", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'store_image' }),
    tslib_1.__metadata("design:type", String)
], Settings.prototype, "storeImage", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'store_image_path' }),
    tslib_1.__metadata("design:type", String)
], Settings.prototype, "storeImagePath", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'facebook' }),
    tslib_1.__metadata("design:type", String)
], Settings.prototype, "facebook", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'google' }),
    tslib_1.__metadata("design:type", String)
], Settings.prototype, "google", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'twitter' }),
    tslib_1.__metadata("design:type", String)
], Settings.prototype, "twitter", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'instagram' }),
    tslib_1.__metadata("design:type", String)
], Settings.prototype, "instagram", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'invoice_prefix' }),
    tslib_1.__metadata("design:type", String)
], Settings.prototype, "invoicePrefix", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'category_product_count' }),
    tslib_1.__metadata("design:type", Number)
], Settings.prototype, "categoryProductCount", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'items_per_page' }),
    tslib_1.__metadata("design:type", Number)
], Settings.prototype, "itemsPerPage", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'is_active' }),
    tslib_1.__metadata("design:type", String)
], Settings.prototype, "isActive", void 0);
tslib_1.__decorate([
    typeorm_1.BeforeInsert(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], Settings.prototype, "createDetails", null);
tslib_1.__decorate([
    typeorm_1.BeforeUpdate(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], Settings.prototype, "updateDetails", null);
Settings = tslib_1.__decorate([
    typeorm_1.Entity('settings')
], Settings);
exports.Settings = Settings;
//# sourceMappingURL=setting.js.map