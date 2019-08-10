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
const createStockStatusRequest_1 = require("./requests/createStockStatusRequest");
const stockStatus_1 = require("../models/stockStatus");
const stockStatusService_1 = require("../services/stockStatusService");
let StockStatusController = class StockStatusController {
    constructor(stockStatusService) {
        this.stockStatusService = stockStatusService;
    }
    // Create Stock Status API
    /**
     * @api {post} /api/stock-status/create-stock-status Create Stock Status API
     * @apiGroup StockStatus
     * @apiParam (Request body) {String} name name
     * @apiParam (Request body) {Number} status status
     * @apiHeader {String} Authorization
     * @apiParamExample {json} Input
     * {
     *      "name" : "",
     *      "status" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "New StockStatus is created successfully",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/stock-status/create-stock-status
     * @apiErrorExample {json} createStockStatus error
     * HTTP/1.1 500 Internal Server Error
     */
    createStockStatus(stockStatusParam, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const newStockStatus = new stockStatus_1.StockStatus();
            newStockStatus.name = stockStatusParam.name;
            newStockStatus.isActive = stockStatusParam.status;
            const StockStatusSave = yield this.stockStatusService.create(newStockStatus);
            if (StockStatusSave !== undefined) {
                const successResponse = {
                    status: 1,
                    message: 'Successfully created new StockStatus',
                    data: StockStatusSave,
                };
                return response.status(200).send(successResponse);
            }
            else {
                const errorResponse = {
                    status: 0,
                    message: 'unable to create StockStatus',
                };
                return response.status(400).send(errorResponse);
            }
        });
    }
    // update Stock Status API
    /**
     * @api {put} /api/stock-status/update-stock-status/:id Update Stock Status API
     * @apiGroup StockStatus
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {String} name StockStatus name
     * @apiParam (Request body) {String} status StockStatus status
     * @apiParamExample {json} Input
     * {
     *      "name" : "",
     *      "status" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully updated stockStatus.",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/stock-status/update-stock-status/:id
     * @apiErrorExample {json} StockStatus error
     * HTTP/1.1 500 Internal Server Error
     */
    updateStockStatus(id, stockStatusParams, response, request) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const stockStatus = yield this.stockStatusService.findOne({
                where: {
                    stockStatusId: id,
                },
            });
            if (!stockStatus) {
                const errorResponse = {
                    status: 0,
                    message: 'Invalid stockStatus',
                };
                return response.status(400).send(errorResponse);
            }
            stockStatus.name = stockStatusParams.name;
            stockStatus.isActive = stockStatusParams.status;
            const stockStatusSave = yield this.stockStatusService.create(stockStatus);
            if (stockStatusSave !== undefined) {
                const successResponse = {
                    status: 1,
                    message: 'Successfully updated stockStatus',
                    data: stockStatusSave,
                };
                return response.status(200).send(successResponse);
            }
            else {
                const errorResponse = {
                    status: 1,
                    message: 'unable to update stockStatus',
                };
                return response.status(400).send(errorResponse);
            }
        });
    }
    // Stock Status List API
    /**
     * @api {get} /api/stock-status/stock-status-list Stock Status List
     * @apiGroup StockStatus
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {Number} limit limit
     * @apiParam (Request body) {Number} offset offset
     * @apiParam (Request body) {String} keyword keyword
     * @apiParam (Request body) {String} count count in number or boolean
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully get stockStatus list",
     *      "data":"{}"
     *      "status": "1"
     * }
     * @apiSampleRequest /api/stock-status/stock-status-list
     * @apiErrorExample {json} StockStatus error
     * HTTP/1.1 500 Internal Server Error
     */
    stockStatusList(limit, offset, keyword, count, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log(keyword);
            const select = ['stockStatusId', 'name', 'isActive'];
            const search = [
                {
                    name: 'name',
                    op: 'like',
                    value: keyword,
                },
            ];
            const WhereConditions = [];
            const stockStatusList = yield this.stockStatusService.list(limit, offset, select, search, WhereConditions, count);
            if (stockStatusList) {
                const successResponse = {
                    status: 1,
                    message: 'Successfully got all stockStatus List',
                    data: stockStatusList,
                };
                return response.status(200).send(successResponse);
            }
            else {
                const errorResponse = {
                    status: 1,
                    message: 'unable to get stockStatusList',
                };
                return response.status(400).send(errorResponse);
            }
        });
    }
    // delete StockStatus API
    /**
     * @api {delete} /api/stock-status/delete-stock-status/:id Delete Stock Status API
     * @apiGroup StockStatus
     * @apiHeader {String} Authorization
     * @apiParamExample {json} Input
     * {
     *      "stockStatusId" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully deleted stockStatus.",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/stock-status/delete-stock-status/:id
     * @apiErrorExample {json} StockStatus error
     * HTTP/1.1 500 Internal Server Error
     */
    deleteStockStatus(id, response, request) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const stockStatus = yield this.stockStatusService.findOne({
                where: {
                    stockStatusId: id,
                },
            });
            if (!stockStatus) {
                const errorResponse = {
                    status: 0,
                    message: 'Invalid stockStatusId',
                };
                return response.status(400).send(errorResponse);
            }
            const deleteStockStatus = yield this.stockStatusService.delete(stockStatus);
            if (deleteStockStatus) {
                const successResponse = {
                    status: 1,
                    message: 'Successfully deleted stockStatus',
                };
                return response.status(200).send(successResponse);
            }
            else {
                const errorResponse = {
                    status: 0,
                    message: 'unable to delete stockStatus',
                };
                return response.status(400).send(errorResponse);
            }
        });
    }
};
tslib_1.__decorate([
    routing_controllers_1.Post('/create-stock-status'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.Body({ validate: true })), tslib_1.__param(1, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [createStockStatusRequest_1.CreateStockStatus, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], StockStatusController.prototype, "createStockStatus", null);
tslib_1.__decorate([
    routing_controllers_1.Put('/update-stock-status/:id'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.Param('id')), tslib_1.__param(1, routing_controllers_1.Body({ validate: true })), tslib_1.__param(2, routing_controllers_1.Res()), tslib_1.__param(3, routing_controllers_1.Req()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, createStockStatusRequest_1.CreateStockStatus, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], StockStatusController.prototype, "updateStockStatus", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/stock-status-list'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.QueryParam('limit')), tslib_1.__param(1, routing_controllers_1.QueryParam('offset')), tslib_1.__param(2, routing_controllers_1.QueryParam('keyword')), tslib_1.__param(3, routing_controllers_1.QueryParam('count')), tslib_1.__param(4, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Number, String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], StockStatusController.prototype, "stockStatusList", null);
tslib_1.__decorate([
    routing_controllers_1.Delete('/delete-stock-status/:id'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.Param('id')), tslib_1.__param(1, routing_controllers_1.Res()), tslib_1.__param(2, routing_controllers_1.Req()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], StockStatusController.prototype, "deleteStockStatus", null);
StockStatusController = tslib_1.__decorate([
    routing_controllers_1.JsonController('/stock-status'),
    tslib_1.__metadata("design:paramtypes", [stockStatusService_1.StockStatusService])
], StockStatusController);
exports.StockStatusController = StockStatusController;
//# sourceMappingURL=StockStatusController.js.map