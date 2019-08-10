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
const OrderService_1 = require("../services/OrderService");
const CustomerService_1 = require("../services/CustomerService");
const UpdateOrderChangeStatus_1 = require("./requests/UpdateOrderChangeStatus");
const OrderLogService_1 = require("../services/OrderLogService");
const OrderProductService_1 = require("../services/OrderProductService");
const ProductService_1 = require("../services/ProductService");
const orderStatusService_1 = require("../services/orderStatusService");
const ProductSpecialService_1 = require("../services/ProductSpecialService");
const ProductDiscountService_1 = require("../services/ProductDiscountService");
const ProductImageService_1 = require("../services/ProductImageService");
let OrderController = class OrderController {
    constructor(orderService, customerService, productService, orderLogService, orderProductService, productDiscountService, orderStatusService, productSpecialService, productImageService) {
        this.orderService = orderService;
        this.customerService = customerService;
        this.productService = productService;
        this.orderLogService = orderLogService;
        this.orderProductService = orderProductService;
        this.productDiscountService = productDiscountService;
        this.orderStatusService = orderStatusService;
        this.productSpecialService = productSpecialService;
        this.productImageService = productImageService;
    }
    // order List API
    /**
     * @api {get} /api/order/orderlist Order List API
     * @apiGroup Order
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {Number} limit limit
     * @apiParam (Request body) {Number} offset offset
     * @apiParam (Request body) {Number} orderId search by orderId
     * @apiParam (Request body) {String} orderStatusId search by orderStatusId
     * @apiParam (Request body) {String} customerName search by customerName
     * @apiParam (Request body) {Number} totalAmount search by totalAmount
     * @apiParam (Request body) {Number} dateAdded search by dateAdded
     * @apiParam (Request body) {Number} count count should be number or boolean
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully get order list",
     *      "data":{
     *      "orderId" : "",
     *      "orderStatusId" : "",
     *      "customerName" : "",
     *      "totalAmount" : "",
     *      "dateAdded" : "",
     *      "dateModified" : "",
     *      "status" : "",
     *      }
     *      "status": "1"
     * }
     * @apiSampleRequest /api/order/orderlist
     * @apiErrorExample {json} order error
     * HTTP/1.1 500 Internal Server Error
     */
    orderList(limit, offset, orderId, orderStatusId, customerName, totalAmount, dateAdded, count, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const search = [
                {
                    name: 'orderPrefixId',
                    op: 'like',
                    value: orderId,
                },
                {
                    name: 'orderStatusId',
                    op: 'like',
                    value: orderStatusId,
                },
                {
                    name: 'shippingFirstname',
                    op: 'like',
                    value: customerName,
                },
                {
                    name: 'total',
                    op: 'like',
                    value: totalAmount,
                },
                {
                    name: 'createdDate',
                    op: 'like',
                    value: dateAdded,
                },
            ];
            const WhereConditions = [];
            const orderList = yield this.orderService.list(limit, offset, 0, search, WhereConditions, 0, count);
            if (count) {
                const Response = {
                    status: 1,
                    message: 'Successfully got count.',
                    data: orderList,
                };
                return response.status(200).send(Response);
            }
            const orderStatus = orderList.map((value) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                // OrderList API
                const status = yield this.orderStatusService.findOne({
                    where: { orderStatusId: value.orderStatusId },
                    select: ['orderStatusId', 'name', 'colorCode'],
                });
                const temp = value;
                temp.orderStatus = status;
                return temp;
            }));
            const results = yield Promise.all(orderStatus);
            const successResponse = {
                status: 1,
                message: 'Successfully got the complete order list.',
                data: results,
            };
            return response.status(200).send(successResponse);
        });
    }
    //  Order Detail API
    /**
     * @api {get} /api/order/order-detail  Order Detail API
     * @apiGroup Order
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {Number} orderId Order Id
     * @apiParamExample {json} Input
     * {
     *      "orderId" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully show the Order Detail..!!",
     *      "status": "1",
     *      "data": {},
     * }
     * @apiSampleRequest /api/order/order-detail
     * @apiErrorExample {json} Order Detail error
     * HTTP/1.1 500 Internal Server Error
     */
    // Order Detail Function
    orderDetail(orderid, request, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const orderData = yield this.orderService.find({ where: { orderId: orderid }, select: ['orderId', 'orderStatusId', 'telephone', 'invoiceNo', 'invoicePrefix', 'orderPrefixId', 'shippingFirstname', 'shippingLastname', 'shippingCompany', 'shippingAddress1',
                    'shippingAddress2', 'shippingCity', 'shippingZone', 'shippingPostcode', 'shippingCountry', 'shippingAddressFormat',
                    'paymentFirstname', 'paymentLastname', 'paymentCompany', 'paymentAddress1', 'paymentAddress2', 'paymentCity',
                    'paymentPostcode', 'paymentCountry', 'paymentZone', 'paymentAddressFormat', 'total', 'customerId', 'createdDate'] });
            const promises = orderData.map((result) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                const product = yield this.orderProductService.find({ where: { orderId: orderid }, select: ['orderProductId', 'orderId', 'productId', 'name', 'model', 'quantity', 'total', 'productPrice'] }).then((val) => {
                    console.log(val);
                    const productVal = val.map((value) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                        const productDetail = yield this.productService.findOne({
                            where: { productId: value.productId },
                            select: ['name', 'quantity', 'minimumQuantity', 'image',
                                'imagePath', 'shipping', 'price', 'dateAvailable', 'amount', 'rating', 'discount', 'isActive']
                        });
                        const image = yield this.productImageService.findOne({
                            select: ['image', 'containerName'],
                            where: { productId: value.productId, defaultImage: 1 },
                        });
                        // const orderOption = await this.orderOptionService.find({where: {orderProductId: value.orderProductId},
                        //     select: ['name', 'value', 'type', 'orderOptionId', 'orderProductId']});
                        // const rating = await this.productRatingService.findOne({select: ['rating', 'review'], where: {customerId : result.customerId, orderProductId : value.orderProductId, productId: value.productId}});
                        const tempVal = value;
                        const nowDate = new Date();
                        const todaydate = nowDate.getFullYear() + '-' + (nowDate.getMonth() + 1) + '-' + nowDate.getDate();
                        const productSpecial = yield this.productSpecialService.findSpecialPrice(value.productId, todaydate);
                        const productDiscount = yield this.productDiscountService.findDiscountPrice(value.productId, todaydate);
                        if (productSpecial !== undefined) {
                            tempVal.pricerefer = productSpecial.price;
                            tempVal.flag = 1;
                        }
                        else if (productDiscount !== undefined) {
                            tempVal.pricerefer = productDiscount.price;
                            tempVal.flag = 0;
                        }
                        else {
                            tempVal.pricerefer = '';
                            tempVal.flag = '';
                        }
                        tempVal.productDetail = productDetail;
                        tempVal.productDetail.productImage = image;
                        // tempVal.orderOptions = orderOption;
                        // if (rating !== undefined) {
                        //     tempVal.rating = rating.rating;
                        //     tempVal.review = rating.review;
                        // } else {
                        //     tempVal.rating = 0;
                        //     tempVal.review = '';
                        // }
                        return tempVal;
                    }));
                    const results = Promise.all(productVal);
                    return results;
                });
                const orderStatusData = yield this.orderStatusService.findOne({
                    where: { orderStatusId: result.orderStatusId },
                    select: ['name', 'colorCode']
                });
                let str = JSON.stringify(orderStatusData);
                str = str.replace(/name/g, 'orderStatusName');
                str = str.replace(/colorCode/g, 'statusColorCode');
                const orderStatus = JSON.parse(str);
                const data = result;
                const temp = Object.assign({}, data, orderStatus);
                temp.productList = product;
                const customer = yield this.customerService.findOne({ where: { id: result.customerId }, select: ['firstName', 'lastName', 'username', 'mobileNumber', 'email', 'city', 'address', 'pincode', 'countryId', 'zoneId'] });
                console.log(customer);
                temp.customerDetail = customer;
                return temp;
            }));
            const resultData = yield Promise.all(promises);
            const successResponse = {
                status: 1,
                message: 'Successfully shown the order Detail. ',
                data: resultData,
            };
            return response.status(200).send(successResponse);
        });
    }
    // sales List API
    /**
     * @api {get} /api/order/saleslist Sales List API
     * @apiGroup Order
     * @apiHeader {String} Authorization
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "status": "1"
     *      "message": "Successfully get sales count list",
     *      "data":{
     *      }
     * }
     * @apiSampleRequest /api/order/saleslist
     * @apiErrorExample {json} sales error
     * HTTP/1.1 500 Internal Server Error
     */
    salesList(response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const orderList = yield this.orderService.salesList();
            console.log(orderList);
            const promises = orderList.map((result) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                const monthNames = ['', 'January', 'February', 'March', 'April', 'May', 'June',
                    'July', 'August', 'September', 'October', 'November', 'December',
                ];
                const temp = result;
                temp.monthYear = monthNames[result.month] + '-' + result.year;
                return temp;
            }));
            const finalResult = yield Promise.all(promises);
            const successResponse = {
                status: 1,
                message: 'Successfully get sales count List',
                data: finalResult,
            };
            return response.status(200).send(successResponse);
        });
    }
    // total order amount API
    /**
     * @api {get} /api/order/total-order-amount total Order Amount API
     * @apiGroup Order
     * @apiHeader {String} Authorization
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "status": "1"
     *      "message": "Successfully get total order amount",
     *      "data":{
     *      "count" : "",
     *      }
     * }
     * @apiSampleRequest /api/order/total-order-amount
     * @apiErrorExample {json} order error
     * HTTP/1.1 500 Internal Server Error
     */
    totalOrderAmount(response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let total = 0;
            const order = yield this.orderService.findAll();
            let n = 0;
            for (n; n < order.length; n++) {
                total += +order[n].total;
            }
            if (order) {
                const successResponse = {
                    status: 1,
                    message: 'Successfully get total order Amount',
                    data: total,
                };
                return response.status(200).send(successResponse);
            }
            else {
                const errorResponse = {
                    status: 0,
                    message: 'unable to get total order amount',
                };
                return response.status(400).send(errorResponse);
            }
        });
    }
    // today order amount API
    /**
     * @api {get} /api/order/today-order-amount today Order Amount API
     * @apiGroup Order
     * @apiHeader {String} Authorization
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "status": "1"
     *      "message": "Successfully get today order amount",
     *      "data":{
     *      }
     * }
     * @apiSampleRequest /api/order/today-order-amount
     * @apiErrorExample {json} order error
     * HTTP/1.1 500 Internal Server Error
     */
    todayOrderAmount(response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const nowDate = new Date();
            const todaydate = nowDate.getFullYear() + '-' + (nowDate.getMonth() + 1) + '-' + nowDate.getDate();
            console.log(todaydate);
            let total = 0;
            const order = yield this.orderService.findAlltodayOrder(todaydate);
            let n = 0;
            for (n; n < order.length; n++) {
                total += +order[n].total;
            }
            if (order) {
                const successResponse = {
                    status: 1,
                    message: 'Successfully get today order Amount',
                    data: total,
                };
                return response.status(200).send(successResponse);
            }
            else {
                const errorResponse = {
                    status: 0,
                    message: 'unable to get today order amount',
                };
                return response.status(400).send(errorResponse);
            }
        });
    }
    // Today order count API
    /**
     * @api {get} /api/order/today-order-count Today OrderCount API
     * @apiGroup Order
     * @apiHeader {String} Authorization
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully get Today order count",
     *      "data":{
     *      }
     *      "status": "1"
     * }
     * @apiSampleRequest /api/order/today-order-count
     * @apiErrorExample {json} order error
     * HTTP/1.1 500 Internal Server Error
     */
    orderCount(response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const nowDate = new Date();
            const todaydate = nowDate.getFullYear() + '-' + (nowDate.getMonth() + 1) + '-' + nowDate.getDate();
            const orderCount = yield this.orderService.findAllTodayOrderCount(todaydate);
            const successResponse = {
                status: 1,
                message: 'Successfully get Today order count',
                data: orderCount,
            };
            return response.status(200).send(successResponse);
        });
    }
    // Change order Status API
    /**
     * @api {post} /api/order/order-change-status   Change Order Status API
     * @apiGroup Order
     * @apiHeader {String} Authorization
     * @apiParam (Request body) {Number} orderId Order Id
     * @apiParam (Request body) {Number} orderStatusId order Status Id
     * @apiParamExample {json} Input
     * {
     *   "orderDetails" : "",
     * }
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * {
     *      "message": "Successfully updated order change status.",
     *      "status": "1"
     * }
     * @apiSampleRequest /api/order/order-change-status
     * @apiErrorExample {json} order error
     * HTTP/1.1 500 Internal Server Error
     */
    orderChangeStatus(orderChangeStatus, response) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const updateOrder = yield this.orderService.findOrder(orderChangeStatus.orderId);
            console.log(updateOrder);
            if (!updateOrder) {
                const errorResponse = {
                    status: 0,
                    message: 'invalid order Id',
                };
                return response.status(400).send(errorResponse);
            }
            yield this.orderLogService.create(updateOrder);
            console.log(updateOrder);
            updateOrder.orderStatusId = orderChangeStatus.orderStatusId;
            console.log(updateOrder.orderStatusId);
            const orderSave = yield this.orderService.create(updateOrder);
            if (orderSave) {
                const successResponse = {
                    status: 1,
                    message: 'Successfully updated Order Status',
                    data: orderSave,
                };
                return response.status(200).send(successResponse);
            }
            else {
                const errorResponse = {
                    status: 0,
                    message: 'unable to updated OrderStatus',
                };
                return response.status(400).send(errorResponse);
            }
        });
    }
};
tslib_1.__decorate([
    routing_controllers_1.Get('/orderlist'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.QueryParam('limit')), tslib_1.__param(1, routing_controllers_1.QueryParam('offset')), tslib_1.__param(2, routing_controllers_1.QueryParam('orderId')), tslib_1.__param(3, routing_controllers_1.QueryParam('orderStatusId')), tslib_1.__param(4, routing_controllers_1.QueryParam('customerName')),
    tslib_1.__param(5, routing_controllers_1.QueryParam('totalAmount')), tslib_1.__param(6, routing_controllers_1.QueryParam('dateAdded')), tslib_1.__param(7, routing_controllers_1.QueryParam('count')), tslib_1.__param(8, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Number, String, String, String, String, String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderController.prototype, "orderList", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/order-detail'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.QueryParam('orderId')), tslib_1.__param(1, routing_controllers_1.Req()), tslib_1.__param(2, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderController.prototype, "orderDetail", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/saleslist'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderController.prototype, "salesList", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/total-order-amount'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderController.prototype, "totalOrderAmount", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/today-order-amount'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderController.prototype, "todayOrderAmount", null);
tslib_1.__decorate([
    routing_controllers_1.Get('/today-order-count'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderController.prototype, "orderCount", null);
tslib_1.__decorate([
    routing_controllers_1.Post('/order-change-status'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.Body({ validate: true })), tslib_1.__param(1, routing_controllers_1.Res()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [UpdateOrderChangeStatus_1.UpdateOrderChangeStatus, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrderController.prototype, "orderChangeStatus", null);
OrderController = tslib_1.__decorate([
    routing_controllers_1.JsonController('/order'),
    tslib_1.__metadata("design:paramtypes", [OrderService_1.OrderService, CustomerService_1.CustomerService, ProductService_1.ProductService, OrderLogService_1.OrderLogService,
        OrderProductService_1.OrderProductService, ProductDiscountService_1.ProductDiscountService,
        orderStatusService_1.OrderStatusService, ProductSpecialService_1.ProductSpecialService, ProductImageService_1.ProductImageService])
], OrderController);
exports.OrderController = OrderController;
//# sourceMappingURL=OrderController.js.map