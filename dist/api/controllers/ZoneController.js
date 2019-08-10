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
const zoneService_1 = require("../services/zoneService");
const countryService_1 = require("../services/countryService");
const zone_1 = require("../models/zone");
const createZoneRequest_1 = require("./requests/createZoneRequest");
const class_transformer_1 = require("class-transformer");
let ZoneController = class ZoneController {
    constructor(zoneService, countryService) {
        this.zoneService = zoneService;
        this.countryService = countryService;
    }
    // create zone API
    /**
     * @api {post} /api/zone/add-zone Add Zone API
     * @apiGroup Zone
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {Number} countryId Zone countryId
     * @apiParam (Request body) {String} code Zone code
     * @apiParam (Request body) {String} name Zone name
     * @apiParam (Request body) {Number} status Zone status
     * @apiParamExample {json} Input
     * {
     *      "countryId" : "",
     *      "code" : "",
     *      "name" : "",
     *      "status" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully created new zone.",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/zone/add-zone
     * @apiErrorExample {json} Zone error
     * HTTP/1.1 500 Internal Server Error
     */
    addZone(zoneParam, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const country = yield this.countryService.findOne({
                where: {
                    countryId: zoneParam.countryId,
                },
            });
            if (!country) {
                const errorResponse = {
                    status: 0,
                    message: 'Invalid countryId',
                };
                return response.status(400).send(errorResponse);
            }
            const newZone = new zone_1.Zone();
            newZone.countryId = zoneParam.countryId;
            newZone.code = zoneParam.code;
            newZone.name = zoneParam.name;
            newZone.isActive = zoneParam.status;
            const zoneSave = yield this.zoneService.create(newZone);
            if (zoneSave !== undefined) {
                const successResponse = {
                    status: 1,
                    message: 'Successfully created new zone',
                    data: zoneSave,
                };
                return response.status(200).send(successResponse);
            }
            else {
                const errorResponse = {
                    status: 0,
                    message: 'unable to create zone',
                };
                return response.status(400).send(errorResponse);
            }
        });
    }
    // update Zone API
    /**
     * @api {put} /api/zone/update-zone/:id Update Zone API
     * @apiGroup Zone
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {Number} countryId Zone countryId
     * @apiParam (Request body) {string} code Zone code
     * @apiParam (Request body) {String} name Zone name
     * @apiParam (Request body) {Number} status Zone status
     * @apiParamExample {json} Input
     * {
     *      "zoneId" : "",
     *      "countryId" : "",
     *      "code" : "",
     *      "name" : "",
     *      "status" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully updated Zone.",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/zone/update-zone/:id
     * @apiErrorExample {json} Zone error
     * HTTP/1.1 500 Internal Server Error
     */
    updateZone(id, zoneParam, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const zone = yield this.zoneService.findOne({
                where: {
                    zoneId: id,
                },
            });
            if (zone) {
                const country = yield this.countryService.findOne({
                    where: {
                        countryId: zoneParam.countryId,
                    },
                });
                if (!country) {
                    const errorResponse = {
                        status: 0,
                        message: 'Invalid countryId',
                    };
                    return response.status(400).send(errorResponse);
                }
            }
            else {
                const errorResponse = {
                    status: 0,
                    message: 'Invalid zoneId',
                };
                return response.status(400).send(errorResponse);
            }
            zone.countryId = zoneParam.countryId;
            zone.code = zoneParam.code;
            zone.name = zoneParam.name;
            zone.isActive = zoneParam.status;
            const zoneSave = yield this.zoneService.create(zone);
            if (zoneSave !== undefined) {
                const successResponse = {
                    status: 1,
                    message: 'Successfully updated zone',
                    data: zoneSave,
                };
                return response.status(200).send(successResponse);
            }
            else {
                const errorResponse = {
                    status: 0,
                    message: 'unable to update zone',
                };
                return response.status(400).send(errorResponse);
            }
        });
    }
    // Zone List API
    /**
     * @api {get} /api/zone/zone-list Zone List API
     * @apiGroup Zone
     * @apiHeader {String} Authorization
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
     * @apiSampleRequest /api/zone/zone-list
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
    // delete Zone API
    /**
     * @api {delete} /api/zone/delete-zone/:id Delete Zone API
     * @apiGroup Zone
     * @apiHeader {String} Authorization
     * @apiParamExample {json} Input
     * {
     *      "zoneId" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully deleted Zone.",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/zone/delete-zone/:id
     * @apiErrorExample {json} Zone error
     * HTTP/1.1 500 Internal Server Error
     */
    deleteZone(id, response, request) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const zone = yield this.zoneService.findOne({
                where: {
                    zoneId: id,
                },
            });
            if (!zone) {
                const errorResponse = {
                    status: 0,
                    message: 'Invalid zoneId',
                };
                return response.status(400).send(errorResponse);
            }
            const deleteZone = yield this.zoneService.delete(zone);
            console.log('zone' + deleteZone);
            if (deleteZone) {
                const successResponse = {
                    status: 1,
                    message: 'Successfully deleted Zone',
                };
                return response.status(200).send(successResponse);
            }
            else {
                const errorResponse = {
                    status: 0,
                    message: 'unable to delete zone',
                };
                return response.status(400).send(errorResponse);
            }
        });
    }
};
tslib_1.__decorate([
    routing_controllers_1.Post('/add-zone'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.Body({ validate: true })), tslib_1.__param(1, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [createZoneRequest_1.CreateZone, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ZoneController.prototype, "addZone", null);
tslib_1.__decorate([
    routing_controllers_1.Put('/update-zone/:id'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.Param('id')), tslib_1.__param(1, routing_controllers_1.Body({ validate: true })), tslib_1.__param(2, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, createZoneRequest_1.CreateZone, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ZoneController.prototype, "updateZone", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/zone-list'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.QueryParam('limit')), tslib_1.__param(1, routing_controllers_1.QueryParam('offset')), tslib_1.__param(2, routing_controllers_1.QueryParam('keyword')), tslib_1.__param(3, routing_controllers_1.QueryParam('count')), tslib_1.__param(4, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Number, String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ZoneController.prototype, "zonelist", null);
tslib_1.__decorate([
    routing_controllers_1.Delete('/delete-zone/:id'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.Param('id')), tslib_1.__param(1, routing_controllers_1.Res()), tslib_1.__param(2, routing_controllers_1.Req()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ZoneController.prototype, "deleteZone", null);
ZoneController = tslib_1.__decorate([
    routing_controllers_1.JsonController('/zone'),
    tslib_1.__metadata("design:paramtypes", [zoneService_1.ZoneService,
        countryService_1.CountryService])
], ZoneController);
exports.ZoneController = ZoneController;
//# sourceMappingURL=ZoneController.js.map