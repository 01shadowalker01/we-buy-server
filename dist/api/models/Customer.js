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
const bcrypt = tslib_1.__importStar(require("bcrypt"));
const moment = require("moment/moment");
const class_transformer_1 = require("class-transformer");
const ProductRating_1 = require("./ProductRating");
let Customer = class Customer extends BaseModel_1.BaseModel {
    static hashPassword(password) {
        return new Promise((resolve, reject) => {
            bcrypt.hash(password, 10, (err, hash) => {
                if (err) {
                    return reject(err);
                }
                resolve(hash);
            });
        });
    }
    static comparePassword(user, password) {
        return new Promise((resolve, reject) => {
            bcrypt.compare(password, user.password, (err, res) => {
                resolve(res === true);
            });
        });
    }
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
], Customer.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'first_name' }),
    tslib_1.__metadata("design:type", String)
], Customer.prototype, "firstName", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'last_name' }),
    tslib_1.__metadata("design:type", String)
], Customer.prototype, "lastName", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'username' }),
    tslib_1.__metadata("design:type", String)
], Customer.prototype, "username", void 0);
tslib_1.__decorate([
    class_transformer_1.Exclude(),
    typeorm_1.Column({ name: 'password' }),
    tslib_1.__metadata("design:type", String)
], Customer.prototype, "password", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'email' }),
    tslib_1.__metadata("design:type", String)
], Customer.prototype, "email", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'mobile' }),
    tslib_1.__metadata("design:type", Number)
], Customer.prototype, "mobileNumber", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'address' }),
    tslib_1.__metadata("design:type", String)
], Customer.prototype, "address", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'country_id' }),
    tslib_1.__metadata("design:type", Number)
], Customer.prototype, "countryId", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'zone_id' }),
    tslib_1.__metadata("design:type", Number)
], Customer.prototype, "zoneId", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'city' }),
    tslib_1.__metadata("design:type", String)
], Customer.prototype, "city", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'local' }),
    tslib_1.__metadata("design:type", String)
], Customer.prototype, "local", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'oauth_data' }),
    tslib_1.__metadata("design:type", String)
], Customer.prototype, "oauthData", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'avatar' }),
    tslib_1.__metadata("design:type", String)
], Customer.prototype, "avatar", void 0);
tslib_1.__decorate([
    class_transformer_1.Exclude(),
    typeorm_1.Column({ name: 'newsletter' }),
    tslib_1.__metadata("design:type", String)
], Customer.prototype, "newsletter", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'avatar_path' }),
    tslib_1.__metadata("design:type", String)
], Customer.prototype, "avatarPath", void 0);
tslib_1.__decorate([
    class_transformer_1.Exclude(),
    typeorm_1.Column({ name: 'customer_group_id' }),
    tslib_1.__metadata("design:type", Number)
], Customer.prototype, "customerGroupId", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'last_login' }),
    tslib_1.__metadata("design:type", String)
], Customer.prototype, "lastLogin", void 0);
tslib_1.__decorate([
    class_transformer_1.Exclude(),
    typeorm_1.Column({ name: 'safe' }),
    tslib_1.__metadata("design:type", Number)
], Customer.prototype, "safe", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'ip' }),
    tslib_1.__metadata("design:type", Number)
], Customer.prototype, "ip", void 0);
tslib_1.__decorate([
    class_transformer_1.Exclude(),
    typeorm_1.Column({ name: 'mail_status' }),
    tslib_1.__metadata("design:type", Number)
], Customer.prototype, "mailStatus", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'pincode' }),
    tslib_1.__metadata("design:type", String)
], Customer.prototype, "pincode", void 0);
tslib_1.__decorate([
    class_transformer_1.Exclude(),
    typeorm_1.Column({ name: 'delete_flag' }),
    tslib_1.__metadata("design:type", Number)
], Customer.prototype, "deleteFlag", void 0);
tslib_1.__decorate([
    class_transformer_1.Exclude(),
    typeorm_1.Column({ name: 'is_active' }),
    tslib_1.__metadata("design:type", Number)
], Customer.prototype, "isActive", void 0);
tslib_1.__decorate([
    typeorm_1.OneToMany(type => ProductRating_1.ProductRating, productRating => productRating.product),
    tslib_1.__metadata("design:type", Array)
], Customer.prototype, "productRating", void 0);
tslib_1.__decorate([
    typeorm_1.BeforeInsert(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], Customer.prototype, "createDetails", null);
tslib_1.__decorate([
    typeorm_1.BeforeUpdate(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], Customer.prototype, "updateDetails", null);
Customer = tslib_1.__decorate([
    typeorm_1.Entity('customer')
], Customer);
exports.Customer = Customer;
//# sourceMappingURL=Customer.js.map