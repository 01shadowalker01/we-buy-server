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
const bannerService_1 = require("../services/bannerService");
const env_1 = require("../../env");
const banner_1 = require("../models/banner");
const createBannerRequest_1 = require("./requests/createBannerRequest");
const updateBannerRequest_1 = require("./requests/updateBannerRequest");
const S3Service_1 = require("../services/S3Service");
const ImageService_1 = require("../services/ImageService");
let BannerController = class BannerController {
    constructor(bannerService, s3Service, imageService) {
        this.bannerService = bannerService;
        this.s3Service = s3Service;
        this.imageService = imageService;
    }
    // Create Banner
    /**
     * @api {post} /api/banner/add-banner Add Banner API
     * @apiGroup Banner
     * @apiParam (Request body) {String} title title
     * @apiParam (Request body) {String} content content
     * @apiParam (Request body) {String} image image
     * @apiParam (Request body) {String} link link
     * @apiParam (Request body) {String} position position
     * @apiHeader {String} Authorization
     * @apiParamExample {json} Input
     * {
     *      "title" : "",
     *      "content" : "",
     *      "image" : "",
     *      "link" : "",
     *      "position" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "New banner is created successfully",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/banner/add-banner
     * @apiErrorExample {json} Banner error
     * HTTP/1.1 500 Internal Server Error
     */
    createBanner(bannerParam, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const image = bannerParam.image;
            if (image) {
                const type = image.split(';')[0].split('/')[1];
                const name = 'Img_' + Date.now() + '.' + type;
                const path = 'banner/';
                const base64Data = new Buffer(image.replace(/^data:image\/\w+;base64,/, ''), 'base64');
                if (env_1.env.imageserver === 's3') {
                    yield this.s3Service.imageUpload((path + name), base64Data, type);
                }
                else {
                    yield this.imageService.imageUpload((path + name), base64Data);
                }
                const newBanner = new banner_1.Banner();
                newBanner.title = bannerParam.title;
                newBanner.content = bannerParam.content;
                newBanner.image = name;
                newBanner.imagePath = path;
                newBanner.link = bannerParam.link;
                newBanner.position = bannerParam.position;
                const bannerSave = yield this.bannerService.create(newBanner);
                if (bannerSave) {
                    const successResponse = {
                        status: 1,
                        message: 'Successfully created new banner.',
                        data: bannerSave,
                    };
                    return response.status(200).send(successResponse);
                }
                else {
                    const errorResponse = {
                        status: 0,
                        message: 'Unable to create new banner. ',
                    };
                    return response.status(400).send(errorResponse);
                }
            }
        });
    }
    // Banner List
    /**
     * @api {get} /api/banner/bannerlist Banner List API
     * @apiGroup Banner
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {Number} limit limit
     * @apiParam (Request body) {Number} offset offset
     * @apiParam (Request body) {String} keyword keyword
     * @apiParam (Request body) {number} count count should be number or boolean
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully got banner list",
     *      "data":"{
     *      "bannerId": "",
     *      "title": "",
     *      "content": "",
     *      "image": "",
     *      "imagePath": "",
     *      "link": "",
     *      "position": "",
     *      }"
     *      "status": "1"
     * }
     * @apiSampleRequest /api/banner/bannerlist
     * @apiErrorExample {json} Banner error
     * HTTP/1.1 500 Internal Server Error
     */
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
    // Delete Banner
    /**
     * @api {delete} /api/banner/delete-banner/:id Delete Banner API
     * @apiGroup Banner
     * @apiHeader {String} Authorization
     * @apiParamExample {json} Input
     * {
     *      "bannerId" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully deleted Banner.",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/banner/delete-banner/:id
     * @apiErrorExample {json} Banner error
     * HTTP/1.1 500 Internal Server Error
     */
    deleteBanner(id, response, request) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const banner = yield this.bannerService.findOne({
                where: {
                    bannerId: id,
                },
            });
            if (!banner) {
                const errorResponse = {
                    status: 0,
                    message: 'Invalid BannerId',
                };
                return response.status(400).send(errorResponse);
            }
            const deleteBanner = yield this.bannerService.delete(banner);
            if (deleteBanner) {
                const successResponse = {
                    status: 1,
                    message: 'Successfully deleted banner',
                };
                return response.status(200).send(successResponse);
            }
            else {
                const errorResponse = {
                    status: 0,
                    message: 'unable to delete banner',
                };
                return response.status(400).send(errorResponse);
            }
        });
    }
    // Update Banner
    /**
     * @api {put} /api/banner/update-banner/:id Update Banner API
     * @apiGroup Banner
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {Number} bannerId Banner bannerId
     * @apiParam (Request body) {String} title Banner title
     * @apiParam (Request body) {String} image Banner image
     * @apiParam (Request body) {String} content Banner content
     * @apiParam (Request body) {String} link Banner link
     * @apiParam (Request body) {Number} position Banner position
     * @apiParamExample {json} Input
     * {
     *      "bannerId" : "",
     *      "title" : "",
     *      "image" : "",
     *      "content" : "",
     *      "link" : "",
     *      "position" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully updated banner.",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/banner/update-banner/:id
     * @apiErrorExample {json} Banner error
     * HTTP/1.1 500 Internal Server Error
     */
    updateBanner(bannerParam, response, request) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const banner = yield this.bannerService.findOne({
                where: {
                    bannerId: bannerParam.bannerId,
                },
            });
            if (!banner) {
                const errorResponse = {
                    status: 0,
                    message: 'Invalid BannerId',
                };
                return response.status(400).send(errorResponse);
            }
            const image = bannerParam.image;
            if (image) {
                const type = image.split(';')[0].split('/')[1];
                const name = 'Img_' + Date.now() + '.' + type;
                const path = 'banner/';
                const base64Data = new Buffer(image.replace(/^data:image\/\w+;base64,/, ''), 'base64');
                if (env_1.env.imageserver === 's3') {
                    yield this.s3Service.imageUpload((path + name), base64Data, type);
                }
                else {
                    yield this.imageService.imageUpload((path + name), base64Data);
                }
                banner.image = name;
                banner.imagePath = path;
            }
            banner.title = bannerParam.title;
            banner.content = bannerParam.content;
            banner.link = bannerParam.link;
            banner.position = bannerParam.position;
            const bannerSave = yield this.bannerService.create(banner);
            if (bannerSave) {
                const successResponse = {
                    status: 1,
                    message: 'Successfully updated banner.',
                    data: bannerSave,
                };
                return response.status(200).send(successResponse);
            }
            else {
                const errorResponse = {
                    status: 0,
                    message: 'Unable to update the banner list. ',
                };
                return response.status(400).send(errorResponse);
            }
        });
    }
};
tslib_1.__decorate([
    routing_controllers_1.Post('/add-banner'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.Body({ validate: true })), tslib_1.__param(1, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [createBannerRequest_1.CreateBanner, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BannerController.prototype, "createBanner", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/bannerlist'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.QueryParam('limit')), tslib_1.__param(1, routing_controllers_1.QueryParam('offset')), tslib_1.__param(2, routing_controllers_1.QueryParam('keyword')), tslib_1.__param(3, routing_controllers_1.QueryParam('count')), tslib_1.__param(4, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Number, String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BannerController.prototype, "bannerList", null);
tslib_1.__decorate([
    routing_controllers_1.Delete('/delete-banner/:id'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.Param('id')), tslib_1.__param(1, routing_controllers_1.Res()), tslib_1.__param(2, routing_controllers_1.Req()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BannerController.prototype, "deleteBanner", null);
tslib_1.__decorate([
    routing_controllers_1.Put('/update-banner/:id'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.Body({ validate: true })), tslib_1.__param(1, routing_controllers_1.Res()), tslib_1.__param(2, routing_controllers_1.Req()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [updateBannerRequest_1.UpdateBanner, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], BannerController.prototype, "updateBanner", null);
BannerController = tslib_1.__decorate([
    routing_controllers_1.JsonController('/banner'),
    tslib_1.__metadata("design:paramtypes", [bannerService_1.BannerService, S3Service_1.S3Service,
        ImageService_1.ImageService])
], BannerController);
exports.BannerController = BannerController;
//# sourceMappingURL=BannerController.js.map