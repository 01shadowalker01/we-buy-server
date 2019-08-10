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
const SettingService_1 = require("../services/SettingService");
const setting_1 = require("../models/setting");
const createSettingRequest_1 = require("./requests/createSettingRequest");
const env_1 = require("../../env");
const S3Service_1 = require("../services/S3Service");
const ImageService_1 = require("../services/ImageService");
let SettingController = class SettingController {
    constructor(settingService, s3Service, imageService) {
        this.settingService = settingService;
        this.s3Service = s3Service;
        this.imageService = imageService;
    }
    // Get Settings list API
    /**
     * @api {get} /api/settings/get-settings Get Setting API
     * @apiGroup Settings
     * @apiHeader {String} Authorization
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "status": "1"
     *      "message": "Successfully get settings",
     *      "data":"{}"
     * }
     * @apiSampleRequest /api/settings/get-settings
     * @apiErrorExample {json} getSettings error
     * HTTP/1.1 500 Internal Server Error
     */
    settingsList(response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const select = '';
            const relation = [];
            const WhereConditions = [];
            const limit = 1;
            const settings = yield this.settingService.list(limit, select, relation, WhereConditions);
            console.log('settings' + settings);
            const successResponse = {
                status: 1,
                message: 'Successfully get settings',
                data: settings,
            };
            return response.status(200).send(successResponse);
        });
    }
    // create and update settings API
    /**
     * @api {post} /api/settings/create-settings Create Settings API
     * @apiGroup Settings
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {String} url  store url
     * @apiParam (Request body) {String} metaTagTitle metaTagTitle
     * @apiParam (Request body) {String} metaTagDescription metaTagDescription
     * @apiParam (Request body) {String} metaTagKeywords metaTagKeywords
     * @apiParam (Request body) {String} storeName storeName
     * @apiParam (Request body) {String} storeOwner storeOwner
     * @apiParam (Request body) {String} storeAddress storeAddress
     * @apiParam (Request body) {Number} countryId countryId
     * @apiParam (Request body) {Number} zoneId zoneId
     * @apiParam (Request body) {String} storeEmail storeEmail
     * @apiParam (Request body) {String} storeTelephone storeTelephone
     * @apiParam (Request body) {String} storeFax storeFax
     * @apiParam (Request body) {String} storeLogo storeLog
     * @apiParam (Request body) {Number} maintenanceMode maintenanceMode
     * @apiParam (Request body) {String} storeLanguageName storeLanguageName
     * @apiParam (Request body) {Number} storeCurrencyId storeCurrencyId
     * @apiParam (Request body) {String} storeImage storeImage
     * @apiParam (Request body) {String} invoicePrefix invoicePrefix
     * @apiParam (Request body) {Number} orderStatus orderStatus
     * @apiParam (Request body) {Number} categoryProductCount productCount should be 0 or 1
     * @apiParam (Request body) {Number} itemsPerPage ItemsPerPage
     * @apiParam (Request body) {String} facebook facebook
     * @apiParam (Request body) {String} twitter twitter
     * @apiParam (Request body) {String} instagram instagram
     * @apiParam (Request body) {String} google google
     * @apiParam (Request body) {Number} status status
     * @apiParamExample {json} Input
     * {
     *      "url" : "",
     *      "metaTagTitle" : "",
     *      "metaTagDescription" : "",
     *      "metaTagKeywords" : "",
     *      "storeName" : "",
     *      "storeOwner" : "",
     *      "storeAddress" : "",
     *      "countryId" : "",
     *      "zoneId" : "",
     *      "storeEmail" : "",
     *      "storeTelephone" : "",
     *      "storeFax" : "",
     *      "storeLogo" : "",
     *      "maintenanceMode" : "",
     *      "storeLanguageName" : "",
     *      "storeCurrencyId" : "",
     *      "storeImage" : "",
     *      "invoicePrefix" : "",
     *      "orderStatus" : "",
     *      "categoryProductCount" : "",
     *      "itemsPerPage" : "",
     *      "google" : "",
     *      "instagram" : "",
     *      "facebook" : "",
     *      "twitter" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully created setting.",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/settings/create-settings
     * @apiErrorExample {json} addSettings error
     * HTTP/1.1 500 Internal Server Error
     */
    createSettings(settings, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log(settings.metaTagKeywords);
            const settingValue = yield this.settingService.findOne();
            console.log(settingValue);
            if (settingValue === undefined) {
                const newSettings = new setting_1.Settings();
                newSettings.url = settings.url;
                newSettings.metaTagTitle = settings.metaTagTitle;
                newSettings.metaTagDescription = settings.metaTagDescription;
                newSettings.metaTagKeyword = settings.metaTagKeywords;
                newSettings.storeName = settings.storeName;
                newSettings.storeOwner = settings.storeOwner;
                newSettings.storeAddress = settings.storeAddress;
                newSettings.countryId = settings.countryId;
                newSettings.zoneId = settings.zoneId;
                newSettings.storeEmail = settings.storeEmail;
                newSettings.storeTelephone = settings.storeTelephone;
                newSettings.storeFax = settings.storeFax;
                if (settings.storeLogo) {
                    const logo = settings.storeLogo;
                    const type = logo.split(';')[0].split('/')[1];
                    const name = 'Img_' + Date.now() + '.' + type;
                    const path = 'storeLogo/';
                    const base64Data = new Buffer(logo.replace(/^data:image\/\w+;base64,/, ''), 'base64');
                    if (env_1.env.imageserver === 's3') {
                        yield this.s3Service.imageUpload((path + name), base64Data, type);
                    }
                    else {
                        yield this.imageService.imageUpload((path + name), base64Data);
                    }
                    newSettings.storeLogo = name;
                    newSettings.storeLogoPath = path;
                }
                newSettings.maintainanceMode = settings.maintenanceMode;
                newSettings.storeLanguageName = settings.storeLanguageName;
                newSettings.storeCurrencyId = settings.storeCurrencyId;
                newSettings.storeImage = settings.storeImage;
                settingValue.invoicePrefix = settings.invoicePrefix;
                settingValue.orderStatus = settings.orderStatus;
                settingValue.categoryProductCount = settings.categoryProductCount;
                settingValue.itemsPerPage = settings.itemsPerPage;
                newSettings.google = settings.google;
                newSettings.facebook = settings.facebook;
                newSettings.twitter = settings.twitter;
                newSettings.instagram = settings.instagram;
                newSettings.isActive = settings.status;
                const createdData = yield this.settingService.create(newSettings);
                const successResponse = {
                    status: 1,
                    message: 'Settings created Successfully',
                    data: createdData,
                };
                return response.status(200).send(successResponse);
            }
            else {
                settingValue.url = settings.url;
                settingValue.metaTagTitle = settings.metaTagTitle;
                settingValue.metaTagDescription = settings.metaTagDescription;
                settingValue.metaTagKeyword = settings.metaTagKeywords;
                settingValue.storeName = settings.storeName;
                settingValue.storeOwner = settings.storeOwner;
                settingValue.storeAddress = settings.storeAddress;
                settingValue.countryId = settings.countryId;
                settingValue.zoneId = settings.zoneId;
                settingValue.storeEmail = settings.storeEmail;
                settingValue.storeTelephone = settings.storeTelephone;
                settingValue.storeFax = settings.storeFax;
                settingValue.storeLogo = settings.storeLogo;
                if (settings.storeLogo) {
                    const logo = settings.storeLogo;
                    const type = logo.split(';')[0].split('/')[1];
                    const name = 'Img_' + Date.now() + '.' + type;
                    const path = 'storeLogo/';
                    const base64Data = new Buffer(logo.replace(/^data:image\/\w+;base64,/, ''), 'base64');
                    if (env_1.env.imageserver === 's3') {
                        yield this.s3Service.imageUpload((path + name), base64Data, type);
                    }
                    else {
                        yield this.imageService.imageUpload((path + name), base64Data);
                    }
                    settingValue.storeLogo = name;
                    settingValue.storeLogoPath = path;
                }
                settingValue.maintenanceMode = settings.maintenanceMode;
                settingValue.storeLanguageName = settings.storeLanguageName;
                settingValue.storeCurrencyId = settings.storeCurrencyId;
                settingValue.storeImage = settings.storeImage;
                settingValue.invoicePrefix = settings.invoicePrefix;
                settingValue.orderStatus = settings.orderStatus;
                settingValue.categoryProductCount = settings.categoryProductCount;
                settingValue.itemsPerPage = settings.itemsPerPage;
                settingValue.google = settings.google;
                settingValue.facebook = settings.facebook;
                settingValue.twitter = settings.twitter;
                settingValue.instagram = settings.instagram;
                settingValue.isActive = settings.status;
                const updatedData = yield this.settingService.create(settingValue);
                const successResponse = {
                    status: 1,
                    message: 'Settings Updated Successfully',
                    data: updatedData,
                };
                return response.status(200).send(successResponse);
            }
        });
    }
};
tslib_1.__decorate([
    routing_controllers_1.Get('/get-settings'),
    tslib_1.__param(0, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingController.prototype, "settingsList", null);
tslib_1.__decorate([
    routing_controllers_1.Post('/create-settings'),
    tslib_1.__param(0, routing_controllers_1.Body({ validate: true })), tslib_1.__param(1, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [createSettingRequest_1.CreateSettingRequest, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingController.prototype, "createSettings", null);
SettingController = tslib_1.__decorate([
    routing_controllers_1.JsonController('/settings'),
    tslib_1.__metadata("design:paramtypes", [SettingService_1.SettingService, S3Service_1.S3Service, ImageService_1.ImageService])
], SettingController);
exports.SettingController = SettingController;
//# sourceMappingURL=SettingController.js.map