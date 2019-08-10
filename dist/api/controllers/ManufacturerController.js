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
const AWS = tslib_1.__importStar(require("aws-sdk"));
const createManufacturerRequest_1 = require("./requests/createManufacturerRequest");
const manufacturerModel_1 = require("../models/manufacturerModel");
const manufacturerService_1 = require("../services/manufacturerService");
const env_1 = require("../../env");
const updateManufacturerRequest_1 = require("./requests/updateManufacturerRequest");
const deleteManufacturerRequest_1 = require("./requests/deleteManufacturerRequest");
const S3Service_1 = require("../services/S3Service");
const ImageService_1 = require("../services/ImageService");
// S3 SetUp
AWS.config.update({
    accessKeyId: env_1.aws_setup.AWS_ACCESS_KEY_ID,
    secretAccessKey: env_1.aws_setup.AWS_SECRET_ACCESS_KEY,
    region: env_1.aws_setup.AWS_DEFAULT_REGION,
});
let ManufacturerController = class ManufacturerController {
    constructor(manufacturerService, s3Service, imageService) {
        this.manufacturerService = manufacturerService;
        this.s3Service = s3Service;
        this.imageService = imageService;
    }
    // Create Manufacturer API
    /**
     * @api {post} /api/manufacturer/create-manufacturer Create Manufacturer API
     * @apiGroup Manufacturer
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {String} name Manufacturer name
     * @apiParam (Request body) {String} image Manufacturer image
     * @apiParam (Request body) {number} sortOrder Manufacturer sortOrder
     * @apiParam (Request body) {number} status status
     * @apiParamExample {json} Input
     * {
     *      "name" : "",
     *      "image" : "",
     *      "imagePath" : "",
     *      "sortOrder" : "",
     *      "status" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully created new Manufacturer.",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/manufacturer/create-manufacturer
     * @apiErrorExample {json} Manufacturer error
     * HTTP/1.1 500 Internal Server Error
     */
    createManufacturer(manufacturer, request, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const image = manufacturer.image;
            if (image) {
                const path = 'manufacturer/';
                const base64Data = new Buffer(image.replace(/^data:image\/\w+;base64,/, ''), 'base64');
                const type = image.split(';')[0].split('/')[1];
                const name = 'Img_' + Date.now() + '.' + type;
                let val;
                if (env_1.env.imageserver === 's3') {
                    val = yield this.s3Service.imageUpload((path + name), base64Data, type);
                }
                else {
                    val = yield this.imageService.imageUpload((path + name), base64Data);
                }
                console.log(val);
                const newManufacturer = new manufacturerModel_1.Manufacturer();
                newManufacturer.name = manufacturer.name;
                newManufacturer.image = name;
                newManufacturer.imagePath = path;
                newManufacturer.sortOrder = manufacturer.sortOrder;
                newManufacturer.isActive = manufacturer.status;
                yield this.manufacturerService.create(newManufacturer);
                const successResponse = {
                    status: 1,
                    message: 'Successfully created a new manufacturer.',
                    data: { name, path },
                };
                return response.status(200).send(successResponse);
            }
        });
    }
    // Manufacturer List API
    /**
     * @api {get} /api/manufacturer/manufacturerlist Manufacturer List API
     * @apiGroup Manufacturer
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {Number} limit limit
     * @apiParam (Request body) {Number} offset offset
     * @apiParam (Request body) {String} keyword keyword
     * @apiParam (Request body) {Number} count count in number
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully get manufacturer list",
     *      "data":"{}"
     *      "status": "1"
     * }
     * @apiSampleRequest /api/manufacturer/manufacturerlist
     * @apiErrorExample {json} Manufacturer error
     * HTTP/1.1 500 Internal Server Error
     */
    manufacturerList(limit, offset, keyword, count, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const select = ['manufacturerId', 'name', 'image', 'imagePath', 'sortOrder', 'isActive'];
            const search = [
                {
                    name: 'name',
                    op: 'like',
                    value: keyword,
                },
            ];
            const WhereConditions = [];
            const manufacturerList = yield this.manufacturerService.list(limit, offset, select, search, WhereConditions, count);
            const successResponse = {
                status: 1,
                message: 'Successfully got the complete manufacturers list.',
                data: manufacturerList,
            };
            return response.status(200).send(successResponse);
        });
    }
    // Delete Manufacturer API
    /**
     * @api {delete} /api/manufacturer/delete-manufacturer/:id Delete Manufacturer API
     * @apiGroup Manufacturer
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {Number} manufacturerId Manufacturer manufacturerId
     * @apiParamExample {json} Input
     * {
     *      "manufacturerId" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully deleted Manufacturer.",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/manufacturer/delete-manufacturer/:id
     * @apiErrorExample {json} Manufacturer error
     * HTTP/1.1 500 Internal Server Error
     */
    deleteManufacturer(manufacturer, response, request) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const ManufacturerData = yield this.manufacturerService.findOne({
                where: {
                    manufacturerId: manufacturer.manufacturerId,
                },
            });
            if (!ManufacturerData) {
                const errorResponse = {
                    status: 0,
                    message: 'Invalid manufacturerId',
                };
                return response.status(400).send(errorResponse);
            }
            const deleteManufacturer = yield this.manufacturerService.delete(ManufacturerData.manufacturerId);
            if (!deleteManufacturer) {
                const successResponse = {
                    status: 1,
                    message: 'Successfully deleted the manufacturer. ',
                };
                return response.status(200).send(successResponse);
            }
            else {
                const errorResponse = {
                    status: 0,
                    message: 'unable to delete manufacturer',
                };
                return response.status(400).send(errorResponse);
            }
        });
    }
    // Update Manufacturer API
    /**
     * @api {put} /api/manufacturer/update-manufacturer/:id Update Manufacturer API
     * @apiGroup Manufacturer
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {number} manufacturerId Manufacturer manufacturerId
     * @apiParam (Request body) {String} name Manufacturer name
     * @apiParam (Request body) {String} image Manufacturer image
     * @apiParam (Request body) {number} sortOrder Manufacturer sortOrder
     * @apiParam (Request body) {number} status Manufacturer status
     * @apiParamExample {json} Input
     * {
     *      "manufacturerId" : "",
     *      "name" : "",
     *      "image" : "",
     *      "sortOrder" : "",
     *      "status" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully updated Manufacturer.",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/manufacturer/update-manufacturer/:id
     * @apiErrorExample {json} Manufacturer error
     * HTTP/1.1 500 Internal Server Error
     */
    updateManufacturer(manufacturerParam, response, request) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const manufacturer = yield this.manufacturerService.findOne({
                where: {
                    manufacturerId: manufacturerParam.manufacturerId,
                },
            });
            if (!manufacturer) {
                const errorResponse = {
                    status: 0,
                    message: 'Invalid manufacturerId',
                };
                return response.status(400).send(errorResponse);
            }
            const image = manufacturerParam.image;
            if (image) {
                const type = image.split(';')[0].split('/')[1];
                const name = 'Img_' + Date.now() + '.' + type;
                const path = 'manufacturer/';
                const base64Data = new Buffer(image.replace(/^data:image\/\w+;base64,/, ''), 'base64');
                let val;
                if (env_1.env.imageserver === 's3') {
                    val = yield this.s3Service.imageUpload((path + name), base64Data, type);
                }
                else {
                    val = yield this.imageService.imageUpload((path + name), base64Data);
                }
                console.log(val);
                manufacturer.image = name;
                manufacturer.imagePath = path;
            }
            manufacturer.name = manufacturerParam.name;
            manufacturer.sortOrder = manufacturerParam.sortOrder;
            manufacturer.isActive = manufacturerParam.status;
            const manufacturerSave = yield this.manufacturerService.create(manufacturer);
            if (manufacturerSave !== undefined) {
                const successResponse = {
                    status: 1,
                    message: 'Successfully updated the manufacturer.',
                    data: manufacturerSave,
                };
                return response.status(200).send(successResponse);
            }
            else {
                const errorResponse = {
                    status: 0,
                    message: 'unable to update manufacturer',
                };
                return response.status(400).send(errorResponse);
            }
        });
    }
};
tslib_1.__decorate([
    routing_controllers_1.Post('/create-manufacturer'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.Body({ validate: true })), tslib_1.__param(1, routing_controllers_1.Req()), tslib_1.__param(2, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [createManufacturerRequest_1.CreateManufacturer, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ManufacturerController.prototype, "createManufacturer", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/manufacturerlist'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.QueryParam('limit')), tslib_1.__param(1, routing_controllers_1.QueryParam('offset')), tslib_1.__param(2, routing_controllers_1.QueryParam('keyword')), tslib_1.__param(3, routing_controllers_1.QueryParam('count')), tslib_1.__param(4, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Number, String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ManufacturerController.prototype, "manufacturerList", null);
tslib_1.__decorate([
    routing_controllers_1.Delete('/delete-manufacturer/:id'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.Body({ validate: true })), tslib_1.__param(1, routing_controllers_1.Res()), tslib_1.__param(2, routing_controllers_1.Req()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [deleteManufacturerRequest_1.DeleteManufacturer, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ManufacturerController.prototype, "deleteManufacturer", null);
tslib_1.__decorate([
    routing_controllers_1.Put('/update-manufacturer/:id'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.Body({ validate: true })), tslib_1.__param(1, routing_controllers_1.Res()), tslib_1.__param(2, routing_controllers_1.Req()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [updateManufacturerRequest_1.UpdateManufacturer, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ManufacturerController.prototype, "updateManufacturer", null);
ManufacturerController = tslib_1.__decorate([
    routing_controllers_1.JsonController('/manufacturer'),
    tslib_1.__metadata("design:paramtypes", [manufacturerService_1.ManufacturerService, S3Service_1.S3Service,
        ImageService_1.ImageService])
], ManufacturerController);
exports.ManufacturerController = ManufacturerController;
//# sourceMappingURL=ManufacturerController.js.map