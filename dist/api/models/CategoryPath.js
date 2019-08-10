"use strict";
/*
 * spurtcommerce API
 * version 2.0.0
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
let CategoryPath = class CategoryPath extends BaseModel_1.BaseModel {
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn({ name: 'category_path_id' }),
    tslib_1.__metadata("design:type", Number)
], CategoryPath.prototype, "categoryPathId", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'category_id' }),
    tslib_1.__metadata("design:type", Number)
], CategoryPath.prototype, "categoryId", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'path_id' }),
    tslib_1.__metadata("design:type", Number)
], CategoryPath.prototype, "pathId", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'level' }),
    tslib_1.__metadata("design:type", Number)
], CategoryPath.prototype, "level", void 0);
CategoryPath = tslib_1.__decorate([
    typeorm_1.Entity('category_path')
], CategoryPath);
exports.CategoryPath = CategoryPath;
//# sourceMappingURL=CategoryPath.js.map