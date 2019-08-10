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
const currency_1 = require("../models/currency");
const createCurrencyRequest_1 = require("./requests/createCurrencyRequest");
const currencyService_1 = require("../services/currencyService");
const updateCurrenyRequest_1 = require("./requests/updateCurrenyRequest");
let CurrencyController = class CurrencyController {
    constructor(currencyService) {
        this.currencyService = currencyService;
    }
    // Create Currency API
    /**
     * @api {post} /api/currency/add-currency Add Currency API
     * @apiGroup Currency
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {String} title Currency title
     * @apiParam (Request body) {String} code Currency code
     * @apiParam (Request body) {String} symbolLeft Currency symbolLeft
     * @apiParam (Request body) {String} symbolRight Currency  symbolRight
     * @apiParam (Request body) {Number} value Currency value
     * @apiParam (Request body) {Number} status Currency status
     * @apiParamExample {json} Input
     * {
     *      "title" : "",
     *      "code" : "",
     *      "symbolLeft" : "",
     *      "symbolRight" : "",
     *      "value" : "",
     *      "status" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully created new Currency.",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/currency/add-currency
     * @apiErrorExample {json} Currency error
     * HTTP/1.1 500 Internal Server Error
     */
    addCurrency(currencyParam, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const newCurrency = new currency_1.Currency();
            newCurrency.title = currencyParam.title;
            newCurrency.code = currencyParam.code;
            newCurrency.symbolLeft = currencyParam.symbolLeft;
            newCurrency.symbolRight = currencyParam.symbolRight;
            newCurrency.isActive = currencyParam.status;
            newCurrency.value = currencyParam.value;
            const currencySave = yield this.currencyService.create(newCurrency);
            if (currencySave !== undefined) {
                const successResponse = {
                    status: 1,
                    message: 'Successfully added new currency.',
                    data: currencySave,
                };
                return response.status(200).send(successResponse);
            }
            else {
                const errorResponse = {
                    status: 0,
                    message: 'unable to create currency',
                };
                return response.status(400).send(errorResponse);
            }
        });
    }
    // Currency List API
    /**
     * @api {get} /api/currency/currencylist Currency List API
     * @apiGroup Currency
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {Number} limit limit
     * @apiParam (Request body) {Number} offset offset
     * @apiParam (Request body) {String} keyword keyword
     * @apiParam (Request body) {Number} count count should be number or boolean
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully get currency list",
     *      "data":{
     *       "currencyId" : "",
     *       "title" : "",
     *       "code" : "",
     *       "value" : "",
     *       "update" : "",
     *      }
     *      "status": "1"
     * }
     * @apiSampleRequest /api/currency/currencylist
     * @apiErrorExample {json} Currency error
     * HTTP/1.1 500 Internal Server Error
     */
    currencyList(limit, offset, keyword, count, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const select = ['currencyId', 'title', 'code', 'symbolLeft', 'symbolRight', 'value', 'modifiedDate', 'isActive'];
            const search = [
                {
                    name: 'title',
                    op: 'like',
                    value: keyword,
                },
            ];
            const WhereConditions = [];
            const currencyList = yield this.currencyService.list(limit, offset, select, search, WhereConditions, count);
            if (currencyList) {
                const successResponse = {
                    status: 1,
                    message: 'Successfully got the complete currency list.',
                    data: currencyList,
                };
                return response.status(200).send(successResponse);
            }
            else {
                const errorResponse = {
                    status: 0,
                    message: 'unable to list currency',
                };
                return response.status(400).send(errorResponse);
            }
        });
    }
    // update Currency
    /**
     * @api {put} /api/currency/update-currency/:id Update Currency API
     * @apiGroup Currency
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {Number} currencyId Currency currencyId
     * @apiParam (Request body) {String} title Currency title
     * @apiParam (Request body) {String} code Currency code
     * @apiParam (Request body) {String} symbolLeft Currency symbolLeft
     * @apiParam (Request body) {String} symbolRight Currency  symbolRight
     * @apiParam (Request body) {Number} value Currency value
     * @apiParam (Request body) {Number} status Currency status
     * @apiParamExample {json} Input
     * {
     *      "currencyId" : "",
     *      "title" : "",
     *      "code" : "",
     *      "symbolLeft" : "",
     *      "symbolRight" : "",
     *      "value" : "",
     *      "status" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully updated Currency.",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/currency/update-currency/:id
     * @apiErrorExample {json} Currency error
     * HTTP/1.1 500 Internal Server Error
     */
    updateCurrency(currencyParam, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const currency = yield this.currencyService.findOne({
                where: {
                    currencyId: currencyParam.currencyId,
                },
            });
            if (!currency) {
                const errorResponse = {
                    status: 0,
                    message: 'Invalid currencyId',
                };
                return response.status(400).send(errorResponse);
            }
            currency.title = currencyParam.title;
            currency.code = currencyParam.code;
            currency.symbolLeft = currencyParam.symbolLeft;
            currency.symbolRight = currencyParam.symbolRight;
            currency.value = currencyParam.value;
            currency.isActive = currencyParam.status;
            const currencySave = yield this.currencyService.create(currency);
            if (currencySave !== undefined) {
                const successResponse = {
                    status: 1,
                    message: 'Successfully updated the currency.',
                    data: currencySave,
                };
                return response.status(200).send(successResponse);
            }
            else {
                const errorResponse = {
                    status: 0,
                    message: 'unable to update currency',
                };
                return response.status(400).send(errorResponse);
            }
        });
    }
    // delete Currency API
    /**
     * @api {delete} /api/currency/delete-currency/:id Delete Currency API
     * @apiGroup Currency
     * @apiHeader {String} Authorization
     * @apiParamExample {json} Input
     * {
     *      "currencyId" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully deleted currency.",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/currency/delete-currency/:id
     * @apiErrorExample {json} Currency error
     * HTTP/1.1 500 Internal Server Error
     */
    deleteCurrency(id, response, request) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const currency = yield this.currencyService.findOne({
                where: {
                    currencyId: id,
                },
            });
            if (!currency) {
                const errorResponse = {
                    status: 0,
                    message: 'Invalid currencyId',
                };
                return response.status(400).send(errorResponse);
            }
            const deleteCurrency = yield this.currencyService.delete(currency.currencyId);
            if (deleteCurrency === undefined) {
                const successResponse = {
                    status: 1,
                    message: 'Successfullly deleted the currency.',
                };
                return response.status(200).send(successResponse);
            }
            else {
                const errorResponse = {
                    status: 0,
                    message: 'unable to delete currency',
                };
                return response.status(400).send(errorResponse);
            }
        });
    }
};
tslib_1.__decorate([
    routing_controllers_1.Post('/add-currency'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.Body({ validate: true })), tslib_1.__param(1, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [createCurrencyRequest_1.CreateCurrency, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CurrencyController.prototype, "addCurrency", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/currencylist'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.QueryParam('limit')), tslib_1.__param(1, routing_controllers_1.QueryParam('offset')), tslib_1.__param(2, routing_controllers_1.QueryParam('keyword')), tslib_1.__param(3, routing_controllers_1.QueryParam('count')), tslib_1.__param(4, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Number, String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CurrencyController.prototype, "currencyList", null);
tslib_1.__decorate([
    routing_controllers_1.Put('/update-currency/:id'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.Body({ validate: true })), tslib_1.__param(1, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [updateCurrenyRequest_1.UpdateCurrency, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CurrencyController.prototype, "updateCurrency", null);
tslib_1.__decorate([
    routing_controllers_1.Delete('/delete-currency/:id'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.Param('id')), tslib_1.__param(1, routing_controllers_1.Res()), tslib_1.__param(2, routing_controllers_1.Req()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CurrencyController.prototype, "deleteCurrency", null);
CurrencyController = tslib_1.__decorate([
    routing_controllers_1.JsonController('/currency'),
    tslib_1.__metadata("design:paramtypes", [currencyService_1.CurrencyService])
], CurrencyController);
exports.CurrencyController = CurrencyController;
//# sourceMappingURL=CurrencyController.js.map