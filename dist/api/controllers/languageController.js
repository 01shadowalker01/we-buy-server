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
const language_1 = require("../models/language");
const createLanguageRequest_1 = require("./requests/createLanguageRequest");
const languageService_1 = require("../services/languageService");
const env_1 = require("../../env");
const S3Service_1 = require("../services/S3Service");
const ImageService_1 = require("../services/ImageService");
let LanguageController = class LanguageController {
    constructor(languageService, imageService, s3Service) {
        this.languageService = languageService;
        this.imageService = imageService;
        this.s3Service = s3Service;
    }
    // Create Language API
    /**
     * @api {post} /api/language/add-language Add Language API
     * @apiGroup Language
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {String} name Language name
     * @apiParam (Request body) {String} code Language code
     * @apiParam (Request body) {String} image Language image
     * @apiParam (Request body) {Number} sortOrder Language sortOrder
     * @apiParam (Request body) {Number} status Language status
     * @apiParamExample {json} Input
     * {
     *      "name" : "",
     *      "code" : "",
     *      "image" : "",
     *      "sortOrder" : "",
     *      "status" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully created new Language.",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/language/add-language
     * @apiErrorExample {json} Language error
     * HTTP/1.1 500 Internal Server Error
     */
    addLanguage(languageParam, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const image = languageParam.image;
            const newLanguage = new language_1.Language();
            if (image) {
                const type = image.split(';')[0].split('/')[1];
                const name = 'Img_' + Date.now() + '.' + type;
                const path = 'language/';
                const base64Data = new Buffer(image.replace(/^data:image\/\w+;base64,/, ''), 'base64');
                if (env_1.env.imageserver === 's3') {
                    yield this.s3Service.imageUpload((path + name), base64Data, type);
                }
                else {
                    yield this.imageService.imageUpload((path + name), base64Data);
                }
                newLanguage.image = name;
                newLanguage.imagePath = path;
            }
            newLanguage.name = languageParam.name;
            newLanguage.code = languageParam.code;
            newLanguage.sortOrder = languageParam.sortOrder;
            newLanguage.isActive = languageParam.status;
            const languageSave = yield this.languageService.create(newLanguage);
            if (languageSave) {
                const successResponse = {
                    status: 1,
                    message: 'Successfully added a new language.',
                    data: languageSave,
                };
                return response.status(200).send(successResponse);
            }
            else {
                const errorResponse = {
                    status: 0,
                    message: 'unable to create language',
                };
                return response.status(400).send(errorResponse);
            }
        });
    }
    // Language List API
    /**
     * @api {get} /api/language/languageList Language List API
     * @apiGroup Language
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {Number} limit limit
     * @apiParam (Request body) {Number} offset offset
     * @apiParam (Request body) {String} keyword keyword
     * @apiParam (Request body) {String} status inactive-> 0, active-> 1
     * @apiParam (Request body) {Number} count count should be number or boolean
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully get language list",
     *      "data":{
     *      "languageId"
     *      "name"
     *      "code"
     *      "sortOrder"
     *      }
     *      "status": "1"
     * }
     * @apiSampleRequest /api/language/languagelist
     * @apiErrorExample {json} Language error
     * HTTP/1.1 500 Internal Server Error
     */
    languageList(limit, offset, keyword, status, count, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const select = ['languageId', 'name', 'code', 'image', 'imagePath', 'sortOrder', 'isActive'];
            const search = [
                {
                    name: 'name',
                    op: 'like',
                    value: keyword,
                },
                {
                    name: 'isActive',
                    op: 'like',
                    value: status,
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
                    message: 'unable to list language',
                };
                return response.status(400).send(errorResponse);
            }
        });
    }
    // Update Language API
    /**
     * @api {put} /api/language/update-language/:id Update Language API
     * @apiGroup Language
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {String} name Language name
     * @apiParam (Request body) {String} code Language code
     * @apiParam (Request body) {String} image Language image
     * @apiParam (Request body) {Number} sortOrder Language sortOrder
     * @apiParam (Request body) {Number} status Language status
     * @apiParamExample {json} Input
     * {
     *      "name" : "",
     *      "code" : "",
     *      "image" : "",
     *      "sortOrder" : "",
     *      "status" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully updated language.",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/language/update-language/:id
     * @apiErrorExample {json} language error
     * HTTP/1.1 500 Internal Server Error
     */
    updateLanguage(id, languageParam, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const language = yield this.languageService.findOne({
                where: {
                    languageId: id,
                },
            });
            if (!language) {
                const errorResponse = {
                    status: 0,
                    message: 'Invalid languageId',
                };
                return response.status(400).send(errorResponse);
            }
            const image = languageParam.image;
            if (image) {
                const type = image.split(';')[0].split('/')[1];
                const name = 'Img_' + Date.now() + '.' + type;
                const path = 'language/';
                const base64Data = new Buffer(image.replace(/^data:image\/\w+;base64,/, ''), 'base64');
                if (env_1.env.imageserver === 's3') {
                    yield this.s3Service.imageUpload((path + name), base64Data, type);
                }
                else {
                    yield this.imageService.imageUpload((path + name), base64Data);
                }
                language.image = name;
                language.imagePath = path;
            }
            language.name = languageParam.name;
            language.code = languageParam.code;
            language.sortOrder = languageParam.sortOrder;
            language.isActive = languageParam.status;
            const languageSave = yield this.languageService.create(language);
            if (languageSave) {
                const successResponse = {
                    status: 1,
                    message: 'Sucessfully updated the language.',
                    data: languageSave,
                };
                return response.status(200).send(successResponse);
            }
            else {
                const errorResponse = {
                    status: 0,
                    message: 'unable to update language',
                };
                return response.status(400).send(errorResponse);
            }
        });
    }
    // Delete Language API
    /**
     * @api {delete} /api/language/delete-language/:id Delete Language API
     * @apiGroup Language
     * @apiHeader {String} Authorization
     * @apiParamExample {json} Input
     * {
     *      "languageId" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully deleted language.",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/language/delete-language/:id
     * @apiErrorExample {json} Language error
     * HTTP/1.1 500 Internal Server Error
     */
    deleteLanguage(id, response, request) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const language = yield this.languageService.findOne({
                where: {
                    languageId: id,
                },
            });
            if (!language) {
                const errorResponse = {
                    status: 0,
                    message: 'Invalid languageId',
                };
                return response.status(400).send(errorResponse);
            }
            const deleteLanguage = yield this.languageService.delete(language);
            console.log('language' + deleteLanguage);
            if (deleteLanguage) {
                const successResponse = {
                    status: 1,
                    message: 'Successfully deleted the language. ',
                };
                return response.status(200).send(successResponse);
            }
            else {
                const errorResponse = {
                    status: 0,
                    message: 'unable to delete language',
                };
                return response.status(400).send(errorResponse);
            }
        });
    }
};
tslib_1.__decorate([
    routing_controllers_1.Post('/add-language'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.Body({ validate: true })), tslib_1.__param(1, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [createLanguageRequest_1.CreateLanguage, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LanguageController.prototype, "addLanguage", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/languagelist'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.QueryParam('limit')), tslib_1.__param(1, routing_controllers_1.QueryParam('offset')), tslib_1.__param(2, routing_controllers_1.QueryParam('keyword')), tslib_1.__param(3, routing_controllers_1.QueryParam('status')), tslib_1.__param(4, routing_controllers_1.QueryParam('count')), tslib_1.__param(5, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Number, String, String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LanguageController.prototype, "languageList", null);
tslib_1.__decorate([
    routing_controllers_1.Put('/update-language/:id'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.Param('id')), tslib_1.__param(1, routing_controllers_1.Body({ validate: true })), tslib_1.__param(2, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, createLanguageRequest_1.CreateLanguage, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LanguageController.prototype, "updateLanguage", null);
tslib_1.__decorate([
    routing_controllers_1.Delete('/delete-language/:id'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.Param('id')), tslib_1.__param(1, routing_controllers_1.Res()), tslib_1.__param(2, routing_controllers_1.Req()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], LanguageController.prototype, "deleteLanguage", null);
LanguageController = tslib_1.__decorate([
    routing_controllers_1.JsonController('/language'),
    tslib_1.__metadata("design:paramtypes", [languageService_1.LanguageService, ImageService_1.ImageService,
        S3Service_1.S3Service])
], LanguageController);
exports.LanguageController = LanguageController;
//# sourceMappingURL=languageController.js.map