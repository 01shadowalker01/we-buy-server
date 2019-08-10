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
let Language = class Language extends BaseModel_1.BaseModel {
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
    index_1.PrimaryGeneratedColumn({ name: 'language_id' }),
    tslib_1.__metadata("design:type", Number)
], Language.prototype, "languageId", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'name' }),
    tslib_1.__metadata("design:type", String)
], Language.prototype, "name", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'code' }),
    tslib_1.__metadata("design:type", String)
], Language.prototype, "code", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'image' }),
    tslib_1.__metadata("design:type", String)
], Language.prototype, "image", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'image_path' }),
    tslib_1.__metadata("design:type", String)
], Language.prototype, "imagePath", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'locale' }),
    tslib_1.__metadata("design:type", Number)
], Language.prototype, "locale", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'sort_order' }),
    tslib_1.__metadata("design:type", Number)
], Language.prototype, "sortOrder", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'is_active' }),
    tslib_1.__metadata("design:type", Number)
], Language.prototype, "isActive", void 0);
tslib_1.__decorate([
    typeorm_1.BeforeInsert(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], Language.prototype, "createDetails", null);
tslib_1.__decorate([
    typeorm_1.BeforeUpdate(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], Language.prototype, "updateDetails", null);
Language = tslib_1.__decorate([
    typeorm_1.Entity('language')
], Language);
exports.Language = Language;
//# sourceMappingURL=language.js.map