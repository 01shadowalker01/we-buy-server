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
const bannerService_1 = require("../../services/bannerService");
const mail_services_1 = require("../../../auth/mail.services");
const class_transformer_1 = require("class-transformer");
const categoryService_1 = require("../../services/categoryService");
const ProductService_1 = require("../../services/ProductService");
const array_to_tree_1 = tslib_1.__importDefault(require("array-to-tree"));
const ProductRelated_1 = require("../../models/ProductRelated");
const ProductRelatedService_1 = require("../../services/ProductRelatedService");
const ProductImageService_1 = require("../../services/ProductImageService");
const CustomerWishlistService_1 = require("../../services/CustomerWishlistService");
const jsonwebtoken_1 = tslib_1.__importDefault(require("jsonwebtoken"));
const countryService_1 = require("../../services/countryService");
const ContactService_1 = require("../../services/ContactService");
const ContactRequest_1 = require("./requests/ContactRequest");
const Contact_1 = require("../../models/Contact");
const emailTemplateService_1 = require("../../services/emailTemplateService");
const zoneService_1 = require("../../services/zoneService");
const languageService_1 = require("../../services/languageService");
const ProductDiscountService_1 = require("../../services/ProductDiscountService");
const ProductSpecialService_1 = require("../../services/ProductSpecialService");
const ProductToCategoryService_1 = require("../../services/ProductToCategoryService");
let CommonListController = class CommonListController {
    constructor(bannerService, categoryService, productRelatedService, productService, productImageService, languageService, customerWishlistService, countryService, contactService, emailTemplateService, zoneService, productDiscountService, productSpecialService, productToCategoryService) {
        this.bannerService = bannerService;
        this.categoryService = categoryService;
        this.productRelatedService = productRelatedService;
        this.productService = productService;
        this.productImageService = productImageService;
        this.languageService = languageService;
        this.customerWishlistService = customerWishlistService;
        this.countryService = countryService;
        this.contactService = contactService;
        this.emailTemplateService = emailTemplateService;
        this.zoneService = zoneService;
        this.productDiscountService = productDiscountService;
        this.productSpecialService = productSpecialService;
        this.productToCategoryService = productToCategoryService;
    }
    // Banner List API
    /**
     * @api {get} /api/list/banner-list Banner List
     * @apiGroup Store List
     * @apiParam (Request body) {Number} limit Limit
     * @apiParam (Request body) {Number} offset Offset
     * @apiParam (Request body) {Number} count count in number or boolean
     * @apiParamExample {json} Input
     * {
     *      "limit" : "",
     *      "offset": "",
     *      "count": "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Thank you Banner list show successfully..!",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/list/banner-list
     * @apiErrorExample {json} Banner List error
     * HTTP/1.1 500 Internal Server Error
     */
    // Product list Function
    bannerList(limit, offset, keyword, count, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const select = ['bannerId', 'title', 'image', 'imagePath', 'content', 'link', 'position'];
            const search = [
                {
                    name: 'title',
                    op: 'like',
                    value: keyword,
                },
            ];
            const WhereConditions = [];
            const bannerList = yield this.bannerService.list(limit, offset, select, search, WhereConditions, count);
            const successResponse = {
                status: 1,
                message: 'Successfully got banner list',
                data: bannerList,
            };
            return response.status(200).send(successResponse);
        });
    }
    // Category List API
    /**
     * @api {get} /api/list/category-list Category List
     * @apiGroup Store List
     * @apiParam (Request body) {Number} limit Limit
     * @apiParam (Request body) {Number} offset Offset
     * @apiParam (Request body) {String} keyword keyword
     * @apiParam (Request body) {Number} sortOrder sortOrder
     * @apiParam (Request body) {Number} count count in number or boolean
     * @apiParamExample {json} Input
     * {
     *      "limit" : "",
     *      "offset": "",
     *      "keyorder": "",
     *      "sortOrder": "",
     *      "count": "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Category listed successfully..!",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/list/category-list
     * @apiErrorExample {json} Category List error
     * HTTP/1.1 500 Internal Server Error
     */
    // Category List Function
    CategoryList(limit, offset, keyword, sortOrder, count, request, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const select = ['categoryId', 'name', 'image', 'imagePath', 'parentInt', 'sortOrder', 'metaTagTitle', 'metaTagDescription', 'metaTagKeyword'];
            const search = [
                {
                    name: 'name',
                    op: 'like',
                    value: keyword,
                },
            ];
            const WhereConditions = [];
            const categoryData = yield this.categoryService.list(limit, offset, select, search, WhereConditions, sortOrder, count);
            if (count) {
                const successResponse = {
                    status: 1,
                    message: 'Successfully get All category List',
                    data: categoryData,
                };
                return response.status(200).send(successResponse);
            }
            else {
                const categoryList = array_to_tree_1.default(categoryData, {
                    parentProperty: 'parentInt',
                    customID: 'categoryId',
                });
                const successResponse = {
                    status: 1,
                    message: 'Successfully got the list of categories.',
                    data: categoryList,
                };
                return response.status(200).send(successResponse);
            }
        });
    }
    // Related Product Adding API
    /**
     * @api {post} /api/list/add-related-product Add a Related Product
     * @apiGroup Store List
     * @apiParam (Request body) {Number} productId Product Id
     * @apiParam (Request body) {string} relatedProductId Related Product Id
     * @apiParamExample {json} Input
     * {
     *      "productId" : "",
     *      "relatedProductId": "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Related Product adding successfully..!",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/list/add-related-product
     * @apiErrorExample {json} Related Product Adding error
     * HTTP/1.1 500 Internal Server Error
     */
    // Category List Function
    addRelatedProduct(productParam, request, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const productId = productParam.productId;
            const relatedProductId = productParam.relatedProductId;
            const eachData = relatedProductId.split(',');
            let i;
            for (i = 0; i < eachData.length; i++) {
                const relatedProduct = new ProductRelated_1.ProductRelated();
                relatedProduct.productId = productId;
                relatedProduct.relatedProductId = eachData[i];
                yield this.productRelatedService.create(relatedProduct);
            }
            const successResponse = {
                status: 1,
                message: 'Successfully added the related products.',
            };
            return response.status(200).send(successResponse);
        });
    }
    // Product List API
    /**
     * @api {get} /api/list/productlist Product List API
     * @apiGroup Store List
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {Number} limit limit
     * @apiParam (Request body) {Number} offset offset
     * @apiParam (Request body) {String} manufacturerId manufacturerId
     * @apiParam (Request body) {String} categoryId categoryId
     * @apiParam (Request body) {Number} priceFrom price from you want to list
     * @apiParam (Request body) {Number} priceTo price to you want to list
     * @apiParam (Request body) {Number} price orderBy 0->desc 1->asc
     * @apiParam (Request body) {Number} condition  1->new 2->used
     * @apiParam (Request body) {String} keyword keyword
     * @apiParam (Request body) {String} count count in boolean or number
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "status": "1"
     *      "message": "Successfully get product list",
     *      "data":"{}"
     * }
     * @apiSampleRequest /api/list/productlist
     * @apiErrorExample {json} productList error
     * HTTP/1.1 500 Internal Server Error
     */
    productList(limit, offset, keyword, manufacturerId, categoryId, priceFrom, priceTo, price, condition, count, request, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log(manufacturerId);
            const select = ['product.productId', 'product.sku', 'product.name', 'product.quantity', 'product.description', 'product.price',
                'product.isActive AS isActive', 'product.manufacturerId AS manufacturerId', 'product.location AS location', 'product.minimumQuantity AS minimumQuantity',
                'product.subtractStock', 'product.wishListStatus', 'product.stockStatusId', 'product.shipping', 'product.sortOrder', 'product.condition',
                'product.dateAvailable', 'product.amount', 'product.metaTagTitle', 'product.metaTagDescription', 'product.metaTagKeyword', 'product.discount', 'product.rating'];
            const searchConditions = [
                {
                    name: 'product.isActive',
                    op: 'where',
                    value: 1,
                },
                {
                    name: 'product.manufacturerId',
                    op: 'and',
                    value: manufacturerId,
                },
                {
                    name: 'product.name',
                    op: 'and',
                    value: keyword,
                },
                {
                    name: 'product.condition',
                    op: 'andWhere',
                    value: condition,
                },
            ];
            const whereConditions = [{
                    name: 'product.productId',
                    op: 'inraw',
                    value: categoryId,
                }];
            const productList = yield this.productService.productList(limit, offset, select, searchConditions, whereConditions, categoryId, priceFrom, priceTo, price, count);
            if (count) {
                const Response = {
                    status: 1,
                    message: 'Successfully got Products count',
                    data: productList,
                };
                return response.status(200).send(Response);
            }
            const promises = productList.map((result) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                const productToCategory = yield this.productToCategoryService.findAll({
                    select: ['categoryId', 'productId'],
                    where: { productId: result.productId },
                }).then((val) => {
                    const category = val.map((value) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                        const categoryNames = yield this.categoryService.findOne({ categoryId: value.categoryId });
                        const JsonData = JSON.stringify(categoryNames);
                        const ParseData = JSON.parse(JsonData);
                        const tempValue = value;
                        tempValue.categoryName = ParseData.name;
                        return tempValue;
                    }));
                    const results = Promise.all(category);
                    return results;
                });
                const productImage = yield this.productImageService.findOne({
                    select: ['productId', 'image', 'containerName', 'defaultImage'],
                    where: {
                        productId: result.productId,
                        defaultImage: 1,
                    },
                });
                const temp = result;
                temp.Images = productImage;
                temp.Category = productToCategory;
                const nowDate = new Date();
                const todaydate = nowDate.getFullYear() + '-' + (nowDate.getMonth() + 1) + '-' + nowDate.getDate();
                const productSpecial = yield this.productSpecialService.findSpecialPrice(result.productId, todaydate);
                const productDiscount = yield this.productDiscountService.findDiscountPrice(result.productId, todaydate);
                if (productSpecial !== undefined) {
                    temp.pricerefer = productSpecial.price;
                    temp.flag = 1;
                }
                else if (productDiscount !== undefined) {
                    temp.pricerefer = productDiscount.price;
                    temp.flag = 0;
                }
                else {
                    temp.pricerefer = '';
                    temp.flag = '';
                }
                if (request.header('authorization')) {
                    const userId = jsonwebtoken_1.default.verify(request.header('authorization').split(' ')[1], '123##$$)(***&');
                    const userUniqueId = Object.keys(userId).map((key) => {
                        return [(key), userId[key]];
                    });
                    console.log(userUniqueId[0][1]);
                    const wishStatus = yield this.customerWishlistService.findOne({
                        where: {
                            productId: result.productId,
                            customerId: userUniqueId[0][1],
                        },
                    });
                    if (wishStatus) {
                        result.wishListStatus = 1;
                        yield this.productService.create(result);
                    }
                }
                else {
                    result.wishListStatus = 0;
                    yield this.productService.create(result);
                }
                return temp;
            }));
            const finalResult = yield Promise.all(promises);
            const maximum = ['Max(product.price) As maximumProductPrice'];
            const maximumPrice = yield this.productService.productMaxPrice(maximum);
            const productPrice = maximumPrice.maximumProductPrice;
            const successResponse = {
                status: 1,
                message: 'Successfully got the complete list of products.',
                data: {
                    maximumProductPrice: productPrice,
                    productList: finalResult,
                },
            };
            return response.status(200).send(successResponse);
        });
    }
    // Related Product Showing API
    /**
     * @api {get} /api/list/related-product-list Related Product List
     * @apiGroup Store List
     * @apiParam (Request body) {Number} productId Product Id
     * @apiParam (Request body) {Number} count
     * @apiParamExample {json} Input
     * {
     *      "productId" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Related Product List Showing Successfully..!",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/list/related-product-list
     * @apiErrorExample {json} Related Product List error
     * HTTP/1.1 500 Internal Server Error
     */
    // Category List Function
    relatedProductList(productid, count, request, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const whereConditions = [
                {
                    productId: productid,
                },
            ];
            const relatedData = yield this.productRelatedService.list(0, 0, 0, 0, whereConditions, count);
            if (count) {
                const Response = {
                    status: 1,
                    message: 'Related product list is successfully being shown. ',
                    data: relatedData,
                };
                return response.status(200).send(Response);
            }
            const promises = relatedData.map((results) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                const Id = results.relatedProductId;
                const product = yield this.productService.findOne({
                    select: ['productId', 'name', 'price', 'description', 'quantity', 'rating'],
                    where: { productId: Id },
                });
                const Image = yield this.productImageService.findOne({ where: { productId: Id, defaultImage: 1 } });
                const temp = product;
                temp.productImage = Image;
                return temp;
            }));
            const result = yield Promise.all(promises);
            const successResponse = {
                status: 1,
                message: 'Related product list is successfully being shown. ',
                data: class_transformer_1.classToPlain(result),
            };
            return response.status(200).send(successResponse);
        });
    }
    // Country List API
    /**
     * @api {get} /api/list/country-list Country List API
     * @apiGroup Store List
     * @apiParam (Request body) {Number} limit limit
     * @apiParam (Request body) {Number} offset offset
     * @apiParam (Request body) {String} keyword keyword
     * @apiParam (Request body) {Number} count count should be number or boolean
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully get country list",
     *      "data":{
     *      "countryId"
     *      "name"
     *      "isoCode2"
     *      "isoCode3"
     *      "addressFormat"
     *      "postcodeRequired"
     *      }
     *      "status": "1"
     * }
     * @apiSampleRequest /api/list/country-list
     * @apiErrorExample {json} countryFront error
     * HTTP/1.1 500 Internal Server Error
     */
    countryList(limit, offset, keyword, count, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const select = ['countryId', 'name', 'isoCode2', 'isoCode3', 'postcodeRequired', 'isActive'];
            const search = [
                {
                    name: 'name',
                    op: 'like',
                    value: keyword,
                },
                {
                    name: 'isActive',
                    op: 'where',
                    value: 1,
                },
            ];
            const WhereConditions = [];
            const countryList = yield this.countryService.list(limit, offset, select, search, WhereConditions, count);
            const successResponse = {
                status: 1,
                message: 'Successfully got the list of countries.',
                data: countryList,
            };
            return response.status(200).send(successResponse);
        });
    }
    // Contact Us API
    /**
     * @api {post} /api/list/contact-us  Contact Us API
     * @apiGroup Store List
     * @apiParam (Request body) {String} name Name
     * @apiParam (Request body) {String} email Email
     * @apiParam (Request body) {String} phoneNumber Phone Number
     * @apiParam (Request body) {String} message Message
     * @apiParamExample {json} Input
     * {
     *      "name" : "",
     *      "email" : "",
     *      "phoneNumber" : "",
     *      "message" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Your mail send to admin..!",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/list/contact-us
     * @apiErrorExample {json} Contact error
     * HTTP/1.1 500 Internal Server Error
     */
    // ContactUs Function
    userContact(contactParam, request, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const contactInformation = new Contact_1.Contact();
            contactInformation.name = contactParam.name;
            contactInformation.email = contactParam.email;
            contactInformation.phoneNumber = contactParam.phoneNumber;
            contactInformation.message = contactParam.message;
            const informationData = yield this.contactService.create(contactInformation);
            const emailContent = yield this.emailTemplateService.findOne(3);
            const message = emailContent.content.replace('{name}', informationData.name).replace('{email}', informationData.email).replace('{phoneNumber}', informationData.phoneNumber).replace('{message}', informationData.message);
            const sendMailRes = mail_services_1.MAILService.contactMail(message, emailContent.subject);
            if (sendMailRes) {
                const successResponse = {
                    status: 1,
                    message: 'Your request Successfully send',
                };
                return response.status(200).send(successResponse);
            }
            else {
                const errorResponse = {
                    status: 0,
                    message: 'Mail does not send',
                };
                return response.status(400).send(errorResponse);
            }
        });
    }
    // Zone List API
    /**
     * @api {get} /api/list/zone-list Zone List API
     * @apiGroup Store List
     * @apiParam (Request body) {Number} limit limit
     * @apiParam (Request body) {Number} offset offset
     * @apiParam (Request body) {String} keyword keyword
     * @apiParam (Request body) {Number} count count should be number or boolean
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully get zone list",
     *      "data":{
     *      "countryId"
     *      "code"
     *      "name"
     *      }
     *      "status": "1"
     * }
     * @apiSampleRequest /api/list/zone-list
     * @apiErrorExample {json} Zone error
     * HTTP/1.1 500 Internal Server Error
     */
    zonelist(limit, offset, keyword, count, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const select = ['zoneId', 'countryId', 'code', 'name', 'isActive'];
            const search = [
                {
                    name: 'name',
                    op: 'like',
                    value: keyword,
                },
                {
                    name: 'isActive',
                    op: 'where',
                    value: 1,
                },
            ];
            const WhereConditions = [];
            const relation = ['country'];
            const zoneList = yield this.zoneService.list(limit, offset, select, search, WhereConditions, relation, count);
            if (zoneList) {
                const successResponse = {
                    status: 1,
                    message: 'Successfully get all zone List',
                    data: class_transformer_1.classToPlain(zoneList),
                };
                return response.status(200).send(successResponse);
            }
            else {
                const errorResponse = {
                    status: 1,
                    message: 'unable to get zone List',
                };
                return response.status(400).send(errorResponse);
            }
        });
    }
    // Language List API
    /**
     * @api {get} /api/list/language-list Language List API
     * @apiGroup Store List
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {Number} limit limit
     * @apiParam (Request body) {Number} offset offset
     * @apiParam (Request body) {String} keyword keyword
     * @apiParam (Request body) {Number} count count should be number or boolean
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully got language list",
     *      "data":{
     *      "languageId"
     *      "name"
     *      "status"
     *      "code"
     *      "sortOrder"
     *      }
     *      "status": "1"
     * }
     * @apiSampleRequest /api/list/language-list
     * @apiErrorExample {json} Language error
     * HTTP/1.1 500 Internal Server Error
     */
    languageList(limit, offset, keyword, count, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const select = ['languageId', 'name', 'code', 'image', 'imagePath', 'isActive', 'sortOrder', 'isActive'];
            const search = [
                {
                    name: 'name',
                    op: 'like',
                    value: keyword,
                },
                {
                    name: 'isActive',
                    op: 'where',
                    value: 1,
                },
            ];
            const WhereConditions = [];
            const languageList = yield this.languageService.list(limit, offset, select, search, WhereConditions, count);
            if (languageList) {
                const successResponse = {
                    status: 1,
                    message: 'successfully got the complete language list.',
                    data: languageList,
                };
                return response.status(200).send(successResponse);
            }
            else {
                const errorResponse = {
                    status: 0,
                    message: 'unable to show language list',
                };
                return response.status(400).send(errorResponse);
            }
        });
    }
};
tslib_1.__decorate([
    routing_controllers_1.Get('/banner-list'),
    tslib_1.__param(0, routing_controllers_1.QueryParam('limit')), tslib_1.__param(1, routing_controllers_1.QueryParam('offset')), tslib_1.__param(2, routing_controllers_1.QueryParam('keyword')), tslib_1.__param(3, routing_controllers_1.QueryParam('count')), tslib_1.__param(4, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Number, String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CommonListController.prototype, "bannerList", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/category-list'),
    tslib_1.__param(0, routing_controllers_1.QueryParam('limit')), tslib_1.__param(1, routing_controllers_1.QueryParam('offset')), tslib_1.__param(2, routing_controllers_1.QueryParam('keyword')), tslib_1.__param(3, routing_controllers_1.QueryParam('sortOrder')), tslib_1.__param(4, routing_controllers_1.QueryParam('count')), tslib_1.__param(5, routing_controllers_1.Req()), tslib_1.__param(6, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Number, String, Number, Object, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CommonListController.prototype, "CategoryList", null);
tslib_1.__decorate([
    routing_controllers_1.Post('/add-related-product'),
    tslib_1.__param(0, routing_controllers_1.Body({ validate: true })), tslib_1.__param(1, routing_controllers_1.Req()), tslib_1.__param(2, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CommonListController.prototype, "addRelatedProduct", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/productlist'),
    tslib_1.__param(0, routing_controllers_1.QueryParam('limit')), tslib_1.__param(1, routing_controllers_1.QueryParam('offset')), tslib_1.__param(2, routing_controllers_1.QueryParam('keyword')),
    tslib_1.__param(3, routing_controllers_1.QueryParam('manufacturerId')), tslib_1.__param(4, routing_controllers_1.QueryParam('categoryId')), tslib_1.__param(5, routing_controllers_1.QueryParam('priceFrom')),
    tslib_1.__param(6, routing_controllers_1.QueryParam('priceTo')), tslib_1.__param(7, routing_controllers_1.QueryParam('price')), tslib_1.__param(8, routing_controllers_1.QueryParam('condition')), tslib_1.__param(9, routing_controllers_1.QueryParam('count')), tslib_1.__param(10, routing_controllers_1.Req()), tslib_1.__param(11, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Number, String, String, String, String, String, Number, Number, Object, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CommonListController.prototype, "productList", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/related-product-list'),
    tslib_1.__param(0, routing_controllers_1.QueryParam('productId')), tslib_1.__param(1, routing_controllers_1.QueryParam('count')), tslib_1.__param(2, routing_controllers_1.Req()), tslib_1.__param(3, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CommonListController.prototype, "relatedProductList", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/country-list'),
    tslib_1.__param(0, routing_controllers_1.QueryParam('limit')), tslib_1.__param(1, routing_controllers_1.QueryParam('offset')), tslib_1.__param(2, routing_controllers_1.QueryParam('keyword')), tslib_1.__param(3, routing_controllers_1.QueryParam('count')), tslib_1.__param(4, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Number, String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CommonListController.prototype, "countryList", null);
tslib_1.__decorate([
    routing_controllers_1.Post('/contact-us'),
    tslib_1.__param(0, routing_controllers_1.Body({ validate: true })), tslib_1.__param(1, routing_controllers_1.Req()), tslib_1.__param(2, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [ContactRequest_1.ContactRequest, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CommonListController.prototype, "userContact", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/zone-list'),
    tslib_1.__param(0, routing_controllers_1.QueryParam('limit')), tslib_1.__param(1, routing_controllers_1.QueryParam('offset')), tslib_1.__param(2, routing_controllers_1.QueryParam('keyword')), tslib_1.__param(3, routing_controllers_1.QueryParam('count')), tslib_1.__param(4, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Number, String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CommonListController.prototype, "zonelist", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/language-list'),
    tslib_1.__param(0, routing_controllers_1.QueryParam('limit')), tslib_1.__param(1, routing_controllers_1.QueryParam('offset')), tslib_1.__param(2, routing_controllers_1.QueryParam('keyword')), tslib_1.__param(3, routing_controllers_1.QueryParam('count')), tslib_1.__param(4, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Number, String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CommonListController.prototype, "languageList", null);
CommonListController = tslib_1.__decorate([
    routing_controllers_1.JsonController('/list'),
    tslib_1.__metadata("design:paramtypes", [bannerService_1.BannerService, categoryService_1.CategoryService, ProductRelatedService_1.ProductRelatedService,
        ProductService_1.ProductService, ProductImageService_1.ProductImageService, languageService_1.LanguageService,
        CustomerWishlistService_1.CustomerWishlistService, countryService_1.CountryService, ContactService_1.ContactService,
        emailTemplateService_1.EmailTemplateService,
        zoneService_1.ZoneService, ProductDiscountService_1.ProductDiscountService, ProductSpecialService_1.ProductSpecialService,
        ProductToCategoryService_1.ProductToCategoryService])
], CommonListController);
exports.CommonListController = CommonListController;
//# sourceMappingURL=CommonListController.js.map