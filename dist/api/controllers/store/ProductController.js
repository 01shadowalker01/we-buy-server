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
const ProductToCategoryService_1 = require("../../services/ProductToCategoryService");
const ProductService_1 = require("../../services/ProductService");
const categoryService_1 = require("../../services/categoryService");
const ProductRelatedService_1 = require("../../services/ProductRelatedService");
const UpdateFeatureProductRequest_1 = require("./requests/UpdateFeatureProductRequest");
const ProductImageService_1 = require("../../services/ProductImageService");
const productViewLog_1 = require("../../models/productViewLog");
const ProductViewLogService_1 = require("../../services/ProductViewLogService");
const jsonwebtoken_1 = tslib_1.__importDefault(require("jsonwebtoken"));
const CustomerService_1 = require("../../services/CustomerService");
const ProductDiscountService_1 = require("../../services/ProductDiscountService");
const ProductSpecialService_1 = require("../../services/ProductSpecialService");
const CategoryPathService_1 = require("../../services/CategoryPathService");
const RatingService_1 = require("../../services/RatingService");
let ProductController = class ProductController {
    constructor(productService, productToCategoryService, categoryService, productRelatedService, productImageService, customerService, productViewLogService, productDiscountService, productSpecialService, categoryPathService, productRatingService) {
        this.productService = productService;
        this.productToCategoryService = productToCategoryService;
        this.categoryService = categoryService;
        this.productRelatedService = productRelatedService;
        this.productImageService = productImageService;
        this.customerService = customerService;
        this.productViewLogService = productViewLogService;
        this.productDiscountService = productDiscountService;
        this.productSpecialService = productSpecialService;
        this.categoryPathService = categoryPathService;
        this.productRatingService = productRatingService;
    }
    // Product Details API
    /**
     * @api {get} /api/product-store/productdetail/:id Product Detail API
     * @apiGroup Store
     * @apiHeader {String} Authorization
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "status": "1"
     *      "message": "Successfully get product Detail",
     *      "data":"{}"
     * }
     * @apiSampleRequest /api/product-store/productdetail/:id
     * @apiErrorExample {json} productDetail error
     * HTTP/1.1 500 Internal Server Error
     */
    productDetail(id, request, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const select = ['productId', 'sku', 'upc', 'name', 'description', 'location', 'minimumQuantity', 'quantity', 'subtractStock', 'metaTagTitle', 'manufacturerId', 'stockStatusId', 'shipping', 'dateAvailable', 'sortOrder', 'price', 'condition', 'rating', 'wishListStatus', 'isActive'];
            const relation = ['productImage'];
            const WhereConditions = [
                {
                    name: 'productId',
                    op: 'where',
                    value: id,
                },
            ];
            const productDetail = yield this.productService.list(0, 0, select, relation, WhereConditions, 0, 0, 0);
            const productDetails = class_transformer_1.classToPlain(productDetail);
            const promises = productDetails.map((result) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                const productToCategory = yield this.productToCategoryService.findAll({
                    select: ['categoryId', 'productId'],
                    where: { productId: result.productId },
                }).then((val) => {
                    const category = val.map((value) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                        const categoryNames = yield this.categoryService.findOne({ categoryId: value.categoryId });
                        const JsonData = JSON.stringify(categoryNames);
                        const ParseData = JSON.parse(JsonData);
                        const temp = value;
                        temp.categoryName = ParseData.name;
                        return temp;
                    }));
                    const results = Promise.all(category);
                    return results;
                });
                const relatedProductData = yield this.productRelatedService.findAll({ where: { productId: result.productId } }).then((val) => {
                    const relatedProduct = val.map((value) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                        const productId = value.relatedProductId;
                        const product = yield this.productService.findOne({
                            select: ['productId', 'name'],
                            where: { productId },
                            relations: ['productImage'],
                        });
                        return class_transformer_1.classToPlain(product);
                    }));
                    const resultData = Promise.all(relatedProduct);
                    return resultData;
                });
                const dd = result;
                dd.Category = productToCategory;
                dd.relatedProductDetail = relatedProductData;
                const nowDate = new Date();
                const todaydate = nowDate.getFullYear() + '-' + (nowDate.getMonth() + 1) + '-' + nowDate.getDate();
                const productSpecial = yield this.productSpecialService.findSpecialPrice(result.productId, todaydate);
                const productDiscount = yield this.productDiscountService.findDiscountPrice(result.productId, todaydate);
                if (productSpecial !== undefined) {
                    dd.pricerefer = productSpecial.price;
                    dd.flag = 1;
                }
                else if (productDiscount !== undefined) {
                    dd.pricerefer = productDiscount.price;
                    dd.flag = 0;
                }
                else {
                    dd.pricerefer = '';
                    dd.flag = '';
                }
                return dd;
            }));
            // wait until all promises resolve
            const finalResult = yield Promise.all(promises);
            if (request.header('authorization')) {
                let customerId;
                jsonwebtoken_1.default.verify(request.header('authorization').split(' ')[1], '123##$$)(***&', (err, decoded) => {
                    if (err) {
                        console.log(err);
                    }
                    console.log('lll', decoded.id);
                    customerId = decoded.id;
                });
                const customerDetail = yield this.customerService.findOne({ where: { id: customerId } });
                const viewLog = new productViewLog_1.ProductViewLog();
                viewLog.productId = id;
                viewLog.customerId = customerDetail.id;
                viewLog.firstName = customerDetail.firstName;
                viewLog.lastName = customerDetail.lastName;
                viewLog.username = customerDetail.username;
                viewLog.email = customerDetail.email;
                viewLog.mobileNumber = customerDetail.mobileNumber;
                viewLog.address = customerDetail.address;
                yield this.productViewLogService.create(viewLog);
            }
            const successResponse = {
                status: 1,
                message: 'Successfully get productDetail',
                data: finalResult,
            };
            return response.status(200).send(successResponse);
        });
    }
    // update Feature Product API
    /**
     * @api {put} /api/product-store/update-featureproduct/:id Update Feature Product API
     * @apiGroup Store
     * @apiParam (Request body) {number} isFeature product isFeature should be 0 or 1
     * @apiParamExample {json} Input
     * {
     *      "isFeature" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully updated feature Product.",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/product-store/update-featureproduct/:id
     * @apiErrorExample {json} isFeature error
     * HTTP/1.1 500 Internal Server Error
     */
    updateFeatureProduct(id, updateFeatureProductParam, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const product = yield this.productService.findOne({
                where: {
                    productId: id,
                },
            });
            if (!product) {
                const errorResponse = {
                    status: 0,
                    message: 'Invalid productId',
                };
                return response.status(400).send(errorResponse);
            }
            product.isFeatured = updateFeatureProductParam.isFeature;
            const productSave = yield this.productService.create(product);
            if (productSave) {
                const successResponse = {
                    status: 1,
                    message: 'product updated successfully.',
                    data: productSave,
                };
                return response.status(200).send(successResponse);
            }
            else {
                const errorResponse = {
                    status: 0,
                    message: 'unable to updated product',
                };
                return response.status(400).send(errorResponse);
            }
        });
    }
    // Featured Product List API
    /**
     * @api {get} /api/product-store/featureproduct-list Feature Product List
     * @apiGroup Store
     * @apiParam (Request body) {Number} limit limit
     * @apiParam (Request body) {Number} offset offset
     * @apiParam (Request body) {Number} keyword keyword search by name
     * @apiParam (Request body) {Number} sku search by sku
     * @apiParam (Request body) {Number} count count in number or boolean
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully get feature product List..!!",
     *      "status": "1",
     *      "data": {},
     * }
     * @apiSampleRequest /api/product-store/featureproduct-list
     * @apiErrorExample {json} FeatureProduct List error
     * HTTP/1.1 500 Internal Server Error
     */
    featureProductList(limit, offset, keyword, sku, count, request, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const select = ['productId', 'sku', 'upc', 'name', 'rating', 'description', 'location', 'minimumQuantity',
                'quantity', 'subtractStock', 'metaTagTitle', 'manufacturerId', 'stockStatusId',
                'shipping', 'dateAvailable', 'sortOrder', 'price', 'isActive'];
            const whereConditions = [
                {
                    name: 'deleteFlag',
                    op: 'where',
                    value: 0,
                },
                {
                    name: 'isFeatured',
                    op: 'where',
                    value: 1,
                },
                {
                    name: 'isActive',
                    op: 'where',
                    value: 1,
                },
            ];
            const search = [
                {
                    name: 'name',
                    op: 'like',
                    value: keyword,
                },
                {
                    name: 'sku',
                    op: 'like',
                    value: sku,
                },
            ];
            const featureProduct = yield this.productService.list(limit, offset, select, 0, whereConditions, search, 0, count);
            if (count) {
                const successresponse = {
                    status: 1,
                    message: 'Successfully get feature product count',
                    data: featureProduct,
                };
                return response.status(200).send(successresponse);
            }
            const promises = featureProduct.map((result) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                const productImage = yield this.productImageService.findOne({
                    select: ['productId', 'image', 'containerName', 'defaultImage'],
                    where: {
                        productId: result.productId,
                        defaultImage: 1,
                    },
                });
                const temp = result;
                temp.Images = productImage;
                return temp;
            }));
            const finalResult = yield Promise.all(promises);
            const successResponse = {
                status: 1,
                message: 'Successfully get feature product List',
                data: finalResult,
            };
            return response.status(200).send(successResponse);
        });
    }
    // Today Deals Product List API
    /**
     * @api {get} /api/product-store/todayDeals-list Today Deals List
     * @apiGroup Store
     * @apiParam (Request body) {Number} limit limit
     * @apiParam (Request body) {Number} offset offset
     * @apiParam (Request body) {String} keyword keyword search by name
     * @apiParam (Request body) {String} sku search by sku
     * @apiParam (Request body) {Number} count count in number or boolean
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully get today deals product List..!!",
     *      "status": "1",
     *      "data": {},
     * }
     * @apiSampleRequest /api/product-store/todayDeals-list
     * @apiErrorExample {json} TodayDeals List error
     * HTTP/1.1 500 Internal Server Error
     */
    todayDealsList(limit, offset, keyword, sku, count, request, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const select = ['productId', 'sku', 'upc', 'name', 'rating', 'description', 'location', 'minimumQuantity',
                'quantity', 'subtractStock', 'metaTagTitle', 'manufacturerId', 'stockStatusId', 'isFeatured', 'todayDeals',
                'shipping', 'dateAvailable', 'sortOrder', 'price', 'isActive'];
            const whereConditions = [
                {
                    name: 'deleteFlag',
                    op: 'where',
                    value: 0,
                },
                {
                    name: 'todayDeals',
                    op: 'where',
                    value: 1,
                },
                {
                    name: 'isActive',
                    op: 'where',
                    value: 1,
                },
            ];
            const search = [
                {
                    name: 'name',
                    op: 'like',
                    value: keyword,
                },
                {
                    name: 'sku',
                    op: 'like',
                    value: sku,
                },
            ];
            const todayDeals = yield this.productService.list(limit, offset, select, 0, whereConditions, search, 0, count);
            if (count) {
                const successresponse = {
                    status: 1,
                    message: 'Successfully got today deals count',
                    data: todayDeals,
                };
                return response.status(200).send(successresponse);
            }
            const promises = todayDeals.map((result) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                const productImage = yield this.productImageService.findOne({
                    select: ['productId', 'image', 'containerName', 'defaultImage'],
                    where: {
                        productId: result.productId,
                        defaultImage: 1,
                    },
                });
                const temp = result;
                temp.Images = productImage;
                return temp;
            }));
            const finalResult = yield Promise.all(promises);
            const successResponse = {
                status: 1,
                message: 'Successfully got today deals List',
                data: finalResult,
            };
            return response.status(200).send(successResponse);
        });
    }
    // Get Category API
    /**
     * @api {get} /api/product-store/Get-Category Get Category API
     * @apiGroup Store
     * @apiParam (Request body) {Number} CategoryId categoryId
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "successfully got the category.",
     *      "data":"{ }"
     *      "status": "1"
     * }
     * @apiSampleRequest /api/product-store/Get-Category
     * @apiErrorExample {json} Category error
     * HTTP/1.1 500 Internal Server Error
     */
    getCategory(CategoryId, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const select = ['categoryId', 'name', 'parentInt', 'sortOrder'];
            const search = [];
            const WhereConditions = [{
                    name: 'categoryId',
                    value: CategoryId,
                }];
            const category = yield this.categoryService.list(0, 0, select, search, WhereConditions, 0, 0);
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
                    message: 'successfully got the category. ',
                    data: value,
                };
                return response.status(200).send(successResponse);
            }
        });
    }
    // Get product rating/review API
    /**
     * @api {get} /api/product-store/Get-Product-rating Get product Rating API
     * @apiGroup Store
     * @apiParam (Request body) {Number} productId productId
     * @apiParam (Request body) {Number} limit limit
     * @apiParam (Request body) {Number} offset offset
     * @apiParam (Request body) {Number} count count in number
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "successfully got the product rating and review.",
     *      "data":"{ }"
     *      "status": "1"
     * }
     * @apiSampleRequest /api/product-store/Get-Product-rating
     * @apiErrorExample {json} Product error
     * HTTP/1.1 500 Internal Server Error
     */
    getProductRating(productId, limit, offset, count, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const select = ['review', 'rating', 'createdDate', 'firstName', 'lastName', 'productId'];
            const relation = [];
            const WhereConditions = [
                {
                    name: 'productId',
                    op: 'where',
                    value: productId,
                },
            ];
            const rating = yield this.productRatingService.list(limit, offset, select, relation, WhereConditions, count);
            if (rating) {
                const successResponse = {
                    status: 1,
                    message: 'successfully got the product Rating. ',
                    data: rating,
                };
                return response.status(200).send(successResponse);
            }
            else {
                const errorResponse = {
                    status: 1,
                    message: 'unable to get product Rating.',
                };
                return response.status(400).send(errorResponse);
            }
        });
    }
};
tslib_1.__decorate([
    routing_controllers_1.Get('/productdetail/:id'),
    tslib_1.__param(0, routing_controllers_1.Param('id')), tslib_1.__param(1, routing_controllers_1.Req()), tslib_1.__param(2, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductController.prototype, "productDetail", null);
tslib_1.__decorate([
    routing_controllers_1.Put('/update-featureproduct/:id'),
    tslib_1.__param(0, routing_controllers_1.Param('id')), tslib_1.__param(1, routing_controllers_1.Body({ validate: true })), tslib_1.__param(2, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, UpdateFeatureProductRequest_1.UpdateFeatureProduct, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductController.prototype, "updateFeatureProduct", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/featureproduct-list'),
    tslib_1.__param(0, routing_controllers_1.QueryParam('limit')), tslib_1.__param(1, routing_controllers_1.QueryParam('offset')), tslib_1.__param(2, routing_controllers_1.QueryParam('keyword')), tslib_1.__param(3, routing_controllers_1.QueryParam('sku')), tslib_1.__param(4, routing_controllers_1.QueryParam('count')), tslib_1.__param(5, routing_controllers_1.Req()), tslib_1.__param(6, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Number, String, String, Object, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductController.prototype, "featureProductList", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/todayDeals-list'),
    tslib_1.__param(0, routing_controllers_1.QueryParam('limit')), tslib_1.__param(1, routing_controllers_1.QueryParam('offset')), tslib_1.__param(2, routing_controllers_1.QueryParam('keyword')), tslib_1.__param(3, routing_controllers_1.QueryParam('sku')), tslib_1.__param(4, routing_controllers_1.QueryParam('count')), tslib_1.__param(5, routing_controllers_1.Req()), tslib_1.__param(6, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Number, String, String, Object, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductController.prototype, "todayDealsList", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/Get-Category'),
    tslib_1.__param(0, routing_controllers_1.QueryParam('CategoryId')), tslib_1.__param(1, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductController.prototype, "getCategory", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/Get-Product-rating'),
    tslib_1.__param(0, routing_controllers_1.QueryParam('productId')), tslib_1.__param(1, routing_controllers_1.QueryParam('limit')), tslib_1.__param(2, routing_controllers_1.QueryParam('offset')), tslib_1.__param(3, routing_controllers_1.QueryParam('count')), tslib_1.__param(4, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Number, Number, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductController.prototype, "getProductRating", null);
ProductController = tslib_1.__decorate([
    routing_controllers_1.JsonController('/product-store'),
    tslib_1.__metadata("design:paramtypes", [ProductService_1.ProductService,
        ProductToCategoryService_1.ProductToCategoryService,
        categoryService_1.CategoryService,
        ProductRelatedService_1.ProductRelatedService,
        ProductImageService_1.ProductImageService,
        CustomerService_1.CustomerService,
        ProductViewLogService_1.ProductViewLogService,
        ProductDiscountService_1.ProductDiscountService, ProductSpecialService_1.ProductSpecialService,
        CategoryPathService_1.CategoryPathService, RatingService_1.ProductRatingService])
], ProductController);
exports.ProductController = ProductController;
//# sourceMappingURL=ProductController.js.map