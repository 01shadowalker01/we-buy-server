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
const createCountryRequest_1 = require("./requests/createCountryRequest");
const country_1 = require("../models/country");
const countryService_1 = require("../services/countryService");
const updateCountryRequest_1 = require("./requests/updateCountryRequest");
let CountryController = class CountryController {
    constructor(countryService) {
        this.countryService = countryService;
    }
    // Create Country API
    /**
     * @api {post} /api/country/add-country Add Country API
     * @apiGroup Country
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {String} name Country name
     * @apiParam (Request body) {String} isoCode2 Country isoCode2
     * @apiParam (Request body) {String} isoCode3 Country isoCode3
     * @apiParam (Request body) {Number} postcodeRequired Country postcodeRequired
     * @apiParam (Request body) {Number} status Country status field required
     * @apiParamExample {json} Input
     * {
     *      "name" : "",
     *      "isoCode2" : "",
     *      "isoCode3" : "",
     *      "addressFormat" : "",
     *      "postcodeRequired" : "",
     *      "status" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully created new Country.",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/country/add-country
     * @apiErrorExample {json} Country error
     * HTTP/1.1 500 Internal Server Error
     */
    addCountry(countryParam, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const existCountry = yield this.countryService.findOne({
                where: {
                    name: countryParam.name,
                    isoCode2: countryParam.isoCode2,
                    isoCode3: countryParam.isoCode3,
                },
            });
            if (existCountry) {
                const errorResponse = {
                    status: 0,
                    message: 'you already added this country.',
                };
                return response.status(200).send(errorResponse);
            }
            const newCountry = new country_1.Country();
            newCountry.name = countryParam.name;
            newCountry.isoCode2 = countryParam.isoCode2;
            newCountry.isoCode3 = countryParam.isoCode3;
            newCountry.postcodeRequired = countryParam.postcodeRequired;
            newCountry.isActive = countryParam.status;
            const countrySave = yield this.countryService.create(newCountry);
            if (countrySave !== undefined) {
                const successResponse = {
                    status: 1,
                    message: 'Successfully added new country.',
                    data: countrySave,
                };
                return response.status(200).send(successResponse);
            }
            else {
                const errorResponse = {
                    status: 0,
                    message: 'Unable to add the country. ',
                };
                return response.status(400).send(errorResponse);
            }
        });
    }
    // Update Country API
    /**
     * @api {put} /api/country/update-country/:id Update Country API
     * @apiGroup Country
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {Number} countryId Country countryId
     * @apiParam (Request body) {String} name Country name
     * @apiParam (Request body) {String} isoCode2 Country isoCode2
     * @apiParam (Request body) {String} isoCode3 Country isoCode3
     * @apiParam (Request body) {Number} postcodeRequired Country postcodeRequired
     * @apiParam (Request body) {Number}  status status
     * @apiParamExample {json} Input
     * {
     *      "countryId" : "",
     *      "name" : "",
     *      "isoCode2" : "",
     *      "isoCode3" : "",
     *      "addressFormat" : "",
     *      "postcodeRequired" : "",
     *      "status" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully updated Country.",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/country/update-country/:id
     * @apiErrorExample {json} Country error
     * HTTP/1.1 500 Internal Server Error
     */
    updateCountry(countryParam, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const country = yield this.countryService.findOne({
                where: {
                    countryId: countryParam.countryId,
                },
            });
            if (!country) {
                const errorResponse = {
                    status: 0,
                    message: 'Invalid countryId',
                };
                return response.status(400).send(errorResponse);
            }
            country.name = countryParam.name;
            country.isoCode2 = countryParam.isoCode2;
            country.isoCode3 = countryParam.isoCode3;
            country.postcodeRequired = countryParam.postcodeRequired;
            country.isActive = countryParam.status;
            const countrySave = yield this.countryService.create(country);
            if (countrySave !== undefined) {
                const successResponse = {
                    status: 1,
                    message: 'Successfully updated country',
                    data: countrySave,
                };
                return response.status(200).send(successResponse);
            }
            else {
                const errorResponse = {
                    status: 0,
                    message: 'unable to update country',
                };
                return response.status(400).send(errorResponse);
            }
        });
    }
    // Country List API
    /**
     * @api {get} /api/country/countrylist Country List API
     * @apiGroup Country
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {Number} limit limit
     * @apiParam (Request body) {Number} offset offset
     * @apiParam (Request body) {String} keyword keyword
     * @apiParam (Request body) {Number} count count should be number or boolean
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully got country list",
     *      "data":{
     *      "countryId"
     *      "name"
     *      "isoCode2"
     *      "isoCode3"
     *      "addressFormat"
     *      "postcodeRequired"
     *      "status"
     *      }
     *      "status": "1"
     * }
     * @apiSampleRequest /api/country/countrylist
     * @apiErrorExample {json} Country error
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
            ];
            const WhereConditions = [];
            const countryList = yield this.countryService.list(limit, offset, select, search, WhereConditions, count);
            if (countryList) {
                const successResponse = {
                    status: 1,
                    message: 'Successfully got country List',
                    data: countryList,
                };
                return response.status(200).send(successResponse);
            }
            else {
                const errorResponse = {
                    status: 0,
                    message: 'unable to get countryList',
                };
                return response.status(400).send(errorResponse);
            }
        });
    }
    // Delete Country API
    /**
     * @api {delete} /api/country/delete-country/:id Delete Country API
     * @apiGroup Country
     * @apiHeader {String} Authorization
     * @apiParamExample {json} Input
     * {
     *      "countryId" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully deleted Country.",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/country/delete-country/:id
     * @apiErrorExample {json} Country error
     * HTTP/1.1 500 Internal Server Error
     */
    deleteCountry(id, response, request) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const country = yield this.countryService.findOne({
                where: {
                    countryId: id,
                },
            });
            if (!country) {
                const errorResponse = {
                    status: 0,
                    message: 'Invalid CountryId',
                };
                return response.status(400).send(errorResponse);
            }
            const deleteCountry = yield this.countryService.delete(country);
            if (deleteCountry) {
                const successResponse = {
                    status: 1,
                    message: 'Successfully deleted country.',
                };
                return response.status(200).send(successResponse);
            }
            else {
                const errorResponse = {
                    status: 0,
                    message: 'unable to delete country',
                };
                return response.status(400).send(errorResponse);
            }
        });
    }
};
tslib_1.__decorate([
    routing_controllers_1.Post('/add-country'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.Body({ validate: true })), tslib_1.__param(1, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [createCountryRequest_1.CreateCountry, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CountryController.prototype, "addCountry", null);
tslib_1.__decorate([
    routing_controllers_1.Put('/update-country/:id'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.Body({ validate: true })), tslib_1.__param(1, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [updateCountryRequest_1.UpdateCountry, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CountryController.prototype, "updateCountry", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/countrylist'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.QueryParam('limit')), tslib_1.__param(1, routing_controllers_1.QueryParam('offset')), tslib_1.__param(2, routing_controllers_1.QueryParam('keyword')), tslib_1.__param(3, routing_controllers_1.QueryParam('count')), tslib_1.__param(4, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Number, String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CountryController.prototype, "countryList", null);
tslib_1.__decorate([
    routing_controllers_1.Delete('/delete-country/:id'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.Param('id')), tslib_1.__param(1, routing_controllers_1.Res()), tslib_1.__param(2, routing_controllers_1.Req()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CountryController.prototype, "deleteCountry", null);
CountryController = tslib_1.__decorate([
    routing_controllers_1.JsonController('/country'),
    tslib_1.__metadata("design:paramtypes", [countryService_1.CountryService])
], CountryController);
exports.CountryController = CountryController;
//# sourceMappingURL=CountryController.js.map