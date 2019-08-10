"use strict";
/*
 * spurtcommerce API
 * version 2.2
 * http://api.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
require("reflect-metadata");
const routing_controllers_1 = require("routing-controllers");
const class_transformer_1 = require("class-transformer");
const categoryService_1 = require("../services/categoryService");
const addCategoryRequest_1 = require("./requests/addCategoryRequest");
const updateCategoryRequest_1 = require("./requests/updateCategoryRequest");
const categoryModel_1 = require("../models/categoryModel");
const CategoryPath_1 = require("../models/CategoryPath");
const array_to_tree_1 = tslib_1.__importDefault(require("array-to-tree"));
const deleteCategoryRequest_1 = require("./requests/deleteCategoryRequest");
const CategoryPathService_1 = require("../services/CategoryPathService");
let CategoryController = class CategoryController {
    constructor(categoryService, categoryPathService) {
        this.categoryService = categoryService;
        this.categoryPathService = categoryPathService;
    }
    // create Category API
    /**
     * @api {post} /api/add-category Add Category API
     * @apiGroup Category
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {String} name Category name
     * @apiParam (Request body) {String} image Category image
     * @apiParam (Request body) {number} parentInt Category  parentInt
     * @apiParam (Request body) {number} sortOrder Category sortOrder
     * @apiParam (Request body) {String} metaTagTitle Category metaTagTitle
     * @apiParam (Request body) {String} metaTagDescription Category metaTagDescription
     * @apiParam (Request body) {String} metaTagKeyword Category metaTagKeyword
     * @apiParamExample {json} Input
     * {
     *      "name" : "",
     *      "image" : "",
     *      "parentInt" : "",
     *      "sortOrder" : "",
     *      "metaTagTitle" : "",
     *      "metaTagDescription" : "",
     *      "metaTagKeyword" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully created new Category.",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/add-category
     * @apiErrorExample {json} Category error
     * HTTP/1.1 500 Internal Server Error
     */
    addCategory(category, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log(category.name);
            const newCategory = new categoryModel_1.Category();
            newCategory.name = category.name;
            newCategory.image = category.image;
            newCategory.parentInt = category.parentInt;
            newCategory.sortOrder = category.sortOrder;
            newCategory.metaTagTitle = category.metaTagTitle;
            newCategory.metaTagDescription = category.metaTagDescription;
            newCategory.metaTagKeyword = category.metaTagKeyword;
            const categorySave = yield this.categoryService.create(newCategory);
            const getAllPath = yield this.categoryPathService.find({
                where: { categoryId: category.parentInt },
                order: { level: 'ASC' },
            });
            console.log(getAllPath);
            let level = 0;
            for (const path of getAllPath) {
                const CategoryPathLoop = new CategoryPath_1.CategoryPath();
                CategoryPathLoop.categoryId = categorySave.categoryId;
                CategoryPathLoop.pathId = path.pathId;
                CategoryPathLoop.level = level;
                const vv = yield this.categoryPathService.create(CategoryPathLoop);
                console.log('vv' + vv);
                level++;
            }
            const newCategoryPath = new CategoryPath_1.CategoryPath();
            newCategoryPath.categoryId = categorySave.categoryId;
            newCategoryPath.pathId = categorySave.categoryId;
            newCategoryPath.level = level;
            yield this.categoryPathService.create(newCategoryPath);
            if (categorySave !== undefined) {
                const successResponse = {
                    status: 1,
                    message: 'Successfully created new category.',
                    data: categorySave,
                };
                return response.status(200).send(successResponse);
            }
            else {
                const errorResponse = {
                    status: 0,
                    message: 'Unable to create the category. ',
                };
                return response.status(400).send(errorResponse);
            }
        });
    }
    // Update Category API
    /**
     * @api {put} /api/update-category/:id Update Category API
     * @apiGroup Category
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {number} categoryId Category categoryId
     * @apiParam (Request body) {String} name Category name
     * @apiParam (Request body) {String} image Category image
     * @apiParam (Request body) {number} parentInt Category  parentInt
     * @apiParam (Request body) {number} sortOrder Category sortOrder
     * @apiParam (Request body) {String} metaTagTitle Category metaTagTitle
     * @apiParam (Request body) {String} metaTagDescription Category metaTagDescription
     * @apiParam (Request body) {String} metaTagKeyword Category metaTagKeyword
     * @apiParamExample {json} Input
     * {
     *      "categoryId" : "",
     *      "name" : "",
     *      "image" : "",
     *      "imagePath" : "",
     *      "parentInt" : "",
     *      "sortOrder" : "",
     *      "metaTagTitle" : "",
     *      "metaTagDescription" : "",
     *      "metaTagKeyword" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully updated Category.",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/update-category/:id
     * @apiErrorExample {json} Category error
     * HTTP/1.1 500 Internal Server Error
     */
    updateCategory(category, response, request) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const categoryId = yield this.categoryService.findOne({
                where: {
                    categoryId: category.categoryId,
                },
            });
            if (!categoryId) {
                const errorResponse = {
                    status: 0,
                    message: 'Invalid categoryId',
                };
                return response.status(400).send(errorResponse);
            }
            categoryId.name = category.name;
            categoryId.image = category.image;
            categoryId.parentInt = category.parentInt;
            categoryId.sortOrder = category.sortOrder;
            categoryId.metaTagTitle = category.metaTagTitle;
            categoryId.metaTagDescription = category.metaTagDescription;
            categoryId.metaTagKeyword = category.metaTagKeyword;
            const categorySave = yield this.categoryService.create(categoryId);
            const deleteCategory = yield this.categoryPathService.find({ where: { categoryId: category.categoryId } });
            for (const val of deleteCategory) {
                yield this.categoryPathService.delete(val.categoryPathId);
            }
            const getAllPath = yield this.categoryPathService.find({
                where: { categoryId: category.parentInt },
                order: { level: 'ASC' },
            });
            console.log(getAllPath);
            let level = 0;
            for (const path of getAllPath) {
                const CategoryPathLoop = new CategoryPath_1.CategoryPath();
                CategoryPathLoop.categoryId = categorySave.categoryId;
                CategoryPathLoop.pathId = path.pathId;
                CategoryPathLoop.level = level;
                this.categoryPathService.create(CategoryPathLoop);
                level++;
            }
            const newCategoryPath = new CategoryPath_1.CategoryPath();
            newCategoryPath.categoryId = categorySave.categoryId;
            newCategoryPath.pathId = categorySave.categoryId;
            newCategoryPath.level = level;
            yield this.categoryPathService.create(newCategoryPath);
            if (categorySave !== undefined) {
                const successResponse = {
                    status: 1,
                    message: 'Successfully updated category.',
                    data: class_transformer_1.classToPlain(categorySave),
                };
                return response.status(200).send(successResponse);
            }
            else {
                const errorResponse = {
                    status: 0,
                    message: 'Unable to update the category. ',
                };
                return response.status(400).send(errorResponse);
            }
        });
    }
    // delete Category API
    /**
     * @api {delete} /api/delete-category/:id Delete Category API
     * @apiGroup Category
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {number} categoryId Category categoryId
     * @apiParamExample {json} Input
     * {
     *      "categoryId" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully deleted Category.",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/delete-category/:id
     * @apiErrorExample {json} Category error
     * HTTP/1.1 500 Internal Server Error
     */
    deleteCategory(category, response, request) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const categoryId = yield this.categoryService.findOne({
                where: {
                    categoryId: category.categoryId,
                },
            });
            if (!categoryId) {
                const errorResponse = {
                    status: 0,
                    message: 'Invalid categoryId',
                };
                return response.status(400).send(errorResponse);
            }
            const parentCategoryId = yield this.categoryService.findOne({
                where: {
                    parentInt: category.categoryId,
                },
            });
            if (parentCategoryId) {
                const errorresponse = {
                    status: 0,
                    message: 'you cannot delete parent categoryId',
                };
                return response.status(400).send(errorresponse);
            }
            const categoryPath = yield this.categoryPathService.find({ where: { categoryId: category.categoryId } });
            for (const path of categoryPath) {
                yield this.categoryPathService.delete(path.categoryPathId);
            }
            const deleteCategory = yield this.categoryService.delete(categoryId);
            console.log('category' + deleteCategory);
            if (!deleteCategory) {
                const successResponse = {
                    status: 1,
                    message: 'Successfully deleted category.',
                };
                return response.status(200).send(successResponse);
            }
            else {
                const errorResponse = {
                    status: 0,
                    message: 'Unable to delete the category. ',
                };
                return response.status(400).send(errorResponse);
            }
        });
    }
    // Category List API
    /**
     * @api {get} /api/categorylist Category List API
     * @apiGroup Category
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {Number} limit limit
     * @apiParam (Request body) {Number} offset offset
     * @apiParam (Request body) {String} keyword keyword
     * @apiParam (Request body) {Number} sortOrder sortOrder
     * @apiParam (Request body) {String} count count in number or boolean
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "successfully got the complete category list.",
     *      "data":"{ }"
     *      "status": "1"
     * }
     * @apiSampleRequest /api/categorylist
     * @apiErrorExample {json} Category error
     * HTTP/1.1 500 Internal Server Error
     */
    categorylist(limit, offset, keyword, sortOrder, count, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log(keyword);
            const select = ['categoryId', 'name', 'parentInt', 'sortOrder'];
            const search = [
                {
                    name: 'name',
                    op: 'like',
                    value: keyword,
                },
            ];
            const WhereConditions = [];
            const category = yield this.categoryService.list(limit, offset, select, search, WhereConditions, sortOrder, count);
            if (count) {
                const successResponse = {
                    status: 1,
                    message: 'successfully got the complete category list. ',
                    data: category,
                };
                return response.status(200).send(successResponse);
            }
            const promise = category.map((result) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                const temp = result;
                const categoryLevel = yield this.categoryPathService.find({
                    select: ['level', 'pathId'],
                    where: { categoryId: result.categoryId },
                    order: { level: 'ASC' },
                }).then((values) => {
                    const categories = values.map((val) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                        const categoryNames = yield this.categoryService.findOne({ categoryId: val.pathId });
                        const JsonData = JSON.stringify(categoryNames);
                        const ParseData = JSON.parse(JsonData);
                        const tempVal = val;
                        tempVal.categoryName = ParseData.name;
                        return tempVal;
                    }));
                    const results = Promise.all(categories);
                    return results;
                });
                temp.levels = categoryLevel;
                return temp;
            }));
            const value = yield Promise.all(promise);
            if (category) {
                const successResponse = {
                    status: 1,
                    message: 'successfully got the complete category list. ',
                    data: value,
                };
                return response.status(200).send(successResponse);
            }
        });
    }
    // Category List Tree API
    /**
     * @api {get} /api/category-list-intree Category List InTree API
     * @apiGroup Category
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {Number} limit limit
     * @apiParam (Request body) {Number} offset offset
     * @apiParam (Request body) {String} keyword keyword
     * @apiParam (Request body) {Number} sortOrder sortOrder
     * @apiParam (Request body) {String} count count in number or boolean
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "successfully got the complete category list.",
     *      "data":"{}"
     *      "status": "1"
     * }
     * @apiSampleRequest /api/category-list-intree
     * @apiErrorExample {json} Category error
     * HTTP/1.1 500 Internal Server Error
     */
    categoryListTree(limit, offset, keyword, sortOrder, count, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log(keyword);
            const select = ['categoryId', 'name', 'image', 'imagePath', 'parentInt', 'sortOrder', 'metaTagTitle', 'metaTagDescription', 'metaTagKeyword'];
            const search = [
                {
                    name: 'name',
                    op: 'like',
                    value: keyword,
                },
            ];
            const WhereConditions = [];
            const category = yield this.categoryService.list(limit, offset, select, search, WhereConditions, sortOrder, count);
            if (count) {
                const successResponse = {
                    status: 1,
                    message: 'Successfully get category List count',
                    data: category,
                };
                return response.status(200).send(successResponse);
            }
            else {
                const categoryList = array_to_tree_1.default(category, {
                    parentProperty: 'parentInt',
                    customID: 'categoryId',
                });
                const successResponse = {
                    status: 1,
                    message: 'successfully got the complete category list.',
                    data: categoryList,
                };
                return response.status(200).send(successResponse);
            }
        });
    }
};
tslib_1.__decorate([
    routing_controllers_1.Post('/add-category'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.Body({ validate: true })), tslib_1.__param(1, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [addCategoryRequest_1.AddCategory, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CategoryController.prototype, "addCategory", null);
tslib_1.__decorate([
    routing_controllers_1.Put('/update-category/:id'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.Body({ validate: true })), tslib_1.__param(1, routing_controllers_1.Res()), tslib_1.__param(2, routing_controllers_1.Req()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [updateCategoryRequest_1.UpdateCategoryRequest, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CategoryController.prototype, "updateCategory", null);
tslib_1.__decorate([
    routing_controllers_1.Delete('/delete-category/:id'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.Body({ validate: true })), tslib_1.__param(1, routing_controllers_1.Res()), tslib_1.__param(2, routing_controllers_1.Req()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [deleteCategoryRequest_1.DeleteCategoryRequest, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CategoryController.prototype, "deleteCategory", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/categorylist'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.QueryParam('limit')), tslib_1.__param(1, routing_controllers_1.QueryParam('offset')), tslib_1.__param(2, routing_controllers_1.QueryParam('keyword')), tslib_1.__param(3, routing_controllers_1.QueryParam('sortOrder')), tslib_1.__param(4, routing_controllers_1.QueryParam('count')), tslib_1.__param(5, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Number, String, Number, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CategoryController.prototype, "categorylist", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/category-list-intree'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.QueryParam('limit')), tslib_1.__param(1, routing_controllers_1.QueryParam('offset')), tslib_1.__param(2, routing_controllers_1.QueryParam('keyword')), tslib_1.__param(3, routing_controllers_1.QueryParam('sortOrder')), tslib_1.__param(4, routing_controllers_1.QueryParam('count')), tslib_1.__param(5, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Number, String, Number, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CategoryController.prototype, "categoryListTree", null);
CategoryController = tslib_1.__decorate([
    routing_controllers_1.JsonController(),
    tslib_1.__metadata("design:paramtypes", [categoryService_1.CategoryService, CategoryPathService_1.CategoryPathService])
], CategoryController);
exports.CategoryController = CategoryController;
//# sourceMappingURL=categoryController.js.map