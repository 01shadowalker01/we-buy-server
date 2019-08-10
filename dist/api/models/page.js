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
const moment = require("moment/moment");
let Page = class Page extends BaseModel_1.BaseModel {
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
    typeorm_1.PrimaryGeneratedColumn({ name: 'page_id' }),
    tslib_1.__metadata("design:type", Number)
], Page.prototype, "pageId", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'title' }),
    tslib_1.__metadata("design:type", String)
], Page.prototype, "title", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'intro' }),
    tslib_1.__metadata("design:type", String)
], Page.prototype, "intro", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'full_text' }),
    tslib_1.__metadata("design:type", String)
], Page.prototype, "content", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'page_group_id' }),
    tslib_1.__metadata("design:type", Number)
], Page.prototype, "pageGroupId", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'sort_order' }),
    tslib_1.__metadata("design:type", Number)
], Page.prototype, "sortOrder", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'meta_tag_title' }),
    tslib_1.__metadata("design:type", String)
], Page.prototype, "metaTagTitle", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'meta_tag_description' }),
    tslib_1.__metadata("design:type", String)
], Page.prototype, "metaTagContent", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'meta_tag_keywords' }),
    tslib_1.__metadata("design:type", String)
], Page.prototype, "metaTagKeyword", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'view_page_count' }),
    tslib_1.__metadata("design:type", Number)
], Page.prototype, "viewPageCount", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'is_active' }),
    tslib_1.__metadata("design:type", Number)
], Page.prototype, "isActive", void 0);
tslib_1.__decorate([
    typeorm_1.BeforeInsert(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], Page.prototype, "createDetails", null);
tslib_1.__decorate([
    typeorm_1.BeforeUpdate(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], Page.prototype, "updateDetails", null);
Page = tslib_1.__decorate([
    typeorm_1.Entity('page')
], Page);
exports.Page = Page;
//# sourceMappingURL=page.js.map