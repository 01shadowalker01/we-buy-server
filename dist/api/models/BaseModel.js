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
class BaseModel {
}
tslib_1.__decorate([
    class_transformer_1.Exclude(),
    typeorm_1.Column({ name: 'created_by' }),
    tslib_1.__metadata("design:type", Number)
], BaseModel.prototype, "createdBy", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'created_date' }),
    tslib_1.__metadata("design:type", String)
], BaseModel.prototype, "createdDate", void 0);
tslib_1.__decorate([
    class_transformer_1.Exclude(),
    typeorm_1.Column({ name: 'modified_by' }),
    tslib_1.__metadata("design:type", Number)
], BaseModel.prototype, "modifiedBy", void 0);
tslib_1.__decorate([
    class_transformer_1.Exclude(),
    typeorm_1.Column({ name: 'modified_date' }),
    tslib_1.__metadata("design:type", String)
], BaseModel.prototype, "modifiedDate", void 0);
exports.BaseModel = BaseModel;
//# sourceMappingURL=BaseModel.js.map