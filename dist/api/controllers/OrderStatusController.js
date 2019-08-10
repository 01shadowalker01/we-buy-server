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
const orderStatus_1 = require("../models/orderStatus");
const orderStatusService_1 = require("../services/orderStatusService");
const createOrderStatusRequest_1 = require("./requests/createOrderStatusRequest");
let OrderStatusController = class OrderStatusController {
    constructor(orderStatusService) {
        this.orderStatusService = orderStatusService;
    }
    // Create Order Status API
    /**
     * @api {post} /api/order-status/create-order-status Create OrderStatus API
     * @apiGroup OrderStatus
     * @apiParam (Request body) {String} name name
     * @apiParam (Request body) {String} colorCode colorCode
     * @apiParam (Request body) {Number} status status
     * @apiHeader {String} Authorization
     * @apiParamExample {json} Input
     * {
     *      "name" : "",
     *      "colorCode" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "New OrderStatus is created successfully",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/order-status/create-order-status
     * @apiErrorExample {json} createOrderStatus error
     * HTTP/1.1 500 Internal Server Error
     */
    createOrderStatus(orderStatusParam, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const newOrderStatus = new orderStatus_1.OrderStatus();
            newOrderStatus.name = orderStatusParam.name;
            newOrderStatus.colorCode = orderStatusParam.colorCode;
            newOrderStatus.isActive = orderStatusParam.status;
            const orderStatusSave = yield this.orderStatusService.create(newOrderStatus);
            if (orderStatusSave !== undefined) {
                const successResponse = {
                    status: 1,
                    message: 'successfully created a new order status.',
                    data: orderStatusSave,
                };
                return response.status(200).send(successResponse);
            }
            else {
                const errorResponse = {
                    status: 0,
                    message: 'unable to create OrderStatus',
                };
                return response.status(400).send(errorResponse);
            }
        });
    }
    // update Order Status API
    /**
     * @api {put} /api/order-status/update-order-status/:id Update OrderStatus API
     * @apiGroup OrderStatus
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {String} name OrderStatus name
     * @apiParam (Request body) {String} colorCode colorCode
     * @apiParam (Request body) {Number} status status
     * @apiParamExample {json} Input
     * {
     *      "name" : "",
     *      "colorCode" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully updated orderStatus.",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/order-status/update-order-status/:id
     * @apiErrorExample {json} OrderStatus error
     * HTTP/1.1 500 Internal Server Error
     */
    updateOrderStatus(orderStatusParams, id, response, request) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const orderStatus = yield this.orderStatusService.findOne({
                where: {
                    orderStatusId: id,
                },
            });
            if (!orderStatus) {
                const errorResponse = {
                    status: 0,
                    message: 'Invalid orderStatusId',
                };
                return response.status(400).send(errorResponse);
            }
            orderStatus.name = orderStatusParams.name;
            orderStatus.colorCode = orderStatusParams.colorCode;
            orderStatus.isActive = orderStatusParams.status;
            const orderStatusSave = yield this.orderStatusService.create(orderStatus);
            console.log('orderStatus' + orderStatusSave);
            if (orderStatusSave !== undefined) {
                const successResponse = {
                    status: 1,
                    message: 'Successfully updated the order status.',
                    data: orderStatusSave,
                };
                return response.status(200).send(successResponse);
            }
            else {
                const errorResponse = {
                    status: 1,
                    message: 'unable to update OrderStatus.',
                };
                return response.status(400).send(errorResponse);
            }
        });
    }
    // Order Status List API
    /**
     * @api {get} /api/order-status/order-status-list OrderStatus List API
     * @apiGroup OrderStatus
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {Number} limit limit
     * @apiParam (Request body) {Number} offset offset
     * @apiParam (Request body) {String} keyword keyword
     * @apiParam (Request body) {String} count count
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully get orderStatus list",
     *      "data":"{}"
     *      "status": "1"
     * }
     * @apiSampleRequest /api/order-status/order-status-list
     * @apiErrorExample {json} OrderStatus error
     * HTTP/1.1 500 Internal Server Error
     */
    orderStatusList(limit, offset, keyword, count, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const select = ['orderStatusId', 'name', 'colorCode', 'isActive'];
            const search = [
                {
                    name: 'name',
                    op: 'like',
                    value: keyword,
                },
            ];
            const WhereConditions = [];
            const orderStatusList = yield this.orderStatusService.list(limit, offset, select, search, WhereConditions, count);
            if (orderStatusList) {
                const successResponse = {
                    status: 1,
                    message: 'Successfully got the complete order status list.',
                    data: orderStatusList,
                };
                return response.status(200).send(successResponse);
            }
            else {
                const errorResponse = {
                    status: 1,
                    message: 'unable to get OrderStatus.',
                };
                return response.status(400).send(errorResponse);
            }
        });
    }
    // Delete Order Status API
    /**
     * @api {delete} /api/order-status/delete-order-status/:id Delete OrderStatus API
     * @apiGroup OrderStatus
     * @apiHeader {String} Authorization
     * @apiParamExample {json} Input
     * {
     *      "orderStatusId" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully deleted orderStatus.",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/order-status/delete-order-status/:id
     * @apiErrorExample {json} OrderStatus error
     * HTTP/1.1 500 Internal Server Error
     */
    deleteOrderStatus(id, response, request) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const orderStatus = yield this.orderStatusService.findOne({
                where: {
                    orderStatusId: id,
                },
            });
            if (!orderStatus) {
                const errorResponse = {
                    status: 0,
                    message: 'Invalid orderStatusId.',
                };
                return response.status(400).send(errorResponse);
            }
            const deleteOrderStatus = yield this.orderStatusService.delete(orderStatus);
            if (deleteOrderStatus) {
                const successResponse = {
                    status: 1,
                    message: 'Successfully deleted the order status.',
                };
                return response.status(200).send(successResponse);
            }
            else {
                const errorResponse = {
                    status: 0,
                    message: 'unable to delete orderStatus.',
                };
                return response.status(400).send(errorResponse);
            }
        });
    }
};
tslib_1.__decorate([
    routing_controllers_1.Post('/create-order-status'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.Body({ validate: true })), tslib_1.__param(1, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [createOrderStatusRequest_1.CreateOrderStatus, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderStatusController.prototype, "createOrderStatus", null);
tslib_1.__decorate([
    routing_controllers_1.Put('/update-order-status/:id'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.Body({ validate: true })), tslib_1.__param(1, routing_controllers_1.Param('id')), tslib_1.__param(2, routing_controllers_1.Res()), tslib_1.__param(3, routing_controllers_1.Req()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [createOrderStatusRequest_1.CreateOrderStatus, Number, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderStatusController.prototype, "updateOrderStatus", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/order-status-list'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.QueryParam('limit')), tslib_1.__param(1, routing_controllers_1.QueryParam('offset')), tslib_1.__param(2, routing_controllers_1.QueryParam('keyword')), tslib_1.__param(3, routing_controllers_1.QueryParam('count')), tslib_1.__param(4, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Number, String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderStatusController.prototype, "orderStatusList", null);
tslib_1.__decorate([
    routing_controllers_1.Delete('/delete-order-status/:id'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.Param('id')), tslib_1.__param(1, routing_controllers_1.Res()), tslib_1.__param(2, routing_controllers_1.Req()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderStatusController.prototype, "deleteOrderStatus", null);
OrderStatusController = tslib_1.__decorate([
    routing_controllers_1.JsonController('/order-status'),
    tslib_1.__metadata("design:paramtypes", [orderStatusService_1.OrderStatusService])
], OrderStatusController);
exports.OrderStatusController = OrderStatusController;
//# sourceMappingURL=OrderStatusController.js.map