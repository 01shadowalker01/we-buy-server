"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
/*
 * spurtcommerce API
 * version 2.1
 * http://api.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
const typeorm_1 = require("typeorm");
const index_1 = require("typeorm/index");
const User_1 = require("./User");
const index_2 = require("typeorm/index");
const index_3 = require("typeorm/index");
const BaseModel_1 = require("./BaseModel");
const moment = require("moment");
let AccessToken = class AccessToken extends BaseModel_1.BaseModel {
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
    index_1.PrimaryGeneratedColumn({ name: 'id' }),
    tslib_1.__metadata("design:type", Number)
], AccessToken.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'user_id' }),
    tslib_1.__metadata("design:type", Number)
], AccessToken.prototype, "userId", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'token' }),
    tslib_1.__metadata("design:type", String)
], AccessToken.prototype, "token", void 0);
tslib_1.__decorate([
    index_3.ManyToOne(type => User_1.User, user => user.accessToken),
    index_2.JoinColumn({ name: 'user_id' }),
    tslib_1.__metadata("design:type", User_1.User)
], AccessToken.prototype, "user", void 0);
tslib_1.__decorate([
    typeorm_1.BeforeInsert(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], AccessToken.prototype, "createDetails", null);
tslib_1.__decorate([
    typeorm_1.BeforeUpdate(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], AccessToken.prototype, "updateDetails", null);
AccessToken = tslib_1.__decorate([
    typeorm_1.Entity('access_token')
], AccessToken);
exports.AccessToken = AccessToken;
//# sourceMappingURL=accessTokenModel.js.map