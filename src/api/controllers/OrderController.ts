/*
 * spurtcommerce API
 * version 2.2
 * http://api.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */

import 'reflect-metadata';
import {Get, JsonController, Authorized, QueryParam, Res, Req, Post, Body} from 'routing-controllers';
import {OrderService} from '../services/OrderService';
import {CustomerService} from '../services/CustomerService';
import {UpdateOrderChangeStatus} from './requests/UpdateOrderChangeStatus';
import {OrderLogService} from '../services/OrderLogService';
import {OrderProductService} from '../services/OrderProductService';
import {ProductService} from '../services/ProductService';
import {OrderStatusService} from '../services/orderStatusService';
import {ProductSpecialService} from '../services/ProductSpecialService';
import {ProductDiscountService} from '../services/ProductDiscountService';
import {ProductImageService} from '../services/ProductImageService';

@JsonController('/order')
export class OrderController {
    constructor(private orderService: OrderService, private customerService: CustomerService, private productService: ProductService, private orderLogService: OrderLogService,
                private orderProductService: OrderProductService, private productDiscountService: ProductDiscountService,
                private orderStatusService: OrderStatusService,  private productSpecialService: ProductSpecialService,  private productImageService: ProductImageService) {
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
    @Get('/orderlist')
    @Authorized()
    public async orderList(@QueryParam('limit') limit: number, @QueryParam('offset') offset: number, @QueryParam('orderId')orderId: string, @QueryParam('orderStatusId')orderStatusId: string, @QueryParam('customerName')customerName: string,
                           @QueryParam('totalAmount')totalAmount: string, @QueryParam('dateAdded')dateAdded: string, @QueryParam('count')count: number | boolean, @Res() response: any): Promise<any> {
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
        const orderList = await this.orderService.list(limit, offset, 0, search, WhereConditions, 0, count);
        if (count) {
            const Response: any = {
                status: 1,
                message: 'Successfully got count.',
                data: orderList,
            };
            return response.status(200).send(Response);
        }
        const orderStatus = orderList.map(async (value: any) => {
            // OrderList API

            const status = await this.orderStatusService.findOne({
                where: {orderStatusId: value.orderStatusId},
                select: ['orderStatusId', 'name', 'colorCode'],
            });
            const temp: any = value;
            temp.orderStatus = status;
            return temp;

        });
        const results = await Promise.all(orderStatus);
        const successResponse: any = {
            status: 1,
            message: 'Successfully got the complete order list.',
            data: results,
        };
        return response.status(200).send(successResponse);

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
    @Get('/order-detail')
    @Authorized()
    public async orderDetail(@QueryParam('orderId') orderid: number, @Req() request: any, @Res() response: any): Promise<any> {
        const orderData = await this.orderService.find({where: {orderId: orderid}, select: ['orderId', 'orderStatusId', 'telephone', 'invoiceNo', 'invoicePrefix', 'orderPrefixId', 'shippingFirstname', 'shippingLastname', 'shippingCompany', 'shippingAddress1',
            'shippingAddress2', 'shippingCity', 'shippingZone', 'shippingPostcode', 'shippingCountry', 'shippingAddressFormat',
            'paymentFirstname', 'paymentLastname', 'paymentCompany', 'paymentAddress1', 'paymentAddress2', 'paymentCity',
            'paymentPostcode', 'paymentCountry', 'paymentZone', 'paymentAddressFormat', 'total', 'customerId', 'createdDate']});
        const promises = orderData.map(async (result: any) => {
            const product = await this.orderProductService.find({where: {orderId: orderid}, select: ['orderProductId', 'orderId', 'productId', 'name', 'model', 'quantity', 'total', 'productPrice']}).then((val) => {
                console.log(val);
                const productVal = val.map(async (value: any) => {
                    const productDetail = await this.productService.findOne({
                        where: {productId: value.productId},
                        select: ['name', 'quantity', 'minimumQuantity', 'image',
                            'imagePath', 'shipping', 'price', 'dateAvailable', 'amount', 'rating', 'discount', 'isActive']});
                    const image = await this.productImageService.findOne({
                        select: [ 'image', 'containerName'],
                        where: {productId: value.productId, defaultImage: 1},
                    });
                    // const orderOption = await this.orderOptionService.find({where: {orderProductId: value.orderProductId},
                    //     select: ['name', 'value', 'type', 'orderOptionId', 'orderProductId']});
                    // const rating = await this.productRatingService.findOne({select: ['rating', 'review'], where: {customerId : result.customerId, orderProductId : value.orderProductId, productId: value.productId}});
                    const tempVal: any = value;
                    const nowDate = new Date();
                    const todaydate = nowDate.getFullYear() + '-' + (nowDate.getMonth() + 1) + '-' + nowDate.getDate();
                    const productSpecial = await this.productSpecialService.findSpecialPrice(value.productId, todaydate);
                    const productDiscount = await this.productDiscountService.findDiscountPrice(value.productId, todaydate);
                    if (productSpecial !== undefined) {
                        tempVal.pricerefer = productSpecial.price;
                        tempVal.flag = 1;
                    } else if (productDiscount !== undefined) {
                        tempVal.pricerefer = productDiscount.price;
                        tempVal.flag = 0;
                    } else {
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
                });
                const results = Promise.all(productVal);
                return results;
            });
            const orderStatusData = await this.orderStatusService.findOne({
                where: {orderStatusId: result.orderStatusId},
                select: ['name', 'colorCode']});
            let str = JSON.stringify(orderStatusData);
            str = str.replace(/name/g, 'orderStatusName');
            str = str.replace(/colorCode/g, 'statusColorCode');
            const orderStatus = JSON.parse(str);
            const data: any = result;
            const temp: any = Object.assign({}, data, orderStatus);
            temp.productList = product;
            const customer = await this.customerService.findOne({where: {id: result.customerId}, select: ['firstName', 'lastName', 'username', 'mobileNumber', 'email', 'city', 'address', 'pincode', 'countryId', 'zoneId']});
            console.log(customer);
            temp.customerDetail = customer;
            return temp;
        });
        const resultData = await Promise.all(promises);
        const successResponse: any = {
            status: 1,
            message: 'Successfully shown the order Detail. ',
            data: resultData,
        };
        return response.status(200).send(successResponse);
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
    @Get('/saleslist')
    @Authorized()
    public async salesList(@Res() response: any): Promise<any> {

        const orderList = await this.orderService.salesList();
        console.log(orderList);
        const promises = orderList.map(async (result: any) => {
            const monthNames = ['', 'January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'November', 'December',
            ];
            const temp: any = result;
            temp.monthYear = monthNames[result.month] + '-' + result.year;
            return temp;
        });
        const finalResult = await Promise.all(promises);
        const successResponse: any = {
            status: 1,
            message: 'Successfully get sales count List',
            data: finalResult,
        };
        return response.status(200).send(successResponse);

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
    @Get('/total-order-amount')
    @Authorized()
    public async totalOrderAmount(@Res() response: any): Promise<any> {
        let total = 0;
        const order = await this.orderService.findAll();
        let n = 0;
        for (n; n < order.length; n++) {
            total += +order[n].total;
        }
        if (order) {
            const successResponse: any = {
                status: 1,
                message: 'Successfully get total order Amount',
                data: total,
            };

            return response.status(200).send(successResponse);
        } else {
            const errorResponse: any = {
                status: 0,
                message: 'unable to get total order amount',
            };
            return response.status(400).send(errorResponse);
        }
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
    @Get('/today-order-amount')
    @Authorized()
    public async todayOrderAmount(@Res() response: any): Promise<any> {
        const nowDate = new Date();
        const todaydate = nowDate.getFullYear() + '-' + (nowDate.getMonth() + 1) + '-' + nowDate.getDate();
        console.log(todaydate);
        let total = 0;
        const order = await this.orderService.findAlltodayOrder(todaydate);
        let n = 0;
        for (n; n < order.length; n++) {
            total += +order[n].total;
        }
        if (order) {
            const successResponse: any = {
                status: 1,
                message: 'Successfully get today order Amount',
                data: total,
            };

            return response.status(200).send(successResponse);
        } else {
            const errorResponse: any = {
                status: 0,
                message: 'unable to get today order amount',
            };
            return response.status(400).send(errorResponse);
        }
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
    @Get('/today-order-count')
    @Authorized()
    public async orderCount(@Res() response: any): Promise<any> {

        const nowDate = new Date();
        const todaydate = nowDate.getFullYear() + '-' + (nowDate.getMonth() + 1) + '-' + nowDate.getDate();

        const orderCount = await this.orderService.findAllTodayOrderCount(todaydate);
        const successResponse: any = {
            status: 1,
            message: 'Successfully get Today order count',
            data: orderCount,
        };
        return response.status(200).send(successResponse);

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
    @Post('/order-change-status')
    @Authorized()
    public async orderChangeStatus(@Body({validate: true}) orderChangeStatus: UpdateOrderChangeStatus, @Res() response: any): Promise<any> {

        const updateOrder = await this.orderService.findOrder(orderChangeStatus.orderId);
        console.log(updateOrder);
        if (!updateOrder) {
            const errorResponse: any = {
                status: 0,
                message: 'invalid order Id',
            };
            return response.status(400).send(errorResponse);
        }

        await this.orderLogService.create(updateOrder);
        console.log(updateOrder);

        updateOrder.orderStatusId = orderChangeStatus.orderStatusId;
        console.log(updateOrder.orderStatusId);

        const orderSave = await this.orderService.create(updateOrder);
        if (orderSave) {
            const successResponse: any = {
                status: 1,
                message: 'Successfully updated Order Status',
                data: orderSave,
            };
            return response.status(200).send(successResponse);
        } else {
            const errorResponse: any = {
                status: 0,
                message: 'unable to updated OrderStatus',
            };
            return response.status(400).send(errorResponse);
        }
    }
}
